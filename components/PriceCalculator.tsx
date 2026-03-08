"use client";

import { useState } from "react";
import { products, formatPrice, getPriceByQuantity, getDiscountPercentage } from "@/lib/products";

export default function PriceCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === selectedProduct) || products[0];

  const discount = getDiscountPercentage(quantity);
  const tier = discount === 12 ? "Mayorista Premium" : discount === 5 ? "Semi-Mayorista" : "Minorista";
  const currentPrice = getPriceByQuantity(product.price, quantity);

  const total = currentPrice * quantity;
  const totalSinDescuento = product.price * quantity;
  const ahorro = totalSinDescuento - total;

  return (
    <section id="precios" className="section-padding bg-gradient-to-b from-warm-50 to-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive-100 rounded-full mb-4">
            <span>🧮</span>
            <span className="text-sm font-semibold text-olive-700">
              Calculadora de Precios
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-warm-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Calculá tu Pedido
          </h2>
          <p className="text-warm-500 max-w-2xl mx-auto text-lg">
            Mientras más comprás, más ahorrás. Precios especiales para locales y
            revendedores.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-warm-200/30 border border-warm-100 p-8">
            {/* Product selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-warm-700 mb-2">
                📦 Seleccioná el producto
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-4 py-3 bg-cream-50 border-2 border-warm-100 rounded-xl focus:border-warm-400 focus:outline-none text-warm-700 font-medium appearance-none cursor-pointer"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {formatPrice(p.price)}/{p.unit}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-warm-700 mb-2">
                🔢 Cantidad
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="flex-1 h-2 bg-warm-200 rounded-full appearance-none cursor-pointer accent-warm-600"
                />
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  className="w-24 px-3 py-2 bg-cream-50 border-2 border-warm-100 rounded-xl text-center font-bold text-warm-800 focus:border-warm-400 focus:outline-none"
                />
              </div>

              {/* Quick select buttons */}
              <div className="flex gap-2 mt-3">
                {[1, 5, 10, 25, 50, 100].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuantity(q)}
                    className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                      quantity === q
                        ? "bg-warm-600 text-white shadow-md"
                        : "bg-cream-50 text-warm-600 hover:bg-warm-100 border border-warm-200"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Tier indicator */}
            <div
              className={`mb-6 p-4 rounded-2xl text-center ${
                discount >= 12
                  ? "bg-berry-50 border-2 border-berry-200"
                  : discount >= 5
                  ? "bg-olive-50 border-2 border-olive-200"
                  : "bg-cream-50 border-2 border-warm-200"
              }`}
            >
              <p
                className={`text-sm font-bold ${
                  discount >= 12
                    ? "text-berry-700"
                    : discount >= 5
                    ? "text-olive-700"
                    : "text-warm-600"
                }`}
              >
                {discount >= 12
                  ? "🌟"
                  : discount >= 5
                  ? "⭐"
                  : "📌"}{" "}
                {tier}
                {discount > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-white/80 rounded-full text-xs">
                    {discount}% OFF
                  </span>
                )}
              </p>
              {discount === 0 && quantity < 10 && (
                <p className="text-xs text-warm-500 mt-1">
                  ¡Sumá {10 - quantity} más y obtenés 5% de descuento!
                </p>
              )}
              {discount === 5 && quantity < 100 && (
                <p className="text-xs text-olive-500 mt-1">
                  ¡Sumá {100 - quantity} más y obtenés 12% de descuento!
                </p>
              )}
            </div>

            {/* Results */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-warm-500">Precio unitario</span>
                <span className="font-semibold text-warm-700">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-warm-500">Cantidad</span>
                <span className="font-semibold text-warm-700">
                  {quantity} {product.unit}
                  {quantity > 1 ? "s" : ""}
                </span>
              </div>
              {ahorro > 0 && (
                <div className="flex justify-between items-center py-2 text-olive-600">
                  <span>Tu ahorro</span>
                  <span className="font-bold">-{formatPrice(ahorro)}</span>
                </div>
              )}
              <div className="border-t-2 border-warm-100 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-warm-800">
                    Total
                  </span>
                  <span
                    className="text-3xl font-bold text-warm-800"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/5493412524163?text=Hola! Quiero pedir ${quantity} unidad/es de ${product.name}. Total: ${formatPrice(total)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full btn-primary text-lg py-4 rounded-2xl flex items-center justify-center gap-2"
            >
              <span>📱</span>
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        {/* Pricing tiers explanation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-warm-100">
            <div className="w-16 h-16 bg-cream-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🛒</span>
            </div>
            <h3
              className="font-bold text-warm-800 text-lg mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Minorista
            </h3>
            <p className="text-warm-500 text-sm mb-3">De 1 a 9 unidades</p>
            <div className="price-tag mx-auto w-fit">Precio de lista</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md border-2 border-olive-200 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-olive-600 text-white text-xs font-bold px-4 py-1 rounded-full">
              POPULAR
            </div>
            <div className="w-16 h-16 bg-olive-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📦</span>
            </div>
            <h3
              className="font-bold text-warm-800 text-lg mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Semi-Mayorista
            </h3>
            <p className="text-warm-500 text-sm mb-3">10 unidades o más</p>
            <div className="price-tag mx-auto w-fit">5% de descuento</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md border-2 border-berry-200">
            <div className="w-16 h-16 bg-berry-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏭</span>
            </div>
            <h3
              className="font-bold text-warm-800 text-lg mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mayorista
            </h3>
            <p className="text-warm-500 text-sm mb-3">100 unidades o más</p>
            <div className="price-tag-accent mx-auto w-fit">
              12% de descuento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
