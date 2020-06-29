import React, { Fragment, Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Sidebar from "../components/Sidebar";

import { isOpen } from "../selectors/sidepanel";

const sideBarWidth = "60vw";

const styles = () => ({});

const Root = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 100vw;
  overflow-x: hidden;
  ${({ theme, isSidePanelOpen, sideBarWidth }) => `
  padding: ${theme.spacing(3)}px;
  margin-top: ${theme.spacing(7)}px;
  transition: ${theme.transitions.create(["transform"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })};
  ${
    isSidePanelOpen
      ? `
  transform: translateX(${sideBarWidth});
  transition: ${theme.transitions.create(["transform"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })};`
      : `
  transition: ${theme.transitions.create(["transform"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })};`
  }
  `}
`;
const mapStateToProps = state => {
  return {
    isSidePanelOpen: isOpen(state),
  };
};

function MainLayout({ isSidePanelOpen, children }) {
  return (
    <Fragment>
      <Root>
        <Header />
        <Main isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth}>{children}</Main>
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
