import React from 'react'
import{ Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'


const App = () => {
  return (
    <BrowserRouter basename='/React-routing'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
