export type Faq = {
  /** The question shown to users. */
  q: string;
  /** The answer shown to users. */
  a: string;
};

export const FAQS: Faq[] = [
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

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};
