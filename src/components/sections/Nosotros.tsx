export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 px-6 overflow-hidden">
      {/* Teal-to-dark gradient — references Yerba Buena palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-rilaxx-teal/20 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="font-script text-rilaxx-yellow text-2xl mb-6">
          Chill &amp; Drink
        </p>

        {/* Manifesto — not corporate, feels like a friend talking */}
        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-8">
          Creamos Rilaxx porque la noche<br />
          <span className="text-rilaxx-pink">merecía algo mejor.</span>
        </h2>

        <div className="font-mono text-white/70 text-sm md:text-base leading-relaxed space-y-4 max-w-2xl mx-auto">
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

        {/* REPLACE: brand manifesto image or fox illustration */}
        <div className="mt-12 flex justify-center">
          <div
            className="placeholder-asset w-64 h-40 rounded-2xl bg-rilaxx-purple/20"
            data-placeholder="Ilustración fox / manifiesto"
          />
        </div>
      </div>
    </section>
  );
}
