"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-800 via-warm-700 to-warm-900" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl animate-float">🥐</div>
        <div
          className="absolute top-40 right-20 text-7xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          🍪
        </div>
        <div
          className="absolute bottom-40 left-20 text-6xl animate-float"
          style={{ animationDelay: "2s" }}
        >
          🥧
        </div>
        <div
          className="absolute bottom-20 right-10 text-8xl animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          🍞
        </div>
        <div
          className="absolute top-1/2 left-1/2 text-9xl animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          🌾
        </div>
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <span className="text-sm">🏡</span>
            <span className="text-sm text-white/90 font-medium">
              Panificación artesanal desde el corazón del campo
            </span>
          </div>

          {/* Title */}
          <div className="mb-6 animate-slide-up">
            <img 
              src="/logo-transparente.png" 
              alt="MC Delicias Campestres" 
              className="mx-auto"
              style={{
                width: '380px',
                height: 'auto',
                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))'
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Cada producto nace de manos expertas con ingredientes seleccionados.
            <br className="hidden sm:block" />
            <strong className="text-white/90">
              Hacemos lo que amamos, y se nota en cada bocado.
            </strong>
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#catalogo"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-warm-800 font-bold rounded-2xl hover:bg-cream-100 transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] text-lg"
            >
              <span>📖</span>
              Ver Catálogo Completo
            </a>
            <a
              href="https://wa.me/5491100000000?text=Hola! Me interesa conocer los precios mayoristas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-lg"
            >
              <span>💬</span>
              Consultar Mayorista
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/50 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              <span className="text-sm font-medium">
                Precios especiales por mayor
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span className="text-sm font-medium">Envíos y entregas</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">❤️</span>
              <span className="text-sm font-medium">Hecho con amor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFFDF7"
          />
        </svg>
      </div>
    </section>
  );
}
