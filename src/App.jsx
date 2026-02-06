import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/temp2.jsx'
import Favorites from './pages/Favorites.jsx'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>

  )
}




export default App
