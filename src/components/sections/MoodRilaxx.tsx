export default function MoodRilaxx() {
  return (
    <section className="relative py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: editorial text */}
        <div>
          <p className="font-script text-rilaxx-purple text-3xl mb-6">
            Zorro Vibes
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-black mb-8">
            No es una<br />
            bebida.<br />
            Es un<br />
            ritual.
          </h2>
          <p className="font-mono text-neutral-500 text-sm leading-relaxed max-w-md">
            Rilaxx nació para las noches que no quieres que terminen. Para el crew que siempre llega primero. Para el brindis que arranca todo. No se trata solo de tomarse algo — se trata de sentirse parte de algo.
          </p>
        </div>

        {/* Right: visual collage */}
        <div className="grid grid-cols-2 gap-4">
          {/* REPLACE: lifestyle/night photos from brand shoots */}
          <div
            className="placeholder-asset rounded-2xl bg-neutral-100 h-48"
            data-placeholder="Foto noche / party"
          />
          <div
            className="placeholder-asset rounded-2xl bg-neutral-100 h-48 translate-y-8"
            data-placeholder="Foto crew / amigos"
          />
          <div
            className="placeholder-asset rounded-2xl bg-neutral-100 h-48 -translate-y-4"
            data-placeholder="Foto producto in-situ"
          />
          <div
            className="placeholder-asset rounded-2xl bg-neutral-100 h-48 translate-y-4"
            data-placeholder="Fox mascot pose"
          />
        </div>
      </div>
    </section>
  );
}
