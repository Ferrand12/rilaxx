import Image from "next/image";

export default function CtaFinal() {
  return (
    <section id="comprar" className="relative py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Can lineup + fox accent */}
        <div className="flex-shrink-0 relative">
          {/* Subtle glow behind */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-rilaxx-yellow/10 blur-3xl" />
          </div>
          {/* Mango can — two-can lifestyle shot */}
          <div className="relative w-72 h-48 lg:w-80 lg:h-52 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/brand/latas/mango/mango-2.png"
              alt="Lata Rilaxx Mango"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
          {/* Fox standing — yellow variant floating accent */}
          <div className="absolute -bottom-6 -right-8 w-28 h-36">
            <Image
              src="/assets/brand/fox/fox-standing-yellow.png"
              alt="Fox Rilaxx"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          {/* Sello floating accent */}
          <div className="absolute -left-4 -top-3 w-14 h-14 -rotate-6">
            <Image
              src="/assets/brand/sello/sello-mango.png"
              alt=""
              fill
              className="object-contain drop-shadow-sm"
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
