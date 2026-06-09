import Image from "next/image";
import { getStoreUrl } from "@/utils/getStoreUrl";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NAV_LINKS = [
  { label: "Featured Shelves", href: "/bookshelves" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqActive, setFaqActive] = useState(false);
  const { pathname } = useRouter();

  // Scroll-aware active state for the FAQ section
  useEffect(() => {
    const el = document.getElementById("faq");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFaqActive(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  function isActive(href: string) {
    if (href === "#faq") return faqActive;
    return pathname === href;
  }

  function navLinkClass(href: string) {
    return isActive(href)
      ? "text-sm font-semibold text-text-primary transition-colors"
      : "text-sm font-medium text-text-secondary hover:text-orange transition-colors";
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-0/90 backdrop-blur-sm border-b border-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/mascot.png"
              alt="CosyCase"
              width={58}
              height={58}
              className="rounded-lg"
            />
            <span
              className="text-xl font-bold text-text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CosyCase
            </span>
          </Link>

          {/* Right cluster: nav links + hamburger + CTA */}
          <div className="flex items-center gap-3">
            {/* Desktop nav links — right-clustered, not floating center */}
            <div className="hidden md:flex items-center gap-6 pr-5 border-r border-surface-100">
              {/* FAQ: scroll on homepage, navigate on other routes */}
              <Link
                href={pathname === "/" ? "#faq" : "/faq"}
                className={navLinkClass(pathname === "/" ? "#faq" : "/faq")}
              >
                FAQ
              </Link>
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className={navLinkClass(href)}>
                  {label}
                </Link>
              ))}
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:text-orange hover:bg-orange-50 transition-colors"
            >
              {menuOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>

            {/* CTA — full text on sm+, shortened on mobile */}
            <a
              href={getStoreUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange text-white text-sm font-semibold hover:bg-[rgb(190_100_30)] transition-colors"
            >
              <span className="sm:hidden">Download</span>
              <span className="hidden sm:inline">Download App</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown — animated via grid-rows collapse */}
      <div
        id="mobile-nav"
        className={`md:hidden grid transition-[grid-template-rows] duration-200 ease-out ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-surface-100 bg-surface-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
              {/* FAQ: scroll on homepage, navigate on other routes */}
              <Link
                href={pathname === "/" ? "#faq" : "/faq"}
                onClick={() => setMenuOpen(false)}
                className={`py-3 border-b border-surface-100 ${navLinkClass(pathname === "/" ? "#faq" : "/faq")}`}
              >
                FAQ
              </Link>
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 border-b border-surface-100 last:border-0 ${navLinkClass(href)}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
