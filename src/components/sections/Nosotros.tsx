import Image from "next/image";

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
        {/* Manifesto — takes 3 columns */}
        <div className="lg:col-span-3">
          <p className="font-mono text-neutral-400 text-xs uppercase tracking-[0.2em] mb-6">
            Nosotros
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] text-black mb-8">
            Creamos Rilaxx porque la noche merecía algo mejor.
          </h2>
          <p className="font-mono text-neutral-500 text-sm leading-relaxed max-w-lg">
            No somos una marca que intenta parecer cool. Somos un crew con una idea simple: si vas a salir, que valga la pena. Nuestro zorro no sigue la manada — y si estás acá, tú tampoco.
          </p>
        </div>

        {/* Fox — takes 2 columns, large with presence */}
        <div className="lg:col-span-2 relative">
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
            <Image
              src="/assets/brand/fox/fox-handstand.png"
              alt="Fox Rilaxx"
              fill
              className="object-contain"
            />
          </div>
          {/* Sello floating — small accent */}
          <div className="absolute top-4 right-0 w-16 h-16 rotate-12 opacity-60">
            <Image
              src="/assets/brand/sello/sello-frutos-rojos.png"
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
