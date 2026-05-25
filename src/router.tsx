import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import CatalogPage from './pages/CatalogPage'
import CheckoutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetailPage from './pages/ProductDetailPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/catalog', element: <CatalogPage /> },
      { path: '/catalog/:slug', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
})
