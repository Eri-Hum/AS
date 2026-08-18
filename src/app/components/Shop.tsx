"use client";

import { products } from "../lib/products";
import { useCart } from "../lib/cart-context";

export default function Shop() {
  const { addItem } = useCart();

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
              onClick={() => addItem(product.id)}
              className="mt-2 w-full border border-kol py-3 font-sans font-light text-sm tracking-[0.04em] uppercase hover:bg-kol hover:text-krita transition-colors"
            >
              Lägg i varukorg
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
