import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Lenis from '@studio-freight/lenis'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './apps/store'


function App() {

  const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)

  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default App
