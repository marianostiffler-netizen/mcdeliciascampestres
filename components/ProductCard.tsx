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
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-warm-200/40 transition-all duration-500 border border-warm-100/50 card-hover animate-scale-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden bg-warm-50">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-warm-100">
            <span className="text-warm-400 text-sm font-medium text-center px-4">
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
        <p className="text-warm-500 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Quantity selector */}
        <div className="mb-4">
          <label className="text-sm font-medium text-warm-600 mb-2 block">
            Cantidad
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-lg bg-warm-100 hover:bg-warm-200 text-warm-700 font-bold transition-colors"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 text-center border border-warm-200 rounded-lg px-3 py-2 text-warm-800 font-medium"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-lg bg-warm-100 hover:bg-warm-200 text-warm-700 font-bold transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Price display with discount */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              {discountPercentage > 0 && (
                <span className="text-sm text-warm-500 line-through">
                  {formatPrice(originalPrice * quantity)}
                </span>
              )}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-warm-800">
                  {formatPrice(currentPrice * quantity)}
                </span>
                {discountPercentage > 0 && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    Ahorras {formatPrice(savings)}
                  </span>
                )}
              </div>
              <div className="text-sm text-warm-600">
                {formatPrice(currentPrice)} por unidad
              </div>
            </div>
          </div>
        </div>

        {/* Tier indicator */}
        {discountPercentage > 0 && (
          <div className="mb-4 p-2 rounded-lg bg-gradient-to-r from-warm-50 to-olive-50 border border-warm-200">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="font-medium text-warm-700">
                {discountPercentage === 5 && '📌 Semi-Mayorista'}
                {discountPercentage === 12 && '⭐ Mayorista'}
              </span>
              <span className="text-warm-600">
                {discountPercentage}% de descuento
              </span>
            </div>
          </div>
        )}

        {/* Add to cart button */}
        <button className="w-full btn-primary text-sm py-2.5 rounded-xl flex items-center justify-center gap-2">
          <span>�</span>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
