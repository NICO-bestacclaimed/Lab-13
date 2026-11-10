"""Carga categorías y productos de ejemplo (equivale a ingresarlos desde el admin)."""
import os

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from catalogo.models import Categoria, Producto  # noqa: E402

DATOS = {
    "Novela": [
        ("Cien años de soledad", "Clásico del realismo mágico de Gabriel García Márquez.", "49.90", 12, "cien-anos"),
        ("La ciudad y los perros", "Primera novela de Mario Vargas Llosa.", "42.00", 9, "ciudad-perros"),
        ("El principito", "Cuento poético de Antoine de Saint-Exupéry.", "29.90", 20, "principito"),
    ],
    "Ciencia": [
        ("Breve historia del tiempo", "Divulgación científica de Stephen Hawking.", "39.50", 8, "historia-tiempo"),
        ("Cosmos", "Un viaje por el universo con Carl Sagan.", "54.00", 6, "cosmos"),
    ],
    "Infantil": [
        ("Mi primer diccionario", "Palabras ilustradas para pequeños lectores.", "35.00", 15, "diccionario"),
        ("Cuentos de buenas noches", "Historias cortas para antes de dormir.", "27.50", 18, "cuentos"),
    ],
}

for nombre_cat, libros in DATOS.items():
    cat, _ = Categoria.objects.get_or_create(nombre=nombre_cat)
    for nombre, desc, precio, cant, slug in libros:
        Producto.objects.update_or_create(
            nombre=nombre,
            defaults=dict(
                descripcion=desc, precio=precio, cantidad=cant, categoria=cat,
                imagen=f"http://localhost:5173/img/{slug}.svg",
            ),
        )
print("Categorías:", Categoria.objects.count(), "Productos:", Producto.objects.count())
