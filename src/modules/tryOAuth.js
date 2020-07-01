import qs from "query-string";
import { usingCordova } from "./cordovaUtils";
import { OAUTH2_REQUEST_URL, OAUTH2_CALLBACK_URL } from "../const/apiEndpoints";

const REQUEST_MESSAGE_CODE = "REQUEST_AUTH_CODE";
const REQUEST_MESSAGE_COMPLETE = "REQUEST_CLOSE_WINDOW";
const RESPONSE_MESSAGE_CODE = "AUTH_CODE";
const RESPONSE_MESSAGE_COMPLETE = "CLOSE_WINDOW";

export default () => {
  if (usingCordova()) {
    return cordovaLogin();
  }
  return browserLogin();
};

function cordovaLogin() {
  return new Promise((resolve/*, reject*/) => {
    const w = cordova.InAppBrowser.open(
      OAUTH2_REQUEST_URL,
      "_blank",
      "location=yes,footer=yes",
    );
    // TODO: error handler
    w.addEventListener("loadstop", async (event) => {
      console.log(JSON.stringify(event));
      const { url } = event;
      const [, query = ""] = url.split("?");
      // TODO: error handler
      const { code = null } = qs.parse(query) || {};
      console.log("code=" + code);
      if (code) {
        w.close();
        resolve(code);
      }
      // TODO: error handler.
    });
  });
}

function browserLogin() {
  return new Promise((resolve/*, reject*/) => {
    const w = window.open(
      OAUTH2_REQUEST_URL,
      "_blank",
      "location=yes,footer=yes,width=480,height=640",
    );
    let handler = setInterval(() => {
      w.postMessage({ type: REQUEST_MESSAGE_CODE }, OAUTH2_CALLBACK_URL);
    }, 100);
    window.addEventListener("message", async (event) => {
      const { type, code } = event.data;
      console.log(event.data);
      if (type === RESPONSE_MESSAGE_CODE) {
        console.log(code);
        if (code) {
          clearInterval(handler);
          resolve(code);
          handler = setInterval(() => {
            w.postMessage({ type: REQUEST_MESSAGE_COMPLETE }, OAUTH2_CALLBACK_URL);
          }, 100);
          return;
        }
        // TODO: error handler.
      } else if (type === RESPONSE_MESSAGE_COMPLETE) {
        clearInterval(handler);
      }
      // TODO: error handler
    });
  });
}