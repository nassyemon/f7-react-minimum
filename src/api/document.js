import fetch from "isomorphic-fetch";
import { DOCUMENT_LIST_ENDPOINT } from "../const/apiEndpoints";
import { getHeaders, getValidatedResponse } from "./utils";

export const getDocumentList = async sessionId => {
  const response = await fetch(DOCUMENT_LIST_ENDPOINT, {
    headers: getHeaders(sessionId),
  });
  return getValidatedResponse(response);
};