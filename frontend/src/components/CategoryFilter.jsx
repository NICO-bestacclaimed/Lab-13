import { Button } from '@/components/ui/button'

export default function CategoryFilter({ categorias, seleccionada, onSeleccionar }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={seleccionada === null ? 'default' : 'outline'}
        onClick={() => onSeleccionar(null)}
      >
        Todas
      </Button>
      {categorias.map((categoria) => (
        <Button
          key={categoria.id}
          variant={seleccionada === categoria.id ? 'default' : 'outline'}
          onClick={() => onSeleccionar(categoria.id)}
        >
          {categoria.nombre}
        </Button>
      ))}
    </div>
  )
}
