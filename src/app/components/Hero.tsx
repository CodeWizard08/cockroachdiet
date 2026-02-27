"use client";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-2 min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left — Copy */}
        <div className="flex flex-col justify-center pt-36 pb-20 md:py-0 relative z-2">
          <span
            className="font-display text-xs tracking-[0.4em] font-bold uppercase text-orange mb-8 flex items-center gap-3 animate-[heroIn_1s_ease_0.2s_both]"
          >
            <span className="block w-10 h-px bg-orange" />
            A Book by M. Scott Mortensen, MD
          </span>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-cream mb-2 animate-[heroIn_1s_ease_0.4s_both]">
            The Cockroach
            <em className="block italic text-orange">Diet</em>
          </h1>

          <p className="font-display font-light text-base tracking-[0.25em] uppercase text-subtle mt-5 mb-12 animate-[heroIn_1s_ease_0.6s_both]">
            Superhuman Protocols for a Super Toxic World
          </p>

          <div className="flex gap-4 items-center animate-[heroIn_1s_ease_0.8s_both]">
            <a
              href="#cta"
              className="font-display text-sm tracking-[0.2em] uppercase bg-orange text-white px-9 py-4 relative overflow-hidden group transition-all cursor-none"
            >
              <span className="relative z-10">Join the Waitlist</span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a
              href="#book"
              className="font-display text-sm tracking-[0.2em] uppercase text-cream px-9 py-4 border border-cream/20 hover:border-cream transition-all cursor-none"
            >
              Read More
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-0 flex items-center gap-3 font-display text-xs tracking-[0.3em] uppercase text-subtle z-2 animate-[heroIn_1s_ease_1s_both]">
            <div className="w-px h-12 bg-gradient-to-b from-orange to-transparent animate-scroll-line" />
            Scroll
          </div>
        </div>

        {/* Right — Book Video */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Ambient glow */}

          <div className="relative z-2 animate-[heroIn_1.2s_cubic-bezier(0.175,0.885,0.32,1.275)_0.5s_both]">
            <video
              className="w-[300px] md:w-[380px]"
              style={{
                boxShadow:
                  "-20px 20px 60px rgba(0,0,0,0.8), 0 0 100px rgba(232,73,15,0.1)",
              }}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/img/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
