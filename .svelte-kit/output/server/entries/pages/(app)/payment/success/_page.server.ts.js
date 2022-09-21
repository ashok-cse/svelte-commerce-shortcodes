import { p as post } from "../../../../../chunks/api.js";
import { r as redirect, e as error } from "../../../../../chunks/index2.js";
const prerender = false;
async function load({ url, request }) {
  let orderId = url.searchParams.get("id");
  let status = url.searchParams.get("status");
  let paymentMode = url.searchParams.get("provider");
  let loading, err, order;
  try {
    loading = true;
    request.headers.set("content-type", "application/json");
    const res = await post(
      `orders/pay-sucess-page-hit`,
      {
        paymentMode,
        status,
        orderId
      },
      request.headers
    );
    order = res;
  } catch (e) {
    if (e.status === 401) {
      throw redirect(307, "/auth/otp-login");
    }
    err = e;
    throw error(400, (e == null ? void 0 : e.message) || e);
  } finally {
    loading = false;
  }
  return { loading, status, paymentMode, order, err };
}
export {
  load,
  prerender
};
