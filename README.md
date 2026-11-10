# Letras & Co – Laboratorio 13: estructura de una aplicación de comercio electrónico

Tienda virtual de una librería con **ReactJS (Vite + Tailwind CSS + shadcn/ui)** y **Django REST Framework**.

## Backend
```
cd backend
python -m venv ../.venv && ../.venv/Scripts/activate
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py createsuperuser
python seed.py            # categorías y productos de ejemplo
python manage.py runserver 127.0.0.1:8000
```
Servicios: `/api/categorias/` y `/api/productos/`. Panel: `/admin/`.

## Frontend
```
cd frontend
npm install
npm run dev -- --host 127.0.0.1   # http://127.0.0.1:5173
```
