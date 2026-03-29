import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Bookshelf", href: "#bookshelf" },
  { label: "AI Art", href: "#ai-art" },
  { label: "Customize", href: "#customize" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[rgb(242_241_241)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/mascot.png"
              alt="CosyCase mascot"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span
              className="text-xl font-bold text-[rgb(23_23_23)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CosyCase
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[rgb(115_115_115)] hover:text-[rgb(23_23_23)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(231_129_40)] text-white text-sm font-semibold hover:bg-[rgb(215_117_31)] transition-colors"
            >
              Download App
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-[rgb(115_115_115)] hover:text-[rgb(23_23_23)] hover:bg-[rgb(246_246_246)] transition-colors"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[rgb(242_241_241)] bg-white px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[rgb(64_64_64)] hover:text-[rgb(231_129_40)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[rgb(231_129_40)] text-white text-sm font-semibold hover:bg-[rgb(215_117_31)] transition-colors"
          >
            Download App
          </a>
        </div>
      )}
    </nav>
  );
}
