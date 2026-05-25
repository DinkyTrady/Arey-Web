export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">About / Our Services</h1>
        <p className="mt-2 text-sm text-slate-600">
          Arey Project melayani produksi PDH, Jaket, Kaos, dan merchandise.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">Layanan</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Catalogue: Lanyard premium, Kaos DTF/Plastisol, Jaket, dan PDH.</li>
            <li>Custom order: ukuran presisi, warna, serta custom text/logo.</li>
            <li>Fast response dan invoice jelas.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-slate-900">Proses Kerja</div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>Konsultasi kebutuhan</li>
            <li>Desain / penyesuaian</li>
            <li>Produksi</li>
            <li>QC</li>
            <li>Kirim</li>
          </ol>
        </div>
      </div>

      <div className="rounded-2xl bg-blue-700 p-8 text-white">
        <div className="text-2xl font-bold">Butuh vendor cepat?</div>
        <p className="mt-2 text-sm text-blue-100">Chat langsung, jelaskan kebutuhanmu, kami bantu dari awal.</p>
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
      </div>
    </div>
  )
}
