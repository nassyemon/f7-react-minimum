import React from "react";
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
import { history } from "../redux/store";
import DefaultRoute from "./routes/DefaultRoute";
import EmptyRoute from "./routes/EmptyRoute";
import DocumentsRoute from "./routes/DocumentsRoute";


import Home from "./components/main/Home";
import Camera from "./components/main/Camera";
import Setting from "./components/main/Setting";
import SubmitPicture from "./components/main/SubmitPicture";

const theme = createMuiTheme();

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const NotFound = () => {
  return <div>NotFound???</div>;
};

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <Root>
            <ConnectedRouter history={history}>
              <Switch>
                <DefaultRoute path="/setting"
                  mainComponent={Setting}
                />
                <EmptyRoute path="/camera"
                  component={Camera}
                />
                <DefaultRoute
                  path="/submit-picture"
                  mainComponent={SubmitPicture}
                />
                <DocumentsRoute
                  path="/documents"
                />
                <DefaultRoute path={["/", "/home"]}
                  mainComponent={Home}
                />
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
  };
};

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
