import * as React from "react";

// Styling
import styled from "styled-components";

// Local components
import { StateHello, HookHello } from "@components";

class App extends React.Component {
  public render() {
    return (
      <MainContainer>
        {/* <Hello name="suchita" enthusiasmLevel={10} />; */}
        Stateful Component:
        <StateHello name="suchita" enthusiasmLevel={10} />
        Component using Hooks:
        <HookHello name="suchita" enthusiasmLevel={10} />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
