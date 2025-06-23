import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import 'keen-slider/keen-slider.min.css'

import { AuthProvider } from './hooks/auth'
import { OrdersProvider } from './hooks/orders'
import { DishesProvider } from './hooks/dishes'

import theme from './styles/theme'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <OrdersProvider>
          <DishesProvider>
            <Routes />
          </DishesProvider>
        </OrdersProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
