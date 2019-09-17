import * as React from "react";
import { getExclamationMarks } from "../../helpers";

// Styling
import styled from "styled-components";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

interface IState {
  currentEnthusiasm: number;
}

class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentEnthusiasm:
        props.enthusiasmLevel === undefined ? 1 : props.enthusiasmLevel
    };
  }

  public onIncrement = () =>
    this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  public onDecrement = () =>
    this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  public render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <Container className="hello">
        <GreetingContainer className="greeting">
          Hello {name}{" "}
          <span> {getExclamationMarks(this.state.currentEnthusiasm)} </span>
        </GreetingContainer>
        <ButtonGroup>
          <Button onClick={this.onDecrement}>-</Button>
          <Button onClick={this.onIncrement}>+</Button>
        </ButtonGroup>
      </Container>
    );
  }

  public updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: gainsboro;
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
