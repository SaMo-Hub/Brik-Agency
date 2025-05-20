import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Section/Header'
import { Project } from './Section/Project'
import { Service } from './Section/Service'
import { AboutUs } from './Section/AboutUs'
import { Footer } from './Section/Footer'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <div className='text-primary px-16 bg-secondary '>
    <NavBar/>
     <div className=''>
      <Header/>
      <Project/>
      <Service/>
      <AboutUs/>
      <Footer/>
     </div>
    </div>
  )
}

export default App
