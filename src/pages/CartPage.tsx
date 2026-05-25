import { Link } from 'react-router-dom'
import QuantityStepper from '../components/QuantityStepper'
import { useCart } from '../cart/CartContext'
import { products } from '../data/products'

export default function CartPage() {
  const { state, setQty, remove } = useCart()

  const items = state.items
    .map((cartItem) => {
      const product = products.find((entry) => entry.slug === cartItem.slug)
      if (!product) return null
      return { ...cartItem, product }
    })
    .filter(Boolean)

  if (items.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Cart</h1>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">Cart kamu masih kosong.</p>
          <div className="mt-4">
            <Link
              to="/catalog"
              className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Lihat Catalogue
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const totalQty = items.reduce((sum, item) => sum + item!.quantity, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Cart</h1>
          <p className="mt-2 text-sm text-slate-600">Total item: {totalQty}</p>
        </div>
        <Link
          to="/checkout"
          className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Checkout
        </Link>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item!.slug}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item!.product.imageSrc}
                alt={item!.product.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-slate-900">{item!.product.name}</div>
                <div className="mt-1 text-sm text-slate-600">{item!.product.tagline}</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <QuantityStepper
                value={item!.quantity}
                min={1}
                onChange={(quantity) => setQty({ slug: item!.slug, quantity })}
              />
              <button
                type="button"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                onClick={() => remove({ slug: item!.slug })}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
