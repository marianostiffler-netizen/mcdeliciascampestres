"use client";

import { categories } from "@/lib/products";

interface Props {
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="relative">
      <div className="category-scroll flex gap-3 overflow-x-auto pb-4 pt-2 px-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`category-pill flex-shrink-0 ${
              active === cat.id
                ? "category-pill-active"
                : "category-pill-inactive"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Fade edges for scroll indication */}
      <div className="absolute top-0 right-0 bottom-4 w-12 bg-gradient-to-l from-cream-50 to-transparent pointer-events-none" />
    </div>
  );
}
