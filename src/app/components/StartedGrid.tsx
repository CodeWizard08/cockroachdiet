import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  { letter: "S", word: "Sunlight", desc: ["Quantum photons.", "Reset your clock."] },
  { letter: "T", word: "Temperance", desc: ["Ditch the toxins.", "Upgrade mitochondria."] },
  { letter: "A", word: "Air", desc: ["Breathwork.", "Go outside and play."] },
  { letter: "R", word: "Rest", desc: ["Sacred wind-down.", "Pitch-black sleep."] },
  { letter: "T", word: "Trust", desc: ["Pray. Reflect.", "Feed the soul."] },
  { letter: "E", word: "Exercise", desc: ["Move every day.", "Lift. Sprint. Carry."] },
  { letter: "D", word: "Diet", desc: ["Ancestral food.", "Less chemicals."] },
];

export default function StartedGrid() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Opening quote */}
        <AnimateOnScroll>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-[1.4] max-w-3xl mx-auto">
            Choose your adversity,
            <br />
            or life will choose it for you.
          </p>
        </AnimateOnScroll>

        {/* Divider */}
        <div className="w-24 h-px bg-orange/60 mx-auto my-10 md:my-12" />

        {/* Protocol label + headline */}
        <AnimateOnScroll>
          <span className="font-display font-bold text-xs tracking-[0.4em] uppercase text-orange block mb-5">
            The Protocol
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-cream leading-none mb-14 md:mb-16">
            Get <em className="not-italic font-black text-orange">STARTED.</em>
          </h2>
        </AnimateOnScroll>

        {/* STARTED grid — bordered container with internal dividers */}
        <AnimateOnScroll>
          <div className="border border-orange/30 bg-mid/40 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-x divide-y lg:divide-y-0 divide-orange/15">
            {items.map((item, i) => (
              <div
                key={i}
                className="px-4 py-7 md:py-8 text-center transition-colors duration-300 hover:bg-mid2/60"
              >
                <div className="font-serif text-5xl md:text-6xl font-black text-orange leading-none mb-2">
                  {item.letter}
                </div>
                <div className="font-display text-sm tracking-[0.05em] text-cream mb-3">
                  {item.word}
                </div>
                <div className="text-[11px] md:text-xs text-subtle leading-[1.6]">
                  {item.desc[0]}
                  <br />
                  {item.desc[1]}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Body copy */}
        <AnimateOnScroll delay={0.1}>
          <p className="font-serif text-lg md:text-xl text-cream/90 leading-[1.7] max-w-3xl mx-auto mt-16 md:mt-20">
            Stem cells. Peptide therapy. Mitochondrial optimization. Hormesis.
            Lab-driven protocols. Three levels of transformation &mdash; Body,
            Mind, and Spirit &mdash; built on seven ancestral pillars that make
            you virtually unkillable.
          </p>
        </AnimateOnScroll>

        {/* Three commands */}
        <AnimateOnScroll delay={0.15}>
          <div className="font-serif text-lg md:text-xl text-cream leading-[1.9] mt-10">
            <p>Kill the Code of Comfort.</p>
            <p>Find your Noble Pursuit.</p>
            <p>Commit to your Cosmic Calling.</p>
          </div>
        </AnimateOnScroll>

        {/* Divider */}
        <div className="w-24 h-px bg-orange/60 mx-auto my-10 md:my-12" />

        {/* Closing manifesto */}
        <AnimateOnScroll delay={0.2}>
          <p className="font-serif text-lg md:text-xl text-cream leading-[1.7] max-w-2xl mx-auto">
            This is not a diet book.
            <br />
            This is a survival manual
            <br />
            for the apocalypse.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.25}>
          <p className="font-serif text-4xl md:text-5xl italic text-orange mt-8 md:mt-10">
            Optimize or die.
          </p>
        </AnimateOnScroll>

        {/* Attribution */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-20 md:mt-28 text-center">
            <p className="font-serif text-base text-cream">
              M. Scott Mortensen, MD
            </p>
            <p className="font-serif text-sm italic text-subtle mt-1">
              Mortensen Medical 501(c)(3)
            </p>
            <a
              href="https://www.cockroachdiet.com"
              className="font-display font-bold text-sm tracking-[0.05em] text-orange mt-3 inline-block hover:text-orange-dark transition-colors"
            >
              www.cockroachdiet.com
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
