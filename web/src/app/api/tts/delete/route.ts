const IS_STATIC_EXPORT =
  (process.env.NEXT_PUBLIC_ENV ?? "development") === "production" ||
  (process.env.NEXT_PUBLIC_ENV ?? "development") === "staging";
export const dynamic = IS_STATIC_EXPORT ? "force-static" : "force-dynamic";
export const runtime = IS_STATIC_EXPORT ? "edge" : "nodejs";
export const revalidate = IS_STATIC_EXPORT ? false : undefined;

export async function POST(req: Request) {
  if (IS_STATIC_EXPORT) {
    return new Response(
      JSON.stringify({ error: "TTS delete API is disabled in static export." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const backend = process.env.TTS_BACKEND_BASE || "http://localhost:7860";
  const formData = await req.formData();
  const res = await fetch(`${backend}/delete`, { method: "POST", body: formData });
  return new Response(res.body, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
