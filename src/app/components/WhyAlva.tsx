const reasons = [
  {
    title: "Svensktillverkad",
    description: "Tillverkad i Sverige. Designad för att räcka.",
  },
  {
    title: "Refill-format",
    description: "En flaska, många påfyllningar. Drastiskt mindre plast.",
  },
  {
    title: "Rena ingredienser",
    description: "Enkel formel. Inga onödiga tillsatser.",
  },
  {
    title: "Mindre plast",
    description: "Fyra tabletter ersätter fyra plastflaskor tvål.",
  },
];

export default function WhyAlva() {
  return (
    <section
      id="varfor-alva"
      className="w-full px-6 py-16 bg-lin flex flex-col items-center gap-10"
    >
      <h2 className="font-serif font-light text-3xl tracking-[0.10em] text-center">
        Varför Alva
      </h2>
      <div className="w-full max-w-md grid grid-cols-1 gap-8">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="flex flex-col gap-1 pb-8 border-b border-sand/50 last:border-b-0 last:pb-0"
          >
            <h3 className="font-sans font-light text-base tracking-[0.03em]">
              {reason.title}
            </h3>
            <p className="font-sans font-light text-sm tracking-[0.02em] text-bark">
              {reason.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
