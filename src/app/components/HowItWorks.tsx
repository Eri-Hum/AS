import VideoCard from "./VideoCard";

const steps = [
  {
    number: "01",
    title: "Fyll flaskan",
    description: "Ta din Alva-pump och fyll den med vanligt kranvatten.",
  },
  {
    number: "02",
    title: "Lägg i tabletten",
    description: "En tablett per påfyllning. Låt den lösas upp helt.",
  },
  {
    number: "03",
    title: "Skaka och tvätta",
    description: "Skaka lätt. Klart att använda direkt.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="sa-fungerar-det"
      className="w-full px-6 py-16 flex flex-col items-center gap-10"
    >
      <h2 className="font-serif font-light text-3xl tracking-[0.10em] text-center">
        Så här fungerar det
      </h2>
      <div className="w-full max-w-md flex flex-col gap-8">
        {steps.map((step) => (
          <article key={step.number} className="flex gap-5 items-start">
            <span className="font-serif font-light text-2xl tracking-[0.06em] text-bark">
              {step.number}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-sans font-light text-base tracking-[0.03em]">
                {step.title}
              </h3>
              <p className="font-sans font-light text-sm tracking-[0.02em] text-bark">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <VideoCard
        src="/video/refill-demo"
        poster="/images/refill-demo-poster.jpg"
        alt="En kund lägger i en refill-tablett i Alvas pumpflaska och skruvar på pumpen."
        label="Se påfyllningen"
      />
    </section>
  );
}
