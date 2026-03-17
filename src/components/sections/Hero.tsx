export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Gradient background — matches brandbook purple→pink→orange */}
      <div className="absolute inset-0 bg-gradient-to-br from-rilaxx-purple via-rilaxx-pink to-rilaxx-orange" />

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <p className="font-script text-rilaxx-yellow text-2xl">Follow the Foxx</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
            Wilder<br />
            <span className="text-rilaxx-yellow">Times</span><br />
            Await
          </h1>
          <p className="font-mono text-white/80 text-sm md:text-base max-w-md leading-relaxed">
            Cocktails con vodka que encienden la noche. No es solo una bebida — es la señal de que el buen rato empezó.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#comprar"
              className="bg-rilaxx-yellow text-black font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-full hover:bg-rilaxx-pale-yellow transition-colors"
            >
              Quiero la mía
            </a>
            <a
              href="#sabores"
              className="border-2 border-white/40 text-white font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Explorar sabores
            </a>
          </div>
        </div>

        {/* Right: product + mascot placeholders */}
        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          {/* REPLACE: Fox mascot — swap with <Image src="/assets/brand/fox-hero.png" /> */}
          <div
            className="placeholder-asset absolute -left-4 bottom-0 w-48 h-64 lg:w-56 lg:h-72 rounded-2xl bg-white/10"
            data-placeholder="Fox Mascot PNG"
          />
          {/* REPLACE: Can product — swap with <Image src="/assets/brand/can-frutos-rojos.png" /> */}
          <div
            className="placeholder-asset w-44 h-72 lg:w-52 lg:h-80 rounded-2xl bg-white/10 rotate-[-6deg]"
            data-placeholder="Lata Rilaxx PNG"
          />
          {/* REPLACE: Rilaxx XX logo stamp */}
          <div
            className="placeholder-asset absolute -right-2 top-4 w-24 h-24 rounded-full bg-rilaxx-yellow/20 rotate-12"
            data-placeholder="XX Isotipo"
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
