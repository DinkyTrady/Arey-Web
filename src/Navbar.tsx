import { Link, NavLink } from 'react-router-dom'
import { useCart } from './cart/CartContext'

export default function Navbar() {
  const { totalQuantity } = useCart()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/arey_favicon.svg" alt="Arey Project" className="h-9 w-auto" />
          {/* <span className="text-base font-semibold text-slate-900">Arey Project</span> */}
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'font-medium text-blue-700' : 'text-slate-600 hover:text-slate-900'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? 'font-medium text-blue-700' : 'text-slate-600 hover:text-slate-900'
            }
          >
            Catalogue
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'font-medium text-blue-700' : 'text-slate-600 hover:text-slate-900'
            }
          >
            About
          </NavLink>
          <Link
            to="/cart"
            className="relative rounded-md px-2 py-1 text-slate-600 hover:text-slate-900"
            aria-label="Cart"
          >
            Cart
            {totalQuantity > 0 ? (
              <span className="absolute -right-2 -top-2 inline-flex min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[0.75rem] leading-5 text-white">
                {totalQuantity}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
    </header>
  )
}
