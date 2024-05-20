import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import About from './components/About'
import Work from './components/Work'
import Blog from './components/Blog'
import Point from './components/Point'
import Phone from './components/Phone'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="outerhero">

      <Navbar/>
      <Hero/>
    </div>
    <Feature/>
    <About/><Work/>
    <Blog/>
    <Point/>
    <Phone/>
    <Team/>
    <Contact/>
    <div className="onback"></div>
    <Footer/>
    
    </>
  )
}

export default App
