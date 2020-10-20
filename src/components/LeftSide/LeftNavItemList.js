import React from "react";
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

const leftNavItems = [
  {
    icon: <HomeOutlinedIcon />,
    title: "properties",
  },
  {
    icon: <ChatBubbleOutlineIcon />,
    title: "chat",
  },
  {
    icon: <EventNoteIcon />,
    title: "calendar",
  },
  {
    icon: <LocalOfferOutlinedIcon />,
    title: "offer",
  },
  {
    icon: <AssignmentOutlinedIcon />,
    title: "documents",
  },
  {
    icon: <SettingsOutlinedIcon />,
    title: "settings",
  },
];

function LeftNavItemList() {
  return (
    <StyledContainer>
      {leftNavItems.map((leftNavItem, index) => {
        return <LeftNavItem leftNavItem={leftNavItem} key={index} />;
      })}
    </StyledContainer>
  );
}

export default LeftNavItemList;
