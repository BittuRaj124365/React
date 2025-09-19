import { useState } from "react";
import styled from "styled-components";
export default function RollDice({currentDice,rollDice}) {
 
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/Assets/dice_${currentDice}.png`} alt={`dice${currentDice}Image`} />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
}
const DiceContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 30px;
  }
  .dice {
    cursor: pointer;
  }
`;
