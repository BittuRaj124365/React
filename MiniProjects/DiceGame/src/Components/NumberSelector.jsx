import { useState } from "react";
import styled from "styled-components";
export default function NumberSelector({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) {
  const numberArray = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <SelectorContainer>
      <p className="error">{error}</p>
      <div className="container">
        {numberArray.map((value, i) => (
          <Box
            className="box"
            key={i}
            isSelected={value == selectedNumber}
            onClick={() => numberSelectorHandler(value)}
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
  .box{
    cursor: pointer; 
  }
  .container {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 30px;
    font-weight: 700;
  }
  .error {
    color: red;
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
