import { g as getAPI } from "../../../../chunks/api.js";
import { r as redirect } from "../../../../chunks/index2.js";
async function load({ request, parent, url }) {
  const { me, store } = await parent();
  try {
    const myOrders = await getAPI(`orders/my?store=${store == null ? void 0 : store.id}`, request.headers);
    const myWishlist = await getAPI(`wishlists/my?store=${store == null ? void 0 : store.id}`, request.headers);
    const myReviews = await getAPI(`reviews?store=${store == null ? void 0 : store.id}`, request.headers);
    return { me, myOrders, myWishlist, myReviews };
  } catch (e) {
    if (e.status === 401) {
      throw redirect(307, "/auth/otp-login");
    }
  }
}
export {
  load
};
