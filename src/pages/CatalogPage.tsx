import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Catalogue</h1>
        <p className="mt-2 text-sm text-slate-600">
          Pilih kebutuhanmu, lalu tambahkan ke cart untuk request custom size/warna di checkout.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
