import { push, replace, goBack } from "connected-react-router";

export { goBack };

export const moveToWebCamera = () => push("/camera");
export const replaceToWebCamera = () => replace("/camera");
export const moveToSubmitPicture = () => push("/submit-picture");
export const replaceToSubmitPicture = () => replace("/submit-picture");

export const replaceToHome = () => replace("/");
export const moveToHome = () => push("/");
export const moveToDocuments = () => push("/documents");
export const replaceToDocuments = () => replace("/documents");
export const moveToDocumentsEdit = () => push("/documents/edit");
export const moveToDocumentsDelete = () => push("/documents/delete");
export const moveToDocumentDetail = (id) => push(`/documents/detail/${id}`);
export const moveToSetting = () => push("/setting");
