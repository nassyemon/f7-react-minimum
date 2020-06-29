import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

import Home from "./containers/Home";
import Setting from "./containers/Setting";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

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
`;

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <RouteComponent {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <RouteComponent {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

function App({ settings }) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <Root>
            <Router>
              <Switch>
                <DashboardRoute path="/dashboard" component={Home} />
                <DashboardRoute path="/setting" component={Setting} />
                <DashboardRoute exact path="/" component={Home} />
                <EmptyRoute component={NotFound} />
              </Switch>
            </Router>
          </Root>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStateToProps, null)(App);
