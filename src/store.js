import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory, createHashHistory } from "history";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import { usingCordova } from "./modules/cordovaUtils";

import createReducer from "./reducers";

export const history = usingCordova()
  ? createHashHistory()
  : createBrowserHistory();

const preloadedState = {};

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [
  routerMiddleware(history),
  thunk,
  process.env.NODE_ENV === "development" && logger,
].filter(Boolean);

export const store = createStore(
  createReducer(history),
  preloadedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
