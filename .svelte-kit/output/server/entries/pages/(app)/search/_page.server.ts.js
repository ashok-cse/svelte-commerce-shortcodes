import { g as getAPI } from "../../../../chunks/api.js";
import { e as error } from "../../../../chunks/index2.js";
const prerender = false;
async function load({ url, setHeaders, parent }) {
  const { store } = await parent();
  let loading = false, err, count, products, facets, ressss, fl = {};
  let currentPage = +url.searchParams.get("page") || 1;
  let sort = url.searchParams.get("sort");
  let searchData = url.searchParams.get("q");
  let query = url.searchParams;
  query.forEach(function(value, key) {
    fl[key] = value;
  });
  try {
    loading = true;
    const res = await getAPI(`es/products?${query.toString()}&store=${store == null ? void 0 : store.id}`);
    ressss = res;
    products = res == null ? void 0 : res.data;
    products = products.map((p) => {
      let p1;
      p1 = { ...p._source };
      p1.id = p._id;
      return p1;
    });
    count = res == null ? void 0 : res.count;
    facets = res == null ? void 0 : res.facets;
    err = !(res == null ? void 0 : res.count) ? "No result Not Found" : null;
  } catch (e) {
    err = e;
    throw error(400, (e == null ? void 0 : e.message) || e || "No results found");
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return {
    loading,
    err,
    currentPage,
    sort,
    products,
    count,
    facets,
    query: query.toString(),
    searchData,
    fl,
    ressss
  };
}
export {
  load,
  prerender
};
