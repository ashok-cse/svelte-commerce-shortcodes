import { g as getAPI } from "../../../../../../chunks/api.js";
import { e as error } from "../../../../../../chunks/index2.js";
const prerender = false;
async function load({ params, url, parent, request }) {
  const { store } = await parent();
  let orderId = url.searchParams.get("orderId");
  url.searchParams.get("itemId");
  const order = await getAPI(`orders/order-items/${orderId}?store=${store == null ? void 0 : store.id}`, request.headers);
  if (order) {
    return { order };
  } else {
    throw error(404, "Order not found");
  }
}
export {
  load,
  prerender
};
