"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/FadeIn";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageTransition>
      {/* Page header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream warm-texture">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl text-charcoal">
              Come find us.
            </h1>
            <div className="w-16 h-px bg-amber mx-auto mt-6" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-charcoal/60 text-lg mt-6">
              We would love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-xl mx-auto px-6">
          <FadeIn>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-12 text-center">
              Whether you have questions, want to know when and where we gather,
              or just want to say hello — reach out. There is no wrong reason to
              get in touch.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="text-center py-16">
                <p className="font-serif text-2xl text-charcoal mb-4">
                  Thank you.
                </p>
                <p className="text-charcoal/60">We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New message from First Love Fellowship website"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-charcoal/70 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-cream-dark border border-charcoal/10 rounded-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-burgundy/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-charcoal/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-cream-dark border border-charcoal/10 rounded-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-burgundy/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-charcoal/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cream-dark border border-charcoal/10 rounded-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-burgundy/50 transition-colors resize-none"
                    placeholder="What would you like to say?"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-4 bg-burgundy text-cream rounded-sm font-sans text-sm tracking-wider hover:bg-burgundy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send a message"}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-center text-charcoal/40 text-sm mt-16">
              First Love Fellowship — Lincoln, California
            </p>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
