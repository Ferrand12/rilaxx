"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const flavors = [
  {
    name: "Frutos Rojos",
    can: "/assets/brand/latas/frutos-rojos/frutos-rojos-4.png",
    bg: "#862660",
  },
  {
    name: "Yerba Buena",
    can: "/assets/brand/latas/yerbabuena/yerbabuena-4.png",
    bg: "#037262",
  },
  {
    name: "Mango",
    can: "/assets/brand/latas/mango/mango-4.png",
    bg: "#FAB434",
  },
  {
    name: "Naranja Maracuyá",
    can: "/assets/brand/latas/naranja-maracuya/naranja-maracuya-4.png",
    bg: "#F39200",
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((a) => (a + 1) % flavors.length),
    []
  );
  const prev = useCallback(
    () => setActive((a) => (a - 1 + flavors.length) % flavors.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const flavor = flavors[active];

  return (
    <section
      id="sabores"
      className="relative bg-white min-h-[85vh] flex flex-col items-center justify-center overflow-hidden py-16"
    >
      {/* Colored semicircle — bottom half */}
      <div
        className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 w-[160%] aspect-square rounded-full transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: flavor.bg }}
      />

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Sabor anterior"
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 hover:border-black hover:text-black transition-colors bg-white/80 backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        onClick={next}
        aria-label="Siguiente sabor"
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 hover:border-black hover:text-black transition-colors bg-white/80 backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      {/* Product image — large, overlapping the semicircle */}
      <div className="relative z-10 w-[75vw] max-w-[560px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-10">
        {flavors.map((f, i) => (
          <div
            key={f.name}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={f.can}
              alt={`Rilaxx ${f.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 75vw, 560px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Text on the colored area */}
      <div className="relative z-10 text-center">
        <p className="font-mono text-white/60 text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3">
          Cocktail con Vodka
        </p>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] text-white mb-8">
          {flavor.name}
        </h3>
        <a
          href="/comprar"
          className="inline-block bg-white text-black font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-rilaxx-yellow transition-colors"
        >
          Comprar ahora
        </a>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex gap-2 mt-10">
        {flavors.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ver ${flavors[i].name}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-white" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
