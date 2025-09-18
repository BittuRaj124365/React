import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);
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
