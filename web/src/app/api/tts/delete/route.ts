export const dynamic = "force-static";
export const runtime = "nodejs";
export const revalidate = false;

export async function POST(req: Request) {
  return new Response(
    JSON.stringify({ error: "TTS delete API is disabled in static export." }),
    { status: 503, headers: { "Content-Type": "application/json" } }
  );

  const backend = process.env.TTS_BACKEND_BASE || "http://localhost:7860";
  const formData = await req.formData();
  const res = await fetch(`${backend}/delete`, { method: "POST", body: formData });
  return new Response(res.body, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
