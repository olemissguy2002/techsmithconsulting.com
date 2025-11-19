const IS_STATIC_EXPORT =
  (process.env.NEXT_PUBLIC_ENV ?? "development") === "production" ||
  (process.env.NEXT_PUBLIC_ENV ?? "development") === "staging";
export const dynamic = IS_STATIC_EXPORT ? "force-static" : "force-dynamic";
export const revalidate = IS_STATIC_EXPORT ? false : undefined;
export const dynamicParams = false;

export function generateStaticParams() {
  // No static params; we don't publish dynamic TTS playback in static export builds.
  return [];
}

export async function GET(_req: Request, context: { params: Promise<{ sid: string }> }) {
  if (IS_STATIC_EXPORT) {
    return new Response(
      JSON.stringify({ error: "TTS playback API is disabled in static export." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const { sid } = await context.params;
  const backend = process.env.TTS_BACKEND_BASE || "http://localhost:7860";
  const res = await fetch(`${backend}/play/${encodeURIComponent(sid)}`);
  if (!res.ok || !res.body)
    return new Response(JSON.stringify({ error: "not found" }), { status: res.status });
  return new Response(res.body, { headers: { "Content-Type": "audio/wav" } });
}
