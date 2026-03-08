'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pan de Masa Madre',
    description: 'Pan artesanal con corteza dorada crujiente e interior masticable',
    price: 5.99,
    image: '/products/sourdough.jpg',
    category: 'Panes',
  },
  {
    id: '2',
    name: 'Croissant Clásico',
    description: 'Capas mantecosas y hojaldradas de la perfección francesa',
    price: 3.50,
    image: '/products/croissant.jpg',
    category: 'Pasteles',
  },
  {
    id: '3',
    name: 'Eclair de Chocolate',
    description: 'Relleno de crema sedosa con cobertura de chocolate oscuro',
    price: 4.99,
    image: '/products/eclair.jpg',
    category: 'Pasteles',
  },
  {
    id: '4',
    name: 'Muffin de Arándanos',
    description: 'Lleno de arándanos frescos y cobertura crujiente',
    price: 3.25,
    image: '/products/muffin.jpg',
    category: 'Pasteles',
  },
  {
    id: '5',
    name: 'Rollo de Canela',
    description: 'Espirales suaves y dulces con frosting de queso crema',
    price: 4.25,
    image: '/products/cinnamon.jpg',
    category: 'Pasteles',
  },
  {
    id: '6',
    name: 'Bollo Brioche',
    description: 'Pan francés ligero, mantecoso y ligeramente dulce',
    price: 2.99,
    image: '/products/brioche.jpg',
    category: 'Panes',
  },
  {
    id: '7',
    name: 'Croissant de Almendra',
    description: 'Crema de almendra tostada con almendras fileteadas en la parte superior',
    price: 4.50,
    image: '/products/almond-croissant.jpg',
    category: 'Pasteles',
  },
  {
    id: '8',
    name: 'Cheesecake de Vainilla',
    description: 'Suave y aterciopelado con base de galleta mantecosa',
    price: 6.50,
    image: '/products/cheesecake.jpg',
    category: 'Postres',
  },
]

interface ProductGridProps {
  onAddToOrder: (product: { id: string; name: string; price: number }) => void
}

export default function ProductGrid({ onAddToOrder }: ProductGridProps) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
          >
            {/* Large Image */}
            <div className="relative aspect-square bg-muted overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f5f5f5' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23999' text-anchor='middle' dy='.3em'%3E${product.name}%3C/text%3E%3C/svg%3E`
                }}
              />
              
              {/* Category Badge */}
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-background/90 backdrop-blur-sm text-[10px] tracking-wide uppercase text-muted-foreground rounded-full">
                {product.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-3">
              <div className="mb-1">
                <h3 className="text-xs sm:text-sm font-medium text-foreground leading-tight truncate">
                  {product.name}
                </h3>
                <span className="text-xs font-light text-primary">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <p className="hidden lg:block text-[11px] text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                {product.description}
              </p>

              <Button
                onClick={() =>
                  onAddToOrder({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                  })
                }
                variant="outline"
                className="w-full rounded-lg h-8 text-xs border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors group/btn"
              >
                <Plus size={14} className="mr-1 group-hover/btn:rotate-90 transition-transform duration-200" />
                Agregar
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
