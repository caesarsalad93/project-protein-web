import { useState } from 'react'
import './App.css'
import Logos from './Logos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logos></Logos>
    </>
  )
}

export default App
