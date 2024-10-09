import React from 'react'
import{ Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="services" element={<Services/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
