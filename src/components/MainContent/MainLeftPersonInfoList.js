import React from "react";
import styled from "styled-components";
import MainLeftPersonInfo from './MainLeftPersonInfo';
import { persons } from '../../service';

const StyledContainer = styled.div`

`;


function MainLeftPersonInfoList() {
  return (
    <StyledContainer>
      {
        persons.map((person, index) => {
          return (
            <MainLeftPersonInfo person={person} key={index} />
          )
        })
      }
    </StyledContainer>
  );
}

export default MainLeftPersonInfoList;
