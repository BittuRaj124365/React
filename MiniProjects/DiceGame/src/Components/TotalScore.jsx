import styled from "styled-components";
const ScoreContainer = styled.div`
  max-width: 200px;
  align-items: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`; 
export default function TotalScore({score}) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}
