import React from "react";
import MainHeader from "./MainHeader";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-left: 16rem;
  width: 100%;
  z-index: 1;
  border-radius: 30px;
  background-color: inherit;

  .main-chat-container {
    display: flex;
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
