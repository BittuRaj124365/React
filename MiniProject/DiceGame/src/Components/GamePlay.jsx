import { useState } from "react";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import styled from "styled-components";
import { Button } from "../Styled/Button";
import { OutlineButton } from "../Styled/Button";
import { Rules } from "./Rules";
export default function GamePlay() {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }
    let randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  const viewRules=()=>{
    setShowRules((prev)=>!prev)
  }
  return (
    <MainContainer>
      <div className="container">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={viewRules}>
            {showRules ? "Hide" : "Show"}
            Rules</Button>
      </div>
      {showRules &&  <Rules />}
    </MainContainer>
  );
}
const MainContainer = styled.div`
  padding-top: 70px;
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
