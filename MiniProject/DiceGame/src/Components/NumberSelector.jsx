import { useState } from "react";
import styled from "styled-components";
export default function NumberSelector() {
  const numberArray = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <SelectorContainer>
      <div className="container">
        {numberArray.map((value, i) => (
          <Box
            key={i}
            isSelected={value == selectedNumber}
            onClick={() => {
              setSelectedNumber(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectorContainer>
  );
}
const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .container {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 30px;
    font-weight: 700;
  }
`;
const Box = styled.div`
  height: 70px;
  width: 70px;
  color: black;
  background-color: white;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
