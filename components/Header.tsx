"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-warm-200/20 py-3"
          : "bg-cream-100 py-5"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-br from-warm-500 to-warm-600 shadow-md"
                  : "bg-cream-100 shadow-md"
              }`}
            >
              <img 
                src="/logo.svg" 
                alt="MC Delicias Campestres" 
                className="w-8 h-8"
              />
            </div>
            <div>
              <h1
                className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                  scrolled ? "text-warm-800" : "text-warm-800"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                MC Delicias
              </h1>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  scrolled ? "text-warm-500" : "text-warm-600"
                }`}
              >
                Campestres
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#catalogo", label: "Catálogo" },
              { href: "#precios", label: "Precios Mayoristas" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#contacto", label: "Contacto" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:opacity-70 ${
                  scrolled ? "text-warm-700" : "text-warm-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5491100000000?text=Hola! Quiero hacer un pedido"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-olive-600 text-white hover:bg-olive-700 shadow-md"
                  : "bg-warm-600 text-white hover:bg-warm-700 shadow-md"
              }`}
            >
              <span>📱</span>
              Hacer Pedido
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-warm-700" : "text-warm-700"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-warm-100">
            <nav className="flex flex-col gap-3">
              {[
                { href: "#catalogo", label: "🛒 Catálogo" },
                { href: "#precios", label: "💰 Precios Mayoristas" },
                { href: "#nosotros", label: "❤️ Nosotros" },
                { href: "#contacto", label: "📞 Contacto" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-warm-700 font-medium py-2 px-3 rounded-lg hover:bg-warm-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5491100000000?text=Hola! Quiero hacer un pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 text-center"
              >
                📱 Hacer Pedido por WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
