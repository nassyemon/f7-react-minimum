import React, { Fragment, useRef } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Swipeable } from "react-swipeable";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { useScrolling } from "react-use";

import { isOpen } from "../../redux/selectors/sidepanel";
import { isSending as isPictureSending } from "../../redux/selectors/picture";
import { hasSession } from "../../redux/selectors/login";
import { closeSidepanel } from "../../redux/actions/sidepanel";

import Blank from "../components/Blank";
import None from "../components/None";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import GlobalIndicator from "../components/GlobalIndicator";
import Toast from "../components/Toast";

import { withTransition } from "../utils/styled";


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
  margin-top: ${props => props.headerHeight};
  ${withTransition(["transform", "margin"])}
  transform: ${({ isSidePanelOpen, sideBarWidth }) =>
    isSidePanelOpen ? `translateX(${sideBarWidth})` : ""};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const HeaderContainer = styled.div`
  z-index: 1200;
  height: ${(props) => props.headerHeight};
  padding-top: ${(props) => props.headerPaddingTop};
  width: 100vw;
  position: fixed;
  display: flex;
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${withTransition(["transform", "height"])}
`;

const FooterContainer = styled.div`
  position: fixed;
  z-index: 2000;
  width: 100vw;
  height: ${(props) => props.footerHeight};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${withTransition(["transform", "height"])}
`;


const Panel = styled.div`
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  height: ${(props) => `calc(100vh - ${props.headerHeight}`});
  padding-bottom: ${props => props.footerHeight};
  ${withTransition(["transform", "height", "padding"])}
`;

const MainPanel = styled(Panel)`
  ${(props) => (props.showRight ? "transform: translateX(-100vw)" : "")}
`

const RightPanel = styled(Panel)`
  ${(props) => (props.showRight ? "transform: translateX(-100vw)" : "")}
`

const BottomPanel = styled(Panel)`
  position: absolute;
  top: 100vh;
  left: 0px;
  z-index: 1300;
  ${(props) => (props.showBottom ? "transform: translateY(-100vh)" : "")}
`

const LoginPanel = styled(Panel)`
  position: absolute;
  top: 100vh;
  left: 0px;
  z-index: 1500;
  ${(props) => (!props.hasSession ? "transform: translateY(-100vh)" : "")}
`

const ScreenBlock = styled.div`
  position: absolute;
  z-index: 1600;
  top: 0;
  left: 0;
  width: 0px;
  height: 100vh;
  background-color: tranparent;
  ${(props) =>
    props.isSidePanelOpen
      ? `
    width: 100vw;
    background-color: rgba(128,128,128,0.2);
  `
      : ""}
  background-color:
  height: 100h;
  ${withTransition(["transform"])}
`;

const ButtonContainer = styled.div`
  position: absolute;
  ${({ theme }) => `
    bottom: ${theme.spacing(15)}px; 
    right: calc(100vw + ${theme.spacing(4)}px);
  `}
  ${withTransition(["transform"])}
  background-color: transparent;
  z-index: 800;
`;

function MainLayout({
  isSidePanelOpen,
  mainComponent: MainComponent,
  rightComponent: RightComponent = Blank,
  bottomComponent: BottomComponent = Blank,
  footerComponent: FooterComponent = Footer,
  controlComponent: ControlComponent = None,
  headerComponent: HeaderComponent = Header,
  sidepanelComponent: SidepanelComponent = Sidebar,
  onSwiped,
  hasSession,
  closeSidepanel,
  matchProps,
  right,
  bottom,
  control,
}) {
  const [mainRef, rightRef, bottomRef] = [useRef(null), useRef(null), useRef(null)];
  const [mainScrolling, rightScrolling, bottomScrolling] = [mainRef, rightRef, bottomRef].map(useScrolling);
  const scrolling = mainScrolling || rightScrolling;

  const footerHeight = FooterComponent.height;
  const headerHeight = HeaderComponent.height;
  const headerPaddingTop = HeaderComponent.paddingTop;
  const sideBarWidth = SidepanelComponent.width;

  return (
    <Fragment>
      <Root>
        <HeaderContainer headerHeight={headerHeight} headerPaddingTop={headerPaddingTop}>
          <HeaderComponent {...matchProps} />
        </HeaderContainer>
        <Screen isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth} headerHeight={headerHeight}>
          <Swipeable onSwiped={onSwiped}>
            <MainPanel showRight={right} ref={mainRef} footerHeight={footerHeight} headerHeight={headerHeight}>
              <MainComponent
                {...matchProps}
                hasSession={hasSession}
                scrolling={mainScrolling}
              />
            </MainPanel>
          </Swipeable>
          <Swipeable onSwiped={onSwiped}>
            <RightPanel showRight={right} ref={rightRef} footerHeight={footerHeight} headerHeight={headerHeight}>
              <RightComponent
                {...matchProps}
                hasSession={hasSession}
                scrolling={rightScrolling}
              />
            </RightPanel>
          </Swipeable>
          <Swipeable onSwiped={onSwiped}>
            <BottomPanel showBottom={bottom} ref={bottomRef} footerHeight={footerHeight} headerHeight={headerHeight}>
              <BottomComponent
                {...matchProps}
                hasSession={hasSession}
                scrolling={bottomScrolling}
              />
            </BottomPanel>
          </Swipeable>
          <LoginPanel hasSession={hasSession} headerHeight={headerHeight} footerHeight={footerHeight}>
            <Login />
          </LoginPanel>
          <Swipeable onSwipedLeft={closeSidepanel}>
            <ScreenBlock
              isSidePanelOpen={isSidePanelOpen}
              onClick={closeSidepanel}
            />
          </Swipeable>
          <ButtonContainer showRight={right} >
            <Zoom in={control && !isSidePanelOpen && !scrolling}>
              <Fab color="secondary" size="medium" aria-label="edit">
                <ControlComponent {...matchProps} />
              </Fab>
            </Zoom>
          </ButtonContainer>
        </Screen>
      </Root>
      <Sidebar open={isSidePanelOpen} headerHeight={headerHeight} footerHeight={footerHeight} />
      <FooterContainer footerHeight={footerHeight} >
        <FooterComponent {...matchProps} />
      </FooterContainer>
      <GlobalIndicator />
      <Toast />
    </Fragment >
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
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(MainLayout);
