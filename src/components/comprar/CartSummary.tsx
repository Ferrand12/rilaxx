"use client";

import type { CartItem } from "./ProductCard";

interface CartSummaryProps {
  items: CartItem[];
  onCheckout: () => void;
}

export default function CartSummary({ items, onCheckout }: CartSummaryProps) {
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  if (totalQty === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-[0.15em]">
            {totalQty} {totalQty === 1 ? "unidad" : "unidades"}
          </p>
          <p className="text-xl md:text-2xl font-black">
            ${totalPrice.toLocaleString("es-CO")} <span className="text-sm font-mono font-normal text-neutral-400">COP</span>
          </p>
        </div>
        <button
          onClick={onCheckout}
          className="bg-black text-white font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-3 hover:bg-rilaxx-purple transition-colors shrink-0"
        >
          Pagar con Nequi
        </button>
      </div>
    </div>
  );
}
