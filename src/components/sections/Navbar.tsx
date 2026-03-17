"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="relative w-32 h-10">
          <Image
            src="/assets/brand/logo/rilaxx-black.png"
            alt="Rilaxx"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sabores" className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors">
            Sabores
          </a>
          <a href="#comunidad" className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors">
            Comunidad
          </a>
          <a href="#nosotros" className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors">
            Nosotros
          </a>
          <a
            href="#comprar"
            className="bg-black hover:bg-neutral-800 text-white text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full transition-colors"
          >
            Comprar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 border-b border-neutral-200">
          <a href="#sabores" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-neutral-500">Sabores</a>
          <a href="#comunidad" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-neutral-500">Comunidad</a>
          <a href="#nosotros" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-neutral-500">Nosotros</a>
          <a href="#comprar" onClick={() => setOpen(false)} className="bg-black text-white text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full text-center">Comprar</a>
        </div>
      )}
    </nav>
  );
}
