import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Swipeable } from "react-swipeable";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import GlobalIndicator from "../components/GlobalIndicator";

import { isOpen } from "../selectors/sidepanel";
import { isSending as isPictureSending } from "../selectors/picture";
import { closeSidepanel } from "../actions/sidepanel";

const sideBarWidth = "70vw";
const footerHeight = "10vh";

const styles = () => ({});

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Screen = styled.main`
  width: 200vw;
  overflow-x: hidden;
  position: relative;
  ${({ theme }) => `
  margin-top: ${theme.spacing(5)}px;
  transition: ${theme.transitions.create(["transform"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})}; `}
  transform: ${({ isSidePanelOpen, sideBarWidth }) => isSidePanelOpen ? `translateX(${sideBarWidth})` : ""};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Panel = styled.div`
  width: 100vw;
  overflow-x: hidden;
  ${({ theme }) => `
    height: calc(100vh - ${theme.spacing(5)}px);
    overflow-y: scroll;
    padding: ${theme.spacing(2)}px;
    transition: ${theme.transitions.create(["transform"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})};
  `}
  ${props => props.showRight ? "transform: translateX(-100vw)" : ""}
`;

const Main = styled(Panel)`
`

const Right = styled(Panel)`
`;

const FooterOffset = styled.div`
  height: 40px;
`;

const ScreenBlock = styled.div`
  position: absolute;
  z-index: 1600;
  top: 0;
  left: 0;
  width: 0px;
  height: 100vh;
  background-color: tranparent;
  ${props => props.isSidePanelOpen ? `
    width: 100vw;
    background-color: rgba(128,128,128,0.2);
  `: ``}
  background-color:
  height: 100h;
  ${({ theme }) => `
    transition: ${theme.transitions.create(["background-color", "width"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})}; `}
`;



function MainLayout({
  isSidePanelOpen,
  component: MainComponent,
  rightComponent: RightComponent,
  onSwiped,
  show,
  closeSidepanel,
  matchProps,
}) {
  const showRight = RightComponent && show === "right";
  return (
    <Fragment>
      <Root>
        <Header showMenu={!showRight} showBack={showRight} />
        <Screen isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth} >
          <Swipeable onSwiped={onSwiped}>
            <Main showRight={showRight}>
              <Fragment>
                <MainComponent {...matchProps} />
                <FooterOffset />
              </Fragment>
            </Main>
          </Swipeable>
          <Swipeable onSwiped={onSwiped}>
            <Right showRight={showRight}>
              {RightComponent && (
                <Fragment>
                  <RightComponent {...matchProps} />
                  <FooterOffset />
                </Fragment>
              )}
            </Right>
          </Swipeable>
          <Login />
          <Swipeable onSwipedLeft={closeSidepanel} >
            <ScreenBlock isSidePanelOpen={isSidePanelOpen} onClick={closeSidepanel} />
          </Swipeable>
        </Screen>
      </Root>
      <Sidebar open={isSidePanelOpen} sideBarWidth={sideBarWidth} />
      <Footer footerHeight={footerHeight} />
      <GlobalIndicator />
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  closeSidepanel: () => dispatch(closeSidepanel()),
});

const mapStateToProps = (state) => {
  const pictureSending = isPictureSending(state);
  const sending = [pictureSending].some(Boolean);
  return {
    sending,
    isSidePanelOpen: isOpen(state),
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(MainLayout);
