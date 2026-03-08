import { Minus } from 'lucide-react'
import type { CartItem } from '@/app/page'

interface OrderSummaryProps {
  items: CartItem[]
  total: number
  onRemoveItem: (productId: string) => void
}

export default function OrderSummary({
  items,
  total,
  onRemoveItem,
}: OrderSummaryProps) {
  if (items.length === 0) {
    return (
      <div className="bg-card rounded-2xl border border-border/50 p-6">
      <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
        Tu Pedido
      </h3>
      <div className="py-8 text-center">
          <p className="text-muted-foreground text-sm">
            Tu carrito está vacío
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Agrega algunos artículos deliciosos para comenzar
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-2xl border border-border/50 p-6">
      <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
        Tu Pedido
      </h3>

      <div className="space-y-3 mb-6 max-h-72 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 py-2 group"
          >
            <button
              onClick={() => onRemoveItem(item.id)}
              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
              aria-label={`Eliminar ${item.name}`}
            >
              <Minus size={12} className="text-muted-foreground" />
            </button>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {item.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.quantity} x ${item.price.toFixed(2)}
              </p>
            </div>
            
            <span className="text-sm font-medium text-foreground">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4">
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-muted-foreground">Total a Pagar</span>
          <span className="text-2xl font-light text-foreground">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
