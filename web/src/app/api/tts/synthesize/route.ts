export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const backend = process.env.TTS_BACKEND_BASE || "http://localhost:7860";
  const formData = await req.formData();
  const res = await fetch(`${backend}/synthesize`, { method: "POST", body: formData });

  // ensure JSON shape { session_id, play_url }
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
