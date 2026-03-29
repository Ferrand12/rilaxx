"use client";

import Image from "next/image";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  color: string;
  price: number;
  qty: number;
}

interface ProductCardProps {
  item: CartItem;
  onAdd: () => void;
  onRemove: () => void;
}

export default function ProductCard({ item, onAdd, onRemove }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-neutral-100 rounded-sm overflow-hidden">
      {/* Product image */}
      <div className="relative aspect-square bg-neutral-50 overflow-hidden">
        <Image
          src={item.image}
          alt={`Rilaxx ${item.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Color accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: item.color }}
        />
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1">
          Cocktail con Vodka
        </p>
        <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-2">
          {item.name}
        </h3>
        <p className="font-mono text-sm text-neutral-600 mb-4">
          ${item.price.toLocaleString("es-CO")} COP
        </p>

        {/* Quantity selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRemove}
            disabled={item.qty === 0}
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-black hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label={`Quitar ${item.name}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" /></svg>
          </button>
          <span className="font-mono text-lg font-bold w-6 text-center">{item.qty}</span>
          <button
            onClick={onAdd}
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-black hover:text-black transition-colors"
            aria-label={`Agregar ${item.name}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
