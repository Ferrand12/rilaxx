export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          {/* REPLACE: logo image */}
          <p className="font-script text-3xl text-rilaxx-pink mb-3">Rilaxx</p>
          <p className="font-mono text-white/50 text-xs">
            Follow the Foxx, Chill &amp; Drink.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm uppercase tracking-widest text-white/40 mb-2">Links</p>
          <a href="#sabores" className="font-mono text-sm text-white/60 hover:text-rilaxx-yellow transition-colors">Sabores</a>
          <a href="#comunidad" className="font-mono text-sm text-white/60 hover:text-rilaxx-yellow transition-colors">Comunidad</a>
          <a href="#nosotros" className="font-mono text-sm text-white/60 hover:text-rilaxx-yellow transition-colors">Nosotros</a>
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm uppercase tracking-widest text-white/40 mb-2">Síguenos</p>
          {/* REPLACE: real social links */}
          <a href="#" className="font-mono text-sm text-white/60 hover:text-rilaxx-yellow transition-colors">Instagram</a>
          <a href="#" className="font-mono text-sm text-white/60 hover:text-rilaxx-yellow transition-colors">TikTok</a>
          <a href="#" className="font-mono text-sm text-white/60 hover:text-rilaxx-yellow transition-colors">Contacto</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-white/30">
          &copy; {new Date().getFullYear()} Rilaxx. Todos los derechos reservados.
        </p>
        <p className="font-mono text-xs text-white/30">
          Bebe con responsabilidad. +18
        </p>
      </div>
    </footer>
  );
}
