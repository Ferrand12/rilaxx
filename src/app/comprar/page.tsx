"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ProductCard, { type CartItem } from "@/components/comprar/ProductCard";
import CartSummary from "@/components/comprar/CartSummary";
import NequiCheckout from "@/components/comprar/NequiCheckout";

/* ──────────────────────────────────────────────
   PLACEHOLDER — Reemplazar con precio real
   ────────────────────────────────────────────── */
const PRICE = 8000; // REPLACE: precio real por lata en COP
/* ────────────────────────────────────────────── */

const initialProducts: CartItem[] = [
  {
    id: "frutos-rojos",
    name: "Frutos Rojos",
    image: "/assets/brand/latas/frutos-rojos/frutos-rojos-2.png",
    color: "#862660",
    price: PRICE,
    qty: 0,
  },
  {
    id: "yerba-buena",
    name: "Yerba Buena",
    image: "/assets/brand/latas/yerbabuena/yerbabuena-2.png",
    color: "#037262",
    price: PRICE,
    qty: 0,
  },
  {
    id: "mango",
    name: "Mango",
    image: "/assets/brand/latas/mango/mango-2.png",
    color: "#FAB434",
    price: PRICE,
    qty: 0,
  },
  {
    id: "naranja-maracuya",
    name: "Naranja Maracuya",
    image: "/assets/brand/latas/naranja-maracuya/naranja-maracuya-2.png",
    color: "#F39200",
    price: PRICE,
    qty: 0,
  },
];

type View = "products" | "checkout" | "done";

export default function ComprarPage() {
  const [items, setItems] = useState<CartItem[]>(initialProducts);
  const [view, setView] = useState<View>("products");

  const updateQty = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    );
  }, []);

  const resetCart = useCallback(() => {
    setItems(initialProducts);
    setView("done");
  }, []);

  if (view === "done") {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Pedido enviado
            </h1>
            <p className="font-mono text-sm text-neutral-500 mb-8">
              Te contactaremos por WhatsApp para confirmar tu pedido y coordinar la entrega.
            </p>
            <a
              href="/"
              className="inline-block bg-black text-white font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-rilaxx-purple transition-colors"
            >
              Volver al inicio
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (view === "checkout") {
    return (
      <>
        <Navbar />
        <NequiCheckout
          items={items}
          onBack={() => setView("products")}
          onComplete={resetCart}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-12">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-400 mb-3">
              Cocktail con Vodka &middot; 250ml &middot; 5% Vol
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tight">
              Elige tu<br />sabor
            </h1>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onAdd={() => updateQty(item.id, 1)}
                onRemove={() => updateQty(item.id, -1)}
              />
            ))}
          </div>
        </div>
      </main>

      <CartSummary
        items={items}
        onCheckout={() => setView("checkout")}
      />

      <Footer />
    </>
  );
}
