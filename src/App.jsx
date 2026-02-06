import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/Movie.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greet name="Daniel"/>
    </>
  )
}


function Greet({name}) {
  return <p>Hello, {name}. Tatakae!</p>
}

export default App
