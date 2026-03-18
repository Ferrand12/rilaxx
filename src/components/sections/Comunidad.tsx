import Image from "next/image";

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

        {/* Gallery with fox poses + sellos as visual anchors, placeholders for photos */}
        <div className="grid grid-cols-3 auto-rows-[180px] gap-4">
          {/* Fox DJ — large hero cell */}
          <div className="col-span-2 row-span-2 rounded-2xl bg-neutral-100 overflow-hidden flex items-center justify-center hover:shadow-md transition-all">
            <div className="relative w-64 h-56">
              <Image
                src="/assets/brand/fox/fox-dj.png"
                alt="Fox DJ"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Naranja Maracuyá lifestyle shot */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-neutral-100 overflow-hidden hover:shadow-md transition-all">
            <div className="relative w-full h-full">
              <Image
                src="/assets/brand/latas/naranja-maracuya/naranja-maracuya-3.png"
                alt="Lata Naranja Maracuyá detalle"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Sello Yerba Buena */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-neutral-100 overflow-hidden flex items-center justify-center hover:shadow-md transition-all">
            <div className="relative w-24 h-24">
              <Image
                src="/assets/brand/sello/sello-yerba-buena.png"
                alt="Sello Yerba Buena"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Fox dancing */}
          <div className="col-span-1 row-span-2 rounded-2xl bg-neutral-100 overflow-hidden flex items-center justify-center hover:shadow-md transition-all">
            <div className="relative w-40 h-52">
              <Image
                src="/assets/brand/fox/fox-dancing.png"
                alt="Fox bailando"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Mango can pile — lifestyle */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-neutral-100 overflow-hidden hover:shadow-md transition-all">
            <div className="relative w-full h-full">
              <Image
                src="/assets/brand/latas/mango/mango-1.png"
                alt="Latas Mango"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Yerbabuena can — close-up */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-neutral-100 overflow-hidden hover:shadow-md transition-all">
            <div className="relative w-full h-full">
              <Image
                src="/assets/brand/latas/yerbabuena/yerbabuena-3.png"
                alt="Lata Yerba Buena detalle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
