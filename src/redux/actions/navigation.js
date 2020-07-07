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

export const moveToDocumentsLeft = () => push("/documents/left");
export const moveToDocumentsRight = () => push("/documents/right");

export const moveToDocumentsLeftItem1 = () => push("/documents/left/item1");
export const moveToDocumentsLeftItem2 = () => push("/documents/left/item2");
export const moveToDocumentsLeftItem3 = () => push("/documents/left/item3");

export const moveToDocumentsRightItem1 = () => push("/documents/right/item1");
export const moveToDocumentsRightItem2 = () => push("/documents/right/item2");

export const moveToSetting = () => push("/setting");
