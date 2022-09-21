import { g as getAPI } from "../../../../../../chunks/api.js";
import { e as error } from "../../../../../../chunks/index2.js";
async function load({ params, parent, request }) {
  const { store } = await parent();
  const { id } = params;
  let address;
  if (params.id === "new") {
    address = { id: "new" };
  } else {
    address = await getAPI(`addresses/${id}`, request.headers);
  }
  const countries = await getAPI("countries", { store: store == null ? void 0 : store.id });
  const states = await getAPI("states", {
    limit: 300,
    page: 0,
    countryCode: address == null ? void 0 : address.country
  });
  if (address) {
    return { address, countries, states };
  }
  throw error(404, "Address not found");
}
export {
  load
};
