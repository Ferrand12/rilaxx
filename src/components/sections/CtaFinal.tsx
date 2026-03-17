import Image from "next/image";

export default function CtaFinal() {
  return (
    <section id="comprar" className="relative py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Fox with can — yellow variant */}
        <div className="flex-shrink-0 relative">
          {/* Subtle glow behind fox */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-rilaxx-pink/8 blur-3xl" />
          </div>
          <div className="relative w-56 h-80">
            <Image
              src="/assets/brand/fox/fox-standing-yellow.png"
              alt="Fox Rilaxx con lata"
              fill
              className="object-contain"
            />
          </div>
          {/* Sello floating accent */}
          <div className="absolute -right-6 -top-2 w-16 h-16 rotate-12">
            <Image
              src="/assets/brand/sello/sello-frutos-rojos.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* CTA copy */}
        <div className="text-center lg:text-left">
          <p className="font-script text-rilaxx-purple text-2xl mb-4">
            Follow the Foxx
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] text-black mb-6">
            Tu próxima noche<br />
            empieza aquí.
          </h2>
          <p className="font-mono text-neutral-500 text-sm mb-8 max-w-md">
            4 sabores. Vodka de verdad. Una lata que dice todo lo que tú no necesitas decir.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
