export const dynamic = "force-static";
export const runtime = "nodejs";
export const revalidate = false;
export const dynamicParams = false;

export function generateStaticParams() {
  // No static params; we don't publish dynamic TTS playback in static export builds.
  return [];
}

export async function GET(_req: Request, context: { params: Promise<{ sid: string }> }) {
  return new Response(
    JSON.stringify({ error: "TTS playback API is disabled in static export." }),
    { status: 503, headers: { "Content-Type": "application/json" } }
  );

  const { sid } = await context.params;
  const backend = process.env.TTS_BACKEND_BASE || "http://localhost:7860";
  const res = await fetch(`${backend}/play/${encodeURIComponent(sid)}`);
  if (!res.ok || !res.body)
    return new Response(JSON.stringify({ error: "not found" }), { status: res.status });
  return new Response(res.body, { headers: { "Content-Type": "audio/wav" } });
}
