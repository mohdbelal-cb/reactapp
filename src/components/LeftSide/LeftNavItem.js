import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledContainer = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  padding: 1rem;

  &:hover {
    background: #a28cf0;
    border-left: 3px solid #d1a2fe;
  }
  .left-nav-item-title {
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-left: 1rem;
  }
  .left-nav-item-icon .MuiSvgIcon-root {
    font-size: 1.4rem;
  }
`;

function LeftNavItem(props) {
  const {leftNavItem} = props;

  return (
    <StyledContainer>
      <div className="left-nav-item-icon">
        {leftNavItem.icon}
      </div>
      <Typography className="left-nav-item-title">{leftNavItem.title}</Typography>
    </StyledContainer>
  );
}

export default LeftNavItem;
