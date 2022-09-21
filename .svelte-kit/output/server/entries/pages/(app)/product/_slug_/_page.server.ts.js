import { g as getAPI } from "../../../../../chunks/api.js";
import { e as error } from "../../../../../chunks/index2.js";
async function load({ params, parent, setHeaders }) {
  const { store } = await parent();
  const { slug } = params;
  let product = null;
  let relatedProducts = [];
  try {
    product = await getAPI(`products/${slug}`);
    relatedProducts = await getAPI(
      `products/frequently-bought-together?store=${store == null ? void 0 : store.id}&groupId=${product == null ? void 0 : product.groupId}`
    );
    if (!product)
      throw error(404, "Product not found");
    setHeaders({
      "cache-control": "public, max-age=300"
    });
  } catch (e) {
  } finally {
    return { product, relatedProducts };
  }
}
export {
  load
};
