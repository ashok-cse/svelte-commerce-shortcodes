import { w as writable } from "./index3.js";
import Cookie from "cookie-universal";
Cookie();
const loginUrl = writable("/auth/login");
const loadingDelayed = writable(false);
export {
  loginUrl as a,
  loadingDelayed as l
};
