import AnimateOnScroll from "./AnimateOnScroll";

export default function Signup() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-20" id="cta">
      <div className="max-w-6xl mx-auto bg-mid border border-white/5 py-20 md:py-28 px-8 md:px-16 text-center relative overflow-hidden">
        {/* Top decorative dot */}

        <AnimateOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl italic text-cream leading-[1.2] mb-6 relative z-2">
            Join the rebellion.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-sm text-subtle max-w-xl mx-auto mb-10 leading-[1.8] relative z-2">
            Email us to join the VIP list and get early access to pre-order{" "}
            <em className="italic text-cream">The Cockroach Diet,</em> plus
            exclusive bonus protocols and chapter previews.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <a
            href="mailto:team@cockroachdiet.com?subject=Cockroach%20Diet%20Waitlist&body=I%20want%20early%20access%20to%20The%20Cockroach%20Diet!"
            className="inline-block font-display text-sm tracking-[0.1em] bg-orange text-white px-10 py-4 rounded-sm relative overflow-hidden group transition-all cursor-none z-2"
          >
            <span className="relative z-10">
              Join the Waitlist &rarr; team@cockroachdiet.com
            </span>
            <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
