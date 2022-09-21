import { g as getAPI } from "../../../../../chunks/api.js";
import { e as error } from "../../../../../chunks/index2.js";
async function load({ params, parent, request }) {
  const { store } = await parent();
  try {
    const orders = await getAPI(`orders/order-items/my?store=${store == null ? void 0 : store.id}`, request.headers);
    if (orders) {
      return { orders };
    }
  } catch (e) {
    throw error(400, e == null ? void 0 : e.message);
  }
  throw error(404, "Orders not found");
}
export {
  load
};
