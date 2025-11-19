import Link from "next/link";
import logo from "@/../public/FullLogoTransparent.png";

export default function FloatingLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to home"
      className="group fixed top-4 md:top-6 left-4 md:left-6 z-[60] flex items-center gap-4 opacity-100 hover:opacity-70 transition-opacity duration-500 pointer-events-auto"
    >
      <img
        src={logo.src}
        alt="TechSmith Consulting logo"
        width={logo.width}
        height={logo.height}
        loading="lazy"
        decoding="async"
        className="w-auto h-48 object-contain"
      />
      <span
        className="text-lg md:text-xl font-semibold tracking-wide"
        style={{ color: "#37CC97" }}
      >
        Forging the Future
      </span>
    </Link>
  );
}
