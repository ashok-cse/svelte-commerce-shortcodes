import { g as getAPI } from "../../../../../chunks/api.js";
import { e as error } from "../../../../../chunks/index2.js";
const prerender = false;
async function load({ parent, url, params, setHeaders }) {
  try {
    const { store } = await parent();
    const banners = await getAPI(`banners?pageId=${params.slug}&store=${store.id}`);
    const groupByBanners = await getAPI(`banners/group?pageId=${params.slug}&store=${store.id}`);
    if (banners || groupByBanners) {
      setHeaders({
        "cache-control": "public, max-age=300"
      });
      return { banners, groupByBanners };
    }
  } catch (e) {
    throw error(400, (e == null ? void 0 : e.message) || e);
  }
}
export {
  load,
  prerender
};
