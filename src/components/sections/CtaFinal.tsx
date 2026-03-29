import Image from "next/image";

export default function CtaFinal() {
  return (
    <section id="comprar" className="relative bg-black overflow-hidden">
      {/* Background — product shot with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/brand/latas/frutos-rojos/frutos-rojos-3.png"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32 md:py-40 text-center">
        <p className="font-script text-rilaxx-yellow text-xl md:text-2xl mb-6">
          Follow the Foxx
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] text-white mb-8">
          Tu próxima noche<br />empieza aquí
        </h2>
        <a
          href="/comprar"
          className="inline-block bg-white text-black font-bold uppercase tracking-widest text-sm px-10 py-4 hover:bg-rilaxx-yellow transition-colors"
        >
          Comprar ahora
        </a>
      </div>
    </section>
  );
}
