import React from 'react';
import styled from "styled-components";
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 2rem 3rem;
  padding-bottom: 0;
  align-items: center;

  .header-text {
    color: #808b9f;
    font-size: 1.1rem;
    margin-right: 1rem;
  }
  .header-icon {
    color: #cedaea;
  }
  .header-icon .MuiSvgIcon-root{
    font-size: 1.7rem;
  }
  .header-icon .MuiBadge-badge{
    font-size: 0.6rem;
    min-width: 12px;
    width: 12px;
    height: 12px;
    padding: 0;
    left: 10px;
  }
`;


function MainHeader() {
  return (
    <StyledContainer>
      <span className='header-text' >Status: Sale</span>
      <Badge className='header-icon' badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
    </StyledContainer>
  )
}

export default MainHeader
