import { useState } from 'react'

import CategoryFilter from '@/components/CategoryFilter'
import ProductList from '@/components/ProductList'
import { categoriasSimuladas, productosSimulados } from '@/data/productosSimulados'

export default function CatalogoPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  const productosFiltrados =
    categoriaSeleccionada === null
      ? productosSimulados
      : productosSimulados.filter((p) => p.categoria === categoriaSeleccionada)

  return (
    <main id="catalogo" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <section>
        <h2 className="text-2xl font-bold">Nuestro catálogo</h2>
        <p className="text-muted-foreground">Elige una categoría para explorar los libros disponibles.</p>
      </section>

      <CategoryFilter
        categorias={categoriasSimuladas}
        seleccionada={categoriaSeleccionada}
        onSeleccionar={setCategoriaSeleccionada}
      />
      <ProductList productos={productosFiltrados} />
    </main>
  )
}
