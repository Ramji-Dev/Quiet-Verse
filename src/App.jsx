import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Lenis from '@studio-freight/lenis'

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
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
