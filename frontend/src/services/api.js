// Servicio centralizado para consumir la API REST de Django
const API_URL = 'http://127.0.0.1:8000/api'

async function solicitar(ruta) {
  const respuesta = await fetch(`${API_URL}${ruta}`)
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${ruta}`)
  }
  return respuesta.json()
}

export function obtenerProductos() {
  return solicitar('/productos/')
}

export function obtenerCategorias() {
  return solicitar('/categorias/')
}
