import React from 'react';
import styled from "styled-components";
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const StyledContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0px 10px 15px 10px #edf1fa;
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;

  input {
    font-size: .9rem;
    padding: .5rem 1rem;
    border: none;
    width: 100%;
  }
  input:focus {
    border: none;
    outline: none;
  }

  .send-btn {
    width: 40px;
    height: 40px;
  }
  .send-icon {
    transform: rotate(-45deg);
    color: #fff;
    margin-left: 3px;
    margin-bottom: 5px;
    font-size: 1.4rem;
  }
  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

function MessageInput() {
  return (
    <StyledContainer>
      <SettingsVoiceIcon style={{color: '#7e7ee7', fontSize: '1.7rem'}}/>
      <input type='text' placeholder='Type something...' />
      <SentimentSatisfiedOutlinedIcon style={{color: '#888', margin: 5}}/>
      <AttachFileOutlinedIcon style={{transform: 'rotate(35deg)', color: '#888', margin: 5}} />
      <IconButton className='send-btn' style={{backgroundImage: 'linear-gradient(145deg, #b59bf0, #6673e6)'}} aria-label="add an alarm">
        <SendIcon className='send-icon'/>
      </IconButton>
    </StyledContainer>
  )
}

export default MessageInput
