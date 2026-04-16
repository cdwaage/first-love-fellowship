import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "About",
  description:
    "First Love Fellowship exists because of a simple conviction: that Jesus himself is the center of everything.",
  openGraph: {
    title: "About | First Love Fellowship",
    description:
      "First Love Fellowship exists because of a simple conviction: that Jesus himself is the center of everything.",
  },
};

export default function About() {
  return (
    <PageTransition>
      {/* Page header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream warm-texture">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl text-charcoal">
              About
            </h1>
            <div className="w-16 h-px bg-amber mx-auto mt-6" />
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">
              Not a program. A people.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-charcoal/60 text-lg leading-loose">
              First Love Fellowship exists because of a simple conviction: that
              Jesus himself — not a system built around him — is the center of
              everything. We are a community gathered around his person and
              shaped by his one defining command: to love one another as he has
              loved us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="w-full h-px bg-charcoal/5" />
      </div>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">
              Where we came from
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-charcoal/60 text-lg leading-loose">
              <p>
                First Love Fellowship was founded by Cameron Waage in Lincoln,
                California. Cameron&apos;s journey toward this community began around
                2009 — a turning point that started a long walk out of religious
                legalism and into something more alive, more personal, and more
                real. What he found on the other side was not less of God, but
                more. A deeper encounter with Jesus. A love that does not
                originate with us but transforms us when we receive it.
              </p>
              <p>
                Along the way, Cameron observed a pattern: organizations form to
                help people, then gradually begin protecting themselves. The
                institution becomes the priority. People get lost. First Love
                Fellowship is a direct response to that pattern. No institution
                to protect. No performance to maintain. Just people, gathered
                around Jesus and his love.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="w-full h-px bg-charcoal/5" />
      </div>

      {/* The Name - First Love */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">
              Why First Love?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-charcoal/60 text-lg leading-loose">
              <p>
                In Revelation 2:4, Jesus speaks to a church that had grown busy,
                correct, and disciplined — but had walked away from something
                essential. &ldquo;You have forsaken your first love.&rdquo; The call was to
                return.
              </p>
              <p>
                In 1 John 4:19, John writes: &ldquo;We love because he first loved
                us.&rdquo; The first love is not ours. It is his. We love because we
                have been loved. That is the whole of it.
              </p>
              <p>
                First Love Fellowship exists to keep returning to that center —
                to the person of Jesus, to his love for us, and to the love for
                one another that flows from receiving it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="w-full h-px bg-charcoal/5" />
      </div>

      {/* The Name - Fellowship */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">
              Why Fellowship?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-charcoal/60 text-lg leading-loose">
              Fellowship is not a program or an event. It is what happens when
              people who share a common life and a common love spend time
              together. We gather around a meal, around the word, around one
              another. We meet needs. We share life. We love visibly enough that
              outsiders notice. That is the original model — and it is the one
              we are recovering.
            </p>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
