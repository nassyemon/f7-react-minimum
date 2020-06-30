// Import React and ReactDOM
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

// hot loader
import { AppContainer } from "react-hot-loader";
import { PersistGate } from "redux-persist/integration/react";

// store
import { store, persistor } from "./store";
import { awaitReady, setWindowOpenToInAppBrower } from "./modules/cordovaUtils";

// Import main App component
import App from "./App";
// css
import "typeface-roboto";
import "react-html5-camera-photo/build/css/index.css";

// Custom app styles
import "./css/app.css";

const rootElement = document.getElementById("app");
awaitReady().then(() => {
  setWindowOpenToInAppBrower();
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
            <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        </Provider>
      </AppContainer>,
    rootElement
  );

  if (module.hot) {
    module.hot.accept("./App", () => {
      const NextApp = require("./App").default;
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <NextApp />
            </Provider>
          </AppContainer>,
        rootElement
      );
    });
  }
});
