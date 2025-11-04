import Link from 'next/link';

export default function Nav() {
  return (
    <header className="border-b">
      <nav className="container flex h-14 items-center gap-6">
        <Link href="/" className="font-semibold">TechSmith Consulting</Link>
        <a href="/services" className="text-sm text-gray-600">Services</a>
        <a href="/case-studies" className="text-sm text-gray-600">Case Studies</a>
        <a href="/about" className="text-sm text-gray-600">About</a>
        <a href="/contact" className="ml-auto px-3 py-1.5 rounded-lg bg-black text-white text-sm">Contact</a>
      </nav>
    </header>
  );
}
