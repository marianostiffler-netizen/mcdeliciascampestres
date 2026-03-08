import { Product } from '@/lib/products'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="catalogo" className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 rounded-full mb-4">
            <span>🛒</span>
            <span className="text-sm font-semibold text-warm-700">
              Catálogo de Productos
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-warm-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Descubrí Nuestros Sabores
          </h2>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            Alfajores, dulces artesanales, salados y mucho más. 
            Todo elaborado con amor y los mejores ingredientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-warm-500 text-lg">
              No hay productos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
