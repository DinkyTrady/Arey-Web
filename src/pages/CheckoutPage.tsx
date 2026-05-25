import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { products } from '../data/products'
import { buildCheckoutWhatsAppText, buildCheckoutWhatsAppUrl } from '../lib/whatsapp'

type ShippingMethod = 'Reguler' | 'Express'

export default function CheckoutPage() {
  const { state, clear } = useCart()
  const navigate = useNavigate()

  const items = useMemo(() => {
    return state.items
      .map((cartItem) => {
        const product = products.find((entry) => entry.slug === cartItem.slug)
        if (!product) return null
        return { name: product.name, quantity: cartItem.quantity }
      })
      .filter(Boolean) as { name: string; quantity: number }[]
  }, [state.items])

  const [customerName, setCustomerName] = useState('')
  const [orgName, setOrgName] = useState('')
  const [address, setAddress] = useState('')
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('Reguler')
  const [notes, setNotes] = useState('')

  if (items.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">Cart kosong. Tambahkan produk dulu.</p>
          <div className="mt-4">
            <Link
              to="/catalog"
              className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Ke Catalogue
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const canSubmit = customerName.trim().length > 0 && address.trim().length > 0

  function onSubmit() {
    if (!canSubmit) return

    const text = buildCheckoutWhatsAppText({
      brandName: 'Arey Project',
      items,
      customerName: customerName.trim(),
      orgName: orgName.trim() || undefined,
      address: address.trim(),
      shippingMethod,
      notes: notes.trim() || undefined,
    })

    const url = buildCheckoutWhatsAppUrl({
      phoneE164: '+6285168689866',
      text,
    })

    window.open(url, '_blank', 'noreferrer')
    clear()
    navigate('/')
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
          <p className="mt-2 text-sm text-slate-600">
            Isi data, lalu kirim pesanan ke WhatsApp. Custom size/warna/text tulis di Catatan.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Nama</span>
              <input
                className="rounded-lg border border-slate-200 px-3 py-2"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Nama kamu"
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Instansi/Komunitas (opsional)</span>
              <input
                className="rounded-lg border border-slate-200 px-3 py-2"
                value={orgName}
                onChange={(event) => setOrgName(event.target.value)}
                placeholder="Contoh: HIMA TI"
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Alamat</span>
              <textarea
                className="min-h-24 rounded-lg border border-slate-200 px-3 py-2"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Alamat lengkap"
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Metode Pengiriman</span>
              <select
                className="rounded-lg border border-slate-200 px-3 py-2"
                value={shippingMethod}
                onChange={(event) => setShippingMethod(event.target.value as ShippingMethod)}
              >
                <option value="Reguler">Reguler</option>
                <option value="Express">Express</option>
              </select>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Catatan (custom size/warna/text)</span>
              <textarea
                className="min-h-28 rounded-lg border border-slate-200 px-3 py-2"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Contoh: Kaos size L warna navy, custom text: Arey Project"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">Ringkasan Pesanan</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {items.map((item) => (
              <li key={item.name} className="flex items-center justify-between">
                <span>{item.name}</span>
                <span className="font-semibold">x{item.quantity}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={
              canSubmit
                ? 'mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700'
                : 'mt-6 w-full cursor-not-allowed rounded-lg bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500'
            }
            onClick={onSubmit}
            disabled={!canSubmit}
          >
            Kirim ke WhatsApp
          </button>

          <div className="mt-3 text-xs text-slate-500">
            Nomor tujuan: +6285168689866 (Arey Project)
          </div>
        </div>

        <Link to="/cart" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
          ← Kembali ke Cart
        </Link>
      </div>
    </div>
  )
}
