import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import login from "./reducers/login";
import sidepanel from "./reducers/sidepanel";
import picture from "./reducers/picture";
import settings from "./reducers/settings";

const preloadedState = {};

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [
  thunk,
  process.env.NODE_ENV === "development" && logger,
].filter(Boolean);

const rootReducer = combineReducers({
  login,
  picture,
  settings,
  sidepanel,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["login", "settings"],
  },
  rootReducer
);

export const store = createStore(
  persistedReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
