import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen"
        style={{ backgroundColor: color, height: "100vh", width: "100%" }}
      >
        <div className="fixed bottom-12 inset-x-0 flex justify-center">
          <button onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"red"}}>Red</button>
        </div>

        {/* green */}
        <div 
        onClick={()=>{setColor("green")}}className="fixed bottom-12 inset-x-0 flex justify-center">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"green"}}>Green</button>
        </div>

        {/* pink */}
        <div onClick={()=>{setColor("pink")}}
        className="fixed bottom-12 inset-x-0 flex justify-center">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"pink"}}>Pink</button>
        </div>

        {/* white */}
        <div onClick={()=>{setColor("white")}}
        className="fixed bottom-12 inset-x-0 flex justify-center">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"white"}}>White</button>
        </div>

        {/* yellow */}
        <div onClick={()=>{setColor("yellow")}}
        className="fixed bottom-12 inset-x-0 flex justify-center">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>

        {/* orange */}
        <div onClick={()=>{setColor("orange")}}
        className="fixed bottom-12 inset-x-0 flex justify-center">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"orange"}}>Orange</button>
        </div>

        {/* black */}
        <div onClick={()=>{setColor("cyan")}}
        className="fixed bottom-12 inset-x-0 flex justify-center">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"cyan"}}>cyan</button>
        </div>
      </div>
    </>
  );
}
export default App;
