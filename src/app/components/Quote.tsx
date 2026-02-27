import AnimateOnScroll from "./AnimateOnScroll";

export default function Quote() {
  return (
    <section className="py-32 md:py-36 px-8 md:px-20 bg-dark2 text-center relative overflow-hidden">
      {/* Giant background quotation mark */}
      <div className="absolute font-serif text-[300px] md:text-[400px] font-black text-white/[0.015] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap select-none">
        &ldquo;
      </div>

      <AnimateOnScroll>
        <blockquote className="relative z-2">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal italic text-cream leading-[1.5] max-w-[800px] mx-auto mb-8">
            &ldquo;Kill the Code of Comfort, find a Noble Pursuit, and commit to
            your Cosmic Calling. We&apos;re not just optimizing or extending a
            healthy lifespan. We&apos;re reclaiming what it means to be human in
            a world designed to break you.&rdquo;
          </p>
        </blockquote>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.1}>
        <cite className="font-display text-xs tracking-[0.3em] font-bold uppercase text-orange not-italic relative z-2">
          &mdash; Dr. M. Scott Mortensen, MD
        </cite>
      </AnimateOnScroll>
    </section>
  );
}
