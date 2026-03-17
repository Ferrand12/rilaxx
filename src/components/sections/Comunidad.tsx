const galleryItems = [
  { label: "Evento Rilaxx Night", span: "col-span-2 row-span-2", bg: "bg-rilaxx-purple/40" },
  { label: "Activación en bar", span: "col-span-1 row-span-1", bg: "bg-rilaxx-pink/40" },
  { label: "DJ Set", span: "col-span-1 row-span-1", bg: "bg-rilaxx-orange/40" },
  { label: "Crew shot", span: "col-span-1 row-span-2", bg: "bg-rilaxx-teal/40" },
  { label: "Brindis grupal", span: "col-span-1 row-span-1", bg: "bg-rilaxx-yellow/40" },
  { label: "Social vibe", span: "col-span-1 row-span-1", bg: "bg-rilaxx-green/40" },
];

export default function Comunidad() {
  return (
    <section id="comunidad" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="font-mono text-rilaxx-yellow text-sm uppercase tracking-widest mb-3">
            #RilaxxCrew
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-4">
            La noche es<br />
            <span className="text-rilaxx-pink">nuestra</span>
          </h2>
          <p className="font-mono text-white/60 text-sm">
            Eventos, activaciones y una comunidad que se encuentra en cada brindis.
          </p>
        </div>

        {/* REPLACE: swap all placeholders with real event/community photos */}
        <div className="grid grid-cols-3 auto-rows-[180px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`placeholder-asset rounded-2xl ${item.bg} ${item.span} hover:brightness-125 transition-all`}
              data-placeholder={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
