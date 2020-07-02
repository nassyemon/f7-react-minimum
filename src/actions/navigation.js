import { push, replace, goBack } from "connected-react-router";

export const moveToWebCamera = () => push("/camera");
export const replaceToWebCamera = () => replace("/camera");
export const moveToSubmitPicture = () => push("/submit-picture");
export const replaceToSubmitPicture = () => replace("/submit-picture");

export const moveToHome = () => push("/");
export const moveToDocuments = () => push("/documents");
export const moveToSetting = () => push("/setting");
