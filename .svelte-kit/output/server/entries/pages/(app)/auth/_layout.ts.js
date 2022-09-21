import { g as getAPI } from "../../../../chunks/api.js";
import { D as DOMAIN, s as stripePublishableKey } from "../../../../chunks/index5.js";
import cookie__default from "cookie";
import { i as id, b as address, p as phone, e as email, w as websiteName, c as websiteLegalName } from "../../../../chunks/website.js";
const prerender = false;
async function load({ url, request, setHeaders }) {
  url.pathname === "/";
  let currentPage = +url.searchParams.get("page") || 1;
  let q = url.searchParams.get("q") || "";
  let cart, store, serializedCart, serializedStore;
  try {
    const res = await getAPI("carts/my", request.headers);
    if (res) {
      const cookieCart = {
        items: res == null ? void 0 : res.items,
        qty: res == null ? void 0 : res.qty,
        tax: res == null ? void 0 : res.tax,
        subtotal: res == null ? void 0 : res.subtotal,
        total: res == null ? void 0 : res.total,
        currencySymbol: res == null ? void 0 : res.currencySymbol,
        discount: res == null ? void 0 : res.discount,
        selfTakeout: res == null ? void 0 : res.selfTakeout,
        shipping: res == null ? void 0 : res.shipping,
        unavailableItems: res == null ? void 0 : res.unavailableItems,
        formattedAmount: res == null ? void 0 : res.formattedAmount
      };
      cart = cookieCart;
      serializedCart = cookie__default.serialize("cart", JSON.stringify(cookieCart) || "", {
        path: "/"
      });
    }
  } catch (e) {
  } finally {
  }
  try {
    const cookieStore = {
      id,
      domain: DOMAIN,
      logo: `/logo.png?tr=w-auto,h-56:w-auto,h-56`,
      address,
      phone,
      email,
      websiteName,
      websiteLegalName,
      stripePublishableKey
    };
    store = cookieStore;
    serializedStore = cookie__default.serialize("store", JSON.stringify(cookieStore) || "", {
      path: "/"
    });
  } catch (e) {
  } finally {
  }
  setHeaders({ cart: serializedCart });
  setHeaders({ store: serializedStore });
  return {
    url: url.href,
    currentPage,
    q,
    cart,
    store
  };
}
export {
  load,
  prerender
};
