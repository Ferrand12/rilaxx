import Image from "next/image";

export default function MoodRilaxx() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Full-bleed lifestyle image */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <Image
          src="/assets/brand/latas/mango/mango-1.png"
          alt="Rilaxx Mango"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
        {/* Centered statement */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <h2 className="text-[10vw] md:text-[6vw] font-black uppercase leading-[0.85] text-white">
              No es una bebida.<br />
              Es un ritual.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
