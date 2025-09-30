import styled from "styled-components";
export const Button = styled.button`
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

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
