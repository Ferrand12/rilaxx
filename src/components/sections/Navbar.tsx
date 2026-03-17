"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — REPLACE: swap text with <Image src="/assets/brand/logo.png" /> */}
        <a href="#" className="font-script text-3xl text-rilaxx-pink tracking-wide">
          Rilaxx
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sabores" className="text-sm font-mono uppercase tracking-widest text-white/70 hover:text-rilaxx-yellow transition-colors">
            Sabores
          </a>
          <a href="#comunidad" className="text-sm font-mono uppercase tracking-widest text-white/70 hover:text-rilaxx-yellow transition-colors">
            Comunidad
          </a>
          <a href="#nosotros" className="text-sm font-mono uppercase tracking-widest text-white/70 hover:text-rilaxx-yellow transition-colors">
            Nosotros
          </a>
          <a
            href="#comprar"
            className="bg-rilaxx-pink hover:bg-rilaxx-purple text-white text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full transition-colors"
          >
            Comprar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
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
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          <a href="#sabores" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-white/70">Sabores</a>
          <a href="#comunidad" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-white/70">Comunidad</a>
          <a href="#nosotros" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-white/70">Nosotros</a>
          <a href="#comprar" onClick={() => setOpen(false)} className="bg-rilaxx-pink text-white text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full text-center">Comprar</a>
        </div>
      )}
    </nav>
  );
}
