import React from 'react';
import MessageContainer from './MessageContainer';
import MessageInput from './MessageInput';
import styled from "styled-components";

const StyledContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  height: 30rem;
  margin-top: 1rem;
  padding: 1rem;
  height: 56vh;
`;

function MainRightMsgContent() {
  return (
    <StyledContainer>
      <MessageContainer/>
      <MessageInput/>
    </StyledContainer>
  )
}

export default MainRightMsgContent
