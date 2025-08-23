import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=10;  
  // const addValue=()=>{
  //   // console.log("Value added.", Math.random());
  //   counter+=1;
  //   console.log(counter);
  // }
  // const removeValue=()=>{
  //   console.log("Value removed.");
  // }
  let [counter,setCounter]=useState(0);
  const addValue=()=>{
    console.log("Value Incremented.");
    setCounter(counter+1);
  }
  const removeValue=()=>{
    console.log("Value Decremented.");
    setCounter(counter-1);
  }
  return (
  <>
    <h2>counter value: {counter}</h2>
    <h1>Hello world !</h1>
    <button onClick={addValue}>add button</button>
    <br /><br />
    <button onClick={removeValue}>remove button</button>
  </>
  )
}

export default App
