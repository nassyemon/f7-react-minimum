import qs from "query-string";
import { login } from "../actions/login";
import { usingCordova } from "./cordovaUtils";
import { OAUTH2_REQUEST_URL, OAUTH2_CALLBACK_URL } from "../const/apiEndpoints";

const REQUEST_MESSAGE_CODE = "REQUEST_AUTH_CODE";
const REQUEST_MESSAGE_COMPLETE = "REQUEST_CLOSE_WINDOW";
const RESPONSE_MESSAGE_CODE = "AUTH_CODE";
const RESPONSE_MESSAGE_COMPLETE = "CLOSE_WINDOW";

export default (dispatch) => {
  if (usingCordova()) {
    return cordovaLogin(dispatch);
  }
  browserLogin(dispatch);
};

function cordovaLogin(dispatch) {
  const w = cordova.InAppBrowser.open(
    OAUTH2_REQUEST_URL,
    "_blank",
    "location=yes,footer=yes"
  );
  let oAuth2Code = null;
  w.addEventListener("loadstop", async (event) => {
    console.log(JSON.stringify(event));
    const { url } = event;
    const [, query = ""] = url.split("?");
    // TODO: error handler
    const { code = null } = qs.parse(query) || {};
    console.log("code=" + code);
    if (!oAuth2Code) {
      oAuth2Code = code;
      await dispatch(login(code));
      w.close();
    }
  });
}

function browserLogin(dispatch) {
  const w = window.open(OAUTH2_REQUEST_URL, "_blank", "location=yes,footer=yes,width=480,height=640");
  let handler = setInterval(() => {
    w.postMessage({ type: REQUEST_MESSAGE_CODE }, OAUTH2_CALLBACK_URL);
  }, 100);
  let oAuth2Code = null;
  window.addEventListener("message", async (event) => {
    const { type, code } = event.data;
    console.log(event.data);
    if (type === RESPONSE_MESSAGE_CODE) {
      console.log(code);
      if (!code) {
        // TODO: error handler
      }
      if (!oAuth2Code) {
        clearInterval(handler);
        oAuth2Code = code;
        await dispatch(login(code));
      }
      handler = setInterval(() => {
        w.postMessage({ type: REQUEST_MESSAGE_COMPLETE }, OAUTH2_CALLBACK_URL);
      }, 100);
    } else if (type === RESPONSE_MESSAGE_COMPLETE) {
      clearInterval(handler);
    }
    // TODO: error handler
  });
}