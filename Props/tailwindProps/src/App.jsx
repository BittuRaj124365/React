import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Cards from './Components/Cards'
import Product from './Components/Product'
import ProductTab from './Components/ProductTab'

function App() {

  return (
    <>
  <h1 className="bg-yellow-400 p-4 rounded-xl text-black">Tailwind Testing</h1>
    <h1>Hello world</h1>
    <Cards/>
    <Cards/>
    {/* <Product/> */}
    <ProductTab/>
    </>
  )
}

export default App
