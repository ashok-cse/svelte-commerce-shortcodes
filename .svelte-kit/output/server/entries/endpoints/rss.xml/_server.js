import { g as getAPI } from "../../../chunks/api.js";
import { w as websiteName, d as domain, a as description, i as id } from "../../../chunks/website.js";
import { d as date } from "../../../chunks/index4.js";
async function GET() {
  var _a;
  const resP = await getAPI(`es/products?store=${id}`);
  const products = (_a = resP == null ? void 0 : resP.data) == null ? void 0 : _a.map((product) => {
    product = {
      name: product._source.name.replace("&", ""),
      slug: product._source.slug,
      description: product._source.description,
      updatedAt: product._source.updatedAt
    };
    return product;
  });
  if (!products)
    return new Response(void 0, { status: 404 });
  const body = xml(products);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return {
    headers,
    body
  };
}
const xml = (products) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${websiteName}</title>
    <link>${domain}</link>
    <description>${description}</description>
    ${products.map(
  (product) => `
        <item>
          <title>${(product == null ? void 0 : product.name) || ""}</title>
          <description>${(product == null ? void 0 : product.description) || ""}</description>
          <link>${domain}/${product == null ? void 0 : product.slug}/</link>
          <pubDate>${date(product == null ? void 0 : product.updatedAt)}</pubDate>
          <content:encoded>${product == null ? void 0 : product.previewHtml} 
            <div style="margin-top: 50px; font-style: italic;">
              <strong>
                <a href="${domain}/${product.slug}" aria-label="Click to keep reading">
                  Keep Reading
                </a>
              </strong>  
            </div>
          </content:encoded>
        </item>
      `
).join("")}
  </channel>
</rss>`;
export {
  GET
};
