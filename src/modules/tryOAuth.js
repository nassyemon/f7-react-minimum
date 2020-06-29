
import { login } from "../actions/login";
import { usingCordova } from "./cordovaUtils";

const endpointHost = "https://lvktm7vhal.execute-api.ap-northeast-1.amazonaws.com";
const loginUrl = "https://lvktm7vhal.execute-api.ap-northeast-1.amazonaws.com/test/github";
const callbackUrl = "https://lvktm7vhal.execute-api.ap-northeast-1.amazonaws.com/test/github/callback";

export default (dispatch) => {
    let accessToken = null;
    if (usingCordova()) {
      const w = cordova.InAppBrowser.open(loginUrl, "_blank", "location=yes,footer=yes");
      w.addEventListener("loadstop", (event) => {
        console.log(JSON.stringify(event));
            if (event.url.startsWith(callbackUrl)) {　
            w.executeScript({code: "(function() { return JSON.stringify(window.accessToken); })()"}, (token) => {
              w.close();
              accessToken = JSON.parse(token);
              dispatch(login(accessToken));
            });
        }
      });
    } else {
      const w = window.open(loginUrl, "_blank", "location=yes,footer=yes");
      let handler = setInterval(() => {
        w.postMessage({ type: "REQUEST_ACCESS_TOKEN" }, endpointHost);
      }, 100);
      window.addEventListener("message", (event) => {
        const { type, token } = event.data;
        // console.log(event.data);
        if (type === "ACCESS_TOKEN") {
          clearInterval(handler);
          accessToken = token;
          handler = setInterval(() => {
            w.postMessage({ type: "REQUEST_CLOSE_WINDOW" }, endpointHost);
          }, 100);
        }
        console.log(event);
        if (type === "CLOSE_WINDOW") {
          clearInterval(handler);
          dispatch(login(accessToken));
        }
      });
  }
};
