import { g as getAPI } from "../../../../../chunks/api.js";
const prerender = false;
async function load({ url }) {
  let ads = {};
  let addressId = url.searchParams.get("id");
  url.searchParams.get("prescription");
  if (addressId === "new") {
    ads = { id: "new" };
  } else {
    ads = await getAPI(`addresses/${addressId}`);
  }
  return {
    ads
  };
}
export {
  load,
  prerender
};
