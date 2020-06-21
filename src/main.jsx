// Import React and ReactDOM
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-React plugin
import Framework7React from 'framework7-react';

// Import Framework7-Redux plugin
import { framework7ReduxPlugin } from 'framework7-redux';

// hot loader
import { AppContainer } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/integration/react'


// store
import { store, persistor } from './store';
// Import main App component
import App from './App';

// Framework7 styles
import 'framework7/css/framework7.min.css';

// css 
import 'react-html5-camera-photo/build/css/index.css';

// Icons
import './css/icons.css';

// Custom app styles
import './css/app.css';

// Init Framework7-React plugin
Framework7.use(Framework7React);

// Init Framework7-Redux plugin
Framework7.use(framework7ReduxPlugin);

const rootElement = document.getElementById('app');
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
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NextApp />
          </PersistGate>
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}
