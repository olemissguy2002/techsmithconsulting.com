## Text-to-Speech (TTS) Application

This repository contains a two-part TTS experience for TechSmith Consulting:

- `tts-backend/`: a FastAPI service that streams requests to the Chatterbox TTS model and returns generated WAV files.
- `web/`: a Next.js client that drives the UI, calls the backend via API routes, and plays synthesized audio in the browser.

The README explains how to stand up the full stack locally and how to ship it to AWS using Docker + AWS managed services.

---

## Repository layout

| Path | Description |
| ---- | ----------- |
| `web/` | Next.js 16 application (App Router, React 19) plus `.env.*` files for configuring API targets. |
| `tts-backend/server.py` | FastAPI app exposing `/synthesize`, `/play/{sid}`, `/delete`, and `/health`. |
| `tts-backend/Dockerfile.web` | Production Dockerfile that bakes the backend into a container (expects a base image named `cb-tts:cpu` that already has PyTorch + the Chatterbox model). |
| `infra/` | Placeholder for AWS infrastructure as code. Add Terraform/CDK/CloudFormation definitions here if desired. |

---

## Prerequisites

| Tooling | Notes |
| ------- | ----- |
| Node.js 20+ and npm 10+ | Required for the Next.js workspace under `web/`. |
| Python 3.10+ | Tested with FastAPI/uvicorn and `soundfile`. |
| ffmpeg + libsndfile | Needed by `soundfile` when generating WAVs. |
| Docker 24+ | Used for production builds and AWS deployment. |
| AWS CLI v2 | Required for authenticating to ECR/ECS/S3/CloudFront. |
| `cb-tts:cpu` base image | Custom base that bundles PyTorch + `chatterbox.tts`. Build it separately or pull it from your private registry before building the backend container. |

---

## Local development

### 1. Backend (FastAPI + Chatterbox)

1. Create and activate a Python virtual environment:
   ```bash
   cd tts-backend
   python3 -m venv .venv
   source .venv/bin/activate
   ```
2. Install dependencies. The production image already contains `chatterbox.tts`, but your local env needs it explicitly:
   ```bash
   pip install -r requirements-web.txt chatterbox-tts torch soundfile numpy
   ```
3. Run the API:
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 7860 --reload
   ```
4. Optional: export `OMP_NUM_THREADS` / `MKL_NUM_THREADS` (defaults to 8). Lower these values if testing on small laptops.

The API exposes:

- `POST /synthesize` – accepts `text`, optional `session_id`, and an optional `voice_prompt` WAV upload.
- `GET /play/{sid}` – streams the generated WAV file back to the browser.
- `POST /delete` – deletes persisted audio for a session.
- `GET /health` – reports readiness and whether the model is already in memory.

Session metadata is kept in-memory. Restarting the process clears active sessions and cleans up the `/app/out` directory.

### 2. Frontend (Next.js)

1. Copy `.env` defaults and point the UI at your backend:
   ```bash
   cd web
   cp .env.local.example .env.local
   # edit .env.local if your backend does not run on localhost:7860
   ```
   Environment variables:
   - `NEXT_PUBLIC_TTS_API_BASE` – origin for API requests (defaults to `http://localhost:7860` in development, `https://api.techsmithconsulting.com` in production).
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
3. Visit `http://localhost:3000/tts` and use the UI to call the backend. The app’s API routes under `web/src/app/api/tts/*` proxy requests to the FastAPI server, so you do not need to handle CORS in the browser.

### 3. End-to-end test

1. Start the backend (port `7860`) and frontend (port `3000`).
2. Open the browser, type a prompt, optionally upload a voice sample, and synthesize.
3. Use the playback controls to confirm `/play/{sid}` returns audio and `/delete` removes it.

---

## Docker image (backend)

The production backend image is built from `tts-backend/Dockerfile.web`:

```bash
# make sure cb-tts:cpu exists locally (docker load or docker build your base)
docker build \
  --file tts-backend/Dockerfile.web \
  --tag techsmith-tts-backend:latest \
  tts-backend
```

Image behavior:

- Exposes port `7860`.
- Runs `uvicorn server:app --host 0.0.0.0 --port 7860`.
- Requires a writable `/app/out` volume (defaults to the container filesystem; mount an EBS volume in production if you want persistence beyond the container lifecycle).

---

## AWS deployment

The reference deployment below places the backend behind an HTTPS endpoint (ECS Fargate or EC2) and serves the Next.js front end through AWS Amplify or S3/CloudFront. Adapt to your preferred AWS stack as needed.

### 1. Provision AWS resources

- **Networking**: VPC with at least two public subnets (or private + NAT if running ECS Fargate).
- **Certificates**: Request/validate an ACM cert for `api.techsmithconsulting.com` and for the frontend domain (e.g., `app.techsmithconsulting.com`).
- **ECR**: Create a repository called `tts-backend`.
- **S3 (frontend)**: Create a bucket (e.g., `tts-frontend-artifacts`) if you plan to deploy static assets manually or via CI/CD.

### 2. Build and push the backend image

```bash
AWS_REGION=us-east-1
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_URI="${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/tts-backend"

aws ecr get-login-password --region "$AWS_REGION" \
  | docker login --username AWS --password-stdin "$ECR_URI"

docker build -f tts-backend/Dockerfile.web -t tts-backend:latest tts-backend
docker tag tts-backend:latest "${ECR_URI}:latest"
docker push "${ECR_URI}:latest"
```

If you do not already have `cb-tts:cpu` in your local Docker cache, build or pull it before running the commands above.

### 3. Run the backend on ECS Fargate (recommended)

1. Create a task definition (CPU >= 2 vCPU, memory >= 4 GB for smoother inference).
2. Define container port `7860`, map it to an Application Load Balancer target group listening on port 80/443.
3. Mount a small ephemeral volume (at least 2 GB) to `/app/out` to store generated audio between requests.
4. Set environment variables as needed (e.g., `OMP_NUM_THREADS`, `MKL_NUM_THREADS`).
5. Attach an IAM role that lets the task send logs to CloudWatch.
6. Create a service (desired count 1+) and place it in private subnets with a NAT gateway or in public subnets with a security group that only allows the ALB to reach port 7860.
7. Point `api.techsmithconsulting.com` (Route 53) to the ALB and attach the ACM certificate for HTTPS termination.

### 4. Alternative: Run the backend on EC2

If you prefer EC2:

```bash
ssh ec2-user@<public-ip>
sudo yum install -y docker
sudo systemctl enable --now docker

ACCOUNT_ID=...
AWS_REGION=...
ECR_URI="${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/tts-backend"
aws ecr get-login-password --region "$AWS_REGION" \
  | sudo docker login --username AWS --password-stdin "$ECR_URI"

sudo docker run -d \
  --name tts-backend \
  -p 80:7860 \
  -e OMP_NUM_THREADS=8 \
  -e MKL_NUM_THREADS=8 \
  -v /var/lib/tts-out:/app/out \
  "${ECR_URI}:latest"
```

Harden the instance with security groups (expose TCP 80/443 only) and front it with an ALB if you need HTTPS offload.

### 5. Deploy the Next.js app

You have two AWS-friendly options:

1. **AWS Amplify Hosting (easiest)**  
   - Connect the GitHub repository.  
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - cd web
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: web/.next
         files:
           - '**/*'
       cache:
         paths:
           - web/node_modules/**/*
     ```  
   - Set the Amplify environment variable `NEXT_PUBLIC_TTS_API_BASE=https://api.techsmithconsulting.com`.  
   - Amplify provisions a CloudFront distribution + S3 bucket automatically.

2. **S3 + CloudFront (manual)**  
   - From the `web/` directory run:
     ```bash
     npm ci
     npm run build
     npm run start # for SSR
     ```
     For purely static hosting you would also run `next export`, but the `/api/tts/*` routes require Node.js (SSR). To host via S3 you need to build a static bundle plus a separate Lambda@Edge/CloudFront Functions setup for dynamic API proxying. Most teams instead deploy the Next.js server to AWS Amplify, ECS, or Lambda using Next.js' `output: standalone`.
   - If you choose `output: standalone`, run `next build && next export` with `next.config.ts` configured accordingly, copy `.next/standalone` to an EC2/ECS container, and start it via `node server.js`.

### 6. Wire the frontend to the backend

- Update DNS so `app.techsmithconsulting.com` (frontend) and `api.techsmithconsulting.com` (backend) both resolve via HTTPS.
- Ensure CORS on the backend includes both domains (`server.py` already whitelists `https://techsmithconsulting.com` and `https://www.techsmithconsulting.com` – add Amplify/CloudFront domains if different).
- Validate that the frontend `.env.production` matches the deployed backend URL before running `npm run build`.

### 7. Observability and maintenance

- **Logging**: Ship FastAPI logs to CloudWatch (ECS) or CloudWatch Agent (EC2). Enable log rotation if running on EC2.
- **Storage cleanup**: `server.py` automatically deletes session files older than one hour. Monitor disk usage if hosting long-running sessions.
- **Model updates**: Rebuild the base `cb-tts:cpu` image when upgrading PyTorch or the Chatterbox weights, then rebuild and redeploy the backend image.
- **Scaling**: Increase ECS desired count (or use Auto Scaling policies) when latency grows. Frontend scaling is handled automatically by Amplify/CloudFront.

---

## Next steps

- Add Infrastructure-as-Code definitions under `infra/` so provisioning is reproducible.
- Configure CI/CD (GitHub Actions) to build, push, and deploy both images automatically.
- Extend observability with AWS X-Ray or OpenTelemetry if you need request-level tracing between the frontend and backend.
