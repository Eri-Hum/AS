"use client";

import { useState } from "react";

export default function CheckoutOverlay({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // POC: statisk sida utan backend. Loggar lokalt i webbläsarkonsolen
    // istället för att spara mejlet. Byt ut mot Formspree/Mailchimp etc.
    console.log("Alva waitlist signup:", email);
    window.setTimeout(() => setStatus("done"), 400);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-kol/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-overlay-title"
    >
      <div className="w-full max-w-sm bg-krita border border-sand/60 px-6 py-10 flex flex-col items-center text-center gap-6">
        <button
          onClick={onClose}
          aria-label="Stäng"
          className="self-end -mt-2 -mr-2 text-bark font-sans font-light text-sm tracking-[0.04em]"
        >
          Stäng
        </button>

        {status === "done" ? (
          <>
            <h2
              id="checkout-overlay-title"
              className="font-serif font-light text-2xl tracking-[0.08em]"
            >
              Tack.
            </h2>
            <p className="font-sans font-light text-sm tracking-[0.02em] text-bark">
              Vi hör av oss när Alva finns i lager.
            </p>
          </>
        ) : (
          <>
            <h2
              id="checkout-overlay-title"
              className="font-serif font-light text-2xl tracking-[0.08em]"
            >
              Vi bygger upp lagret
            </h2>
            <p className="font-sans font-light text-sm tracking-[0.02em] text-bark">
              Vill du vara först att få veta när vi lanserar?
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-3 mt-2"
            >
              <label htmlFor="email" className="sr-only">
                E-postadress
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="din@mejladress.se"
                className="w-full bg-lin border border-sand/60 px-4 py-3 font-sans font-light text-sm tracking-[0.02em] text-kol placeholder:text-bark/70 focus:outline-none focus:border-bark"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-kol text-krita font-sans font-light text-sm tracking-[0.04em] py-3 uppercase disabled:opacity-60"
              >
                {status === "submitting" ? "Skickar..." : "Håll mig uppdaterad"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
