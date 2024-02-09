import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import About from './components/About.jsx'
import Home from './components/Home'
import Error from './components/Error.jsx'
import Shop from './Pages/Shop'
import BookPage from './Pages/BookPage'
import SharedLayout from './Pages/SharedLayout.jsx'
import Cart from './Pages/Cart'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<Error />} />
      <Route path='shop' element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path=':book' element={<BookPage />} />
      </Route>
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
