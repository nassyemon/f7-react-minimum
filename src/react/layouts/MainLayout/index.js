import { compose } from "recompose";
import { connect } from "react-redux";

import { isOpen } from "../../../redux/selectors/sidepanel";
import { isSending as isPictureSending } from "../../../redux/selectors/picture";
import { hasSession, getSessionId } from "../../../redux/selectors/login";
import { closeSidepanel, openSidePanel } from "../../../redux/actions/sidepanel";
import { goBack } from "../../../redux/actions/navigation";

import Blank from "../../components/Blank";
import None from "../../components/None";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/Sidebar";


import MainLayout from "./MainLayout"

const mapDispatchToProps = (dispatch) => ({
  closeSidepanel: () => dispatch(closeSidepanel()),
  goBack: () => dispatch(goBack()),
  openSidePanel: () => dispatch(openSidePanel()),
});

const mapStateToProps = (state) => {
  const pictureSending = isPictureSending(state);
  const sending = [pictureSending].some(Boolean);
  return {
    sending,
    hasSession: hasSession(state),
    sessionId: getSessionId(state),
    isSidePanelOpen: isOpen(state),
  };
};


const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    mainComponent = Blank,
    rightComponent = Blank,
    bottomComponent = Blank,
    footerComponent = Footer,
    controlComponent = None,
    headerComponent = Header,
    sidepanelComponent = Sidebar,
    onSwiped,
    right,
    bottom,
  } = ownProps;
  const { goBack, openSidePanel } = dispatchProps;
  const selected = getSelectedComponent({
    mainComponent,
    rightComponent,
    bottomComponent,
    right,
    bottom,
  });
  const canGoBack = selected.canGoBack;
  const forwardScrollingRef = selected.acceptScrollingRef;

  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    mainComponent,
    rightComponent,
    bottomComponent,
    footerComponent,
    controlComponent,
    headerComponent,
    sidepanelComponent,
    selected,
    forwardScrollingRef,
    onSwiped: typeof onSwiped === "function" ? onSwiped
      : onSwipedDefault({
        goBack,
        openSidePanel,
        canGoBack,
        right,
        bottom,
      }),
  };
};

function getSelectedComponent({
  mainComponent,
  rightComponent,
  bottomComponent,
  right,
  bottom,
}) {
  if (bottom) {
    return bottomComponent;
  }
  if (right) {
    return rightComponent;
  }
  return mainComponent;
}

function onSwipedDefault({
  goBack,
  openSidePanel,
  canGoBack,
  right,
  bottom,
}) {
  if (bottom) {
    return bottomSwipeAction;
  }
  if (right) {
    return rightSwipeAction;
  }
  return mainSwipeAction;

  function mainSwipeAction({ dir }) {
    if (dir === "Right") {
      if (canGoBack) {
        return goBack();
      }
      return openSidePanel();
    }
  }
  function rightSwipeAction({ dir }) {
    if (dir === "Right") {
      if (canGoBack) {
        return goBack();
      }
      return openSidePanel();
    }
  }
  function bottomSwipeAction({ dir }) {
    if (dir === "Right") {
      return openSidePanel();
    }
    if (dir === "Down") {
      if (canGoBack) {
        return goBack();
      }
    };
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
)(MainLayout);
