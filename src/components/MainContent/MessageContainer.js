import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import {messages} from '../../service';

const StyledContainer = styled.div`
  height: 85%;
  padding: 0 8px;
  overflow: auto;
  .msg-left {
    background: #eef2fd;
    border-radius: 15px 15px 15px 0;
    display: inline-block;
    max-width: 85%;
    min-width: 90px;
    padding: 0.8rem 1rem;
    font-size: 0.8rem;
    color: #555;
    position: relative;
  }
  .msg-left::after {
    content: " ";
    position: absolute;
    bottom: 0%;
    left: -5px; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #eef2fd transparent;
  }
  .msg-right-content {
    text-align: right;
  }
  .msg-right {
    background: #6b1aff;
    border-radius: 15px 15px 0 15px;
    display: inline-block;
    max-width: 85%;
    min-width: 90px;
    padding: 0.8rem 1rem;
    color: #fff;
    font-size: 0.8rem;
    text-align: left;
    position: relative;
  }
  .msg-right::after {
    content: " ";
    position: absolute;
    bottom: 0%;
    right: -5px; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #6b1aff transparent;
  }
  .msg-time {
    color: #aaa;
    font-size: 0.7rem;
    margin: 5px;
    margin-bottom: 10px;
  }
`;


function MessageContainer() {
  return (
    <StyledContainer>
      {messages.map((message, index) => {
        return message.status === "received" ? (
          <div className="msg-left-content" key={index}>
            <Typography className="msg-left">{message.content}</Typography>
            <Typography className="msg-time">{message.createdAt}</Typography>
          </div>
        ) : (
          <div className="msg-right-content" key={index}>
            <Typography className="msg-right">{message.content}</Typography>
            <Typography className="msg-time">{message.createdAt}</Typography>
          </div>
        );
      })}
    </StyledContainer>
  );
}

export default MessageContainer;
