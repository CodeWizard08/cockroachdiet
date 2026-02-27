import AnimateOnScroll from "./AnimateOnScroll";

export default function BookDescription() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-20" id="book">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-20 max-w-6xl mx-auto">
        {/* Vertical label */}
        <div className="hidden md:block">
          <span className="font-display text-xs font-bold tracking-[0.4em] uppercase text-orange [writing-mode:vertical-rl] rotate-180 mt-4">
            About the Book
          </span>
        </div>

        <div>
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.15] text-cream mb-8">
              Choose your adversity,
              <br />
              <em className="italic text-orange">
                or life will choose it for you.
              </em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="text-base leading-[1.8] text-text mb-6">
              In an age where convenience is king and comfort quietly sabotages
              our health,{" "}
              <strong className="text-cream font-medium">
                resilience is radical.
              </strong>{" "}
              Through gripping personal stories, biting humor, and rigorously
              researched protocols, Dr. Mortensen shows you how to reclaim your
              biology from a world engineered to make you soft, sick, and
              dependent.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-base leading-[1.8] text-text">
              Featuring science-backed strategies &mdash; from{" "}
              <strong className="text-cream font-medium">
                peptides and hormesis
              </strong>{" "}
              to{" "}
              <strong className="text-cream font-medium">
                mitochondrial hacking
              </strong>{" "}
              and{" "}
              <strong className="text-cream font-medium">
                metabolic resets
              </strong>{" "}
              &mdash; this is your blueprint to become virtually indestructible:
              body, mind, and spirit.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
