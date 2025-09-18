import styled from "styled-components";
const Button = styled.button`
  display: flex;
  padding: 10px 18px;
  gap: 10px;
  min-width: 150px;
  justify-content: center;
  border: none;
  background: black;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.1s background ease-in;

  // for hover effect
  &:hover {
    background-color: #ffffff;
    color: black;
    border: 1px solid black;
    transition: 0.2s background ease-in;
  }
`;
const Container = styled.div`
  max-width: 1080px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  .content {
    h1 {
      font-size: 76px;
      white-space: nowrap;
    }
  }
`;
export default function StartGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/Assets/dice1.png" alt="dice image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}
