'use client'

import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductGrid from '@/components/ProductGrid'
import OrderSummary from '@/components/OrderSummary'
import OrderForm from '@/components/OrderForm'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleAddToOrder = (product: {
    id: string
    name: string
    price: number
  }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]
    })
  }

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
  }

  const handleSubmitOrder = async (formData: {
    name: string
    phone: string
    address: string
  }) => {
    setIsSubmitting(true)
    try {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: formData.name,
          phone: formData.phone,
          address: formData.address,
          items: cartItems,
          total,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit order')
      }

      setSubmitSuccess(true)
      setCartItems([])
      setShowCheckout(false)
      setShowCart(false)
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Order submission error:', error)
      alert('Failed to submit order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-light tracking-wide text-foreground">
              La Petite Boulangerie
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Pastelería Artesanal
            </p>
          </div>
          
          {/* Cart Button - Mobile */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="lg:hidden relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <ShoppingBag size={20} className="text-foreground" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 p-4 mx-4 mt-4 rounded-2xl max-w-6xl lg:mx-auto">
          <p className="text-green-800 text-center text-sm">
            Tu pedido ha sido colocado exitosamente. Nos pondremos en contacto pronto.
          </p>
        </div>
      )}

      {/* Mobile Cart Drawer */}
      {showCart && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setShowCart(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-xl overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Tu Pedido</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {!showCheckout ? (
                <>
                  <OrderSummary
                    items={cartItems}
                    total={total}
                    onRemoveItem={handleRemoveItem}
                  />
                  {cartItems.length > 0 && (
                    <Button
                      onClick={() => setShowCheckout(true)}
                      className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12"
                    >
                      Finalizar Compra
                    </Button>
                  )}
                </>
              ) : (
                <OrderForm
                  total={total}
                  onSubmit={handleSubmitOrder}
                  isSubmitting={isSubmitting}
                  onCancel={() => setShowCheckout(false)}
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Horneado Diariamente
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">
            Hecho con Amor
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Descubre nuestra selección de panes, pasteles y postres artesanales hechos con los mejores ingredientes.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Products */}
          <div className="flex-1">
            <ProductGrid onAddToOrder={handleAddToOrder} />
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              {!showCheckout ? (
                <>
                  <OrderSummary
                    items={cartItems}
                    total={total}
                    onRemoveItem={handleRemoveItem}
                  />
                  {cartItems.length > 0 && (
                    <Button
                      onClick={() => setShowCheckout(true)}
                      className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12"
                    >
                      Ir a Pagar
                    </Button>
                  )}
                </>
              ) : (
                <OrderForm
                  total={total}
                  onSubmit={handleSubmitOrder}
                  isSubmitting={isSubmitting}
                  onCancel={() => setShowCheckout(false)}
                />
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Fixed Cart Button */}
      {cartItems.length > 0 && !showCart && (
        <div className="lg:hidden fixed bottom-6 left-4 right-4">
          <Button
            onClick={() => setShowCart(true)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 shadow-lg flex items-center justify-center gap-3"
          >
            <ShoppingBag size={20} />
            <span>Ver Pedido ({itemCount})</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </Button>
        </div>
      )}
    </main>
  )
}
