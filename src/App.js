import React from "react";
import LeftSide from "./components/LeftSide";
import MainContent from "./components/MainContent";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import BackButton from "./components/BackButton";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Calendar from "./components/Calendar";
import Properties from "./components/Properties";
import Offer from "./components/Offer";
import Documents from "./components/Documents";
import Settings from "./components/Settings";

const StyledContainer = styled.div`
  .App {
    padding: 0;
    height: 80vh;
    background: #f2f7fd;
    margin-top: 10vh;
    position: relative;
    display: flex;
    border-radius: 30px;
  }
  .main-content-container {
    margin-left: 16rem;
    width: 100%;
    z-index: 1;
    border-radius: 30px;
    background-color: inherit;
  }

  @media (max-width: 768px) {
    .App{
      margin-top: 0;
    }
    .main-content-container {
      // display: none;
      margin-left: 0;
      overflow: auto;
      height: 100vh;
    }
  }
`;

function App() {
  const appHistory = createBrowserHistory();
  return (
    <BrowserRouter history={appHistory}>
      <StyledContainer>
        <Container maxWidth="lg" className="App">
          <LeftSide />
          <div className="main-content-container">
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route exact path="/chat" component={MainContent} />
              <Route exact path="/properties" component={Properties} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/offer" component={Offer} />
              <Route exact path="/documents" component={Documents} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/left-nav" component={LeftSide} />
            </Switch>
          </div>
          <BackButton />
        </Container>
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;
