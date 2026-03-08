"use client";

import { useState, useMemo } from "react";
import { products, getProductsByCategory, categories } from "@/lib/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = getProductsByCategory(activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <section id="catalogo" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 rounded-full mb-4">
            <span>�</span>
            <span className="text-sm font-semibold text-warm-600">
              Catálogo Completo
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-warm-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestros Productos
          </h2>
          <p className="text-warm-500 max-w-2xl mx-auto text-lg">
            Todos nuestros productos son elaborados artesanalmente con
            ingredientes de primera calidad. Precios especiales por mayor.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border-2 border-warm-100 focus:border-warm-400 focus:outline-none transition-colors text-warm-700 placeholder-warm-300 shadow-sm"
            />
          </div>
        </div>

        {/* Category filter */}
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        {/* Results count */}
        <div className="flex items-center justify-between mt-6 mb-8">
          <p className="text-warm-500 text-sm">
            {currentCategory?.emoji}{" "}
            <strong className="text-warm-700">
              {filteredProducts.length}
            </strong>{" "}
            productos
            {activeCategory !== "todos" && (
              <span> en {currentCategory?.label}</span>
            )}
          </p>

          {/* Pricing legend */}
          <div className="hidden sm:flex items-center gap-4 text-xs text-warm-500">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-cream-50 border border-warm-200" />
              Minorista
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-olive-50 border border-olive-200" />
              -5% x10
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-berry-50 border border-berry-200" />
              -12% x100
            </span>
          </div>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl block mb-4">🔍</span>
            <h3
              className="text-2xl font-bold text-warm-700 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              No encontramos productos
            </h3>
            <p className="text-warm-500">
              Probá con otra búsqueda o categoría
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("todos");
              }}
              className="btn-secondary mt-4"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
