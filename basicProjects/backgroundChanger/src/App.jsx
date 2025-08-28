import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className="w-full h-screen"
        style={{ backgroundColor: color, height: "100vh", width: "100%" }}
      >
        <div className="fixed bottom-12 inset-x-0 flex justify-center">
          <button >Red</button>
        </div>
        <div className="fixed bottom-12 inset-x-0 flex justify-center">
          <button >Green</button>
        </div>
      </div>
    </>
  );
}
export default App;
