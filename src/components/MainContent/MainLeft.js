import React from 'react';
import styled from "styled-components";
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MainLeftPersonInfoList from './MainLeftPersonInfoList';

const StyledContainer = styled.div`
  width: 40%;
  padding-left: 3rem;
  .chat-title {
    font-size: 2rem;
    color: #000154;
    font-weight: bold;
  }
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 3px 10px 0px #efefef;
  input {
    width: 90%;
    border: none;
    padding: 1rem;
    border-radius: 15px;
  }
  input:focus {
    border: none;
    outline: none;
  }
  .MuiSvgIcon-root {
    color: #888;
  }
`;

function MainLeft() {
  return (
    <StyledContainer>
      <Typography className='chat-title' >
        Chat
      </Typography>
      <StyledSearch>
        <input placeholder='Search' />
        <SearchIcon/>
      </StyledSearch>
      <MainLeftPersonInfoList/>
      
    </StyledContainer>
  )
}

export default MainLeft
