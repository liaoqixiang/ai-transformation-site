"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Ready to transform how your team works?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Book a free 30-minute discovery call. No sales pitch — just an honest
            conversation about where AI can help your business.
          </p>
        </div>

        <div className="max-w-lg mx-auto mt-12">
          {submitted ? (
            <div className="bg-white border border-border rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-primary">Thanks!</h3>
              <p className="mt-2 text-muted">
                I&apos;ll be in touch within 24 hours to schedule our call.
              </p>
            </div>
          ) : (
            <form
              className="bg-white border border-border rounded-xl p-8 space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your company (optional)"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  What are you looking to achieve with AI?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Tell me about your business and what you'd like to explore..."
                />
              </div>
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-accent text-white py-3 rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors disabled:opacity-50"
              >
                {sending ? "Sending..." : "Book Free Discovery Call"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
