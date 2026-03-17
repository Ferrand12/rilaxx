const flavors = [
  {
    name: "Frutos Rojos",
    tagline: "La noche tiene color.",
    gradient: "from-rilaxx-purple via-rilaxx-pink to-rilaxx-orange",
    accent: "bg-rilaxx-pink",
    placeholderLabel: "Lata Frutos Rojos",
  },
  {
    name: "Yerba Buena",
    tagline: "Frescura que no pide permiso.",
    gradient: "from-rilaxx-teal to-rilaxx-green",
    accent: "bg-rilaxx-green",
    placeholderLabel: "Lata Yerba Buena",
  },
  {
    name: "Mango",
    tagline: "Trópico en cada trago.",
    gradient: "from-rilaxx-amber to-rilaxx-yellow",
    accent: "bg-rilaxx-yellow",
    placeholderLabel: "Lata Mango",
  },
  {
    name: "Naranja Maracuyá",
    tagline: "Intenso como la fiesta.",
    gradient: "from-rilaxx-orange to-rilaxx-dark-orange",
    accent: "bg-rilaxx-dark-orange",
    placeholderLabel: "Lata Naranja Maracuyá",
  },
];

export default function Sabores() {
  return (
    <section id="sabores" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <p className="font-mono text-rilaxx-yellow text-sm uppercase tracking-widest mb-3">
            Cuatro vibras, un mismo flow
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95]">
            Elige tu<br />
            <span className="text-rilaxx-pink">sabor</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((f) => (
            <div
              key={f.name}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-b ${f.gradient} p-6 flex flex-col items-center justify-between min-h-[420px] hover:scale-[1.02] transition-transform`}
            >
              {/* REPLACE: swap placeholder with <Image src={`/assets/brand/can-${slug}.png`} /> */}
              <div
                className="placeholder-asset w-32 h-52 rounded-xl bg-white/15 mt-4"
                data-placeholder={f.placeholderLabel}
              />

              <div className="text-center mt-auto">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-1">
                  {f.name}
                </h3>
                <p className="font-mono text-white/80 text-xs mb-4">
                  {f.tagline}
                </p>
                <a
                  href="#comprar"
                  className={`inline-block ${f.accent} text-black font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:brightness-110 transition-all`}
                >
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
