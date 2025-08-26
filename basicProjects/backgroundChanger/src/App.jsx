import { useState } from 'react';

function App() {
  const [color, setColor]=useState("Yellow")
  return (
    <>
    <div className="w-full h-screen duration-400" 
    style={{backgroundColor:color, height: "100vh", width: "100%" }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 flex justify-center ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button >Red</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
