"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How can I customize my bookshelf?",
    a: "To customize your bookshelf go to the main page and double tap the bookshelf you want to edit. From there you can add or remove books, change the shelf style, and more!",
  },
  {
    q: "How can I share a bookshelf with a friend?",
    a: "To share a bookshelf go to the main page and double tap the bookshelf you want to share. Then in the top right select the share button and send the link to a friend. That's it!",
  },
  {
    q: "How can I follow a bookshelf?",
    a: "To follow a bookshelf request a share link from a friend. Then open the link and tap the heart icon to follow. You'll see the bookshelf on your following tab. Any updates your friend makes to the shelf will automatically show up for you too.",
  },
  {
    q: "How can I see what changes were made to a bookshelf?",
    a: "When looking at a bookshelf sometimes it's hard to see what's changed. That's why we maintain a change log for each activity that happened. To see the change log of a bookshelf you are following, go to the bookshelf and tap on the clock icon on the bottom.",
  },
  {
    q: "How does auto-cropping spines work?",
    a: "Cosy Case strives to have a consistent and extensive database of book spine images to pick from. The app uses a computer vision model to recognize spines in a picture and automatically crops and rotates them. To get the best results make sure the book spine is properly lit.",
  },
  {
    q: "How can I add a spine image if I don't have a physical book on hand?",
    a: "There are a couple options. You can use our AI spine art feature to generate a custom spine based on the book's title and genre. Or as a pro tip you can tap on the Search Online button which will open a Google search for spine images for this book. You can then take a screenshot of a spine, then switch back to the app and upload the picture. The app will autocrop the picture.",
  },
];

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
          className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgb(240_247_243)] border border-[rgb(216_236_225)] flex items-center justify-center text-[rgb(72_112_93)] transition-transform duration-200"
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
          <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(72_112_93)] uppercase mb-3">
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
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
