'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { ArrowLeft } from 'lucide-react'

interface OrderFormProps {
  total: number
  onSubmit: (formData: { name: string; phone: string; address: string }) => void
  isSubmitting: boolean
  onCancel: () => void
}

export default function OrderForm({
  total,
  onSubmit,
  isSubmitting,
  onCancel,
}: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  })

  const [errors, setErrors] = useState<{
    name?: string
    phone?: string
    address?: string
  }>({})

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor ingresa tu número de teléfono'
    } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Por favor ingresa un número de teléfono válido'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Por favor ingresa tu dirección de entrega'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    onSubmit(formData)
  }

  return (
    <div className="bg-card rounded-2xl border border-border/50 p-6">
      <button
        onClick={onCancel}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <ArrowLeft size={16} />
        Volver al carrito
      </button>

      <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
        Detalles de Entrega
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="text-sm text-foreground font-medium block mb-2">
            Nombre Completo
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className={`rounded-xl h-11 ${errors.name ? 'border-destructive' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-destructive text-xs mt-1.5">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="text-sm text-foreground font-medium block mb-2">
            Número de Teléfono
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`rounded-xl h-11 ${errors.phone ? 'border-destructive' : ''}`}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-destructive text-xs mt-1.5">{errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="text-sm text-foreground font-medium block mb-2">
            Dirección de Entrega
          </label>
          <textarea
            id="address"
            placeholder="Calle, apartamento, ciudad, código postal"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className={`w-full px-4 py-3 border border-input rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm bg-input resize-none ${
              errors.address ? 'border-destructive' : ''
            }`}
            rows={3}
            disabled={isSubmitting}
          />
          {errors.address && (
            <p className="text-destructive text-xs mt-1.5">{errors.address}</p>
          )}
        </div>

        {/* Total and Submit */}
        <div className="pt-4 border-t border-border mt-6">
          <div className="flex justify-between items-baseline mb-6">
            <span className="text-sm text-muted-foreground">Total del Pedido</span>
            <span className="text-2xl font-light text-foreground">
              ${total.toFixed(2)}
            </span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 flex items-center justify-center gap-2"
          >
            {isSubmitting && <Spinner className="w-4 h-4" />}
            {isSubmitting ? 'Colocando Pedido...' : 'Colocar Pedido'}
          </Button>
        </div>
      </form>
    </div>
  )
}
