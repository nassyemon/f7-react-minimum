import fetch from "isomorphic-fetch";
import {
  DOCUMENT_ENDPOINT,
  DOCUMENT_LIST_ENDPOINT,
} from "../const/apiEndpoints";
import { getHeaders, getValidatedResponse } from "./utils";

export const getDocumentList = async (sessionId) => {
  const response = await fetch(DOCUMENT_LIST_ENDPOINT, {
    headers: getHeaders(sessionId),
  });
  return getValidatedResponse(response);
};

export const getDocument = async (sessionId, id) => {
  const response = await fetch(`${DOCUMENT_ENDPOINT}/${id}`, {
    headers: getHeaders(sessionId),
  });
  return getValidatedResponse(response);
};


export const postDocument = async (sessionId, { image, title }) => {
  const response = await fetch(DOCUMENT_ENDPOINT, {
    method: "POST",
    headers: getHeaders(sessionId),
    body: JSON.stringify({
      image,
      title,
    }),
  });
  return getValidatedResponse(response);
};
