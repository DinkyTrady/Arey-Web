import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import QuantityStepper from '../components/QuantityStepper'
import { useCart } from '../cart/CartContext'
import { getProductBySlug } from '../data/products'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = useMemo(() => (slug ? getProductBySlug(slug) : undefined), [slug])
  const { add } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="space-y-3">
        <div className="text-lg font-semibold text-slate-900">Produk tidak ditemukan</div>
        <Link to="/catalog" className="text-sm font-semibold text-blue-700">
          Kembali ke katalog
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img src={product.imageSrc} alt={product.name} className="h-auto w-full" />
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
          <p className="mt-2 text-sm text-slate-600">{product.tagline}</p>
        </div>

        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          {product.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <QuantityStepper value={qty} onChange={setQty} min={1} />
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            onClick={() => add({ slug: product.slug, quantity: qty })}
          >
            Tambah ke Cart
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Custom size/warna dan request khusus tulis di bagian Catatan saat checkout.
        </p>

        <div className="pt-2">
          <Link to="/catalog" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
            ← Kembali ke Catalogue
          </Link>
        </div>
      </div>
    </div>
  )
}
