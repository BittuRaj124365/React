import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGame} />}
    </>
  );
}

export default App;
