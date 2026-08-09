export default function Hero() {
  return (
    <section className="w-full px-6 pt-20 pb-16 flex flex-col items-center text-center gap-6">
      <h1 className="font-serif font-light text-5xl sm:text-6xl tracking-[0.10em] text-kol">
        ALVA
      </h1>
      <p className="font-sans font-light text-base sm:text-lg tracking-[0.03em] text-bark max-w-xs">
        Rena händer. Lättare planet.
      </p>
      <div className="w-10 h-px bg-sand" aria-hidden="true" />
      <p className="font-sans font-light text-sm tracking-[0.04em] text-bark uppercase max-w-xs">
        Skummande handtvål · refill-tabletter
      </p>
    </section>
  );
}
