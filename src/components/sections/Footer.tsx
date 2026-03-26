import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="relative w-24 h-7 mb-3">
            <Image
              src="/assets/brand/logo/rilaxx-white.png"
              alt="Rilaxx"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="font-mono text-white/30 text-xs">
            Follow the Foxx, Chill &amp; Drink.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <a href="#sabores" className="font-mono text-xs text-white/40 hover:text-white transition-colors">Sabores</a>
            <a href="#comunidad" className="font-mono text-xs text-white/40 hover:text-white transition-colors">Comunidad</a>
            <a href="#nosotros" className="font-mono text-xs text-white/40 hover:text-white transition-colors">Nosotros</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="font-mono text-xs text-white/40 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="font-mono text-xs text-white/40 hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3">
        <p className="font-mono text-[10px] text-white/20">
          &copy; {new Date().getFullYear()} Rilaxx. Todos los derechos reservados.
        </p>
        <p className="font-mono text-[10px] text-white/20">
          Bebe con responsabilidad. +18
        </p>
      </div>
    </footer>
  );
}
