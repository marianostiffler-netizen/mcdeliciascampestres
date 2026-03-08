import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MC Delicias</h3>
            <p className="text-gray-300 mb-4">
              Panadería artesanal con más de 10 años de experiencia, 
              ofreciendo los mejores productos frescos hechos con amor y tradición.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                <span className="text-gray-300">
                  Av. Principal 123, Buenos Aires
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                <a href="tel:+5491123456789" className="text-gray-300 hover:text-white">
                  (11) 1234-5678
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                <a href="mailto:info@mcdelicias.com" className="text-gray-300 hover:text-white">
                  info@mcdelicias.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary-400" />
                <div className="text-gray-300">
                  <div>Lunes a Viernes: 6:00 - 20:00</div>
                  <div>Sábados: 6:00 - 14:00</div>
                  <div>Domingos: 7:00 - 13:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MC Delicias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
