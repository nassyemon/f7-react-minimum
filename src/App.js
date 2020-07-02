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
import { history } from "./store";
import DefaultRoute from "./routes/DefaultRoute";
import EmptyRoute from "./routes/EmptyRoute";
import { goBack } from "./actions/navigation";


import Home from "./components/Home";
import Camera from "./components/Camera";
import Setting from "./components/Setting";
import Documents from "./components/Documents";
import DocumentDetail from "./components/DocumentDetail";
import SubmitPicture from "./components/SubmitPicture";

/*
import { openLogin } from "./actions/LoginActions";
  view: {
    routesBeforeEnter(to, from, resolve, reject) {
      const router = this;
      const login = hasSession(store.getState());
      if (!login && to.url !== "/login/") {
        reject();
        store.dispatch(openLogin());
        return;
      }
      if (login && to.url === "/login/") {
        return reject();
      }
      resolve();
    },
  },
*/

const theme = createMuiTheme();

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const NotFound = () => {
  return <div>NotFound???</div>;
};

function App({ settings, goBack }) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <Root>
            <ConnectedRouter history={history}>
              <Switch>
                <DefaultRoute path="/home" component={Home} />
                <DefaultRoute path="/setting" component={Setting} />
                <EmptyRoute path="/camera" component={Camera} />
                <DefaultRoute
                  path="/submit-picture"
                  component={SubmitPicture}
                />
                <DefaultRoute
                  exact path="/documents"
                  component={Documents}
                />
                <DefaultRoute
                  path="/document/:id"
                  component={Documents}
                  rightComponent={DocumentDetail}
                  onRightSwiped={({ dir }) => dir === "Right" && goBack()}
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
  };
};

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
