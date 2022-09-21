import { g as getAPI } from "../../../chunks/api.js";
import { e as error } from "../../../chunks/index2.js";
async function load({ params, query, parent, setHeaders }) {
  const { store } = await parent();
  const home = await getAPI(`home?store=${store == null ? void 0 : store.id}`);
  setHeaders({
    "cache-control": "public, max-age=300"
  });
  if (home) {
    return { home };
  }
  throw error(500, "Internal Server Error");
}
export {
  load
};
