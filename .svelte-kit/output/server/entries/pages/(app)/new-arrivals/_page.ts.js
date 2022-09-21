import { g as getAPI } from "../../../../chunks/api.js";
async function load({ url, params, fetch, parent, setHeaders }) {
  var _a;
  const { store } = await parent();
  let loading = false, newArrivals, products, productsCount;
  try {
    loading = true;
    const res1 = await getAPI(`categories/megamenu?store=${store == null ? void 0 : store.id}`);
    newArrivals = res1.filter((m) => {
      return m.name === "New Arrivals";
    });
    const res2 = await getAPI(`products?categories=${(_a = newArrivals[0]) == null ? void 0 : _a._id}&store=${store == null ? void 0 : store.id}`);
    products = res2 == null ? void 0 : res2.data;
    productsCount = res2 == null ? void 0 : res2.count;
  } catch (e) {
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return { newArrivals, products, productsCount };
}
export {
  load
};
