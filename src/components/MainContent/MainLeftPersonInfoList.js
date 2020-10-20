import React from "react";
import styled from "styled-components";
import MainLeftPersonInfo from './MainLeftPersonInfo'

const StyledContainer = styled.div`

`;

function MainLeftPersonInfoList() {
  return (
    <StyledContainer>
      <MainLeftPersonInfo/>
      <MainLeftPersonInfo/>
      <MainLeftPersonInfo/>
      <MainLeftPersonInfo/>
    </StyledContainer>
  );
}

export default MainLeftPersonInfoList;
