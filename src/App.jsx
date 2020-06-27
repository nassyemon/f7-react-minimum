import React from "react";
import { App, View, Statusbar } from "framework7-react";
import { navigateTo } from "framework7-redux";
import { openLogin } from "./actions/LoginActions";
import routes from "./routes";
import { store, stateKernel } from "./store";
import { hasSession } from "./selectors/LoginSelectors";

// Framework7 parameters here
const f7params = {
  id: "io.framework7.testapp", // App bundle ID
  name: "Framework7", // App name
  theme: "auto", // Automatic theme detection
  // App routes
  routes,
  // App Framework7 Redux state kernel
  stateKernel,
  // Disable F7 automated routing for Links
  clicks: {
    externalLinks: 'a[href="#"]',
  },
  // Disable F7 automated routing for backdrops
  panel: {
    closeByBackdropClick: false,
  },
  popup: {
    closeByBackdropClick: false,
  },
  statusbar: {
    enabled: false,
    iosOverlaysWebView: false,
  },
  // initialize
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
};

export default () => (
  <App params={f7params}>
    <Statusbar />
    <View id="main-view" url="/" main className="ios-edges" />
  </App>
);
