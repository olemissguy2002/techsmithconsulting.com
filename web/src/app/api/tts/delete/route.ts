export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const backend = process.env.TTS_BACKEND_BASE || "http://localhost:7860";
  const formData = await req.formData();
  const res = await fetch(`${backend}/delete`, { method: "POST", body: formData });
  return new Response(res.body, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
