import * as React from "react";
import { getExclamationMarks } from "../../helpers";

// Styling
import styled from "styled-components";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

const Hello = ({ name, enthusiasmLevel = 1 }: IProps) => {
  const [currentEnthusiasm, setCurrentEnthusiasm] = React.useState(
    enthusiasmLevel
  );

  // memoizing it using useCallback hook
  const onIncrement = React.useCallback(() => {
    setCurrentEnthusiasm(prev => prev + 1);
  }, []);

  const onDecrement = React.useCallback(() => {
    setCurrentEnthusiasm(prev => prev - 1);
  }, []);

  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <Container>
      <GreetingContainer>
        Hello {name} <span> {getExclamationMarks(currentEnthusiasm)} </span>
      </GreetingContainer>
      <ButtonGroup>
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>
      </ButtonGroup>
    </Container>
  );
};

const ButtonGroup = styled.div`
  display: flex;
`;

const GreetingContainer = styled.div`
  margin-bottom: 24px;

  & span {
    color: forestgreen;
  }
`;

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: gainsboro;
  margin-bottom: 48px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  margin-left: 24px;
  color: black;
  background-color: darkorange;
  font-size: 32px;
`;

export default Hello;
