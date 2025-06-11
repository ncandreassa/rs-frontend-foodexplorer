import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
    </Routes>
  )
}