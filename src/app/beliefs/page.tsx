import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Beliefs",
  description:
    "We hold the historic Christian faith. A description of who Jesus is, what he did, and what that means for how we live together.",
  openGraph: {
    title: "Beliefs | First Love Fellowship",
    description:
      "We hold the historic Christian faith. A description of who Jesus is, what he did, and what that means for how we live together.",
  },
};

const beliefs = [
  {
    title: "On Jesus Christ",
    paragraphs: [
      "We believe that Jesus Christ is the Son of God, fully human and fully divine, who lived among us, loved us without condition, and gave himself for us on the cross before we deserved it or asked for it. He rose from the dead. He is alive.",
      "He is not a system to be learned or a religion to be practiced. He is not the means to a better life, a moral framework, or a community program. He is a person to be known — the end, not the means.",
      "We believe Christianity has often made Jesus the doorway to other things. We are recovering him as the destination itself. The one who got on his knees and washed dirty feet. The one who loved first, loved fully, and loved to the end.",
    ],
  },
  {
    title: "On Scripture",
    paragraphs: [
      "We believe the Bible is the inspired word of God, written through human authors whose voices, contexts, and limitations shaped its expression. We receive it as authoritative for faith and life. We read it honestly, humbly, and with the expectation of encountering Jesus, who is its center and its purpose.",
    ],
  },
  {
    title: "On the New Command",
    paragraphs: [
      'We believe that at the inauguration of the New Covenant, Jesus gave his disciples one unprecedented command: "Love one another as I have loved you" (John 13:34). The word "new" carries its full weight here — this had never been said before, because no one had ever loved this way before. The standard is not our capacity to love. The standard is his love for us. It is the defining ethic of an entirely new covenant — the mark by which the world recognizes his followers.',
    ],
  },
  {
    title: "On Love",
    paragraphs: [
      "We believe that genuine love does not originate with us. It begins with God, who loved us first. Our mission is to receive that love — to let it in, allow it to do its work, and be transformed by it. From that transformation, love for one another flows naturally.",
    ],
  },
  {
    title: "On Salvation",
    paragraphs: [
      "We believe that Jesus Christ, through his death and resurrection, accomplished the complete and permanent forgiveness of sin — once, for all, finished. The barrier between humanity and God has been removed.",
      "Salvation begins with acceptance — receiving what he has already done. But like a wedding ceremony, it is a door not a destination. What we walk through into is a covenant relationship with the living Jesus — a love already waiting, a transformation already underway. New life is not just forgiveness received. It is a person encountered.",
    ],
  },
  {
    title: "On the Church",
    paragraphs: [
      "We believe the church is not a building, a program, or an institution. It is people gathered around Jesus, sharing life, meeting needs, loving one another visibly enough that outsiders notice.",
      "When we gather, we gather around Jesus. A meal. One another. The word lived and discussed, not just delivered. Needs met. Life shared. Love made visible. We believe this is not a new model — it is the original one.",
    ],
  },
  {
    title: "On Secondary Matters",
    paragraphs: [
      "We hold the historic Christian faith as expressed in the Apostles\u2019 Creed. On matters where sincere followers of Jesus have disagreed across centuries — baptism, spiritual gifts, worship forms — we do not require agreement. Jesus himself is our salvation and our center.",
      "We welcome people from every tradition who trust him and are learning to love as he loved. We fellowship our differences in honor and good faith, believing that what unites us is infinitely greater than what distinguishes us.",
    ],
  },
];

export default function Beliefs() {
  return (
    <PageTransition>
      {/* Page header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream warm-texture">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl text-charcoal">
              What We Believe
            </h1>
            <div className="w-16 h-px bg-amber mx-auto mt-6" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-charcoal/60 text-lg leading-relaxed mt-8 max-w-xl mx-auto">
              We hold the historic Christian faith. What follows is not a
              theological exam — it is a description of who Jesus is, what he
              did, and what that means for how we live together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          {beliefs.map((belief, i) => (
            <div key={belief.title}>
              {i > 0 && (
                <div className="w-full h-px bg-charcoal/5 my-16 md:my-20" />
              )}
              <FadeIn>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8">
                  {belief.title}
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="space-y-6 text-charcoal/60 text-lg leading-loose">
                  {belief.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
