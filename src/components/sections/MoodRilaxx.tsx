export default function MoodRilaxx() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rilaxx-purple/30 via-black to-rilaxx-teal/20" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: editorial text */}
        <div>
          <p className="font-script text-rilaxx-yellow text-3xl mb-6">
            Zorro Vibes
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8">
            No es una<br />
            bebida.<br />
            <span className="text-rilaxx-pink">Es un</span><br />
            <span className="text-rilaxx-yellow">ritual.</span>
          </h2>
          <p className="font-mono text-white/70 text-sm leading-relaxed max-w-md">
            Rilaxx nació para las noches que no quieres que terminen. Para el crew que siempre llega primero. Para el brindis que arranca todo. No se trata solo de tomarse algo — se trata de sentirse parte de algo.
          </p>
        </div>

        {/* Right: visual collage */}
        <div className="grid grid-cols-2 gap-4">
          {/* REPLACE: lifestyle/night photos from brand shoots */}
          <div
            className="placeholder-asset rounded-2xl bg-rilaxx-purple/30 h-48"
            data-placeholder="Foto noche / party"
          />
          <div
            className="placeholder-asset rounded-2xl bg-rilaxx-pink/30 h-48 translate-y-8"
            data-placeholder="Foto crew / amigos"
          />
          <div
            className="placeholder-asset rounded-2xl bg-rilaxx-orange/30 h-48 -translate-y-4"
            data-placeholder="Foto producto in-situ"
          />
          <div
            className="placeholder-asset rounded-2xl bg-rilaxx-yellow/30 h-48 translate-y-4"
            data-placeholder="Fox mascot pose"
          />
        </div>
      </div>
    </section>
  );
}
