import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0px 3px 10px 0px #efefef;
  position: relative;
  transition: 0.3s;
  &:hover {
    transform: scale(1.15);
    margin: 1.5rem 0;
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 3px solid #f2f7fd;
    box-shadow: 0px 3px 5px 0px #aaa;
  }
  .main-left-person-info {
    margin-left: 1rem;
  }
  .person-name {
    color: #000656;
    font-weight: bold;
  }
  .person-msg {
    width: 80%;
    color: #9fa6c0;
    font-size: 0.85rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .main-left-msg-info {
    position: absolute;
    right: 0px;
    top: .5rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .msg-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #fd496e;
    color: #fff;
    font-size: 0.7rem;
  }
  .msg-date {
    color: #9fa6c0;
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
`;

function MainLeftPersonInfo() {
  return (
    <StyledContainer>
      <img alt="person" src={require("../../assets/woman.jpg")} />
      <div className="main-left-person-info">
        <Typography className="person-name">Camrina</Typography>
        <Typography className="person-msg">
          I'm looking to work wiht designer that something
        </Typography>
      </div>
      <div className="main-left-msg-info">
        <Typography className="msg-date">03 Mar</Typography>
        <Typography className="msg-number">5</Typography>
      </div>
    </StyledContainer>
  );
}

export default MainLeftPersonInfo;
