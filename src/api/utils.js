export function getHeaders(session) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Api-Session-Id": session || "",
  };
}

export async function getValidatedResponse(response) {
  if (response.status >= 400) {
    console.error(await response.text());
    throw new Error("Invalid response");
  }
  const json = await response.json();
  console.log(json);
  return json;
}
