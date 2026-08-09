"use client";

import { useState } from "react";
import CheckoutOverlay from "./CheckoutOverlay";

type Product = {
  id: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
};

const products: Product[] = [
  {
    id: "refill-4",
    name: "Refill 4-pack",
    price: 99,
    tagline: "Ett år av rena händer.",
    description:
      "Fyra tabletter, en flaska vatten. Räcker i ett år vid vanlig användning.",
  },
  {
    id: "startkit",
    name: "Startkit",
    price: 399,
    tagline: "Allt du behöver för att börja.",
    description: "Pump av glas och keramik, plus två refills. Fyller du på själv.",
  },
];

export default function Shop() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [showCheckout, setShowCheckout] = useState(false);

  const itemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  function addToCart(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <section
      id="produkter"
      className="w-full px-6 py-16 bg-lin flex flex-col items-center gap-10"
    >
      <h2 className="font-serif font-light text-3xl tracking-[0.10em] text-center">
        Produkter
      </h2>

      <div className="w-full max-w-md flex flex-col gap-10">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col gap-3 pb-10 border-b border-sand/50 last:border-b-0 last:pb-0"
          >
            <div className="w-full aspect-square bg-krita border border-sand/40" />
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif font-light text-xl tracking-[0.06em]">
                {product.name}
              </h3>
              <span className="font-sans font-light text-sm tracking-[0.02em] text-bark">
                {product.price} kr
              </span>
            </div>
            <p className="font-sans font-light text-sm tracking-[0.02em] text-kol">
              {product.tagline}
            </p>
            <p className="font-sans font-light text-sm tracking-[0.02em] text-bark">
              {product.description}
            </p>
            <button
              onClick={() => addToCart(product.id)}
              className="mt-2 w-full border border-kol py-3 font-sans font-light text-sm tracking-[0.04em] uppercase hover:bg-kol hover:text-krita transition-colors"
            >
              Lägg i varukorg
            </button>
          </article>
        ))}
      </div>

      {itemCount > 0 && (
        <div className="w-full max-w-md flex items-center justify-between border-t border-sand/50 pt-6">
          <span className="font-sans font-light text-sm tracking-[0.02em] text-bark">
            {itemCount} {itemCount === 1 ? "vara" : "varor"} i varukorgen
          </span>
          <button
            onClick={() => setShowCheckout(true)}
            className="bg-kol text-krita font-sans font-light text-sm tracking-[0.04em] uppercase px-6 py-3"
          >
            Köp
          </button>
        </div>
      )}

      {showCheckout && (
        <CheckoutOverlay onClose={() => setShowCheckout(false)} />
      )}
    </section>
  );
}
