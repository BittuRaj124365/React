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
  let [counter,setCounter]=useState(1);
  // by default, counter value is 1

  const addValue=()=>{
    console.log("Value Incremented.");
    setCounter(counter+1);
  }
  const removeValue=()=>{
    console.log("Value Decremented.");
    setCounter(counter-1);
  }
  const multiplyValue=()=>{
    console.log("Value multiplied by 10.");
    setCounter(counter*10);
  }
  const divideValue=()=>{
    console.log("Value diveded by 10.");
    setCounter(counter/10);
  }
  return (
  <>
    <h2>counter value: {counter}</h2>
    <h1>Hello world !</h1>
    <button onClick={addValue}>add by 1</button>
    <br /><br />
    <button onClick={removeValue}>decrease by 1</button>
    <br /><br />
    <button onClick={multiplyValue}>multiply by 10</button>
    <br /><br />
    <button onClick={divideValue}>divide by 10</button>
  </>
  )
}

export default App
