import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-gray-900">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
