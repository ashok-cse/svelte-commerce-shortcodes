import { g as getAPI } from "../../../../../chunks/api.js";
import { e as error } from "../../../../../chunks/index2.js";
async function load({ params, request }) {
  const addresses = await getAPI(`addresses/my`, request.headers);
  if (addresses) {
    return { addresses: addresses.data };
  }
  throw error(404, "Addresses not found");
}
export {
  load
};
