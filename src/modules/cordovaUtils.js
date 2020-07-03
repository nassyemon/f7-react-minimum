export const usingCordova = () => window.hasOwnProperty("cordova");

export const awaitReady = () => {
  if (usingCordova()) {
    console.log("using cordova.");
    return new Promise((resolve, reject) => {
      document.addEventListener(
        "deviceready",
        () => {
          console.log("device ready!");
          console.log(StatusBar);
          return resolve();
        },
        false
      );
    });
  }
  console.log("web platform.");
  return Promise.resolve();
};

export const setWindowOpenToInAppBrower = () => {
  if (usingCordova()) {
    global.window.open = cordova.InAppBrowser.open;
  }
};

export const hideStatusBar = () => {
  if (usingCordova()) {
    if (!StatusBar || !StatusBar.hide) {
      console.error("StatusBar.hide is not defined");
      return
    }
    console.log("hiding status bar.");
    StatusBar.hide();
  }
}