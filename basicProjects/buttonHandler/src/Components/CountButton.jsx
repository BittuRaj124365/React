import {useState} from 'react';
export default function Counter(){

    const [count,setCount]=useState(0);
    function increaseCount(){
        setCount(count+1);
        console.log("Count Increased.");
    }
    function decreaseCount(){
        setCount(count-1);
        console.log("Count Decreased.");
    }
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
            <br /> <br />
            <button onClick={decreaseCount}>Decrease Count</button>
        </>
    )
}