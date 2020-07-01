import fetch from "isomorphic-fetch";
import { OAHTH2_LOGIN_ENDPOINT, OAHTH2_REFRESH_SESSION_ENDPOINT, OAUTH2_LOGOUT_ENDPOINT } from "../const/apiEndpoints";

const getHeaders = (session) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Api-Session-Key": session || "",
});


export const checkAuth = async () => {
  const response = await fetch(OAHTH2_REFRESH_SESSION_ENDPOINT, {
    method: "POST",
    headers: getHeaders(),
    body,
  });
  return getValidatedResponse(response);
};

export const getSession = async code => {
  const body = JSON.stringify({ code });
  const response = await fetch(OAHTH2_LOGIN_ENDPOINT, {
    method: "POST",
    headers: getHeaders(),
    body,
  });
  return getValidatedResponse(response);
};

export const destorySession = async code => {
  const response = await fetch(OAUTH2_LOGOUT_ENDPOINT, {
    method: "POST", // TODO: should be DELETE?
    headers: getHeaders(),
    body: "",
  });
  return getValidatedResponse(response);
};

async function getValidatedResponse(response) {
  if (response.status >= 400) {
    console.error(await response.text());
    throw new Error("Invalid response");
  }
  const json = await response.json();
  console.log(json);
  return json;
}