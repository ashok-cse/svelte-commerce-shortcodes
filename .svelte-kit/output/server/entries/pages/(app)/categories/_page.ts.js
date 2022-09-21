import { g as getAPI } from "../../../../chunks/api.js";
async function load({ url, params, fetch, parent, setHeaders }) {
  const { store } = await parent();
  let loading = false, megaMenu;
  try {
    loading = true;
    const res = await getAPI(`categories/megamenu?megamenu=true&store=${store == null ? void 0 : store.id}`);
    megaMenu = res;
  } catch (e) {
  } finally {
    loading = false;
  }
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  return { megaMenu };
}
export {
  load
};
