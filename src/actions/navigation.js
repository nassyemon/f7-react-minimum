import { push, replace, goBack } from 'connected-react-router'

export const replaceToLogin = () => replace("/login");
export const moveToWebCamera = () => push("/camera");
export const replaceToWebCamera = () => replace("/camera");
export const moveToSubmitPicture = () => push("/submit-picture");
export const replaceToSubmitPicture = () => replace("/submit-picture");