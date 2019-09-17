import * as React from "react";

// Styling
import styled from "styled-components";

// Local components
import { StateHello } from "@components";

class App extends React.Component {
  public render() {
    return (
      <MainContainer>
        {/* <Hello name="suchita" enthusiasmLevel={10} />; */}
        <StateHello name="suchita" enthusiasmLevel={20} />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
