import { c as create_ssr_component, b as subscribe, d as escape, j as add_attribute, e as each, v as validate_component } from "./index.js";
/* empty css                                         */import { L as LazyImg } from "./LazyImg.js";
import { a as loginUrl } from "./store.js";
import { p as page } from "./stores.js";
/* empty css                                           */const css = {
  code: ".trans.svelte-1mkck3t{justify-content:start;overflow:hidden;padding-left:2px;transition:width .3s}.trans.svelte-1mkck3t:hover{justify-content:center;padding-left:0;width:130px}.text-rem.svelte-1mkck3t{font-size:.6rem}",
  map: null
};
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  let $$unsubscribe_loginUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_loginUrl = subscribe(loginUrl, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { product = {} } = $$props;
  let show;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  $$result.css.add(css);
  $$unsubscribe_loginUrl();
  $$unsubscribe_page();
  return `<div class="${"group relative col-span-1 block w-full overflow-hidden hover:bg-white hover:shadow-lg sm:w-48 sm:flex-shrink-0"}"><a href="${"/product/" + escape(product.slug, true)}"${add_attribute("target", ((_a = $page == null ? void 0 : $page.data) == null ? void 0 : _a.isDesktop) ? "_blank" : "", 0)} rel="${"noopener noreferrer"}" aria-label="${"Click to view the product details"}" sveltekit:prefetch>

		${product.new || ((_b = product.tags) == null ? void 0 : _b.length) ? `<div class="${"absolute top-2 left-2 flex flex-col gap-1"}">${product.new ? `<div class="${"text-rem max-w-max rounded bg-red-500 py-0.5 px-1.5 text-center font-bold uppercase tracking-widest text-white svelte-1mkck3t"}">NEW
					</div>` : ``}

				${((_c = product.tags) == null ? void 0 : _c.length) ? `${each(product.tags, (tag) => {
    return `<div class="${"text-rem max-w-max rounded py-0.5 px-1.5 text-center font-bold uppercase tracking-widest text-white svelte-1mkck3t"}" style="${"background-color: " + escape(tag.colorCode, true) + ";"}">${escape(tag.name)}
						</div>`;
  })}` : ``}</div>` : ``}

		<div class="${"h-auto w-full"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: product.imgCdn,
      alt: product.name,
      width: "192",
      class: "h-full w-full object-contain object-bottom text-xs"
    },
    {},
    {}
  )}</div></a>

	<div class="${"p-4"}">${`<div><a href="${"/product/" + escape(product.slug, true)}" aria-label="${"Click to view the product details"}" sveltekit:prefetch><div class="${"mb-1.5 flex items-center justify-between"}"><h1 class="${"font-semibold"}">${escape(((_d = product.brand) == null ? void 0 : _d.name) || product.brandName || "_")}</h1>

						

						<div class="${"sm:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}"></path></svg></div></div>

					<h2 class="${"overflow-hidden overflow-ellipsis whitespace-nowrap text-sm"}">${product.name ? `${escape(product.name)}` : `_`}</h2></a></div>`}
		<a href="${"/product/" + escape(product.slug, true)}" aria-label="${"Click to view the product details"}" sveltekit:prefetch><div class="${"mt-2.5 flex flex-wrap items-baseline justify-start leading-4 "}"><span class="${"mr-1 whitespace-nowrap text-xs font-semibold sm:text-sm "}">${escape(product.formattedPrice)}</span>

				<span class="${"mr-1 whitespace-nowrap text-xs text-gray-500 line-through"}">${escape(product.formattedMrp)}</span>

				${product.discount > 0 ? `<div class="${"mr-1 whitespace-nowrap text-xs"}"><span class="${"hidden sm:block"}">(${escape(product.discount)}% off)
						</span>

						<span class="${"text-green-600 sm:hidden"}">(${escape(product.discount)}% off)
						</span></div>` : ``}</div>

			${!product.hasStock && !show ? `<p class="${"absolute inset-x-0 bottom-[5.8rem] text-center text-xs text-red-500"}">Out of Stock
				</p>` : ``}</a></div></div>

${``}`;
});
export {
  ProductCard as P
};
