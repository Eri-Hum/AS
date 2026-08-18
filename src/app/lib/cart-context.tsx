"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { getProduct } from "./products";

type CartContextValue = {
  items: Record<string, number>;
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [isOpen, setIsOpen] = useState(false);

  function addItem(id: string) {
    setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    setIsOpen(true);
  }

  function incrementItem(id: string) {
    setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  function decrementItem(id: string) {
    setItems((prev) => {
      const next = { ...prev, [id]: (prev[id] ?? 0) - 1 };
      if (next[id] <= 0) delete next[id];
      return next;
    });
  }

  function removeItem(id: string) {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  const itemCount = useMemo(
    () => Object.values(items).reduce((a, b) => a + b, 0),
    [items],
  );

  const subtotal = useMemo(
    () =>
      Object.entries(items).reduce((sum, [id, qty]) => {
        const product = getProduct(id);
        return sum + (product ? product.price * qty : 0);
      }, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    itemCount,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    incrementItem,
    decrementItem,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
