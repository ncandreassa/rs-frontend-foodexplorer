import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { DishDetail } from '../pages/DishDetail'
import { Layout } from '../components/Layout'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/dish" element={<Layout><DishDetail /></Layout>} />
    </Routes>
  )
}