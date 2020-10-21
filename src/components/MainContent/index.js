import React from "react";
import MainHeader from "./MainHeader";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import styled from "styled-components";

const StyledContainer = styled.div`

  .main-chat-container {
    display: flex;
  }

  @media (max-width: 768px) {
    .main-chat-container {
      flex-direction: column;
      overflow: auto;
    }
  }

`;

function MainContent() {
  return (
    <StyledContainer>
      <MainHeader />
      <div className="main-chat-container">
        <MainLeft />
        <MainRight />
      </div>
    </StyledContainer>
  );
}

export default MainContent;
