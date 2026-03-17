import Image from "next/image";

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

        {/* Right: fox + sello + XX */}
        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          {/* Subtle brand glow behind assets */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-rilaxx-purple/8 via-rilaxx-pink/6 to-rilaxx-orange/8 blur-3xl" />
          </div>

          {/* Fox mascot — pink standing pose with can */}
          <div className="relative w-72 h-80 lg:w-96 lg:h-[420px]">
            <Image
              src="/assets/brand/fox/fox-standing-pink.png"
              alt="Rilaxx Fox mascot"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Sello — Frutos Rojos (pink) */}
          <div className="absolute -right-2 top-4 lg:right-4 lg:top-8 w-20 h-20 lg:w-28 lg:h-28 rotate-12">
            <Image
              src="/assets/brand/sello/sello-frutos-rojos.png"
              alt="Follow the Foxx Chill & Drink"
              fill
              className="object-contain drop-shadow-md"
            />
          </div>

          {/* XX isotipo — purple, decorative accent */}
          <div className="absolute -left-4 top-8 w-12 h-12 lg:w-16 lg:h-16 -rotate-12 opacity-40">
            <Image
              src="/assets/brand/xx/xx-purple.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
