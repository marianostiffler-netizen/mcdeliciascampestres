'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import PriceCalculator from '@/components/PriceCalculator'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <PriceCalculator cart={[]} />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
