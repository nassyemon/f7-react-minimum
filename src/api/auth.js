import fetch from "isomorphic-fetch";
import { OAHTH2_LOGIN_ENDPOINT, OAHTH2_REFRESH_SESSION_ENDPOINT, OAUTH2_LOGOUT_ENDPOINT } from "../const/apiEndpoints";
import { getHeaders, getValidatedResponse } from "./utils";

export const checkAuth = async (sessionId) => {
  const response = await fetch(OAHTH2_REFRESH_SESSION_ENDPOINT, {
    method: "POST",
    headers: getHeaders(sessionId),
    body: "",
  });
  return getValidatedResponse(response);
};

export const getSession = async (code) => {
  const body = JSON.stringify({ code });
  const response = await fetch(OAHTH2_LOGIN_ENDPOINT, {
    method: "POST",
    headers: getHeaders(),
    body,
  });
  return getValidatedResponse(response);
};

export const destroySession = async (sessionId) => {
  const response = await fetch(OAUTH2_LOGOUT_ENDPOINT, {
    method: "POST", // TODO: should be DELETE?
    headers: getHeaders(sessionId),
    body: "",
  });
  return getValidatedResponse(response);
};
