import Image from "next/image";

const flavors = [
  {
    name: "Frutos Rojos",
    tagline: "La noche tiene color.",
    accentColor: "bg-rilaxx-purple",
    textColor: "text-rilaxx-purple",
    sello: "/assets/brand/sello/sello-frutos-rojos.png",
  },
  {
    name: "Yerba Buena",
    tagline: "Frescura que no pide permiso.",
    accentColor: "bg-rilaxx-teal",
    textColor: "text-rilaxx-teal",
    sello: "/assets/brand/sello/sello-yerba-buena.png",
  },
  {
    name: "Mango",
    tagline: "Trópico en cada trago.",
    accentColor: "bg-rilaxx-amber",
    textColor: "text-rilaxx-amber",
    sello: "/assets/brand/sello/sello-mango.png",
  },
  {
    name: "Naranja Maracuyá",
    tagline: "Intenso como la fiesta.",
    accentColor: "bg-rilaxx-orange",
    textColor: "text-rilaxx-orange",
    sello: "/assets/brand/sello/sello-naranja-maracuya.png",
  },
];

export default function Sabores() {
  return (
    <section id="sabores" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <p className="font-mono text-neutral-400 text-sm uppercase tracking-widest mb-3">
            Cuatro vibras, un mismo flow
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] text-black">
            Elige tu<br />sabor
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((f) => (
            <div
              key={f.name}
              className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:shadow-lg transition-all"
            >
              {/* Color accent bar */}
              <div className={`h-1 ${f.accentColor}`} />

              <div className="p-6 flex flex-col items-center min-h-[380px]">
                {/* Sello as flavor visual — swap with can PNGs when available */}
                <div className="relative w-32 h-32 mt-4 mb-6">
                  <Image
                    src={f.sello}
                    alt={`Sello ${f.name}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center mt-auto">
                  <h3 className={`text-xl font-black uppercase tracking-tight mb-1 ${f.textColor}`}>
                    {f.name}
                  </h3>
                  <p className="font-mono text-neutral-400 text-xs mb-4">
                    {f.tagline}
                  </p>
                  <a
                    href="#comprar"
                    className="inline-block text-black font-bold text-xs uppercase tracking-widest hover:text-rilaxx-purple transition-colors"
                  >
                    Ver sabor &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
