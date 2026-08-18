import VideoCard from "./VideoCard";

export default function Unboxing() {
  return (
    <section className="w-full px-6 py-16 flex flex-col items-center gap-8">
      <h2 className="font-serif font-light text-3xl tracking-[0.10em] text-center">
        När paketet kommer
      </h2>
      <p className="font-sans font-light text-sm tracking-[0.02em] text-bark text-center max-w-xs">
        Så ser Alva ut hemma hos en kund.
      </p>
      <VideoCard
        src="/video/unboxing"
        poster="/images/unboxing-poster.jpg"
        alt="En kund packar upp sitt Alva-startkit och håller upp pumpflaskan och en förpackning refill-tabletter."
        label="Se uppackningen"
      />
    </section>
  );
}
