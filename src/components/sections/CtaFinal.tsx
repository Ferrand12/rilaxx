export default function CtaFinal() {
  return (
    <section id="comprar" className="relative py-24 px-6 overflow-hidden">
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rilaxx-pink via-rilaxx-purple to-rilaxx-orange" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Product placeholder */}
        <div className="flex-shrink-0">
          {/* REPLACE: hero product shot / pack shot */}
          <div
            className="placeholder-asset w-56 h-80 rounded-3xl bg-white/15 rotate-[-4deg]"
            data-placeholder="Pack / Lata Hero"
          />
        </div>

        {/* CTA copy */}
        <div className="text-center lg:text-left">
          <p className="font-script text-rilaxx-yellow text-2xl mb-4">
            Follow the Foxx
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-6">
            Tu próxima noche<br />
            <span className="text-rilaxx-yellow">empieza aquí.</span>
          </h2>
          <p className="font-mono text-white/80 text-sm mb-8 max-w-md">
            4 sabores. Vodka de verdad. Una lata que dice todo lo que tú no necesitas decir.
          </p>
          <a
            href="#"
            className="inline-block bg-rilaxx-yellow text-black font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-rilaxx-pale-yellow transition-colors"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
