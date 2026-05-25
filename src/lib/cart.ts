export type CartSlug = 'lanyard' | 'kaos' | 'jaket' | 'pdh'

export type CartItem = {
  slug: CartSlug
  quantity: number
}

export type CartState = {
  items: CartItem[]
}

export function addItem(
  state: CartState,
  input: { slug: CartSlug; quantity: number },
): CartState {
  const quantity = Math.max(0, Math.floor(input.quantity))
  if (quantity === 0) return state

  const existing = state.items.find((item) => item.slug === input.slug)
  if (!existing) {
    return { items: [...state.items, { slug: input.slug, quantity }] }
  }

  return {
    items: state.items.map((item) =>
      item.slug === input.slug ? { ...item, quantity: item.quantity + quantity } : item,
    ),
  }
}

export function setItemQuantity(
  state: CartState,
  input: { slug: CartSlug; quantity: number },
): CartState {
  const quantity = Math.max(0, Math.floor(input.quantity))
  if (quantity === 0) {
    return removeItem(state, { slug: input.slug })
  }

  return {
    items: state.items.map((item) =>
      item.slug === input.slug ? { ...item, quantity } : item,
    ),
  }
}

export function removeItem(state: CartState, input: { slug: CartSlug }): CartState {
  return { items: state.items.filter((item) => item.slug !== input.slug) }
}

export function getTotalQuantity(state: CartState): number {
  return state.items.reduce((total, item) => total + item.quantity, 0)
}
