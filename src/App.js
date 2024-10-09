import React from 'react'
import{ HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="services" element={<Services/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
