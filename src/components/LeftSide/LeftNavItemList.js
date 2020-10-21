import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import LeftNavItem from "./LeftNavItem";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const StyledContainer = styled.div`
  margin-top: 5rem;
  height: 62%;
  overflow: auto;
`;

let _leftNavItems = [
  {
    icon: <HomeOutlinedIcon />,
    title: "properties",
    active: false
  },
  {
    icon: <ChatBubbleOutlineIcon />,
    title: "chat",
    active: false
  },
  {
    icon: <EventNoteIcon />,
    title: "calendar",
    active:false
  },
  {
    icon: <LocalOfferOutlinedIcon />,
    title: "offer",
    active:false
  },
  {
    icon: <AssignmentOutlinedIcon />,
    title: "documents",
    active:false
  },
  {
    icon: <SettingsOutlinedIcon />,
    title: "settings",
    active:false
  },
];

function LeftNavItemList() {

  const [leftNavItems, setLeftNavItems] = useState(_leftNavItems);
  
  const history = useHistory();

  const handleClick = (leftNavItem) => {
    history.push("/" + leftNavItem.title);
    let newLeftNavItems = leftNavItems.map(item => {
      item.active = false;
      if (item.title === leftNavItem.title)
        item.active = true;
      return item;
    });
    setLeftNavItems(newLeftNavItems);
  }

  return (
    <StyledContainer>
      {leftNavItems.map((leftNavItem, index) => {
        return <LeftNavItem leftNavItem={leftNavItem} key={index} handleClick={() => handleClick(leftNavItem)} />;
      })}
    </StyledContainer>
  );
}

export default LeftNavItemList;
