export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-gradient-to-b from-warm-800 to-warm-900 text-white"
    >
      {/* About section */}
      <div id="nosotros" className="section-padding border-b border-white/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl block mb-6">🏡</span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sobre{" "}
              <span
                className="text-cream-400 italic"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Nosotros
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              En <strong className="text-cream-300">MC Delicias Campestres</strong>{" "}
              cada producto es elaborado con amor, dedicación y los mejores
              ingredientes. Somos una fábrica de panificación artesanal que nació
              del amor por la cocina y las recetas de familia. Ofrecemos precios
              especiales para locales y revendedores que quieran llevar nuestros
              productos a más hogares.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <span className="text-4xl block mb-3">🤲</span>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  100% Artesanal
                </h3>
                <p className="text-white/50 text-sm">
                  Cada pieza es hecha a mano con recetas tradicionales
                </p>
              </div>
              <div className="text-center">
                <span className="text-4xl block mb-3">🌿</span>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ingredientes Premium
                </h3>
                <p className="text-white/50 text-sm">
                  Seleccionamos los mejores ingredientes para cada producto
                </p>
              </div>
              <div className="text-center">
                <span className="text-4xl block mb-3">💛</span>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Hecho con Amor
                </h3>
                <p className="text-white/50 text-sm">
                  La pasión es nuestro ingrediente secreto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌾</span>
              <div>
                <p
                  className="font-bold text-cream-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  MC Delicias Campestres
                </p>
                <p className="text-white/40 text-xs">
                  Panificación artesanal con amor
                </p>
                <p className="text-white/50 text-xs mt-1">
                  📱 341 252-4163
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/5493412524163"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-green-400 transition-colors flex items-center gap-2 text-sm"
              >
                📱 WhatsApp
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-pink-400 transition-colors flex items-center gap-2 text-sm"
              >
                📸 Instagram
              </a>
            </div>

            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} MC Delicias Campestres. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
