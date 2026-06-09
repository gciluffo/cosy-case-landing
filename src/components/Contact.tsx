"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";

/** Google Sheets webhook URL — replace this after deploying the Apps Script. */
const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzTuFKnfAA_RY4jbngONnUk3sZ9ohOwEti1HGKASJa9Pfo-yMlK0UJ637dWd-lHqqHOXQ/exec";

interface ContactFormData {
  name: string;
  email: string;
  category: string;
  appVersion: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function validateForm(data: ContactFormData): ValidationResult {
  const errors: string[] = [];

  if (!data.category.trim()) {
    errors.push("Please select a category.");
  }

  if (!data.message.trim()) {
    errors.push("Please enter a message.");
  }

  if (data.email.trim() !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push("Please enter a valid email address.");
    }
  }

  return { valid: errors.length === 0, errors };
}

const inputClasses =
  "w-full px-4 py-3 bg-surface-50 border border-surface-100 rounded-lg text-text-primary placeholder:text-text-light focus:border-orange focus:ring-2 focus:ring-orange/50 focus:outline-none transition-shadow";

const labelClasses = "block text-text-secondary text-sm font-medium mb-1.5";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    category: "",
    appVersion: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors.length > 0) setErrors([]);
    if (status !== "idle" && status !== "loading") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      WEBHOOK_URL ===
      "https://script.google.com/macros/s/AKfycbzTuFKnfAA_RY4jbngONnUk3sZ9ohOwEti1HGKASJa9Pfo-yMlK0UJ637dWd-lHqqHOXQ/exec"
    ) {
      console.warn(
        "WEBHOOK_URL still contains the placeholder text. Please update it with your Google Apps Script webhook URL.",
      );
    }

    const validation = validateForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors([]);
    setStatus("loading");

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          appVersion: formData.appVersion,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          category: "",
          appVersion: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrors([]);
  };

  const isRequired = true;

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section A: Contact Form ── */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[rgb(231_129_40)] uppercase mb-3">
            CONTACT US
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[rgb(36_36_33)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get in touch
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Have a question, suggestion, or found a bug? We&apos;d love to hear
            from you.
          </p>
        </div>

        {/* ── Validation errors ── */}
        {errors.length > 0 && (
          <div
            role="alert"
            className="mb-8 p-4 rounded-lg bg-[rgb(255_242_229)] border border-[rgb(231_129_40)]/30 text-[rgb(231_129_40)]"
          >
            <ul className="text-sm list-disc list-inside space-y-1">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Success message ── */}
        {status === "success" && (
          <div
            role="status"
            className="mb-8 p-4 rounded-lg bg-[rgb(240_253_244)] border border-[rgb(187_247_208)] text-[rgb(22_163_74)] flex items-center gap-3"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-sm font-medium">
              Thank you! Your message has been sent.
            </span>
          </div>
        )}

        {/* ── Error message ── */}
        {status === "error" && (
          <div
            role="alert"
            className="mb-8 p-4 rounded-lg bg-[rgb(255_242_229)] border border-[rgb(231_129_40)]/30 text-[rgb(231_129_40)]"
          >
            <p className="text-sm font-medium mb-2">
              Something went wrong. Please try again or email us directly.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="text-sm font-semibold underline hover:text-[rgb(190_100_30)] transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* ── Form ── */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-2xl mx-auto space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className={labelClasses}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClasses}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="contact-category" className={labelClasses}>
              Category{" "}
              <span className="text-[rgb(231_129_40)]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">Required</span>
            </label>
            <select
              id="contact-category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required={isRequired}
              aria-required="true"
              className={inputClasses.concat(" appearance-none bg-no-repeat")}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238B8A86' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25rem",
              }}
            >
              <option value="">Select a category</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Sync Issue">Sync Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* App Version */}
          <div>
            <label htmlFor="contact-appVersion" className={labelClasses}>
              App Version
            </label>
            <input
              id="contact-appVersion"
              name="appVersion"
              type="text"
              value={formData.appVersion}
              onChange={handleChange}
              placeholder="e.g. 1.2.3"
              className={inputClasses}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className={labelClasses}>
              Message{" "}
              <span className="text-[rgb(231_129_40)]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">Required</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required={isRequired}
              aria-required="true"
              placeholder="Tell us what's on your mind..."
              className={inputClasses.concat(" resize-y")}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-orange text-white font-semibold hover:bg-[rgb(190_100_30)] focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ── Section B: Email Fallback ── */}
        <div className="mt-16 pt-12 border-t border-surface-100">
          <div className="text-center">
            <h3
              className="text-2xl font-bold text-[rgb(36_36_33)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Prefer email?
            </h3>
            <p className="mt-3 text-text-secondary">
              You can also reach us directly at{" "}
              <a
                href="mailto:griffin@ciluffo.com"
                className="text-[rgb(231_129_40)] font-medium hover:underline transition-colors"
              >
                griffin@ciluffo.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
