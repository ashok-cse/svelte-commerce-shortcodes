import { g as getAPI } from "../../../../../chunks/api.js";
import { r as redirect, e as error } from "../../../../../chunks/index2.js";
const prerender = false;
async function load({ request, url }) {
  var _a, _b;
  try {
    let err, myAddresses, selectedAddress;
    myAddresses = await getAPI("addresses/my", request.headers);
    selectedAddress = (_a = myAddresses == null ? void 0 : myAddresses.data[0]) == null ? void 0 : _a._id;
    let currentPage = +url.searchParams.get("page") || 1;
    let q = url.searchParams.get("q") || "";
    const cart = await getAPI("carts/refresh-cart", request.headers);
    if ((_b = myAddresses == null ? void 0 : myAddresses.data) == null ? void 0 : _b.length) {
      return {
        cart,
        myAddresses,
        selectedAddress,
        url: url.href,
        currentPage,
        q,
        err
      };
    } else {
      return {
        cart,
        myAddresses: [],
        selectedAddress,
        url: url.href,
        currentPage,
        q,
        err
      };
    }
  } catch (e) {
    if (e.status === 401) {
      throw redirect(307, `/auth/otp-login?ref=${url == null ? void 0 : url.pathname}`);
    } else {
      throw error(500, e == null ? void 0 : e.message);
    }
  }
}
export {
  load,
  prerender
};
