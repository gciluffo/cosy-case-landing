"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is CosyCase free?",
    a: "CosyCase is free to download with a generous free tier that lets you track books and build a basic bookshelf. A premium subscription unlocks unlimited shelves, AI spine art, all backgrounds and shelf styles, and exclusive widgets.",
  },
  {
    q: "Which platforms is CosyCase available on?",
    a: "CosyCase is available on both iOS (iPhone & iPad) and Android. Download it from the App Store or Google Play.",
  },
  {
    q: "How does CosyCase find book information?",
    a: "We search a database of millions of titles worldwide. Just type a title, author, or ISBN and we'll pull in the cover, description, page count, and more automatically.",
  },
  {
    q: "How does the bulk import from a photo work?",
    a: "Snap a photo of your physical bookshelf and CosyCase's AI will scan and identify the books in the image. You'll see a list of detected titles and can select which ones to import — no manual searching needed.",
  },
  {
    q: "What is AI spine art?",
    a: "If a book doesn't have a spine image available, you can ask CosyCase to generate one using AI. The model creates artwork that matches the book's title, genre, and mood so it blends naturally with your real spines.",
  },
  {
    q: "Can I share my bookshelf?",
    a: "Yes! You can export a screenshot of your shelf and share it anywhere — Instagram, Twitter, a book club group chat, wherever. More sharing options are coming soon.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[rgb(242_241_241)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[rgb(246_246_246)] transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-[rgb(23_23_23)] pr-4">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgb(255_250_245)] border border-[rgb(254_209_170)] flex items-center justify-center text-[rgb(231_129_40)] transition-transform duration-200"
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
        <div className="px-6 pb-5 text-sm text-[rgb(115_115_115)] leading-relaxed border-t border-[rgb(242_241_241)] pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(231_129_40)] uppercase mb-3">
            Got questions?
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[rgb(23_23_23)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
