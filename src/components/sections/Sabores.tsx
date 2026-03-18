import Image from "next/image";

const flavors = [
  {
    name: "Frutos Rojos",
    tagline: "La noche tiene color.",
    accentColor: "bg-rilaxx-purple",
    textColor: "text-rilaxx-purple",
    can: "/assets/brand/latas/frutos-rojos/frutos-rojos-4.png",
    sello: "/assets/brand/sello/sello-frutos-rojos.png",
  },
  {
    name: "Yerba Buena",
    tagline: "Frescura que no pide permiso.",
    accentColor: "bg-rilaxx-teal",
    textColor: "text-rilaxx-teal",
    can: "/assets/brand/latas/yerbabuena/yerbabuena-4.png",
    sello: "/assets/brand/sello/sello-yerba-buena.png",
  },
  {
    name: "Mango",
    tagline: "Trópico en cada trago.",
    accentColor: "bg-rilaxx-amber",
    textColor: "text-rilaxx-amber",
    can: "/assets/brand/latas/mango/mango-4.png",
    sello: "/assets/brand/sello/sello-mango.png",
  },
  {
    name: "Naranja Maracuyá",
    tagline: "Intenso como la fiesta.",
    accentColor: "bg-rilaxx-orange",
    textColor: "text-rilaxx-orange",
    can: "/assets/brand/latas/naranja-maracuya/naranja-maracuya-4.png",
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
              {/* Can image — 4K render */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={f.can}
                  alt={`Lata Rilaxx ${f.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Sello as floating accent */}
                <div className="absolute top-3 right-3 w-12 h-12 opacity-80">
                  <Image
                    src={f.sello}
                    alt=""
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              <div className="p-5">
                <h3 className={`text-lg font-black uppercase tracking-tight mb-1 ${f.textColor}`}>
                  {f.name}
                </h3>
                <p className="font-mono text-neutral-400 text-xs mb-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
