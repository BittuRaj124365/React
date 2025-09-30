import styled from "styled-components";
export const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Game</h2>
      <div className="steps">
        <p>
          <li>Select any Number from the Box</li>
          <li>Click on Dice of Image</li>
          <li>AFter click on Dice, if selected no is equal to the Dice number, you will get the same point as dice.</li>
          <li>If you get wrong guess, 2 points will get deducted.</li>
        </p>
      </div>
    </RulesContainer>
  );
};

const RulesContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction:column;
    margin:40px auto;
    padding:20px;
    background-color:pink;
    max-width: 800px;
    border-radius: 10px;
    h2{
        font-size:20px;
        font-weight:bold;
    };
    .steps p{
        font-size:10px;
        font-size: large;
    }
    li{
        text-decoration: none;
    }
`;
