import { ArrowRight, Clock, Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            MC Delicias Campestres
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Panadería artesanal con los mejores productos frescos, hechos con amor y tradición
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#productos" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Ver Productos
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contacto" 
              className="btn-secondary inline-flex items-center justify-center"
            >
              Hacer Pedido
            </a>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Horneado Diario
              </h3>
              <p className="text-gray-600">
                Productos frescos todos los días
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Delivery
              </h3>
              <p className="text-gray-600">
                Envíos a domicilio en toda la zona
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-600">🥖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Calidad Artesanal
              </h3>
              <p className="text-gray-600">
                Ingredientes seleccionados y recetas tradicionales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
