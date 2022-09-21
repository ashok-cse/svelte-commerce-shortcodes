import "cookie";
import "./store.js";
const handle = async ({ event, resolve }) => {
  const request = event.request;
  request.headers.delete("connection");
  const response = await resolve(event);
  return response;
};
const getSession = ({ locals }) => {
};
export {
  getSession,
  handle
};
