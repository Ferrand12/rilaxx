import Image from "next/image";

export default function Comunidad() {
  return (
    <section id="comunidad" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-rilaxx-pink text-xs uppercase tracking-[0.2em] mb-4">
            #RilaxxCrew
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] text-black">
            La noche<br />es nuestra
          </h2>
        </div>

        {/* Editorial grid — 3 columns, asymmetric heights */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Fox DJ — tall */}
          <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                <Image
                  src="/assets/brand/fox/fox-dj.png"
                  alt="Fox DJ"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Naranja Maracuyá can — full bleed */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/assets/brand/latas/naranja-maracuya/naranja-maracuya-1.png"
              alt="Rilaxx Naranja Maracuyá"
              fill
              className="object-cover"
            />
          </div>

          {/* Yerbabuena + Fox dancing — stacked */}
          <div className="col-span-2 lg:col-span-1 grid grid-rows-2 gap-2">
            <div className="relative overflow-hidden">
              <Image
                src="/assets/brand/latas/yerbabuena/yerbabuena-3.png"
                alt="Rilaxx Yerba Buena"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-neutral-100 overflow-hidden flex items-center justify-center">
              <div className="relative w-2/3 h-full">
                <Image
                  src="/assets/brand/fox/fox-dancing.png"
                  alt="Fox bailando"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
