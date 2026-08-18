"use client";

import { useState } from "react";
import { useCart } from "../lib/cart-context";
import { getProduct } from "../lib/products";
import CheckoutOverlay from "./CheckoutOverlay";

export default function CartDrawer() {
  const { items, itemCount, subtotal, isOpen, closeCart, incrementItem, decrementItem, removeItem } =
    useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen && !showCheckout) return null;

  const entries = Object.entries(items);

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        aria-label="Stäng varukorg"
        onClick={closeCart}
        className="absolute inset-0 bg-kol/40"
      />
      <aside className="relative w-full max-w-sm h-full bg-krita border-l border-sand/60 flex flex-col">
        <div className="flex items-center justify-between px-6 py-6 border-b border-sand/50">
          <h2 className="font-serif font-light text-xl tracking-[0.08em]">
            Varukorg
          </h2>
          <button
            onClick={closeCart}
            aria-label="Stäng"
            className="text-bark font-sans font-light text-sm tracking-[0.04em]"
          >
            Stäng
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {entries.length === 0 ? (
            <p className="font-sans font-light text-sm tracking-[0.02em] text-bark">
              Din varukorg är tom.
            </p>
          ) : (
            <ul className="flex flex-col gap-6">
              {entries.map(([id, qty]) => {
                const product = getProduct(id);
                if (!product) return null;
                return (
                  <li key={id} className="flex gap-4">
                    <div
                      className="w-20 h-20 shrink-0 bg-lin border border-sand/40"
                      aria-hidden="true"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-sans font-light text-sm tracking-[0.02em]">
                          {product.name}
                        </h3>
                        <span className="font-sans font-light text-sm tracking-[0.02em] text-bark">
                          {product.price * qty} kr
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-sand/60">
                          <button
                            onClick={() => decrementItem(id)}
                            aria-label={`Minska antal ${product.name}`}
                            className="w-8 h-8 font-sans font-light text-sm text-kol"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-sans font-light text-sm">
                            {qty}
                          </span>
                          <button
                            onClick={() => incrementItem(id)}
                            aria-label={`Öka antal ${product.name}`}
                            className="w-8 h-8 font-sans font-light text-sm text-kol"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(id)}
                          className="font-sans font-light text-xs tracking-[0.03em] text-bark underline underline-offset-2"
                        >
                          Ta bort
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {entries.length > 0 && (
          <div className="px-6 py-6 border-t border-sand/50 flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <span className="font-sans font-light text-sm tracking-[0.02em] text-bark">
                Delsumma · {itemCount} {itemCount === 1 ? "vara" : "varor"}
              </span>
              <span className="font-sans font-light text-base tracking-[0.02em]">
                {subtotal} kr
              </span>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-kol text-krita font-sans font-light text-sm tracking-[0.04em] uppercase py-3"
            >
              Till kassan
            </button>
          </div>
        )}
      </aside>

      {showCheckout && (
        <CheckoutOverlay
          onClose={() => {
            setShowCheckout(false);
            closeCart();
          }}
        />
      )}
    </div>
  );
}
