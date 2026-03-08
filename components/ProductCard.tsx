"use client";

import { useState } from "react";
import { Product, formatPrice } from "@/lib/products";

interface Props {
  product: Product;
  index: number;
}

const categoryEmojis: Record<string, string> = {
  alfajores: "🍪",
  "varios-dulces": "🍬",
  salados: "🥖",
  catering: "🎉",
  hojaldres: "🥐",
  frolas: "🥧",
  tartas: "🍰",
  frutales: "🍓",
  panaderia: "🍞",
  picadas: "🧀",
};

export default function ProductCard({ product, index }: Props) {
  const [showPrices, setShowPrices] = useState(false);

  const emoji = categoryEmojis[product.category] || "🍴";

  const savingPer10 = product.pricePerUnit - product.price10;
  const savingPer100 = product.pricePerUnit - product.price100;

  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-warm-200/40 transition-all duration-500 border border-warm-100/50 card-hover animate-scale-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="image-placeholder w-full h-full">
          <div className="text-center">
            <span className="text-6xl block mb-2 group-hover:scale-110 transition-transform duration-500">
              {emoji}
            </span>
            <span className="text-warm-400 text-xs font-medium uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </span>
          </div>
        </div>

        {/* Discount badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-berry-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            -12% x100
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-white/90 backdrop-blur-sm text-warm-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            {product.unit}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3
          className="text-lg font-bold text-warm-800 mb-2 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-warm-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Variants if any */}
        {product.hasVariants && product.variants && (
          <div className="mb-4 space-y-1.5">
            {product.variants.map((v, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-warm-500">{v.label}</span>
                <span className="font-semibold text-warm-700">
                  {formatPrice(v.price)}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Pricing tiers */}
        <div className="space-y-2">
          {/* Unit price */}
          <div className="flex justify-between items-center py-2 px-3 bg-cream-50 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-warm-500 bg-warm-100 px-2 py-0.5 rounded-md">
                x1
              </span>
              <span className="text-sm text-warm-600">Unidad</span>
            </div>
            <span className="font-bold text-warm-800 text-lg">
              {formatPrice(product.pricePerUnit)}
            </span>
          </div>

          {/* 10 units */}
          <div className="flex justify-between items-center py-2 px-3 bg-olive-50 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-olive-600 bg-olive-100 px-2 py-0.5 rounded-md">
                x10
              </span>
              <span className="text-sm text-olive-700">C/u</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-olive-700 text-lg">
                {formatPrice(product.price10)}
              </span>
              <span className="text-xs text-olive-500 ml-1.5">
                -5%
              </span>
            </div>
          </div>

          {/* 100 units */}
          <div className="flex justify-between items-center py-2 px-3 bg-berry-50 rounded-xl border border-berry-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-berry-600 bg-berry-100 px-2 py-0.5 rounded-md">
                x100
              </span>
              <span className="text-sm text-berry-700">C/u</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-berry-700 text-lg">
                {formatPrice(product.price100)}
              </span>
              <span className="text-xs text-berry-500 ml-1.5">
                -12%
              </span>
            </div>
          </div>
        </div>

        {/* Savings highlight */}
        <div className="mt-3 p-3 bg-gradient-to-r from-olive-50 to-berry-50 rounded-xl border border-olive-100">
          <p className="text-xs text-warm-600 text-center">
            💰 Comprando{" "}
            <strong>x100</strong> ahorrás{" "}
            <strong className="text-berry-600">
              {formatPrice(savingPer100)}
            </strong>{" "}
            por unidad
          </p>
        </div>

        {/* Order button */}
        <a
          href={`https://wa.me/5491100000000?text=Hola! Quiero consultar por: ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full btn-primary text-sm py-2.5 rounded-xl flex items-center justify-center gap-2"
        >
          <span>📱</span>
          Consultar / Pedir
        </a>
      </div>
    </div>
  );
}
