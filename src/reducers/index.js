import { combineReducers, compose } from "redux";
import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import login from "./login";
import sidepanel from "./sidepanel";
import documents from "./documents";
import detail from "./detail";
import picture from "./picture";
import toast from "./toast";
import settings from "./settings";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    login,
    toast,
    picture,
    settings,
    sidepanel,
    documents,
    detail,
  });

export default (history) =>
  persistReducer(
    {
      key: "root",
      storage,
      whitelist: ["login", "settings"],
    },
    createRootReducer(history)
  );
