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

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

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
      />
      <PriceCalculator cart={[]} />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
