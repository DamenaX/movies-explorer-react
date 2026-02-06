import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/temp2.jsx'
import Favorites from './pages/Favorites.jsx'
import Navbar from './components/Navbar.jsx'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}




export default App
