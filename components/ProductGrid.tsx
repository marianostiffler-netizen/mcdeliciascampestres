import { Product } from '@/lib/products'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
  cart: Array<{ id: string; quantity: number }>
  onAddToCart: (productId: string) => void
  onUpdateQuantity: (productId: string, quantity: number) => void
}

export default function ProductGrid({ products, cart, onAddToCart, onUpdateQuantity }: ProductGridProps) {
  const getQuantity = (productId: string) => {
    const item = cart.find(item => item.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra variedad de panes, facturas, pastelería y salados, 
            todos elaborados con ingredientes de la mejor calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getQuantity(product.id)}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay productos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
