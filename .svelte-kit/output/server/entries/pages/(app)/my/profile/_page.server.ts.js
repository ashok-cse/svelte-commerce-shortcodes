import { g as getAPI } from "../../../../../chunks/api.js";
import { e as error, r as redirect } from "../../../../../chunks/index2.js";
import dayjs from "dayjs";
async function load({ request, parent }) {
  const { me, store } = await parent();
  let profile = {};
  try {
    const data = await getAPI(`users/me`, request.headers);
    data.dob = data.dob ? dayjs(data.dob).format("YYYY-MM-DD") : null;
    profile = data || {
      email: me.email,
      firstName: me.firstName || "",
      lastName: me.lastName || ""
    };
  } catch (e) {
    throw error(401, "You are not authorized to access this page.");
  } finally {
  }
  if (profile) {
    return { profile, store };
  }
  throw redirect(307, "Please login again");
}
export {
  load
};
