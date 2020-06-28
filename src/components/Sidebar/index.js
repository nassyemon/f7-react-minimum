import { compose } from "recompose";
import { connect } from "react-redux";
import { closeSidepanel } from "../../actions/sidepanel";
import { usingCordova } from "../../modules/cordovaUtils";
import Sidebar from "./Sidebar";

const endpointHost = "https://lvktm7vhal.execute-api.ap-northeast-1.amazonaws.com";
const loginUrl = "https://lvktm7vhal.execute-api.ap-northeast-1.amazonaws.com/test/github";

const mapDispatchToProps = dispatch => {
  return {
    onClickSidepanel: () => dispatch(closeSidepanel()),
    onClickLogin: () => {
        // TODO spinner
        if(usingCordova()){
          console.log(cordova?.InAppBrowser);
          const ref = window.open(loginUrl, "_blank", "location=yes,footer=yes");
          ref.addEventListener("message", (params) => {
            console.log(params);
            ref.close();
          });
          setTimeout(() => {
            ref.close();
          }, 60*1000);
        } else {
          let accessToken = null;
          const w = window.open(loginUrl+"?web=1", "_blank", "location=yes,footer=yes");
          let handler = setInterval(() => {
            w.postMessage({ type: "REQUEST_ACCESS_TOKEN" }, endpointHost);
          }, 1000);
          window.addEventListener("message", (event) => {
            const { type, token } = event.data;
            // console.log(event.data);
            if (type === "ACCESS_TOKEN") {
              clearInterval(handler);
              accessToken = token;
              handler = setInterval(() => {
                w.postMessage({ type: "REQUEST_CLOSE_WINDOW" }, endpointHost);
              }, 1000);
            }
            console.log(event);
            if (type === "CLOSE_WINDOW") {
              clearInterval(handler);
              alert(JSON.stringify(accessToken));
            }
          });
        }
        // let ref = window.open("https://www.google.com");
        /*
        console.log(ref);
        setTimeout(() => {
            ref.close();
        }, 5000);
        */
    },
  };
};

export default compose(connect(null, mapDispatchToProps))(Sidebar);
