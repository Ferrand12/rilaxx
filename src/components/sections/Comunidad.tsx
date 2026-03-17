const galleryItems = [
  { label: "Evento Rilaxx Night", span: "col-span-2 row-span-2" },
  { label: "Activación en bar", span: "col-span-1 row-span-1" },
  { label: "DJ Set", span: "col-span-1 row-span-1" },
  { label: "Crew shot", span: "col-span-1 row-span-2" },
  { label: "Brindis grupal", span: "col-span-1 row-span-1" },
  { label: "Social vibe", span: "col-span-1 row-span-1" },
];

export default function Comunidad() {
  return (
    <section id="comunidad" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="font-mono text-rilaxx-pink text-sm uppercase tracking-widest mb-3">
            #RilaxxCrew
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] text-black mb-4">
            La noche es<br />nuestra
          </h2>
          <p className="font-mono text-neutral-400 text-sm">
            Eventos, activaciones y una comunidad que se encuentra en cada brindis.
          </p>
        </div>

        {/* REPLACE: swap all placeholders with real event/community photos */}
        <div className="grid grid-cols-3 auto-rows-[180px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`placeholder-asset rounded-2xl bg-neutral-100 ${item.span} hover:shadow-md transition-all`}
              data-placeholder={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
