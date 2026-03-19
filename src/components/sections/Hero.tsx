import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden bg-white">
      {/* Full-bleed product image — the can IS the hero */}
      <div className="absolute inset-0">
        <Image
          src="/assets/brand/latas/frutos-rojos/frutos-rojos-1.png"
          alt="Rilaxx Frutos Rojos"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content pinned to bottom */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-script text-rilaxx-yellow text-xl md:text-2xl mb-4">
            Follow the Foxx
          </p>
          <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black uppercase leading-[0.85] tracking-tight text-white">
            Wilder<br />Times
          </h1>
          <div className="mt-8 flex items-end justify-between gap-8 flex-wrap">
            <p className="font-mono text-white/60 text-xs md:text-sm max-w-sm leading-relaxed">
              Cocktails con vodka para las noches que no quieres que terminen.
            </p>
            <a
              href="#sabores"
              className="inline-block bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-3 hover:bg-rilaxx-yellow hover:text-black transition-colors"
            >
              Explorar sabores
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
