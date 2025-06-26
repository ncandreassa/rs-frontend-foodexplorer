import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { DishDetail } from '../pages/DishDetail'
import { Layout } from '../components/Layout'
import { DishForm } from '../pages/DishForm'
import { OrdersProvider } from '../hooks/orders'
import { DishesProvider } from '../hooks/dishes'


export function AppRoutes() {
  return (
    <OrdersProvider>
      <DishesProvider>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/dish/:id" element={<Layout><DishDetail /></Layout>} />
          <Route path="/dish-form/:mode/:id?" element={<Layout><DishForm /></Layout>} />
        </Routes>
      </DishesProvider>
    </OrdersProvider>
  )
}