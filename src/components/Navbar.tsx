import Image from "next/image";
import { getStoreUrl } from "@/utils/getStoreUrl";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[rgb(242_241_241)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/mascot.png"
              alt="CosyCase mascot"
              width={58}
              height={58}
              className="rounded-lg"
            />
            <span
              className="text-xl font-bold text-[rgb(23_23_23)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CosyCase
            </span>
          </a>

          {/* CTA */}
          <a
            href={getStoreUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(231_129_40)] text-white text-sm font-semibold hover:bg-[rgb(215_117_31)] transition-colors"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}
