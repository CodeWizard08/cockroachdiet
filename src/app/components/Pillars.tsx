import AnimateOnScroll from "./AnimateOnScroll";

const levels = [
  {
    icon: "🏋️",
    name: "Healthy",
    subtitle: "The body as fortress",
    color: "text-[#4CAF50]",
    borderColor: "bg-[#4CAF50]",
    desc: "Sunlight, cold, heat, fasting, movement, sleep. The ancestral foundations that build a body capable of surviving anything the modern world throws at it.",
    num: "01",
  },
  {
    icon: "🧬",
    name: "Wealthy",
    subtitle: "The biology of abundance",
    color: "text-gold",
    borderColor: "bg-gold",
    desc: 'Peptides, hormesis, lab-driven protocols, and regenerative medicine. Next-level interventions for those ready to optimize beyond "normal."',
    num: "02",
  },
  {
    icon: "🔮",
    name: "Wise",
    subtitle: "The quantum leap",
    color: "text-[#9C6ADE]",
    borderColor: "bg-[#9C6ADE]",
    desc: "Quantum biology, circadian mastery, and the frontier science that connects light, water, and magnetism to human performance. The leap of faith.",
    num: "03",
  },
];

export default function Pillars() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-20 bg-dark2 relative" id="levels">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="font-display font-bold text-xs tracking-[0.4em] uppercase text-orange block mb-5">
            Three Levels of Transformation
          </span>
          <AnimateOnScroll>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-cream leading-none">
              Healthy.
              <br />
              Wealthy.
              <br />
              Wise.
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16">
          {levels.map((level, i) => (
            <AnimateOnScroll key={level.name} delay={i * 0.1} className="h-full">
              <div className="p-10 md:p-14 bg-mid relative overflow-hidden transition-colors duration-400 hover:bg-mid2 group h-full text-center">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 ${level.borderColor}`}
                />

                <span className="text-3xl block mb-6">{level.icon}</span>
                <div
                  className={`font-display font-bold text-2xl tracking-[0.15em] uppercase mb-2 ${level.color}`}
                >
                  {level.name}
                </div>
                <p className="font-serif italic text-sm text-gold mb-4">
                  {level.subtitle}
                </p>
                <p className="text-sm leading-[1.7] text-subtle">
                  {level.desc}
                </p>

                {/* Large background number */}
                <div className="absolute bottom-6 right-6 font-display font-black text-7xl leading-none text-white/[0.03]">
                  {level.num}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
