import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './apps/store'
import { useEffect } from 'react'


function App() {

    useEffect(() => {
      window.scrollTo(0,0);
    }, [])

    useEffect(() => {
      const url = String(import.meta.env.VITE_URL);
      const check = async () => {
        await fetch(url, {
          method: "POST"
        })
      }
      check();
    }, [])

  return (
    <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
    </Provider>
  )
}

export default App
