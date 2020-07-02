import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Swipeable } from "react-swipeable";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { isSending as isPictureSending } from "../selectors/picture";

import Login from "../components/Login";

const styles = () => ({});

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Screen = styled.main`
  width: 100vh;
  overflow-x: hidden;
  ${({ theme }) => `
  transition: ${theme.transitions.create(["transform"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})}; `}
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

function EmptyLayout({
  onSwiped,
  children,
}) {
  return (
    <Fragment>
      <Root>
        <Screen>
          <Swipeable onSwiped={onSwiped}>
            {children}
          </Swipeable>
        </Screen>
        <Login isSidePanelOpen={false} sideBarWidth={"0px"} />
      </Root>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
});

// TODO: refactor
const mapStateToProps = (state) => {
  const pictureSending = isPictureSending(state);
  const sending = [pictureSending].some(Boolean);
  return {
    sending,
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(EmptyLayout);
