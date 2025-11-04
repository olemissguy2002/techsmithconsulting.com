// web/src/app/about/page.tsx
export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="container py-12 space-y-6">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="max-w-3xl text-gray-700">
        I’m Daryl G. Smith—Release Manager and DevSecOps practitioner. I help teams in healthcare and government
        ship reliably, with less drama. My toolkit: AWS, GitHub Advanced Security, CodeQL, SBOM/policy gates, and
        practical governance that supports delivery instead of slowing it down.
      </p>
    </main>
  );
}
