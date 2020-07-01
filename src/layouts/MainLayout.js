import React, { Fragment, Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";

import { isOpen } from "../selectors/sidepanel";

const sideBarWidth = "70vw";

const styles = () => ({});

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100vw;
  overflow-x: hidden;
  ${({ theme }) => `
  padding: ${theme.spacing(2)}px;
  margin-top: ${theme.spacing(7)}px;
  transition: ${theme.transitions.create(["transform"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})}; `}
  transform: ${({ isSidePanelOpen, sideBarWidth }) => isSidePanelOpen ? `translateX(${sideBarWidth})` : ""};
`;

const mapStateToProps = state => {
  return {
    isSidePanelOpen: isOpen(state),
  };
};

function MainLayout({ isSidePanelOpen, isLoggedIn, children }) {
  return (
    <Fragment>
      <Root>
        <Header />
        <Main isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth}>
          {children}
        </Main>
        <Login isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth} />
      </Root>
      <Sidebar open={isSidePanelOpen} sideBarWidth={sideBarWidth} />
      <Footer />
    </Fragment>
  );
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(MainLayout);
