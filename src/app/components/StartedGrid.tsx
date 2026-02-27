import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  { letter: "S", word: "Sunlight", desc: "Morning photons reset your master clock" },
  { letter: "T", word: "Temperance", desc: "Hormesis through heat & cold" },
  { letter: "A", word: "Air", desc: "Breathwork & air quality" },
  { letter: "R", word: "Rest", desc: "Deep sleep & circadian rhythm" },
  { letter: "T", word: "Trust", desc: "Faith, purpose & community" },
  { letter: "E", word: "Exercise", desc: "Functional movement & strength" },
  { letter: "D", word: "Diet", desc: "Real food. Ancestral nutrition" },
];

export default function StartedGrid() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <span className="font-display font-bold text-xs tracking-[0.4em] uppercase text-orange block mb-5">
            The Protocol
          </span>
          <AnimateOnScroll>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-cream leading-none">
              Get{" "}
              <em className="italic text-orange">STARTED.</em>
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-0.5">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05} className="h-full">
              <div className="p-6 md:p-10 bg-mid text-center relative overflow-hidden transition-all duration-300 hover:bg-mid2 hover:-translate-y-1 h-full">
                <div className="font-serif text-6xl font-black text-orange leading-none mb-2">
                  {item.letter}
                </div>
                <div className="font-display font-bold text-sm tracking-[0.15em] uppercase text-cream mb-2">
                  {item.word}
                </div>
                <div className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
