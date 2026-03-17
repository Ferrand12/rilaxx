import Image from "next/image";

export default function Nosotros() {
  return (
    <section id="nosotros" className="section-dark relative py-24 px-6 overflow-hidden bg-black">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="font-script text-rilaxx-yellow text-2xl mb-6">
          Chill &amp; Drink
        </p>

        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-8 text-white">
          Creamos Rilaxx porque la noche<br />
          merecía algo mejor.
        </h2>

        <div className="font-mono text-white/60 text-sm md:text-base leading-relaxed space-y-4 max-w-2xl mx-auto">
          <p>
            No somos una marca de bebidas que intenta parecer cool.
            Somos un crew que empezó con una idea simple:
            si vas a salir, que valga la pena.
          </p>
          <p>
            Rilaxx es cocktail con vodka hecho para
            quienes buscan sabor de verdad, no excusas.
            Para los que llegan a la fiesta y la fiesta empieza.
          </p>
          <p>
            Nuestro zorro no sigue la manada.
            Y si estás acá, tú tampoco.
          </p>
        </div>

        {/* Fox handstand — playful contrast with serious manifesto */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-48 h-48">
            <Image
              src="/assets/brand/fox/fox-handstand.png"
              alt="Fox Rilaxx de cabeza"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Decorative logo watermark */}
      <div className="absolute bottom-8 right-8 w-24 h-8 opacity-10">
        <Image
          src="/assets/brand/logo/rilaxx-white.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
