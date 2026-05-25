import { describe, expect, it } from 'vitest'
import {
  addItem,
  getTotalQuantity,
  removeItem,
  setItemQuantity,
  type CartState,
} from './cart'

describe('cart', () => {
  it('adds a new item', () => {
    const state: CartState = { items: [] }
    const next = addItem(state, { slug: 'kaos', quantity: 2 })
    expect(next.items).toEqual([{ slug: 'kaos', quantity: 2 }])
  })

  it('increments quantity when adding same slug', () => {
    const state: CartState = { items: [{ slug: 'kaos', quantity: 1 }] }
    const next = addItem(state, { slug: 'kaos', quantity: 3 })
    expect(next.items).toEqual([{ slug: 'kaos', quantity: 4 }])
  })

  it('sets quantity and removes item when set to 0', () => {
    const state: CartState = { items: [{ slug: 'lanyard', quantity: 2 }] }
    const next = setItemQuantity(state, { slug: 'lanyard', quantity: 0 })
    expect(next.items).toEqual([])
  })

  it('removes an item by slug', () => {
    const state: CartState = {
      items: [
        { slug: 'lanyard', quantity: 1 },
        { slug: 'kaos', quantity: 2 },
      ],
    }
    const next = removeItem(state, { slug: 'lanyard' })
    expect(next.items).toEqual([{ slug: 'kaos', quantity: 2 }])
  })

  it('computes total quantity', () => {
    const state: CartState = {
      items: [
        { slug: 'lanyard', quantity: 1 },
        { slug: 'kaos', quantity: 2 },
      ],
    }
    expect(getTotalQuantity(state)).toBe(3)
  })
})
