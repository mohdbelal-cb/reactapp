import React from "react";
import LeftSide from "./components/LeftSide";
import MainContent from "./components/MainContent";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const StyledContainer = styled.div`
  .App {
    padding: 0;
    height: 80vh;
    background: #f2f7fd;
    margin-top: 10vh;
    position: relative;
    display: flex;
    border-radius: 30px;
  }
`;

function App() {
  return (
    <StyledContainer>
      <Container maxWidth="lg" className="App">
        <LeftSide />
        <MainContent />
      </Container>
    </StyledContainer>
  );
}

export default App;
