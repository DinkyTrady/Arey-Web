import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <img src="/Arrey_Project_logo.png" alt="Arey Project" className="h-10 w-auto" />
          <p className="text-sm text-slate-600">
            Vendor PDH, Jaket, Kaos, dan merchandise untuk kebutuhan instansi, komunitas, dan event.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-900">Menu</div>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="text-slate-600 hover:text-slate-900" to="/">
              Home
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" to="/catalog">
              Catalogue
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" to="/about">
              About
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-900">Contact</div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              className="flex items-center gap-3 text-slate-600 hover:text-slate-900"
              href="https://wa.me/6285168689866"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/whatsapp-logo.webp" alt="WhatsApp" className="h-6 w-6" />
              <span>Arey Project</span>
            </a>
            <a
              className="flex items-center gap-3 text-slate-600 hover:text-slate-900"
              href="https://instagram.com/arey.project"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/instagram-logo.webp" alt="Instagram" className="h-6 w-6" />
              <span>@arey.project</span>
            </a>
            <a
              className="flex items-center gap-3 text-slate-600 hover:text-slate-900"
              href="mailto:areycreatives@gmail.com"
            >
              <img src="/email-svgrepo-com.svg" alt="Email" className="h-6 w-6" />
              areycreatives@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Arey Project. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
