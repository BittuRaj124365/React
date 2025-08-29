import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/button'
import Form from './Components/Form'
import Counter from './Components/CountButton'
import LikeButton from './Components/LikeButton'
function App() {
  return (
    <>
      <Button/>
      <Form/>
      <Counter/>
      <LikeButton/>
    </>
  )
}

export default App
