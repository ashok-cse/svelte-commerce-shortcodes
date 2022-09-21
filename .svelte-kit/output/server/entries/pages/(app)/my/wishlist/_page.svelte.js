import { c as create_ssr_component, p as createEventDispatcher, j as add_attribute, d as escape, b as subscribe, e as each, v as validate_component } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { M as MobileFooter } from "../../../../../chunks/MobileFooter.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import "../../../../../chunks/store.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { p as page } from "../../../../../chunks/stores.js";
const WishlistSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-72 border bg-gray-200 rounded-md animate-pulse"}"></div>`;
});
const BlackButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".bg-center-to-corner.svelte-172qkxu{background-image:linear-gradient(#424242,#424242);background-position:50% 50%;background-repeat:no-repeat;background-size:0 0;border-radius:4px;color:#424242;display:inline-block;font-family:arial;font-size:30px;padding:4px;transition:background-size .5s,color .5s}.bg-center-to-corner.svelte-172qkxu:hover{background-size:100% 100%;color:#fff}",
  map: null
};
const BlackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { type = "button", title = "Click here" } = $$props;
  let { class: clazz } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  $$result.css.add(css$1);
  return `<button${add_attribute("type", type, 0)}${add_attribute("title", title, 0)} class="${"bg-center-to-corner focus:outline-none " + escape(clazz, true) + " svelte-172qkxu"}">${slots.default ? slots.default({}) : ``}</button>`;
});
const _Wishlist_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width:768px){}@media(min-width:768px){}",
  map: null
};
const Wishlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { wishlistedProducts, loadingProduct = [] } = $$props;
  if ($$props.wishlistedProducts === void 0 && $$bindings.wishlistedProducts && wishlistedProducts !== void 0)
    $$bindings.wishlistedProducts(wishlistedProducts);
  if ($$props.loadingProduct === void 0 && $$bindings.loadingProduct && loadingProduct !== void 0)
    $$bindings.loadingProduct(loadingProduct);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"w-full text-gray-800"}">${(wishlistedProducts == null ? void 0 : wishlistedProducts.isFetching) ? `<div class="${"mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}">${each(Array(10), (p, ix) => {
    return `${validate_component(WishlistSkeleton, "WishlistSkeleton").$$render($$result, {}, {}, {})}`;
  })}</div>` : ``}

	<div>${(wishlistedProducts == null ? void 0 : wishlistedProducts.count) === 0 ? `<div class="${"flex h-[70vh] flex-col items-center justify-center text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/empty-wishlist.svg",
      alt: "empty wishlist",
      height: "240",
      class: "mb-5 h-60 object-contain"
    },
    {},
    {}
  )}

				

				<span class="${"mb-5 text-sm"}">You have no items in your Wishlist. Start adding</span>

				<a href="${"/"}" aria-label="${"Click to route home"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "w-40 py-2 text-sm" }, {}, {
    default: () => {
      return `Shop Now`;
    }
  })}</a></div>` : `<div class="${"relative"}"><div><h1 class="${"mb-5 font-serif text-2xl font-medium md:text-3xl lg:text-4xl"}">My Wishlist (${escape((wishlistedProducts == null ? void 0 : wishlistedProducts.count) || 0)})
					</h1>

					<div class="${"grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}">${each(wishlistedProducts.data, (w, wx) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    return `${w.product ? `<div class="${"cols-span-1 relative border"}">${validate_component(BlackButton, "BlackButton").$$render(
      $$result,
      {
        type: "button",
        class: "absolute top-2 right-2 z-10"
      },
      {},
      {
        default: () => {
          return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg>
									`;
        }
      }
    )}

									<a href="${"/product/" + escape((_a = w.product) == null ? void 0 : _a.slug, true) + "?id=" + escape((_b = w.product) == null ? void 0 : _b._id, true)}" aria-label="${"Click to view the product details"}"><div class="${"w-full max-w-xs items-center overflow-hidden rounded-lg bg-white p-4"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: (_c = w.product) == null ? void 0 : _c.imgCdn,
        alt: "mobile",
        height: "224",
        class: "h-48 w-full object-contain object-center sm:h-56"
      },
      {},
      {}
    )}</div>

											<div class="${"mx-auto p-2 text-center text-sm sm:p-4"}">${((_e = (_d = $page.data) == null ? void 0 : _d.store) == null ? void 0 : _e.isFnb) && ((_g = (_f = w.product) == null ? void 0 : _f.vendor) == null ? void 0 : _g.businessName) ? `<h4 class="${"mb-2 font-semibold"}">${escape((_i = (_h = w.product) == null ? void 0 : _h.vendor) == null ? void 0 : _i.businessName)}
													</h4>` : `${!((_k = (_j = $page.data) == null ? void 0 : _j.store) == null ? void 0 : _k.isFnb) && w.product && ((_l = w.product) == null ? void 0 : _l.brand) ? `<h4 class="${"mb-2 font-semibold"}">${escape((_m = w.product) == null ? void 0 : _m.brand.name)}
													</h4>` : ``}`}

												<div class="${"mb-2 flex items-start justify-center"}"><h6 class="${"flex-1 truncate font-medium"}">${escape((_n = w.product) == null ? void 0 : _n.name)}</h6>
													${((_p = (_o = $page.data) == null ? void 0 : _o.store) == null ? void 0 : _p.isFnb) ? `<div class="${"ms-2"}">${((_q = w.product) == null ? void 0 : _q.foodType) === "V" ? `${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: `/product/veg.png`,
        alt: "veg",
        width: "20",
        height: "20",
        class: "h-5 w-5"
      },
      {},
      {}
    )}` : `${((_r = w.product) == null ? void 0 : _r.foodType) === "N" || ((_s = w.product) == null ? void 0 : _s.foodType) === "E" ? `${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: `/product/non-veg.png`,
        alt: "non veg",
        width: "20",
        height: "20",
        class: "h-5 w-5"
      },
      {},
      {}
    )}` : `${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: `/product/other.png`,
        alt: "other",
        width: "20",
        height: "20",
        class: "h-5 w-5"
      },
      {},
      {}
    )}`}`}
														</div>` : ``}</div>

												<div class="${"flex flex-wrap items-center justify-center overflow-hidden overflow-ellipsis whitespace-nowrap"}"><div class="${"mr-2"}"><b>${escape((_t = w.product) == null ? void 0 : _t.formattedPrice)}</b></div>

													${((_u = w.product) == null ? void 0 : _u.formattedMrp) > ((_v = w.product) == null ? void 0 : _v.formattedPrice) ? `<strike class="${"mr-2 text-gray-500"}">${escape((_w = w.product) == null ? void 0 : _w.formattedMrp)}
														</strike>` : ``}

													${((_x = w.product) == null ? void 0 : _x.discount) > 0 ? `<div class="${"text-primary-500"}">(${escape((_y = w.product) == null ? void 0 : _y.discount)}% off)</div>` : ``}
												</div></div>
										</div></a>

									${loadingProduct[wx] ? `<div class="${"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"}"><svg class="${"mx-auto h-5 w-5 animate-spin text-white"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><circle class="${"opacity-25"}" cx="${"12"}" cy="${"12"}" r="${"10"}" stroke="${"currentColor"}" stroke-width="${"4"}"></circle><path class="${"opacity-75"}" fill="${"currentColor"}" d="${"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}"></path></svg>
										</div>` : ``}
								</div>` : ``}`;
  })}</div></div>

				</div>`}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let seoProps = {
    title: `Wishlist`,
    description: `Wishlist`
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div><div class="${"mb-20"}">${validate_component(Wishlist, "Wishlist").$$render(
    $$result,
    {
      wishlistedProducts: data.wishlistedProducts
    },
    {},
    {}
  )}</div>

	

	<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
