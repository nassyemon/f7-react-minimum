export const usingCordova = () => window.hasOwnProperty("cordova");

export const awaitReady = () => {
  if (usingCordova()) {
    console.log("using cordova.");
    return new Promise((resolve, reject) => {
      document.addEventListener(
        "deviceready",
        () => {
          console.log("device ready!");
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
