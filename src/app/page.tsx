import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PageTransition from "@/components/PageTransition";

const values = [
  {
    title: "Jesus at the Center",
    body: "Not a system. Not a religion. A person to be known.",
  },
  {
    title: "Love as the Mark",
    body: "Love one another as I have loved you. The one unprecedented command.",
  },
  {
    title: "Life Together",
    body: "A meal. One another. The word lived, not just delivered.",
  },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center warm-texture relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-cream-dark/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24 pb-20">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal leading-tight">
              First Love
              <br />
              Fellowship
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-serif text-xl md:text-2xl text-charcoal/70 mt-6 italic">
              Gathered around Jesus. Defined by love.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-charcoal/60 mt-8 leading-relaxed max-w-xl mx-auto">
              A community in Lincoln, California built around one thing — the
              love of Jesus, received and given freely.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <Link
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-burgundy text-cream rounded-sm font-sans text-sm tracking-wider hover:bg-burgundy-dark transition-colors"
            >
              Come find us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.15}>
                <div className="text-center md:text-left">
                  <div className="w-12 h-px bg-amber mx-auto md:mx-0 mb-6" />
                  <h3 className="font-serif text-2xl text-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 bg-cream-dark warm-texture">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-8xl text-amber/20 select-none">
                &ldquo;
              </span>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-snug italic">
                By this everyone will know that you are my disciples — if you
                love one another.
              </blockquote>
              <cite className="block mt-8 text-charcoal/50 text-sm tracking-wider not-italic">
                — John 13:35
              </cite>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
              You are wanted here.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg text-charcoal/60 leading-loose">
              Whether you have been hurt by church, or never tried it, or are
              simply hungry for something more real — there is a place for you
              here. We do not require agreement on everything. We gather around
              Jesus and his love. That is enough.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/about"
              className="inline-block mt-10 px-8 py-4 border border-burgundy text-burgundy rounded-sm font-sans text-sm tracking-wider hover:bg-burgundy hover:text-cream transition-colors"
            >
              Learn who we are
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
