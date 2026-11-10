import Header from '@/components/Header'
import CatalogoPage from '@/pages/CatalogoPage'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <CatalogoPage />
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2026 Letras &amp; Co · Todos los derechos reservados
      </footer>
    </div>
  )
}
