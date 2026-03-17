import Image from "next/image";

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

        {/* Right: mascot collage with real assets */}
        <div className="grid grid-cols-2 gap-4">
          {/* Fox in cocktail glass — hero visual */}
          <div className="relative rounded-2xl bg-neutral-100 h-48 col-span-2 overflow-hidden flex items-center justify-center">
            <div className="relative w-48 h-44">
              <Image
                src="/assets/brand/fox/fox-cocktail.png"
                alt="Fox Rilaxx en cocktail"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Sello mango — decorative */}
          <div className="relative rounded-2xl bg-neutral-100 h-48 overflow-hidden flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src="/assets/brand/sello/sello-mango.png"
                alt="Sello Mango"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* XX isotipo — decorative accent */}
          <div className="relative rounded-2xl bg-neutral-100 h-48 overflow-hidden flex items-center justify-center">
            <div className="relative w-20 h-20 opacity-60">
              <Image
                src="/assets/brand/xx/xx-yellow.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
