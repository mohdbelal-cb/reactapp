import React from 'react';
import MainRightPersonInfo from './MainRightPersonInfo';
import MainRightMsgContent from './MainRightMsgContent';
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 59%;
  padding: 3rem 2rem 0 3rem;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
  }

`;

function MainRight() {
  return (
    <StyledContainer>
      <MainRightPersonInfo/>
      <MainRightMsgContent/>
    </StyledContainer>
  )
}

export default MainRight
