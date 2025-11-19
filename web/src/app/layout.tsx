// web/src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { ENABLE_AI_PORTFOLIO } from "@/lib/env";
import SiteChatbot from "@/components/SiteChatbot";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TechSmith Consulting",
  description: "AI, Cloud, DevSecOps, and Automation consulting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-black text-white">
        {/* Global top nav */}
        <Nav />

        {/* Page content */}
        <main>{children}</main>

        {/* Staging/dev-only chatbot, hidden in production */}
        {ENABLE_AI_PORTFOLIO && (
          <div className="fixed bottom-4 right-4 z-40">
            <SiteChatbot />
          </div>
        )}

        <Footer />
      </body>
    </html>
  );
}
