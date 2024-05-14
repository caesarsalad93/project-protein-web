import { useState } from 'react'
import './App.css'
import Logos from './components/Logos'
import ProductsTable from './components/Table'
import json from '../frozenMeatPoultrySeafood_processed.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logos></Logos>
    <ProductsTable initialData={json}></ProductsTable>
    </>
  )
}

export default App
