// web/src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import ChatWidget from "@/components/ChatWidget";


const SITE_NAME = "TechSmith Consulting";
const CANONICAL_HOST = "https://techsmithconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_HOST),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description: "Cloud, DevSecOps, and release management consulting.",
  alternates: { canonical: "/" },
  openGraph: { siteName: SITE_NAME, type: "website", url: "/" },
  manifest: "/manifest.json",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-black text-white">
        <Nav />
       
        {children}
        {/* <ChatWidget /> */}
        <Footer />
      </body>
    </html>
  );
}
