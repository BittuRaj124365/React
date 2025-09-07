import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import CommentForm from './Components/CommentForm'
import Counter from './Components/Counter'
function App() {

  return (
    <>
    <Counter/>
      <Form/>
      <CommentForm/>
    </>
  )
}

export default App
