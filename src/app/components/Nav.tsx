"use client";

const navLinks = [
  { label: "The Book", href: "#book" },
  { label: "Method", href: "#levels" },
  { label: "About", href: "#author" },
  { label: "Resources", href: "#channels" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-dark/95 to-transparent">
      <div className="max-w-[1152px] mx-auto px-8 md:px-2 py-6 flex items-center justify-between">
        <div className="font-display font-bold text-sm tracking-[0.3em] uppercase text-cream cursor-none">
          The Cockroach Diet
        </div>

        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-xs tracking-[0.2em] uppercase text-gray-300 hover:text-cream transition-colors duration-300 cursor-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="font-display text-xs tracking-[0.2em] uppercase bg-orange text-white px-6 py-2.5 hover:bg-orange-dark transition-colors duration-300 cursor-none"
        >
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
}
