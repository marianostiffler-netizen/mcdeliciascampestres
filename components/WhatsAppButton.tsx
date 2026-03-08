import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '5491123456789'
  const message = 'Hola! Quiero hacer un pedido de MC Delicias'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-40"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
