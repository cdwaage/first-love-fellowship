import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Gatherings",
  description:
    "Our gatherings are not performances. We come together around a meal, open the word, and talk.",
  openGraph: {
    title: "Gatherings | First Love Fellowship",
    description:
      "Our gatherings are not performances. We come together around a meal, open the word, and talk.",
  },
};

const expectations = [
  {
    title: "A meal together",
    body: "We eat. Food is not incidental to community, it is central to it.",
  },
  {
    title: "The word, discussed",
    body: "We read scripture together and talk about it. Everyone\u2019s voice matters.",
  },
  {
    title: "Real community",
    body: "We share what is actually happening in our lives. That is where love becomes visible.",
  },
];

export default function Gatherings() {
  return (
    <PageTransition>
      {/* Page header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream warm-texture">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl text-charcoal">
              Come to the table.
            </h1>
            <div className="w-16 h-px bg-amber mx-auto mt-6" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-charcoal/60 text-lg mt-6">
              We gather in Lincoln, California.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <div className="space-y-6 text-charcoal/60 text-lg leading-loose">
              <p>
                Our gatherings are not performances. There is no stage, no
                program to follow, no expectation to meet. We come together
                around a meal, open the word, and talk. We pray together. We
                share what is real. We love one another in the ordinary ways that
                community requires.
              </p>
              <p>
                If you are looking for a place where you can show up as you are,
                ask honest questions, and be genuinely known — you are welcome
                here.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 md:py-28 bg-cream-dark warm-texture">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-16">
              What to expect
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {expectations.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-10 h-px bg-amber mx-auto mb-6" />
                  <h3 className="font-serif text-xl text-charcoal mb-4">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-charcoal/50 text-lg leading-relaxed mb-8">
              We do not publish our gathering address publicly. Reach out and we
              will welcome you personally.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-burgundy text-cream rounded-sm font-sans text-sm tracking-wider hover:bg-burgundy-dark transition-colors"
            >
              Get in touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
