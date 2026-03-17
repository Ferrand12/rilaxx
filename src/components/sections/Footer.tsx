export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          {/* REPLACE: logo image */}
          <p className="text-2xl font-black uppercase tracking-tight text-white mb-3">Rilaxx</p>
          <p className="font-mono text-white/40 text-xs">
            Follow the Foxx, Chill &amp; Drink.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm uppercase tracking-widest text-white/30 mb-2">Links</p>
          <a href="#sabores" className="font-mono text-sm text-white/50 hover:text-white transition-colors">Sabores</a>
          <a href="#comunidad" className="font-mono text-sm text-white/50 hover:text-white transition-colors">Comunidad</a>
          <a href="#nosotros" className="font-mono text-sm text-white/50 hover:text-white transition-colors">Nosotros</a>
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm uppercase tracking-widest text-white/30 mb-2">Síguenos</p>
          {/* REPLACE: real social links */}
          <a href="#" className="font-mono text-sm text-white/50 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="font-mono text-sm text-white/50 hover:text-white transition-colors">TikTok</a>
          <a href="#" className="font-mono text-sm text-white/50 hover:text-white transition-colors">Contacto</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
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
