import React, { Fragment, useRef } from "react";
import { Swipeable } from "react-swipeable";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { useScrolling } from "react-use";

import Sidebar from "../../components/Sidebar";
import Login from "../../components/Login";
import GlobalIndicator from "../../components/GlobalIndicator";
import Toast from "../../components/Toast";

import { withTransition } from "../../utils/styled";


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

function MaySwipeable({ disabled, children, onSwiped }) {
  if (!disabled) {
    return (
      <Swipeable onSwiped={onSwiped}>
        {children}
      </Swipeable>
    );
  }
  return children;
}

export function MainLayout({
  mainComponent: Main,
  rightComponent: Right,
  bottomComponent: Bottom,
  footerComponent: Footer,
  controlComponent: Control,
  headerComponent: Header,
  sidepanelComponent: Sidepanel,
  isSidePanelOpen,
  onSwiped,
  hasSession,
  sessionId,
  closeSidepanel,
  matchProps,
  right,
  bottom,
  control,
  selected,
  forwardScrollingRef,
}) {
  const scrollingRef = useRef(null);
  const scrolling = useScrolling(scrollingRef);

  const footerHeight = Footer.height;
  const headerHeight = Header.height;
  const headerPaddingTop = Header.paddingTop;
  const sideBarWidth = Sidepanel.width;
  return (
    <Fragment>
      <Root>
        <HeaderContainer headerHeight={headerHeight} headerPaddingTop={headerPaddingTop}>
          <Header {...matchProps} />
        </HeaderContainer>
        <Screen isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth} headerHeight={headerHeight}>
          <MaySwipeable onSwiped={onSwiped} disabled={Main.disableDefaultSwipe}>
            <MainPanel
              showRight={right}
              ref={selected === Main && !forwardScrollingRef ? scrollingRef : null}
              footerHeight={footerHeight}
              headerHeight={headerHeight}
            >
              <Main
                {...matchProps}
                hasSession={hasSession}
                sessionId={sessionId}
                scrollingRef={selected === Main && forwardScrollingRef ? scrollingRef : null}
              />
            </MainPanel>
          </MaySwipeable>
          <MaySwipeable onSwiped={onSwiped} disabled={Right.disableDefaultSwipe}>
            <RightPanel
              showRight={right}
              ref={selected === Right && !forwardScrollingRef ? scrollingRef : null}
              footerHeight={footerHeight}
              headerHeight={headerHeight}
            >
              <Right
                {...matchProps}
                hasSession={hasSession}
                sessionId={sessionId}
                scrollingRef={selected === Right && forwardScrollingRef ? scrollingRef : null}
              />
            </RightPanel>
          </MaySwipeable>
          <MaySwipeable onSwiped={onSwiped} disabled={Bottom.disableDefaultSwipe}>
            <BottomPanel
              showBottom={bottom}
              ref={selected === Bottom && !forwardScrollingRef ? scrollingRef : null}
              footerHeight={footerHeight}
              headerHeight={headerHeight}
            >
              <Bottom
                {...matchProps}
                hasSession={hasSession}
                sessionId={sessionId}
                scrollingRef={selected === Bottom && forwardScrollingRef ? scrollingRef : null}
              />
            </BottomPanel>
          </MaySwipeable>
          <LoginPanel hasSession={hasSession} headerHeight={headerHeight} footerHeight={footerHeight}>
            <Login />
          </LoginPanel>
          <Swipeable onSwipedLeft={closeSidepanel}>
            <ScreenBlock
              isSidePanelOpen={isSidePanelOpen}
              onClick={closeSidepanel}
            />
          </Swipeable>
          <ButtonContainer>
            <Zoom in={control && !isSidePanelOpen && !scrolling}>
              <Fab color="secondary" size="medium" aria-label="edit">
                <Control {...matchProps} />
              </Fab>
            </Zoom>
          </ButtonContainer>
        </Screen>
      </Root>
      <Sidebar open={isSidePanelOpen} headerHeight={headerHeight} footerHeight={footerHeight} />
      <FooterContainer footerHeight={footerHeight} >
        <Footer {...matchProps} />
      </FooterContainer>
      <GlobalIndicator />
      <Toast />
    </Fragment >
  );
}

export default withStyles(styles)(MainLayout);