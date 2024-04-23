import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'




const App =() => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />} />
            
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
