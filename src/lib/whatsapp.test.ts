import { describe, expect, it } from 'vitest'
import { buildCheckoutWhatsAppText, buildCheckoutWhatsAppUrl } from './whatsapp'

describe('whatsapp checkout', () => {
  it('builds a readable checkout text', () => {
    const text = buildCheckoutWhatsAppText({
      brandName: 'Arey Project',
      items: [
        { name: 'Kaos', quantity: 2 },
        { name: 'Lanyard', quantity: 1 },
      ],
      shippingMethod: 'Reguler',
      customerName: 'Budi',
      orgName: 'HIMA TI',
      address: 'Surabaya',
      notes: 'Size: L, warna: navy',
    })

    expect(text).toContain('Arey Project')
    expect(text).toContain('Kaos x2')
    expect(text).toContain('Lanyard x1')
    expect(text).toContain('Reguler')
    expect(text).toContain('Budi')
    expect(text).toContain('Surabaya')
  })

  it('builds a wa.me url without + and with encoded text', () => {
    const url = buildCheckoutWhatsAppUrl({
      phoneE164: '+6285168689866',
      text: 'Halo Arey Project!\nKaos x1',
    })
    expect(url).toMatch(/^https:\/\/wa\.me\/6285168689866\?text=/)
    expect(url).toContain(encodeURIComponent('Halo Arey Project!'))
  })
})
