import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[rgb(23_23_23)] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2">
            {/* <Image
              src="/mascot.png"
              alt="CosyCase mascot"
              width={24}
              height={24}
              className="rounded"
            /> */}
            {/* <span
              className="text-sm font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CosyCase
            </span> */}
          </a>
          <p className="text-xs text-[rgb(115_115_115)]">
            © {year} CosyCase. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[rgb(115_115_115)]">
            <span>Made with</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[rgb(231_129_40)]"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>by a very cosy rat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
