"use client";

import { useCart } from "../lib/cart-context";

export default function Header() {
  const { itemCount, openCart } = useCart();

  return (
    <header className="w-full py-6 px-6 flex items-center justify-between border-b border-sand/50">
      <span className="w-8" aria-hidden="true" />
      <span className="font-serif font-light text-2xl tracking-[0.14em] text-kol">
        ALVA
      </span>
      <button
        onClick={openCart}
        aria-label={`Öppna varukorg${itemCount > 0 ? `, ${itemCount} varor` : ""}`}
        className="relative w-8 h-8 flex items-center justify-center"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-kol text-krita text-[10px] font-sans font-light rounded-full">
            {itemCount}
          </span>
        )}
      </button>
    </header>
  );
}
