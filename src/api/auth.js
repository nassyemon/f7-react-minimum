import fetch from "isomorphic-fetch";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const AUCH_CHECK_URL = "https://lvktm7vhal.execute-api.ap-northeast-1.amazonaws.com/test/github/check"

export const authCheck = async (accessToken) => {
  const body = JSON.stringify({ accessToken });
  const response = await fetch(AUCH_CHECK_URL, {
    method: "POST",
    headers,
    body,
  });
  if (response.status >= 400) {
      throw new Error("Invalid response");
  }
  const json = await response.text();
  console.log(json);
  return "json";
};
