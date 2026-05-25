export type ProductSlug = 'lanyard' | 'kaos' | 'jaket' | 'pdh'

export type Product = {
  slug: ProductSlug
  name: string
  tagline: string
  imageSrc: string
  bullets: string[]
}

export const products: Product[] = [
  {
    slug: 'lanyard',
    name: 'Lanyard',
    tagline: 'Premium, penuh warna, & nyaman',
    imageSrc: '/asset_contoh_1.png',
    bullets: ['Bahan premium', 'Full color', 'Nyaman dipakai seharian'],
  },
  {
    slug: 'kaos',
    name: 'Kaos',
    tagline: 'Sablon DTF/Plastisol kualitas tinggi',
    imageSrc: '/asset_contoh_6.png',
    bullets: ['Sablon DTF / Plastisol', 'Hasil tajam & awet', 'Nyaman untuk daily use'],
  },
  {
    slug: 'jaket',
    name: 'Jaket',
    tagline: 'Jahitan rapi & tepat waktu',
    imageSrc: '/asset_contoh_8.png',
    bullets: ['Jahitan rapi', 'Produksi tepat waktu', 'Bisa custom detail'],
  },
  {
    slug: 'pdh',
    name: 'PDH',
    tagline: 'Drill premium & ukuran presisi',
    imageSrc: '/asset_contoh_8.png',
    bullets: ['Bahan drill premium', 'Ukuran presisi', 'Cocok untuk instansi/komunitas'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
