export default function Footer() {
  return (
    <footer className="px-8 md:px-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-display font-bold text-sm tracking-[0.3em] uppercase text-subtle">
        The Cockroach <span className="text-orange">Diet</span> &copy; 2026
      </div>
      <div className="text-xs text-subtle">
        A book by M. Scott Mortensen, MD &middot; Mortensen Medical 501(c)(3)
      </div>
    </footer>
  );
}
