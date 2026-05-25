import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Layout() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
