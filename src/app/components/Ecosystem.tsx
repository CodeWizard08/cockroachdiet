import AnimateOnScroll from "./AnimateOnScroll";

const channels = [
  {
    icon: "💉",
    name: "Peptide Pure Injectables",
    desc: "Pharmaceutical-grade injectable peptides — clinician-prescribed. The flagship of the regenerative medicine ecosystem.",
    href: "https://www.peptidepure.com",
  },
  {
    icon: "⚡",
    name: "Peptide Buzz + Neurosting",
    desc: "OTC peptide products — oral, topical, nasal pouches. No Rx needed. Science-backed and consumer-ready.",
    href: "https://www.peptide.buzz",
  },
  {
    icon: "📖",
    name: "The Cockroach Diet",
    desc: "The book. The protocol. The movement. Your complete guide to becoming unkillable in a world engineered for mediocrity.",
    href: "https://www.cockroachdiet.com",
  },
  {
    icon: "🏥",
    name: "Mortensen Medical",
    desc: "501(c)(3) nonprofit delivering regenerative medicine, peptide therapy, and precision diagnostics — no one turned away.",
    href: "https://www.mortensenmedical.com",
  },
  {
    icon: "🤖",
    name: "onzen.health",
    desc: "AI-guided regenerative medicine — labs, protocols, and precision interventions tailored to your biology.",
    href: "https://onzen.health",
  },
];

export default function Ecosystem() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-20 bg-dark2 relative" id="channels">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-display font-bold text-xs tracking-[0.4em] uppercase text-orange block mb-5">
            The Ecosystem
          </span>
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[1.1]">
              One mission.
              <br />
              <em className="italic text-orange">Multiple channels.</em>
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {channels.map((ch, i) => (
            <AnimateOnScroll key={ch.name} delay={i * 0.08}>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 md:p-10 bg-mid flex gap-6 items-start transition-colors duration-300 hover:bg-mid2 group cursor-none"
              >
                <div className="w-12 h-12 bg-dark flex items-center justify-center text-xl shrink-0 border border-gold/10">
                  {ch.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-base tracking-[0.1em] uppercase text-cream mb-1.5 group-hover:text-orange transition-colors">
                    {ch.name}
                  </div>
                  <div className="text-sm text-subtle leading-relaxed">
                    {ch.desc}
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
