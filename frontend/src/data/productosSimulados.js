// Datos simulados usados en la primera etapa, antes de conectar con Django
export const categoriasSimuladas = [
  { id: 1, nombre: 'Novela' },
  { id: 2, nombre: 'Ciencia' },
  { id: 3, nombre: 'Infantil' },
]

export const productosSimulados = [
  {
    id: 1,
    nombre: 'Cien años de soledad',
    descripcion: 'Clásico de Gabriel García Márquez.',
    precio: '49.90',
    imagen: '/img/cien-anos.svg',
    cantidad: 12,
    categoria: 1,
    categoria_nombre: 'Novela',
  },
  {
    id: 2,
    nombre: 'Breve historia del tiempo',
    descripcion: 'Divulgación científica de Stephen Hawking.',
    precio: '39.50',
    imagen: '/img/historia-tiempo.svg',
    cantidad: 8,
    categoria: 2,
    categoria_nombre: 'Ciencia',
  },
]
