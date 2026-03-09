"use client";

import { useState } from "react";
import { Product, formatPrice, getPriceByQuantity, getDiscountPercentage } from "@/lib/products";

interface Props {
  product: Product;
  index: number;
}

interface CartItem {
  productId: string;
  quantity: number;
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
  const [quantity, setQuantity] = useState(1);
  
  const emoji = categoryEmojis[product.category] || "🍴";
  
  const currentPrice = getPriceByQuantity(product.price, quantity);
  const discountPercentage = getDiscountPercentage(quantity);
  
  const originalPrice = product.price;
  const savings = (originalPrice - currentPrice) * quantity;

  // Dynamic discount badge colors based on percentage
  const getDiscountBadgeColor = () => {
    switch (discountPercentage) {
      case 12:
        return 'bg-berry-600 text-white';
      case 5:
        return 'bg-olive-600 text-white';
      default:
        return 'bg-warm-500 text-white';
    }
  };

  const getDiscountBadgeText = () => {
    if (discountPercentage === 0) return 'Minorista';
    return `-${discountPercentage}%`;
  };

  return (
    <div
      className="group bg-pastel-light rounded-3xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-pastel-border/40 transition-all duration-500 border border-pastel-border card-hover animate-scale-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden bg-pastel-cream">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-pastel-light">
            <span className="text-pastel-text text-sm font-medium text-center px-4">
              Foto en proceso
            </span>
          </div>
        )}

        {/* Dynamic discount badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3">
            <div className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 ${getDiscountBadgeColor()}`}>
              {getDiscountBadgeText()}
            </div>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-pastel-bone/90 backdrop-blur-sm text-pastel-text text-xs font-semibold px-3 py-1.5 rounded-full">
            {product.unit}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3
          className="text-lg font-bold text-pastel-text mb-2 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-pastel-text/80 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Quantity selector */}
        <div className="mb-4">
          <label className="text-sm font-medium text-pastel-text mb-2 block">
            Cantidad
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-lg bg-pastel-cream hover:bg-pastel-border text-pastel-text font-bold transition-colors"
            >
              -
            </button>
            <span className="text-lg font-semibold text-pastel-text w-12 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-lg bg-pastel-cream hover:bg-pastel-border text-pastel-text font-bold transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Price display */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-sm text-pastel-text/60">
                {formatPrice(currentPrice)} por unidad
              </div>
              {savings > 0 && (
                <div className="text-xs text-pastel-text/50">
                  Ahorrás {formatPrice(savings)}
                </div>
              )}
            </div>
            <div className="text-lg font-bold text-pastel-text">
              {formatPrice(currentPrice * quantity)}
            </div>
          </div>
        </div>

        {/* Tier indicator */}
        {discountPercentage > 0 && (
          <div className="mb-4 p-2 rounded-lg bg-gradient-to-r from-pastel-cream to-pastel-light border border-pastel-border">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="font-medium text-pastel-text">
                {discountPercentage === 5 && '📌 Semi-Mayorista'}
                {discountPercentage === 12 && '⭐ Mayorista'}
              </span>
              <span className="text-pastel-text/80">
                {discountPercentage}% de descuento
              </span>
            </div>
          </div>
        )}

        {/* Add to cart button */}
        <button className="w-full bg-pastel-button text-pastel-creamText text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-pastel-button/90 transition-colors font-medium">
          <span>🛒</span>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
