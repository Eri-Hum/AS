export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 flex flex-col items-center gap-3 border-t border-sand/50 mt-auto">
      <span className="font-serif font-light text-lg tracking-[0.12em]">
        ALVA
      </span>
      <p className="font-sans font-light text-xs tracking-[0.03em] text-bark text-center">
        Tillverkad i Sverige.
      </p>
      <p className="font-sans font-light text-xs tracking-[0.02em] text-bark">
        © {new Date().getFullYear()} Alva
      </p>
    </footer>
  );
}
