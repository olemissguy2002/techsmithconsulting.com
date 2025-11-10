export async function GET(_req: Request, context: { params: Promise<{ sid: string }> }) {
  const { sid } = await context.params; // ✅ unwrap the Promise
  const backend = process.env.TTS_BACKEND_BASE || "http://localhost:7860";
  const res = await fetch(`${backend}/play/${encodeURIComponent(sid)}`);
  if (!res.ok || !res.body)
    return new Response(JSON.stringify({ error: "not found" }), { status: res.status });
  return new Response(res.body, { headers: { "Content-Type": "audio/wav" } });
}

