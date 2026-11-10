import { BookOpen } from 'lucide-react'

const enlaces = ['Inicio', 'Catálogo', 'Contacto']

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200 text-primary">
            <BookOpen size={22} />
          </span>
          <div>
            <h1 className="text-xl font-bold leading-tight">Letras &amp; Co</h1>
            <p className="text-xs opacity-80">Librería para curiosos</p>
          </div>
        </div>
        <nav className="flex gap-5 text-sm font-medium">
          {enlaces.map((enlace) => (
            <a key={enlace} href="#catalogo" className="hover:text-amber-200">
              {enlace}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
