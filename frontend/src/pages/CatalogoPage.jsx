import { useEffect, useState } from 'react'
import { AlertCircle } from 'lucide-react'

import CategoryFilter from '@/components/CategoryFilter'
import ProductList from '@/components/ProductList'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { obtenerCategorias, obtenerProductos } from '@/services/api'

export default function CatalogoPage() {
  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    Promise.all([obtenerProductos(), obtenerCategorias()])
      .then(([datosProductos, datosCategorias]) => {
        setProductos(datosProductos)
        setCategorias(datosCategorias)
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  const productosFiltrados =
    categoriaSeleccionada === null
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada)

  return (
    <main id="catalogo" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <section>
        <h2 className="text-2xl font-bold">Nuestro catálogo</h2>
        <p className="text-muted-foreground">Elige una categoría para explorar los libros disponibles.</p>
      </section>

      {cargando && <p className="py-10 text-center">Cargando catálogo...</p>}

      {error && (
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>No se pudo cargar el catálogo</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!cargando && !error && (
        <>
          <CategoryFilter
            categorias={categorias}
            seleccionada={categoriaSeleccionada}
            onSeleccionar={setCategoriaSeleccionada}
          />
          <ProductList productos={productosFiltrados} />
        </>
      )}
    </main>
  )
}
