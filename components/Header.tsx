'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

interface HeaderProps {
  cartCount: number
}

export default function Header({ cartCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-600">
              MC Delicias
            </h1>
            <p className="text-xs text-gray-600">Panadería Artesanal</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-primary-600 transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contacto
            </a>
            <a href="tel:+5491123456789" className="flex items-center text-primary-600 hover:text-primary-700">
              <Phone className="w-4 h-4 mr-1" />
              (11) 1234-5678
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#productos" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </a>
            <a 
              href="#nosotros" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <a 
              href="tel:+5491123456789" 
              className="flex items-center px-3 py-2 text-primary-600 hover:bg-gray-50 rounded-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              (11) 1234-5678
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
