"use client";
import { useState } from "react";
import { FAQS } from "@/utils/faq";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[rgb(219_218_215)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[rgb(244_242_238)] transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-[rgb(36_36_33)] pr-4">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgb(255_250_245)] border border-[rgb(255_242_229)] flex items-center justify-center text-[rgb(231_129_40)] transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
          aria-hidden
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-[rgb(139_138_134)] leading-relaxed border-t border-[rgb(219_218_215)] pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[rgb(252_250_246)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(231_129_40)] uppercase mb-3">
            Got questions?
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[rgb(36_36_33)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
