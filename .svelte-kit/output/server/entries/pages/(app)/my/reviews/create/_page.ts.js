import { g as getAPI } from "../../../../../../chunks/api.js";
const prerender = false;
async function load({ url, params, fetch, context }) {
  let ref = url.searchParams.get("ref");
  let productId = url.searchParams.get("product");
  let product;
  try {
    product = await getAPI(`products/${productId}`);
  } catch (e) {
  } finally {
  }
  return {
    ref,
    product
  };
}
export {
  load,
  prerender
};
