import Image from "next/image";

const flavors = [
  {
    name: "Frutos Rojos",
    can: "/assets/brand/latas/frutos-rojos/frutos-rojos-2.png",
    color: "text-rilaxx-purple",
    border: "border-rilaxx-purple",
  },
  {
    name: "Yerba Buena",
    can: "/assets/brand/latas/yerbabuena/yerbabuena-2.png",
    color: "text-rilaxx-teal",
    border: "border-rilaxx-teal",
  },
  {
    name: "Mango",
    can: "/assets/brand/latas/mango/mango-2.png",
    color: "text-rilaxx-amber",
    border: "border-rilaxx-amber",
  },
  {
    name: "Naranja Maracuyá",
    can: "/assets/brand/latas/naranja-maracuya/naranja-maracuya-2.png",
    color: "text-rilaxx-orange",
    border: "border-rilaxx-orange",
  },
];

export default function Sabores() {
  return (
    <section id="sabores" className="bg-white">
      {/* Section header */}
      <div className="px-6 md:px-12 pt-24 pb-12 max-w-7xl mx-auto">
        <p className="font-mono text-neutral-400 text-xs uppercase tracking-[0.2em] mb-4">
          04 Sabores — Vodka Cocktail
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] text-black">
          Encuentra<br />tu sabor
        </h2>
      </div>

      {/* Flavor bands — full width, no cards */}
      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {flavors.map((f, i) => (
          <div
            key={f.name}
            className="group grid grid-cols-1 lg:grid-cols-2 items-stretch hover:bg-neutral-50 transition-colors"
          >
            {/* Product image — alternating sides */}
            <div className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image
                src={f.can}
                alt={`Rilaxx ${f.name}`}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Flavor name — massive type */}
            <div className={`flex items-center px-6 md:px-12 py-12 lg:py-0 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div>
                <span className="font-mono text-neutral-400 text-xs uppercase tracking-[0.2em]">
                  0{i + 1}
                </span>
                <h3 className={`text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] mt-2 ${f.color}`}>
                  {f.name}
                </h3>
                <div className={`w-12 h-0.5 mt-6 ${f.border} border-t-2`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
