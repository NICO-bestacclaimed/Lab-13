import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function ProductCard({ nombre, descripcion, precio, imagen, categoria, cantidad }) {
  return (
    <Card className="overflow-hidden pt-0 transition hover:-translate-y-1 hover:shadow-lg">
      <img src={imagen} alt={nombre} className="h-56 w-full object-cover" />
      <CardContent className="space-y-2">
        <Badge variant="secondary">{categoria}</Badge>
        <h3 className="text-lg font-semibold leading-snug">{nombre}</h3>
        <p className="text-sm text-muted-foreground">{descripcion}</p>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between">
        <span className="text-xl font-bold text-primary">S/ {Number(precio).toFixed(2)}</span>
        <span className="text-xs text-muted-foreground">Stock: {cantidad}</span>
      </CardFooter>
    </Card>
  )
}
