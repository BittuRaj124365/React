import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import styled from "styled-components";
export default function GamePlay() {
  return (
    <MainContainer>
      <div className="container">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice/>
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
`;
