/* eslint react-refresh/only-export-components: "off" */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  addItem,
  getTotalQuantity,
  removeItem,
  setItemQuantity,
  type CartSlug,
  type CartState,
} from '../lib/cart'

const STORAGE_KEY = 'arey.cart.v1'

type CartContextValue = {
  state: CartState
  totalQuantity: number
  add: (input: { slug: CartSlug; quantity: number }) => void
  setQty: (input: { slug: CartSlug; quantity: number }) => void
  remove: (input: { slug: CartSlug }) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

function loadInitialState(): CartState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { items: [] }

    const parsed = JSON.parse(raw) as CartState
    if (!parsed || !Array.isArray(parsed.items)) return { items: [] }
    return parsed
  } catch {
    return { items: [] }
  }
}

export function CartProvider(props: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(() => loadInitialState())

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Ignore storage failures.
    }
  }, [state])

  const value = useMemo<CartContextValue>(
    () => ({
      state,
      totalQuantity: getTotalQuantity(state),
      add: (input) => setState((current) => addItem(current, input)),
      setQty: (input) => setState((current) => setItemQuantity(current, input)),
      remove: (input) => setState((current) => removeItem(current, input)),
      clear: () => setState({ items: [] }),
    }),
    [state],
  )

  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const value = useContext(CartContext)
  if (!value) {
    throw new Error('useCart must be used within CartProvider')
  }
  return value
}
