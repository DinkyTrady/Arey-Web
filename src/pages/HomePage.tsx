import { Link } from 'react-router-dom'
import { products } from '../data/products'

function FeatureCard(props: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <p className="mt-1 text-sm text-slate-600">{props.description}</p>
    </div>
  )
}

export default function HomePage() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="space-y-16">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Fast response • Produksi rapi
          </div>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Vendor PDH, Jaket, Kaos, dan Merchandise
          </h1>
          <p className="text-base text-slate-600">
            Arey Project bantu kebutuhan produksi komunitas dan instansi: bahan berkualitas, komunikasi
            cepat, dan hasil yang siap dipakai.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Lihat Katalog
            </Link>
            <a
              href="https://wa.me/6285168689866"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img src={`${baseUrl}asset_contoh_3.png`} alt="Fast response" className="h-auto w-full" />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Catalogue</h2>
          <Link to="/catalog" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
            Lihat semua
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/catalog/${p.slug}`}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-blue-200"
            >
              <img
                src={`${baseUrl}${p.imageSrc.replace(/^\//, '')}`}
                alt={p.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <div className="text-sm font-semibold text-slate-900">{p.name}</div>
                <div className="mt-1 text-sm text-slate-600">{p.tagline}</div>
                <div className="mt-3 text-xs font-semibold text-blue-700 group-hover:text-blue-800">
                  Lihat detail
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Our Services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">Jasa Vendor Produksi</div>
            <p className="mt-2 text-sm text-slate-600">
              PDH, Jaket, Kaos, hingga merchandise untuk event, kampus, komunitas, atau perusahaan.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">Custom Order</div>
            <p className="mt-2 text-sm text-slate-600">
              Bisa custom desain, size, warna, bordir/sablon. Detailnya tulis di catatan saat checkout.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Keunggulan</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Quality materials"
            description="Bahan berkualitas meningkatkan kenyamanan pengguna."
          />
          <FeatureCard
            title="Fast Response"
            description="Contact Person 25 Jam Pelayanan dan pengiriman nota invoice yang jelas."
          />
          <FeatureCard title="Free Ongkir" description="Gratis ongkir untuk wilayah Jawa Timur." />
          <FeatureCard
            title="Free Return"
            description="Pengiriman dan pengambilan gratis bila barang diterima dalam kondisi yang tidak layak."
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img src={`${baseUrl}asset_contoh_4.png`} alt="Merch promo" className="h-auto w-full" />
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img src={`${baseUrl}asset_contoh_5.png`} alt="Partnership discount" className="h-auto w-full" />
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img src={`${baseUrl}asset_contoh_2.png`} alt="Free ongkir Jawa Timur" className="h-auto w-full" />
      </section>

      <section className="rounded-2xl bg-blue-700 p-8 text-white">
        <div className="text-2xl font-bold">Siap mulai produksi?</div>
        <p className="mt-2 text-sm text-blue-100">
          Konsultasi cepat, dapat invoice jelas, dan bisa custom kebutuhanmu.
        </p>
        <div className="mt-5">
          <a
            href="https://wa.me/6285168689866"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
