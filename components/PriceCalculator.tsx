'use client'

import { useState } from 'react'
import { ShoppingCart, X, Send } from 'lucide-react'
import { products } from '@/lib/products'

interface CartItem {
  id: string
  quantity: number
}

interface PriceCalculatorProps {
  cart: CartItem[]
}

export default function PriceCalculator({ cart }: PriceCalculatorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.id)
    return product ? { ...product, quantity: item.quantity } : null
  }).filter((item): item is NonNullable<typeof item> => item !== null)

  const total = cartItems.reduce((sum, item) => {
    return sum + item.pricePerUnit * item.quantity
  }, 0)

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          order: cartItems.map(item => ({
            name: item?.name,
            quantity: item.quantity,
            price: item?.pricePerUnit
          })),
          total
        })
      })

      if (response.ok) {
        alert('Pedido enviado correctamente. Nos contactaremos pronto.')
        setFormData({ name: '', phone: '', email: '', message: '' })
        setIsOpen(false)
      } else {
        throw new Error('Error al enviar el pedido')
      }
    } catch (error) {
      alert('Error al enviar el pedido. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (itemCount === 0) return null

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {itemCount}
          </span>
        </button>
      </div>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Tu Pedido</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <h4 className="font-semibold">{item?.name}</h4>
                      <p className="text-sm text-gray-600">
                        {item?.quantity} {item?.unit} × ${item?.pricePerUnit}
                      </p>
                    </div>
                    <div className="font-semibold">
                      ${((item?.pricePerUnit || 0) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6 text-xl font-bold">
                <span>Total:</span>
                <span className="text-primary-600">${total.toFixed(2)}</span>
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Pedido
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
