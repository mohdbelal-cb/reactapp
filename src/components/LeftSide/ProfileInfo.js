import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledContainer = styled.div`
  margin-top: 3rem;
  .avatar-img {
    display: flex;
  }
  .avatar-img img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #fff;
    margin: auto;
    margin-bottom: 1rem;
  }
  .avatar-name {
    display: flex;
    color: #fff;
    justify-content: center;
  }
  .avatar-name span {
    font-size: 18px;
    font-weight: 500;
  }
  .avatar-name-icon {
    margin-top: 3px;
  }


`;

function ProfileInfo() {
  return (
    <StyledContainer>
      <div className="avatar-img">
        <img alt="avatar" src={require("../../assets/man.jpg")} />
      </div>
      <div className="avatar-name">
        <span>Matthew Lewis</span>
        <ExpandMoreIcon className='avatar-name-icon'/>
      </div>
    </StyledContainer>
  );
}

export default ProfileInfo;
