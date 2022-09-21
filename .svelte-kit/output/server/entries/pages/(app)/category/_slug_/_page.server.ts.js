import { g as getAPI } from "../../../../../chunks/api.js";
import { e as error } from "../../../../../chunks/index2.js";
async function load({ params, parent, setHeaders }) {
  await parent();
  try {
    const { slug } = params;
    const category = await getAPI(`categories/${slug}`);
    if (category) {
      setHeaders({
        "cache-control": "public, max-age=300"
      });
      return { category };
    }
  } catch (e) {
    throw error(400, e == null ? void 0 : e.message);
  }
  throw error(404, "Category not found");
}
export {
  load
};
