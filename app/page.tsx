'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CategoryFilter from '@/components/CategoryFilter'
import ProductGrid from '@/components/ProductGrid'
import PriceCalculator from '@/components/PriceCalculator'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { products } from '@/lib/products'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [cart, setCart] = useState<Array<{ id: string; quantity: number }>>([])

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId)
      if (existing) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { id: productId, quantity: 1 }]
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.id !== productId))
    } else {
      setCart(prev => {
        const existing = prev.find(item => item.id === productId)
        if (existing) {
          return prev.map(item => 
            item.id === productId 
              ? { ...item, quantity }
              : item
          )
        }
        return [...prev, { id: productId, quantity }]
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryFilter 
        active={selectedCategory}
        onChange={setSelectedCategory}
      />
      <ProductGrid 
        products={filteredProducts}
        cart={cart}
        onAddToCart={addToCart}
        onUpdateQuantity={updateQuantity}
      />
      <PriceCalculator cart={cart} />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
