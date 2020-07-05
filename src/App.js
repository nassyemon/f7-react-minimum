import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { connect } from "react-redux";
import { history } from "./redux/store";
import DefaultRoute from "./routes/DefaultRoute";
import EmptyRoute from "./routes/EmptyRoute";
import { goBack } from "./redux/actions/navigation";
import { openSidePanel } from "./redux/actions/sidepanel";


import Home from "./components/Home";
import Camera from "./components/Camera";
import Setting from "./components/Setting";
import Documents from "./components/Documents";
import DocumentDetail from "./components/DocumentDetail";
import SubmitPicture from "./components/SubmitPicture";
import EditControl from "./components/EditControl";

import EditFooter from "./components/EditFooter";

const theme = createMuiTheme();

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const NotFound = () => {
  return <div>NotFound???</div>;
};

const onSwipeRight = (func) => ({ dir }) => dir === "Right" && func();

function App({ settings, goBack, openSidePanel }) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <Root>
            <ConnectedRouter history={history}>
              <Switch>
                <DefaultRoute path="/home"
                  component={Home}
                  onSwiped={onSwipeRight(openSidePanel)}
                />
                <DefaultRoute path="/setting"
                  component={Setting}
                  onSwiped={onSwipeRight(openSidePanel)}
                />
                <EmptyRoute path="/camera"
                  component={Camera}
                  onSwiped={onSwipeRight(goBack)}
                />
                <DefaultRoute
                  path="/submit-picture"
                  component={SubmitPicture}
                  onSwiped={onSwipeRight(openSidePanel)}
                />
                <DefaultRoute
                  exact path="/documents"
                  component={Documents}
                  rightComponent={DocumentDetail}
                  controlComponent={EditControl}
                  showControl={true}
                  onSwiped={onSwipeRight(openSidePanel)}
                />
                <DefaultRoute
                  exact path="/documents/edit"
                  component={Documents}
                  rightComponent={DocumentDetail}
                  onSwiped={onSwipeRight(openSidePanel)}
                  footerComponent={EditFooter}
                />
                <DefaultRoute
                  path="/document/:id"
                  component={Documents}
                  rightComponent={DocumentDetail}
                  show="right"
                  onSwiped={onSwipeRight(goBack)}
                />
                <DefaultRoute path="/" component={Home} />
                <EmptyRoute component={NotFound} />
              </Switch>
            </ConnectedRouter>
          </Root>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => dispatch(goBack()),
    openSidePanel: () => dispatch(openSidePanel()),
  };
};

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
