import { Link, useRouteError } from 'react-router-dom'

export default function NotFoundPage() {
  const error = useRouteError()
  const message = error instanceof Error ? error.message : 'Halaman tidak ditemukan.'

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <div className="text-2xl font-bold text-slate-900">404</div>
        <p className="mt-2 text-sm text-slate-600">{message}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  )
}
