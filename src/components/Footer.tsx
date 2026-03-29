import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Bookshelf", href: "#bookshelf" },
  { label: "AI Art", href: "#ai-art" },
  { label: "Customize", href: "#customize" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[rgb(23_23_23)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/mascot.png"
                alt="CosyCase mascot"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                CosyCase
              </span>
            </a>
            <p className="text-sm text-[rgb(115_115_115)] leading-relaxed max-w-xs">
              The book tracking app that turns your reading history into a
              beautiful digital bookshelf.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[rgb(163_163_163)] uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgb(163_163_163)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[rgb(163_163_163)] uppercase mb-4">
              Download
            </h4>
            <div className="flex flex-col gap-3 items-start">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                />
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgb(115_115_115)]">
            © {year} CosyCase. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[rgb(115_115_115)]">
            <span>Made with</span>
            <Image
              src="/mascot.png"
              alt=""
              width={16}
              height={16}
              className="rounded inline"
            />
            <span>by a very cosy rat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
