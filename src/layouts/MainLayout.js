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
  ${({ theme }) => `
  margin-top: ${theme.spacing(7)}px;
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
    height: calc(100vh - ${theme.spacing(7)}px);
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
        <Header />
        <Screen isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth} onClick={closeSidepanel}>
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
        </Screen>
        <Login isSidePanelOpen={isSidePanelOpen} sideBarWidth={sideBarWidth} />
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
