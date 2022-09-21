import { g as getAPI } from "../../../../chunks/api.js";
import { r as redirect, e as error } from "../../../../chunks/index2.js";
import cookie__default from "cookie";
async function load({ url, request, setHeaders }) {
  let cart, loading = false;
  try {
    loading = true;
    const res = await getAPI("carts/refresh-cart", request.headers);
    if (res) {
      const cookieCart = {
        items: res == null ? void 0 : res.items,
        qty: +(res == null ? void 0 : res.qty),
        tax: +(res == null ? void 0 : res.tax),
        subtotal: +(res == null ? void 0 : res.subtotal),
        total: +(res == null ? void 0 : res.total),
        currencySymbol: res == null ? void 0 : res.currencySymbol,
        discount: res == null ? void 0 : res.discount,
        selfTakeout: res == null ? void 0 : res.selfTakeout,
        shipping: res == null ? void 0 : res.shipping,
        unavailableItems: res == null ? void 0 : res.unavailableItems,
        formattedAmount: res == null ? void 0 : res.formattedAmount
      };
      const str = cookie__default.serialize("cart", JSON.stringify(cookieCart), { path: "/" });
      setHeaders({ "set-cookie": str });
      cart = cookieCart;
    }
  } catch (e) {
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzz", e);
    if ((e == null ? void 0 : e.status) === 401) {
      throw redirect(307, "/auth/otp-login");
    }
    throw error(400, (e == null ? void 0 : e.message) || e);
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=200"
  });
  return { loadingCart: loading, cart };
}
export {
  load
};
