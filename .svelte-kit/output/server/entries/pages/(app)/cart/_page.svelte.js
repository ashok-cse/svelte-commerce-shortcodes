import { c as create_ssr_component, b as subscribe, v as validate_component, e as each, d as escape, j as add_attribute } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
import { P as PrimaryButton } from "../../../../chunks/PrimaryButton.js";
/* empty css                                                          */import { P as Pricesummary } from "../../../../chunks/Pricesummary.js";
import { S as Skeleton } from "../../../../chunks/Skeleton.js";
import { P as ProductCard } from "../../../../chunks/ProductCard.js";
import { L as LazyImg } from "../../../../chunks/LazyImg.js";
import "cookie";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let seoProps = { title: `Cart`, description: `Cart` };
  let products = [];
  let loading = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section class="${"min-h-screen w-full p-3 sm:p-10"}"><div class="${"container mx-auto max-w-6xl"}">${data.loadingCart ? `<div class="${"flex flex-col gap-5"}">${each({ length: 5 }, (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`;
    })}</div>` : `${((_a = data.cart) == null ? void 0 : _a.qty) > 0 ? `<div class="${"flex flex-col gap-10 lg:flex-row lg:justify-center xl:gap-20"}"><div class="${"w-full flex-1"}"><div class="${"items-center justify-between pb-3 sm:flex"}">

						<div class="${"mr-4 flex items-baseline"}"><h1 class="${"font-serif text-xl font-medium tracking-wider sm:text-2xl md:text-3xl xl:text-4xl"}">Cart
							</h1>

							<div class="${"mx-3 h-1 w-1 rounded-full bg-gray-500"}"></div>

							<h4 class="${"tracking-tighter text-gray-500 sm:text-xl"}">${escape(((_b = data.cart) == null ? void 0 : _b.qty) || "")}

								${((_c = data.cart) == null ? void 0 : _c.qty) > 1 ? `Items` : `Item`}</h4></div>

						

						

						

						</div>

					<div class="${"border-t pt-5"}">${((_e = (_d = data.cart) == null ? void 0 : _d.unavailableItems) == null ? void 0 : _e.length) > 0 ? `<div><div class="${"cursor-default border-b opacity-50"}"><div class="${"flex gap-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8 text-red-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"}" clip-rule="${"evenodd"}"></path></svg>

										<div class="${"flex-1"}"><h6 class="${"text-lg font-semibold"}">Out of Stock</h6>

											<p>Please remove from bag, items will be added to wishlist</p></div></div>

									<div class="${"flex flex-col divide-y"}">${each((_f = data.cart) == null ? void 0 : _f.unavailableItems, (item) => {
      return `<div class="${"flex w-full items-start gap-4 py-5"}"><a${add_attribute("href", item == null ? void 0 : item.slug, 0)} aria-label="${"Click to route product details"}" class="${"flex-shrink-0 "}">${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: item.imgCdn,
          alt: "",
          width: "128",
          class: "w-16 cursor-pointer rounded-md object-contain sm:w-32"
        },
        {},
        {}
      )}</a>

												<div class="${"w-full flex-1"}"><a${add_attribute("href", `${item == null ? void 0 : item.slug}`, 0)} aria-label="${"Click to route product details"}" class="${"mb-2 cursor-pointer text-base font-medium text-gray-600 hover:underline sm:text-lg"}">${escape(item == null ? void 0 : item.name)}</a>

													<div class="${"mb-2 flex items-center"}"><span class="${"text-lg font-bold sm:text-xl"}">${escape(item == null ? void 0 : item.formattedItemAmount.price)}</span>

														<span class="${"ml-2 text-sm font-light text-gray-400 sm:text-base "}"><span class="${"line-through"}">${escape(item == null ? void 0 : item.formattedItemAmount.mrp)}</span></span>

														${Math.round(((item == null ? void 0 : item.mrp) - (item == null ? void 0 : item.price)) * 100 / (item == null ? void 0 : item.mrp)) > 0 ? `<span class="${"ml-2 text-sm text-green-500 sm:text-base "}">(${escape(Math.round(((item == null ? void 0 : item.mrp) - (item == null ? void 0 : item.price)) * 100 / (item == null ? void 0 : item.mrp)))}% off)
															</span>` : ``}
													</div></div>
											</div>`;
    })}</div></div>

								${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "w-full" }, {}, {
      default: () => {
        return `Move to Wishlist`;
      }
    })}</div>` : ``}

						${((_g = data.cart) == null ? void 0 : _g.items) ? `<div class="${"flex flex-col divide-y"}">${each((_h = data.cart) == null ? void 0 : _h.items, (item, ix) => {
      return `

									<div class="${"flex w-full items-start gap-4 py-5"}"><a href="${"/product/" + escape(item == null ? void 0 : item.slug, true)}" aria-label="${"Click to route product details"}" class="${"flex-shrink-0 "}">${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: item.img,
          alt: "",
          width: "128",
          class: "w-16 cursor-pointer rounded-md object-contain sm:w-32"
        },
        {},
        {}
      )}</a>

										<div class="${"w-full flex-1"}"><div class="${"flex flex-wrap items-center justify-between"}"><a href="${"/product/" + escape(item == null ? void 0 : item.slug, true)}" aria-label="${"Click to route product details"}" class="${"mb-2 cursor-pointer text-base font-medium text-gray-600 hover:underline sm:text-lg"}">${escape(item == null ? void 0 : item.name)}</a>

												</div>

											

											

											<div class="${"mb-2 flex items-center"}"><span class="${"text-lg font-bold sm:text-xl"}">${escape(item == null ? void 0 : item.formattedItemAmount.price)}</span>

												<span class="${"ml-2 text-sm font-light text-gray-400 sm:text-base "}"><span class="${"line-through"}">${escape(item == null ? void 0 : item.formattedItemAmount.mrp)}</span></span>

												${Math.round(((item == null ? void 0 : item.mrp) - (item == null ? void 0 : item.price)) * 100 / (item == null ? void 0 : item.mrp)) > 0 ? `<span class="${"ml-2 text-sm text-green-500 sm:text-base "}">(${escape(Math.round(((item == null ? void 0 : item.mrp) - (item == null ? void 0 : item.price)) * 100 / (item == null ? void 0 : item.mrp)))}% off)
													</span>` : ``}</div>

											<div class="${"flex items-center justify-between"}"><div class="${"flex items-center justify-center"}"><button ${loading[ix] ? "disabled" : ""} type="${"button"}" class="${"flex h-6 w-6 transform items-center justify-center rounded-full bg-gray-200 shadow transition duration-300 hover:bg-gray-300 hover:opacity-80 focus:outline-none active:scale-95 sm:h-8 sm:w-8"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-gray-600"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M20 12H4"}"></path></svg></button>

													<div class="${"mx-2 flex h-6 w-6 items-center justify-center text-xs font-bold sm:h-8 sm:w-8 "}">${loading[ix] ? `${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: "/dots-loading.gif",
          alt: "loading",
          width: "20",
          class: "h-auto w-5 object-contain object-center"
        },
        {},
        {}
      )}` : `<span>${escape(item == null ? void 0 : item.qty)}</span>`}</div>

													<button ${loading[ix] ? "disabled" : ""} type="${"button"}" class="${"flex h-6 w-6 transform items-center justify-center rounded-full bg-gray-200 shadow transition duration-300 hover:bg-gray-300 hover:opacity-80 focus:outline-none active:scale-95 sm:h-8 sm:w-8"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-gray-600"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 6v6m0 0v6m0-6h6m-6 0H6"}"></path></svg>
													</button></div>

												<button class="${"flex h-6 w-6 transform items-center justify-center rounded-full bg-gray-200 shadow transition duration-300 hover:bg-gray-300 hover:opacity-80 focus:outline-none active:scale-95 sm:h-8 sm:w-8"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-gray-600"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}"></path></svg></button>
											</div></div>
									</div>`;
    })}</div>` : ``}</div>

					<div></div></div>

				<div class="${"w-full lg:w-80 lg:flex-shrink-0 lg:flex-grow-0"}">

					${((_j = (_i = data.cart) == null ? void 0 : _i.discount) == null ? void 0 : _j.amount) > 0 ? `<div class="${"mt-3 flex w-full items-center justify-between text-sm"}"><h5 class="${"flex-1 truncate text-left font-semibold"}">Applied Coupon &quot;${escape((_l = (_k = data.cart) == null ? void 0 : _k.discount) == null ? void 0 : _l.code)}&quot;
							</h5>

							<button type="${"button"}" class="${"w-16 font-bold text-primary-500 hover:text-primary-700 focus:outline-none"}">${`<span class="${"text-right hover:underline"}">Remove </span>`}</button></div>` : `<button type="${"button"}" class="${[
      "mt-3 flex w-full items-center justify-between hover:text-primary-500 focus:outline-none",
      ""
    ].join(" ").trim()}"><h5 class="${"text-sm font-semibold"}">Apply Promo Code</h5>

							<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg></button>`}

					${validate_component(Pricesummary, "Pricesummary").$$render(
      $$result,
      {
        cart: data.cart,
        nextpage: "/checkout/address",
        text: "Select Address",
        showNextIcon: true
      },
      {},
      {}
    )}</div></div>

			${``}

			${(products == null ? void 0 : products.length) > 0 ? `<div class="${"w-full"}"><h1 class="${"my-5 font-serif text-xl font-medium tracking-wider sm:my-10 sm:text-2xl md:text-3xl xl:text-4xl"}">You May Like
					</h1>

					<div class="${"grid w-full grid-cols-2 items-end sm:flex sm:flex-wrap sm:justify-between sm:gap-10"}">${each(products, (p, px) => {
      return `${p && px < 10 ? `${validate_component(ProductCard, "ProductCard").$$render($$result, { product: p }, {}, {})}` : ``}`;
    })}</div></div>` : ``}` : `<div class="${"flex h-[70vh] flex-col items-center justify-center text-center"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: "/no/add-to-cart-animate.svg",
        alt: "empty listing",
        height: "240",
        class: "mb-5 h-60 object-contain"
      },
      {},
      {}
    )}</div>

				<span class="${"mb-3 text-xl font-medium md:text-3xl"}">Empty Cart!!</span>

				<span class="${"mb-5 text-xs"}">We didn&#39;t find any item inside cart, Go ahead, order some essentials from the menu
				</span>

				${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "w-40 py-2 text-sm" }, {}, {
      default: () => {
        return `BROWSE ITEMS
				`;
      }
    })}</div>`}`}</div></section>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
