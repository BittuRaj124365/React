import { useEffect, useState } from "react"

export default function Counter(){
    const [incNo,setIncNo]=useState(0);
    const [decNo,setDecNo]=useState(0);
    const [mulNo,setMulNo]=useState(1);
    let addNo=()=>{
        setIncNo((currCount)=>currCount+1 );
    }
    let subNo=()=>{
        setDecNo((currCount)=>currCount-1)
    }
    let multiply=()=>{
        setMulNo((currCount)=>currCount*10)
    }
    useEffect((addAndSubHeading)=>{
        console.log("Add and Sub reaction.");
    },[incNo,decNo])
    useEffect((printMulHeading)=>{
        console.log("Multiply reaction.");
    },[mulNo])
    return(
        <div>
            <div>
            <h1>Count: {incNo}</h1>
            <button onClick={addNo}>+1</button>
            <h1>Count: {decNo}</h1>
            <button onClick={subNo}>-1</button>
            <h1>Count: {mulNo}</h1>
            <button onClick={multiply}>*10</button>
            </div>
            <br />
        </div>
    )
}