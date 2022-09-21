import { l as loadingDelayed } from "./store.js";
import { i as id } from "./website.js";
let typingTimer;
const send = async ({ method, path, params, data, token, headers }) => {
  var _a, _b;
  if (path.includes(".png") || path.includes(".jpg") || path.includes(".svg") || path.includes(".json") || path.includes(".css") || path.includes("undefined"))
    return;
  const WWW_URL = "http://localhost:3000";
  let origin = WWW_URL;
  let storeId = id;
  if (headers && headers.get("cookie") && headers.get("cookie").includes("store")) {
    origin = headers.get("origin") || headers.get("host");
    if (origin === "localhost:3000")
      origin = "http://localhost:3000";
    else
      origin = "https://" + origin;
  }
  let uri = new URL(path, WWW_URL);
  if (!path.includes("/api/")) {
    uri = new URL("api/" + path, origin);
  }
  uri.searchParams.get("domain");
  uri.searchParams.get("store");
  const opts = {
    method
  };
  opts.headers = headers ? headers : { Cache: "no-cache" };
  if (data) {
    data.store = storeId;
    const contentType = (data == null ? void 0 : data.files) && ((_a = data == null ? void 0 : data.files[0]) == null ? void 0 : _a.type);
    if (!(contentType == "image/jpeg" || contentType == "image/gif" || contentType == "image/png" || contentType == "image/ico" || contentType == "image/webp" || contentType == "application/pdf" || contentType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || contentType == "application/msword" || contentType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      opts.headers["Content-Type"] = "application/json";
      opts.body = JSON.stringify(data);
    } else {
      const form = new FormData();
      if (data && data.files) {
        for (let x of data.files) {
          form.append("files", x);
        }
      }
      for (let d in data) {
        if (d !== "files")
          form.append(d, data[d]);
      }
      opts.body = form;
    }
  }
  if (token) {
    opts.headers["Authorization"] = `Bearer ${token}`;
  }
  if (!params)
    params = {};
  if (params) {
    Object.keys(params).forEach((key) => uri.searchParams.append(key, params[key]));
  }
  try {
    const url = uri.toString();
    startDelayedLoadingIndicator();
    let response = await fetch(url, opts);
    cancelDelayedLoadingIndicator();
    const isJson = (_b = response.headers.get("content-type")) == null ? void 0 : _b.includes("application/json");
    const res = isJson ? await response.json() : await response.text();
    if ((res == null ? void 0 : res.status) > 399) {
      throw { status: res.status, message: res };
    } else if ((response == null ? void 0 : response.status) > 399) {
      throw { status: response.status, message: res };
    } else {
      return res;
    }
  } catch (e) {
    throw e;
  }
};
const getAPI = (path, headers) => {
  return send({ method: "GET", path, headers });
};
const post = (path, data, headers) => {
  return send({ method: "POST", path, data, headers });
};
const startDelayedLoadingIndicator = async () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    loadingDelayed.set(true);
  }, 5e3);
};
const cancelDelayedLoadingIndicator = async () => {
  clearTimeout(typingTimer);
  loadingDelayed.set(false);
};
export {
  getAPI as g,
  post as p
};
