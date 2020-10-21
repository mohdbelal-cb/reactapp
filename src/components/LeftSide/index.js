import React from 'react';
import LeftNavItemList from './LeftNavItemList';
import ProfileInfo from './ProfileInfo';
import styled from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  width: 20rem;
  padding-right: 4rem;
  height: 80vh;
  background: linear-gradient(to bottom, #b48eff 0%, #687ed1 100%);
  border-radius: 30px;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
    height: 100vh;
    // display: none;
  }
`;


function LeftSide() {
  return (
    <StyledContainer>
      <ProfileInfo/>
      <LeftNavItemList/>
    </StyledContainer>
  )
}

export default LeftSide
