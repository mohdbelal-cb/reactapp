import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

function BackButton() {
  const history = useHistory();

  const handleBack = () => {
    if(history) {
      history.push('/left-nav');
    }
  }

  return (
    <StyledContainer>
      <IconButton onClick={handleBack} aria-label="back">
        <ArrowBackIcon />
      </IconButton>
    </StyledContainer>
  );
}

export default BackButton;
