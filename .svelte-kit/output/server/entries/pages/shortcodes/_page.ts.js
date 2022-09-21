import { g as getAPI } from "../../../chunks/api.js";
async function load({ url, params, fetch, parent, setHeaders }) {
  const { store } = await parent();
  let loading = false, err, faqs, count;
  try {
    loading = true;
    const res = await getAPI(`short-code?store=${store == null ? void 0 : store.id}`);
    faqs = res == null ? void 0 : res.data;
    count = res == null ? void 0 : res.count;
  } catch (e) {
    err = e;
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return { loading, err, faqs, count };
}
export {
  load
};
