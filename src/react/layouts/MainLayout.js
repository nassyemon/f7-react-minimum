import React, { Fragment, useRef } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Swipeable } from "react-swipeable";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import { useScrolling } from "react-use";


import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import GlobalIndicator from "../components/GlobalIndicator";
import Toast from "../components/Toast";

import { isOpen } from "../../redux/selectors/sidepanel";
import { isSending as isPictureSending } from "../../redux/selectors/picture";
import { hasSession } from "../../redux/selectors/login";
import { closeSidepanel } from "../../redux/actions/sidepanel";

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
  overflow-y: hidden;
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

const ButtonContainer = styled.div`
  position: fixed;
  ${({ theme }) => `
    bottom: ${theme.spacing(15)}px; 
    right: ${theme.spacing(4)}px;
  `}
  background-color: transparent;
  z-index: 800;
`


function MainLayout({
  isSidePanelOpen,
  component: MainComponent,
  rightComponent: RightComponent,
  footerComponent: FooterComponent,
  controlComponent: ControlComponent,
  onSwiped,
  show,
  hasSession,
  closeSidepanel,
  matchProps,
  showControl,
}) {
  const mainRef = useRef(null);
  const rightRef = useRef(null);
  const mainScrolling = useScrolling(mainRef);
  const rightScrolling = useScrolling(rightRef);
  const scrolling = mainScrolling || rightScrolling;

  const showRight = RightComponent && show === "right";
  return (
    <Fragment>
      <Root>
        <Header showMenu={!showRight} showBack={showRight} />
        <Screen isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth} >
          <Swipeable onSwiped={onSwiped}>
            <Main showRight={showRight} ref={mainRef} >
              <Fragment>
                <MainComponent {...matchProps} hasSession={hasSession} scrollTrigger={mainScrolling} />
                <FooterOffset />
              </Fragment>
            </Main>
          </Swipeable>
          <Swipeable onSwiped={onSwiped}>
            <Right showRight={showRight} ref={rightRef} >
              {RightComponent && (
                <Fragment>
                  <RightComponent {...matchProps} hasSession={hasSession} scrollTrigger={rightScrolling} />
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
      {
        FooterComponent ? (
          <FooterComponent footerHeight={footerHeight} {...matchProps} />
        ) : (
            <Footer footerHeight={footerHeight} {...matchProps} />
          )
      }
      <GlobalIndicator />
      <ButtonContainer>
        <Zoom in={showControl && !scrolling && !!ControlComponent}  >
          <Fab color="secondary" size="medium" aria-label="edit">
            {ControlComponent ? (
              <ControlComponent  {...matchProps} />
            ) : null}
          </Fab>
        </Zoom>
      </ButtonContainer>
      <Toast />
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
    hasSession: hasSession(state),
    isSidePanelOpen: isOpen(state),
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(MainLayout);
