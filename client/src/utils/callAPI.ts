export async function callAPI(
  url: string,
  param: any,
  method: string,
  body: object
) {
  const baseURL = "http://localhost:3000";
  let endpoint = baseURL + url;
  let json = null;
  let header = { "Content-Type": "application/json" };

  if (param != null) {
    endpoint = endpoint + param;
  }

  if (method == "GET") {
    const res = await fetch(endpoint, {
      method: method,
      headers: header,
    });
    json = await res.json();
  } else if (method == "POST") {
    const res = await fetch(endpoint, {
      method: method,
      headers: header,
      body: JSON.stringify(body),
    });
    json = await res.json();
  } else if (method == "UPDATE") {
    const res = await fetch(endpoint, {
      method: method,
      headers: header,
      body: JSON.stringify(body),
    });
    json = await res.json();
  } else if (method == "DELETE") {
    const res = await fetch(endpoint, {
      method: method,
      headers: header,
    });
    json = await res.json();
  }

  return json;
}
