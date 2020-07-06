import { UNAUTHORIZED, UNHANDLED_ERROR } from "../const/apiErrorCodes";

export function getHeaders(session) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Api-Session-Id": session || "",
  };
}

export async function getValidatedResponse(response) {
  const statusCode = response.status;
  if (statusCode === 401) {
    const body = await response.text();
    try {
      const json = JSON.parse(body);
      const { code, message, ...opts } = json;
      throw createError(401, UNAUTHORIZED, message, opts);
    } catch (error) {
      throw createError(401, UNAUTHORIZED, body);
    }
  }
  if (statusCode >= 400) {
    const body = await response.text();
    try {
      const json = JSON.parse(body);
      const { code, message, ...opts } = json;
      throw createError(statusCode, code, message, opts);
    } catch (error) {
      // TODO
      throw createError(statusCode, UNHANDLED_ERROR, body);
    }
  }
  const json = await response.json();
  console.log(json);
  return json;
}

function createError(status, code, message, opts) {
  return Object.assign(new Error(), { status, code, message, opts });
}

