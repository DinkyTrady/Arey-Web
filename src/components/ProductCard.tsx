import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import type { Product } from '../data/products'

export default function ProductCard(props: { product: Product }) {
  const { add } = useCart()
  const product = props.product

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <Link to={`/catalog/${product.slug}`} className="block">
        <img src={product.imageSrc} alt={product.name} className="h-44 w-full object-cover" />
      </Link>
      <div className="space-y-3 p-4">
        <div>
          <div className="text-sm font-semibold text-slate-900">{product.name}</div>
          <div className="mt-1 text-sm text-slate-600">{product.tagline}</div>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/catalog/${product.slug}`}
            className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Detail
          </Link>
          <button
            type="button"
            className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            onClick={() => add({ slug: product.slug, quantity: 1 })}
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  )
}
