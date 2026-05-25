export type CheckoutItem = { name: string; quantity: number }

export function buildCheckoutWhatsAppText(input: {
  brandName: string
  items: CheckoutItem[]
  customerName: string
  orgName?: string
  address: string
  shippingMethod: 'Reguler' | 'Express'
  notes?: string
}): string {
  const lines: string[] = []

  lines.push(`Halo ${input.brandName}, saya mau pesan:`)
  lines.push('')

  for (const item of input.items) {
    lines.push(`- ${item.name} x${item.quantity}`)
  }

  lines.push('')
  lines.push(`Nama: ${input.customerName}`)
  if (input.orgName) {
    lines.push(`Instansi/Komunitas: ${input.orgName}`)
  }
  lines.push(`Alamat: ${input.address}`)
  lines.push(`Pengiriman: ${input.shippingMethod}`)
  if (input.notes) {
    lines.push(`Catatan: ${input.notes}`)
  }

  return lines.join('\n')
}

export function buildCheckoutWhatsAppUrl(input: { phoneE164: string; text: string }): string {
  const phone = input.phoneE164.replace(/^\+/, '')
  const encodedText = encodeURIComponent(input.text)
  return `https://wa.me/${phone}?text=${encodedText}`
}
