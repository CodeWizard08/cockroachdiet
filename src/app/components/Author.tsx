import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Author() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-20" id="author">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Image side — sticky on scroll */}
        <div className="md:sticky md:top-24">
          <AnimateOnScroll>
            <Image
              src="/img/headshot.jpg"
              alt="Dr. M. Scott Mortensen"
              width={500}
              height={625}
              className="w-full object-cover border border-gold/10"
            />
          </AnimateOnScroll>
        </div>

        {/* Bio side */}
        <div>
          <AnimateOnScroll>
            <span className="font-display font-bold text-xs tracking-[0.4em] uppercase text-orange block mb-5">
              About the Author
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] text-cream mb-2">
              Survivor. Healer.
              <br />
              <em className="italic text-orange">Renegade.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <p className="font-display font-bold text-sm tracking-[0.2em] uppercase text-subtle mb-10">
              M. Scott Mortensen, MD &mdash; Physician &middot; Researcher &middot; Disruptor
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="text-base leading-[1.9] text-text mb-4">
              Scott Mortensen spent 30 years doing things most doctors only read
              about. He started as an EMT in 1995 and worked his way through
              every level of frontline medicine: paramedic, flight medic, fire
              captain, search-and-rescue operator. Over 30,000 hours on the
              sharp end of human suffering before ever putting on a white coat.
              He later earned his PA-C and MD with honors. Not to join the
              system. To fix it.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <p className="text-base leading-[1.9] text-text mb-4">
              His r&eacute;sum&eacute; reads like fiction: two unprecedented
              rescues in the Everest Death Zone. Chief Medical Officer for a
              Guinness World Record unsupported crossing of the Arctic Ocean.
              Disaster medicine in post-earthquake Haiti. Founded clinics in
              Fiji and Honduras. Rode a bicycle across America and produced a
              documentary to fight human trafficking in Thailand. Raised
              awareness and funds for autism in Hawaii. Collaborations with
              Nike, Warner Bros., Stand Up to Cancer, the Red Cross, and
              Samaritan&apos;s Purse.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-base leading-[1.9] text-text mb-4">
              He avoids podcasts. He does not sell courses. He has no interest
              in the biohacking influencer circuit.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.25}>
            <p className="text-base leading-[1.9] text-orange font-medium mb-4">
              Then his own body tried to kill him.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-base leading-[1.9] text-text mb-4">
              Acute motor axonal neuropathy, a severe Guillain-Barr&eacute;
              variant, left him 90% paralyzed. The same medical system he had
              spent decades serving offered a wheelchair and a shrug. So he
              rebuilt himself using the tools mainstream medicine overlooks:
              peptides, stem cells, plasmapheresis, hyperbaric oxygen, and the
              kind of stubborn, unreasonable resolve that does not show up on
              an MRI.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.35}>
            <p className="text-base leading-[1.9] text-text mb-4">
              Today, Dr. Mortensen practices at Complete Performance Center and
              Mortensen Medical, a 501(c)(3) nonprofit delivering regenerative
              medicine, peptide therapy, and precision diagnostics to veterans,
              first responders, and the underserved. No one is turned away for
              inability to pay. He is simultaneously building five compliant
              companies across the peptide and regenerative medicine space:
              Mortensen Medical, Peptide Pure, Peptide Buzz, Onzen.health, and
              The Cockroach Diet.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <p className="text-base leading-[1.9] text-text mb-4">
              <em>The Cockroach Diet</em> is not a diet book. It is a field
              manual for becoming durable in a world that rewards convenience
              over resilience. Built on three levels (Healthy, Wealthy, Wise)
              and one protocol: STARTED. It is the product of a man who nearly
              died, refused to do nothing, and wrote it all down so you do not
              have to learn the hard way.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.45}>
            <p className="font-serif text-xl italic text-orange font-medium mb-4">
              Choose your adversity, or life will choose it for you.
            </p>
          </AnimateOnScroll>

          {/* Stats grid */}
          <AnimateOnScroll delay={0.55}>
            <div className="grid grid-cols-3 gap-0.5 my-10">
              {[
                { num: "30+", label: "Years Practice" },
                { num: "30K+", label: "Frontline Hours" },
                { num: "2x", label: "Everest Rescues" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-mid text-center">
                  <span className="font-serif text-3xl font-black text-orange block mb-1">
                    {stat.num}
                  </span>
                  <span className="font-display text-xs tracking-[0.3em] uppercase text-subtle">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.6}>
            <a
              href="#cta"
              className="inline-block font-display text-sm tracking-[0.2em] uppercase bg-orange text-white px-9 py-4 relative overflow-hidden group transition-all cursor-none"
            >
              <span className="relative z-10">Join the Waitlist</span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
