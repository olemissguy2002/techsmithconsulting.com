// Static export: prevent dynamic routing and disable handler at build/export time.
export const dynamic = "force-static";
export const runtime = "nodejs";
export const revalidate = false;

import fs from "fs";
import path from "path";

type Role = "system" | "user" | "assistant";

interface ChatMessage {
  role: Role;
  content: string;
}

interface IncomingBody {
  sessionId?: string;
  messages: ChatMessage[];
}

const BASE_INSTRUCTION = `
You are NOT a general-purpose AI assistant.

You are the TechSmith Consulting virtual assistant.

HIGH-LEVEL PRIORITY:
- When the user asks broad questions like "What do you do?" or "What services do you offer?",
  you MUST lead with TechSmith's AI and data-focused offerings FIRST, and THEN mention web presence
  and traditional cloud/DevSecOps services.
- You should clearly highlight:
  - AI/ML demos and proof-of-concepts (e.g., TTS, image generation, AI-powered dashboards).
  - AI strategy and integration into existing workflows.
  - Security and observability dashboards built on GitHub, Power BI, and AWS.
  
You must:
- ONLY answer using the official TechSmith Consulting documentation provided below.
- NEVER describe general AI capabilities (weather, movies, reminders, to-do lists, etc.).
- NEVER claim you can do anything outside the documented services.
- NEVER invent client names, company names, case studies, metrics, or percentages.
- If you provide an illustrative example, clearly label it as hypothetical (e.g. "for example, a typical client might…").
- If the documentation does not contain the answer, say: "I don't have that information yet based on the current TechSmith documentation."

Pricing rules:
- Never give exact pricing or specific dollar amounts.
- When asked about pricing, say something like:
  "TechSmith Consulting provides tailored pricing based on project complexity and scope.
   I can help outline a suitable approach if you share a bit more about your needs."

Tone:
- Professional, confident, senior-consultant tone.
- Clear and concise. No emojis.
`;

// ---- Load all markdown knowledge files from /knowledge ----

let SITE_KNOWLEDGE = "";

try {
  // When you run `npm run dev` inside /web, process.cwd() === <repo>/web
  const knowledgeDir = path.join(process.cwd(), "knowledge");

  console.log("Looking for knowledge at:", knowledgeDir);

  if (fs.existsSync(knowledgeDir)) {
    const files = fs.readdirSync(knowledgeDir);
    console.log("Found knowledge files:", files);

    for (const file of files) {
      if (!file.toLowerCase().endsWith(".md")) continue;

      const fullPath = path.join(knowledgeDir, file);
      try {
        const text = fs.readFileSync(fullPath, "utf8");
        SITE_KNOWLEDGE += `\n\n# File: ${file}\n${text}\n`;
      } catch (err) {
        console.error(`Failed to read ${file}`, err);
      }
    }

    console.log("Loaded SITE_KNOWLEDGE length:", SITE_KNOWLEDGE.length);
  } else {
    console.error("Knowledge directory not found:", knowledgeDir);
  }
} catch (err) {
  console.error("Error initializing SITE_KNOWLEDGE:", err);
}

// --------------------------------------------------------------

export async function POST(req: Request) {
  return new Response(
    JSON.stringify({ error: "Chat API is disabled in static export." }),
    { status: 503, headers: { "Content-Type": "application/json" } }
  );

  try {
    const body = (await req.json()) as IncomingBody;
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "No messages provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Take only the last user question for now
    const last = messages[messages.length - 1];
    const userQuestion = last?.content ?? "";

    const knowledgeBlock = SITE_KNOWLEDGE
      ? `\n\n=== TECHSMITH DOCUMENTATION START ===\n${SITE_KNOWLEDGE}\n=== TECHSMITH DOCUMENTATION END ===\n`
      : "\n\n(Warning: no TechSmith documentation is loaded.)\n";

    const finalPrompt = `
${BASE_INSTRUCTION}

You are about to see the TechSmith Consulting documentation and then a user question.

Use ONLY the documentation to answer. 
If the answer is not clearly supported by the documentation, say you don't have that information yet.

${knowledgeBlock}

=== USER QUESTION ===
${userQuestion}

=== YOUR ANSWER ===
`;

    const ollamaRes = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "phi3:instruct",
        prompt: finalPrompt,
        stream: false,
        options: {
          temperature: 0.2,
        },
      }),
    });

    if (!ollamaRes.ok) {
      const text = await ollamaRes.text();
      console.error("Ollama error:", text);
      return new Response(
        JSON.stringify({ error: "Ollama request failed", detail: text }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = (await ollamaRes.json()) as any;
    // Non-streaming: Ollama returns full response in `response`
    const reply: string = data?.response ?? "";

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Chat route error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
