import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  quantity: number
  onAddToCart: (productId: string) => void
  onUpdateQuantity: (productId: string, quantity: number) => void
}

export default function ProductCard({ product, quantity, onAddToCart, onUpdateQuantity }: ProductCardProps) {
  const handleIncrease = () => {
    if (quantity === 0) {
      onAddToCart(product.id)
    } else {
      onUpdateQuantity(product.id, quantity + 1)
    }
  }

  const handleDecrease = () => {
    if (quantity > 0) {
      onUpdateQuantity(product.id, quantity - 1)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
          <span className="text-4xl">🥖</span>
        </div>
        <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary-600">
              ${product.price}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              /{product.unit}
            </span>
          </div>
          <div className="text-xs text-gray-500">
            Mínimo: {product.minOrder} {product.unit}
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrease}
              disabled={quantity === 0}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                quantity === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
              }`}
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <span className="w-12 text-center font-semibold">
              {quantity}
            </span>
            
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {quantity > 0 && (
            <div className="text-sm font-semibold text-primary-600">
              ${(product.price * quantity).toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
