export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <p className="font-script text-rilaxx-purple text-2xl">Follow the Foxx</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-black">
            Wilder<br />
            Times
          </h1>
          <p className="font-mono text-neutral-500 text-sm md:text-base max-w-md leading-relaxed">
            Cocktails con vodka que encienden la noche. No es solo una bebida — es la señal de que el buen rato empezó.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#comprar"
              className="bg-black text-white font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Quiero la mía
            </a>
            <a
              href="#sabores"
              className="border-2 border-neutral-300 text-black font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-full hover:border-black transition-colors"
            >
              Explorar sabores
            </a>
          </div>
        </div>

        {/* Right: product + mascot placeholders */}
        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          {/* Subtle brand glow behind product — only gradient accent in Hero */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-rilaxx-purple/8 via-rilaxx-pink/6 to-rilaxx-orange/8 blur-3xl" />
          </div>

          {/* REPLACE: Fox mascot — swap with <Image src="/assets/brand/fox-hero.png" /> */}
          <div
            className="placeholder-asset absolute -left-4 bottom-0 w-48 h-64 lg:w-56 lg:h-72 rounded-2xl bg-neutral-100"
            data-placeholder="Fox Mascot PNG"
          />
          {/* REPLACE: Can product — swap with <Image src="/assets/brand/can-frutos-rojos.png" /> */}
          <div
            className="placeholder-asset w-44 h-72 lg:w-52 lg:h-80 rounded-2xl bg-neutral-100 rotate-[-6deg] shadow-xl"
            data-placeholder="Lata Rilaxx PNG"
          />
          {/* REPLACE: Rilaxx sello circular "Follow the Foxx Chill & Drink" */}
          <div
            className="placeholder-asset absolute -right-2 top-4 w-24 h-24 rounded-full bg-neutral-100 rotate-12 shadow-md"
            data-placeholder="Sello"
          />
        </div>
      </div>
    </section>
  );
}
