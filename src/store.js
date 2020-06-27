import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  Framework7StateKernel,
  framework7Reducer,
  syncFramework7WithStore,
} from "framework7-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import loginReducer from "./reducers/LoginReducer";
import formReducer from "./reducers/FormReducer";
import pictureReducer from "./reducers/PictureReducer";

export const stateKernel = new Framework7StateKernel();

const preloadedState = {};

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [
  thunk,
  process.env.NODE_ENV === "development" && logger,
].filter(Boolean);

const rootReducer = combineReducers({
  framework7: framework7Reducer,
  login: loginReducer,
  form: formReducer,
  picture: pictureReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["login"],
  },
  rootReducer
);

export const store = createStore(
  persistedReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

syncFramework7WithStore(store, stateKernel);
