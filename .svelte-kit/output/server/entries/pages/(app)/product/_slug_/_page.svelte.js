import { c as create_ssr_component, p as createEventDispatcher, d as escape, e as each, j as add_attribute, b as subscribe, v as validate_component } from "../../../../../chunks/index.js";
import "dayjs";
import "hash-it";
import "../../../../../chunks/store.js";
import { p as page } from "../../../../../chunks/stores.js";
import { d as date } from "../../../../../chunks/index4.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
/* empty css                                                            */import { T as Textbox } from "../../../../../chunks/Textbox.js";
import { T as Textarea } from "../../../../../chunks/Textarea.js";
/* empty css                                                            */import Cookie from "cookie-universal";
import "vanilla-lazyload";
import { W as WhiteButton } from "../../../../../chunks/WhiteButton.js";
import { P as ProductCard } from "../../../../../chunks/ProductCard.js";
/* empty css                                                             */const css$1 = {
  code: ".filter-container.svelte-qmvhih{max-height:400px;overflow:auto}",
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { model, items = [], selectedItems = [], color = "none", name = "", required = false, disabled = false, title = "" } = $$props;
  if ($$props.model === void 0 && $$bindings.model && model !== void 0)
    $$bindings.model(model);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.selectedItems === void 0 && $$bindings.selectedItems && selectedItems !== void 0)
    $$bindings.selectedItems(selectedItems);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div class="${"border-graey-300 border-b pl-3 pb-3"}">${title ? `<div class="${"flex items-center justify-between pr-3"}"><div class="${"flex w-full cursor-pointer items-center justify-between"}"><h5 class="${"mr-2 text-sm font-semibold "}">${escape(title)}</h5>

				${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg>`}</div>

			</div>` : ``}

	${`<ul class="${"filter-container mostly-customized-scrollbar mt-2 flex flex-col gap-2 svelte-qmvhih"}">${each(items, (i) => {
    return `${i ? `<li><label class="${"flex items-start gap-1"}"><input type="${"checkbox"}"${add_attribute("name", name, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("color", color, 0)}${add_attribute("value", i._source.slug, 0)} class="${"mt-0.5 h-4 w-4 flex-shrink-0 focus:ring-0 focus:ring-offset-0"}"${~selectedItems.indexOf(i._source.slug) ? add_attribute("checked", true, 1) : ""}>

							<div class="${"flex flex-1 flex-wrap items-center"}"><span class="${"flex-1 text-sm text-gray-800"}">${escape(i._source.name)}</span>
							</div></label>
					</li>` : ``}`;
  })}</ul>`}</div>`;
});
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `<div class="${escape(clazz, true) + " overflow-x-auto scrollbar-none"}"><ul class="${"flex max-w-[90vw] items-center justify-start whitespace-nowrap text-sm"}">${each(data, (d) => {
    return `<li>${d.link ? `<div class="${"flex items-center"}"><a${add_attribute("href", d.link, 0)} aria-label="${"Click to go inside this page"}" class="${"first-letter:uppercase hover:text-blue-600 hover:underline"}">${escape(d.label)}</a>

						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 px-1"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 5l7 7-7 7"}"></path></svg>
					</div>` : `<span class="${"truncate text-gray-400 first-letter:uppercase"}">${escape(d.label)}</span>`}
			</li>`;
  })}</ul></div>`;
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value, checked, id } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<label class="${"flex cursor-pointer items-start"}"><input${add_attribute("id", id, 0)} type="${"radio"}" ${checked ? "checked" : ""}${add_attribute("value", value, 0)} class="${"mr-2 mt-0.5 h-4 w-4 cursor-pointer bg-transparent text-primary-500 focus:ring-0 focus:ring-offset-0"}">

	<span class="${"text-sm"}">${slots.default ? slots.default({}) : ``}</span></label>`;
});
const DeliveryOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  Cookie();
  let { product } = $$props;
  let pincode;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  $$unsubscribe_page();
  return `<div class="${"mb-4"}"><form class="${"relative w-full max-w-sm overflow-hidden rounded-md border " + escape("border-gray-400", true)}"><input type="${"tel"}" maxlength="${"6"}" placeholder="${"Enter a PIN code"}" class="${"w-full rounded-md bg-transparent py-3 px-4 pr-24 text-sm font-semibold focus:outline-none"}"${add_attribute("value", pincode, 0)}>

		<button type="${"submit"}" class="${"absolute inset-y-0 right-0 z-10 flex w-20 items-center justify-center text-right text-sm font-bold uppercase " + escape(
    "bg-gray-100 text-gray-300",
    true
  )}">${``}

			<span>Check </span></button></form>

	${`${`<div class="${"mt-2"}"><p class="${"text-xs text-gray-500"}">Please enter PIN code to check delivery time &amp; Pay on Delivery Availability
			</p>

			<ul class="${"mt-4 ml-4 flex list-disc flex-col gap-1 text-sm"}"><li>100% Original Products</li>

				<li>Pay on delivery might be available</li>

				<li>Easy 30 days returns and exchanges</li>

				<li>Try &amp; Buy might be available</li></ul></div>`}`}</div>`;
});
const SimilarProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { similarProducts = [] } = $$props;
  if ($$props.similarProducts === void 0 && $$bindings.similarProducts && similarProducts !== void 0)
    $$bindings.similarProducts(similarProducts);
  return `${similarProducts ? `<div class="${"mb-5 sm:mb-10"}"><h2 class="${"mb-5 text-lg font-bold capitalize sm:text-xl md:text-2xl"}">Similar Products</h2>

		<div class="${"mb-5 grid w-full grid-cols-2 items-start gap-3 sm:mb-10 sm:flex sm:flex-wrap sm:justify-between lg:mb-20 lg:gap-6"}">${each(similarProducts, (p) => {
    return `${validate_component(ProductCard, "ProductCard").$$render($$result, { product: p }, {}, {})}`;
  })}</div></div>` : ``}`;
});
const FrequentlyBoughtProduct = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { product = {} } = $$props;
  let loading = false;
  let cartButtonText = "Add to Bag";
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  $$unsubscribe_page();
  return `<div class="${"group w-40 flex-shrink-0"}"><a href="${"/product/" + escape(product.slug, true) + "?id=" + escape(product._id, true)}" target="${"_blank"}" rel="${"noopener noreferrer"}"><div class="${"mb-2 h-40 overflow-hidden"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: product.imgCdn,
      alt: product.name,
      width: "208",
      height: "240",
      class: "h-full w-full object-contain object-bottom"
    },
    {},
    {}
  )}</div>

		<div class="${"flex flex-col gap-1"}">

			${((_a = product.brand) == null ? void 0 : _a.name) ? `<h6 class="${"ext-lg sm:text-xl"}"><b>${escape((_b = product.brand) == null ? void 0 : _b.name)}</b></h6>` : ``}

			

			${product.name ? `<p class="${"truncate text-sm text-gray-500 group-hover:text-blue-600 group-hover:underline sm:text-base"}">${escape(product.name)}</p>` : ``}

			

			<div class="${"flex items-center gap-2"}"><span class="${"text-sm"}"><b>${escape(product.formattedPrice)}</b></span>

				<span class="${"text-xs"}"><strike>${escape(product.formattedMrp)}</strike></span>

				<span class="${"text-xs"}">(${escape(product.discount)}% OFF)
				</span></div></div></a>

	<div class="${"mx-auto mt-2 max-w-max"}">${`${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      type: "button",
      loading,
      loadingringsize: "xs",
      roundedFull: true,
      class: "text-xs"
    },
    {},
    {
      default: () => {
        return `<span>${escape(cartButtonText)}</span>`;
      }
    }
  )}`}</div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".frosted-black.svelte-19f4iw5{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.8)}.frosted-blur.svelte-19f4iw5{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.shake-animation.svelte-19f4iw5{-webkit-animation:svelte-19f4iw5-shake .82s cubic-bezier(.36,.07,.19,.97) both;animation:svelte-19f4iw5-shake .82s cubic-bezier(.36,.07,.19,.97) both;-webkit-backface-visibility:hidden;backface-visibility:hidden;border:1px solid red;transform:translateZ(0)}@-webkit-keyframes svelte-19f4iw5-shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes svelte-19f4iw5-shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@media only screen and (max-width:768px){.box-shadow.svelte-19f4iw5{box-shadow:0 -4px 10px rgba(50,50,50,.2)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  createEventDispatcher();
  let { data } = $$props;
  ({
    title: `Details of product ${(_a = data.product) == null ? void 0 : _a.name}`,
    description: `Details of product ${(_b = data.product) == null ? void 0 : _b.name}`
  });
  let productReview = {};
  let loading = false;
  let cartButtonText = "Add to Bag";
  let selectedSize;
  let showReviewsCount = 1;
  let selectedOptions = {};
  let loadingForWishlist = false;
  (_c = data.product) == null ? void 0 : _c.imagesCdn[0];
  if (((_e = (_d = data.product) == null ? void 0 : _d.size) == null ? void 0 : _e.name) === "One Size") {
    selectedSize = "One Size";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



${$$result.head += `${$$result.title = `<title>${escape((_f = data.product) == null ? void 0 : _f.name)}</title>`, ""}`, ""}

<div class="${"container mx-auto mb-20 p-3 sm:mb-0 sm:py-5 " + escape(
      "min-h-screen",
      true
    )}">

	<div class="${"mb-5"}">${validate_component(Breadcrumb, "Breadcrumb").$$render(
      $$result,
      {
        data: [
          { label: "Home", link: "/" },
          { label: "Products", link: "/search" },
          { label: (_g = data.product) == null ? void 0 : _g.name }
        ]
      },
      {},
      {}
    )}</div>

	<div class="${"mb-5 grid grid-cols-1 items-start gap-5 sm:mb-10 sm:gap-10 lg:grid-cols-5"}">
		${((_i = (_h = data.product) == null ? void 0 : _h.imagesCdn) == null ? void 0 : _i.length) ? `<div class="${"col-span-1 h-auto lg:col-span-3"}"><div class="${"flex w-full grid-cols-2 flex-row gap-2 overflow-x-scroll scrollbar-none md:grid"}">${each((_j = data.product) == null ? void 0 : _j.imagesCdn, (imgCdn) => {
      var _a2;
      return `<button type="${"button"}" class="${"h-60 w-52 flex-shrink-0 cursor-zoom-in overflow-hidden rounded md:h-full md:w-full md:flex-shrink"}">${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: imgCdn,
          alt: (_a2 = data.product) == null ? void 0 : _a2.name,
          width: "416",
          height: "600",
          class: "h-full w-full transform object-contain object-center transition duration-700 hover:scale-125"
        },
        {},
        {}
      )}
						</button>`;
    })}</div></div>` : ``}
		<div class="${"col-span-1 lg:col-span-2"}">

			${((_l = (_k = data.product) == null ? void 0 : _k.brand) == null ? void 0 : _l.name) ? `<h1 class="${"mb-1 text-xl sm:text-2xl"}"><b>${escape((_n = (_m = data.product) == null ? void 0 : _m.brand) == null ? void 0 : _n.name)}</b></h1>` : ``}

			

			${((_o = data.product) == null ? void 0 : _o.name) ? `<p class="${"mb-2 text-lg text-gray-500"}">${escape((_p = data.product) == null ? void 0 : _p.name)}</p>` : ``}

			

			${((_q = productReview == null ? void 0 : productReview.summary) == null ? void 0 : _q.avg) > 0 ? `<button type="${"button"}" class="${"mb-5 flex max-w-max items-center divide-x-2 divide-gray-300 border border-gray-300 py-1 text-sm focus:outline-none"}"><div class="${"flex items-center gap-1 px-2 font-semibold"}"><span>${escape((_r = productReview == null ? void 0 : productReview.summary) == null ? void 0 : _r.avg)}</span>

						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-primary-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></div>

					<span class="${"px-2 text-gray-500"}">${escape((_s = productReview == null ? void 0 : productReview.summary) == null ? void 0 : _s.count)} Ratings </span></button>` : ``}

			<hr class="${"mb-5 w-full border-t border-gray-300"}">

			

			<div class="${"mb-2 flex items-center gap-4"}"><span class="${"text-xl sm:text-2xl"}"><b>${escape((_t = data.product) == null ? void 0 : _t.formattedPrice)}</b></span>

				${((_u = data.product) == null ? void 0 : _u.formattedMrp) > ((_v = data.product) == null ? void 0 : _v.formattedPrice) ? `<span class="${"text-lg text-gray-500 sm:text-xl"}"><strike>${escape((_w = data.product) == null ? void 0 : _w.formattedMrp)}</strike></span>` : ``}

				${((_x = data.product) == null ? void 0 : _x.discount) > 0 ? `<span class="${"text-lg font-semibold text-primary-500 sm:text-xl"}">(${escape((_y = data.product) == null ? void 0 : _y.discount)}% OFF)
					</span>` : ``}</div>

			<p class="${"mb-5 text-sm font-semibold text-green-600"}">Inclusive of all taxes</p>

			

			${((_z = data.product) == null ? void 0 : _z.size) ? `<div class="${"mb-5"}"><h6 class="${"mb-5 flex items-center gap-2 font-semibold uppercase"}"><span>Select Size </span>

						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}"></path></svg></h6>

					<div class="${"flex flex-wrap gap-2"}"><button type="${"button"}" class="${"overflow-hidden rounded border py-1 px-3 text-sm font-medium uppercase transition duration-500 focus:outline-none " + escape(
      ((_B = (_A = data.product) == null ? void 0 : _A.size) == null ? void 0 : _B.name) === selectedSize ? "bg-primary-500 border-primary-500 text-white" : "bg-transparent border-gray-300 text-gray-500 hover:border-primary-500 hover:text-primary-500",
      true
    )}">${escape((_D = (_C = data.product) == null ? void 0 : _C.size) == null ? void 0 : _D.name)}</button></div></div>` : ``}

			

			

			${((_F = (_E = data.product) == null ? void 0 : _E.options) == null ? void 0 : _F.length) > 0 ? `<div class="${[
      "sizeSelector mb-3 items-center gap-3 text-sm svelte-19f4iw5",
      ""
    ].join(" ").trim()}">${each((_G = data.product) == null ? void 0 : _G.options, (o) => {
      return `<div class="${"flex flex-col items-start sm:flex-row"}"><h6 class="${"mb-1 w-full flex-shrink-0 font-medium sm:mb-0 sm:w-52"}">${escape(o.name)}</h6>

							

							${o.inputType == "dropdown" ? `<select class="${"w-full max-w-xs flex-1 rounded-md border border-gray-300 py-1.5 text-sm font-light placeholder-gray-400 transition duration-300 hover:bg-white focus:outline-none"}">${each(o.values, (i) => {
        return `<option${add_attribute("value", i.id, 0)}>${escape(i.name)}
										</option>`;
      })}</select>

								` : `${o.inputType == "textbox" ? `${validate_component(Textbox, "Textbox").$$render(
        $$result,
        {
          type: "text",
          value: selectedOptions[o.id]
        },
        {
          value: ($$value) => {
            selectedOptions[o.id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}

								` : `${o.inputType == "date" ? `${validate_component(Textbox, "Textbox").$$render(
        $$result,
        {
          id: "start",
          type: "date",
          value: selectedOptions[o.id]
        },
        {
          value: ($$value) => {
            selectedOptions[o.id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}

								` : `${o.inputType == "daterange" ? `<span>Date range picker is not found</span>

								

								` : `${o.inputType == "textarea" ? `${validate_component(Textarea, "Textarea").$$render(
        $$result,
        { value: selectedOptions[o.id] },
        {
          value: ($$value) => {
            selectedOptions[o.id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}

								` : `${o.inputType == "size" ? `<div class="${"flex flex-wrap"}">${each(o.values, (i) => {
        return `<label class="${"rouned-md mr-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 text-gray-500 hover:border-primary-500 hover:font-bold hover:text-primary-500 focus:outline-none focus:ring-0 focus:ring-offset-0 " + escape(
          selectedOptions[o.id] == i.id ? ` border-primary-500 bg-primary-500 text-white` : `bg-gray-100 border-gray-400`,
          true
        ) + " svelte-19f4iw5"}"><div class="${"text-xs uppercase sm:text-sm"}">${escape(i.name)}</div>

											<input type="${"radio"}" class="${"hidden"}"${add_attribute("value", selectedOptions[o.id], 0)}>
										</label>`;
      })}</div>

								` : `${o.inputType == "color" ? `<div class="${"flex flex-wrap"}">${each(o.values, (i) => {
        return `<label class="${"mr-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 hover:font-bold focus:outline-none focus:ring-0 focus:ring-offset-0 first-letter:" + escape(
          selectedOptions[o.id] == i.id ? `border-primary-500 text-white` : `border-gray-300 text-black`,
          true
        ) + " svelte-19f4iw5"}"${add_attribute(
          "style",
          selectedOptions[o.id] == i.id ? `background-color:${i.name}` : ``,
          0
        )}><div class="${"text-xs"}">${escape(i.name)}</div>

											<input type="${"radio"}" class="${"hidden"}"${add_attribute("value", selectedOptions[o.id], 0)}>
										</label>`;
      })}</div>

								` : `${o.inputType == "radio" ? `<div class="${"flex flex-wrap gap-2"}">${each(o.values, (v) => {
        return `${validate_component(Radio, "Radio").$$render(
          $$result,
          { id: v.id, value: selectedOptions[o.id] },
          {
            value: ($$value) => {
              selectedOptions[o.id] = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<span class="${"text-gray-500"}">${escape(v.name)}</span>
										`;
            }
          }
        )}`;
      })}</div>

								` : `${o.inputType == "checkbox" ? `<div class="${"flex flex-wrap gap-2"}">${each(o.values, (v, i) => {
        return `${validate_component(Checkbox, "Checkbox").$$render(
          $$result,
          {
            name: v.id,
            selectedItems: selectedOptions[o.id]
          },
          {
            selectedItems: ($$value) => {
              selectedOptions[o.id] = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${escape(v.name)}
										`;
            }
          }
        )}`;
      })}
								</div>` : ``}`}`}`}`}`}`}`}`}
						</div>`;
    })}</div>` : ``}

			

			<div></div>

			<div class="${"box-shadow itmes-center fixed inset-x-0 bottom-0 z-50 grid w-full grid-cols-5 gap-2 border-t bg-white p-2 uppercase md:static md:mb-5 md:grid-cols-2 md:border-t-0 md:bg-transparent md:p-0 lg:max-w-sm svelte-19f4iw5"}"><div class="${"col-span-2 md:col-span-1"}">${validate_component(WhiteButton, "WhiteButton").$$render(
      $$result,
      {
        type: "button",
        loadingringsize: "sm",
        loading: loadingForWishlist,
        class: "w-full text-sm"
      },
      {},
      {
        default: () => {
          return `${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 flex-shrink-0"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}"></path></svg>

							<span>Wishlist</span>`}`;
        }
      }
    )}</div>

				<div class="${"col-span-3 md:col-span-1"}">${`${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        type: "button",
        loading,
        loadingringsize: "sm",
        class: "w-full text-sm"
      },
      {},
      {
        default: () => {
          return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 flex-shrink-0"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}"></path></svg>

							<span>${escape(cartButtonText)}</span>`;
        }
      }
    )}`}</div></div>

			

			<div class="${"mb-5"}"><h6 class="${"mb-5 flex items-center gap-2 font-semibold uppercase"}"><span>Product Details </span>

					<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"}"></path></svg></h6>

				<p class="${"prose text-sm"}"><!-- HTML_TAG_START -->${(_H = data.product) == null ? void 0 : _H.description}<!-- HTML_TAG_END --></p></div>

			<hr class="${"mb-5 w-full border-t border-gray-300"}">

			

			<div class="${"mb-5"}"><h6 class="${"mb-5 flex items-center gap-2 font-semibold uppercase"}"><span>Delivery Options </span>

					<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"}"></path></svg></h6>

				${validate_component(DeliveryOptions, "DeliveryOptions").$$render($$result, { product: data.product }, {}, {})}</div>

			<hr class="${"mb-5 w-full border-t border-gray-300"}">

			

			<div id="${"ratings-and-reviews"}" class="${"mb-5"}"><h6 class="${"mb-5 flex items-center gap-2 font-semibold uppercase"}"><span>Ratings </span>

					<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}"></path></svg></h6>

				${((_I = productReview == null ? void 0 : productReview.summary) == null ? void 0 : _I.avg) > 0 ? `<div class="${"mb-5"}"><div class="${"tems-center flex"}"><div class="${"flex max-w-max flex-col items-center justify-center border-r border-gray-300 px-4 text-center"}"><h1 class="${"mb-2 flex items-end gap-2"}"><span class="${"text-4xl sm:text-5xl"}">${escape((_J = productReview == null ? void 0 : productReview.summary) == null ? void 0 : _J.avg)}</span>

									<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6 text-primary-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></h1>

								<p class="${"text-sm"}">${escape((_K = productReview == null ? void 0 : productReview.summary) == null ? void 0 : _K.count)} Verified Buyers</p></div>

							<div class="${"flex w-full max-w-xs flex-1 flex-col-reverse px-4"}">${each(productReview == null ? void 0 : productReview.ratings, (r) => {
      return `<div class="${"mb-2 flex items-center justify-center gap-2 text-xs leading-3"}"><div class="${"flex w-8 items-center gap-1"}"><span class="${"font-bold"}">${escape(r._id)}</span>
											<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-gray-300"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></div>

										<div class="${"relative h-1 w-full rounded-full bg-gray-300"}"><div class="${"absolute inset-y-0 left-0 rounded-full bg-green-500"}" style="${"width: " + escape(r.percent, true) + "%"}"></div></div>

										<span class="${"w-8 text-right text-gray-500"}">${escape(r.count)}</span>
									</div>`;
    })}</div></div></div>

					<hr class="${"mb-5 w-full border-t border-gray-300"}">

					${((_L = productReview == null ? void 0 : productReview.data) == null ? void 0 : _L.count) > 0 ? `<div class="${"mb-5"}"><h2 class="${"mb-5 font-semibold"}">Customer Reviews (${escape((_M = productReview == null ? void 0 : productReview.data) == null ? void 0 : _M.count)})</h2>

							${each((_N = productReview == null ? void 0 : productReview.data) == null ? void 0 : _N.data, (review, rx) => {
      var _a2, _b2;
      return `${rx + 1 <= showReviewsCount ? `<div class="${"mb-5 flex items-start gap-4"}"><div class="${"flex max-w-max items-center gap-0.5 rounded bg-primary-500 px-1.5 py-0.5 text-xs font-semibold text-white"}"><span>${escape(review.rating)}</span>

											<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-3 w-3"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></div>

										<div class="${"flex-1 text-sm"}"><p class="${"mb-2 first-letter:uppercase"}">${escape(review.message)}</p>

											<div class="${"flex items-center gap-2 text-gray-500"}">${((_a2 = review.user) == null ? void 0 : _a2.fullName) ? `<span>${escape((_b2 = review.user) == null ? void 0 : _b2.fullName)}</span>

													<span class="${"h-4 border-l border-gray-300"}"></span>` : ``}

												<span>${escape(date(review.createdAt))}</span>
											</div></div>
									</div>` : ``}`;
    })}

							${`<button type="${"button"}" class="${"text-sm font-semibold text-primary-500 transition duration-300 hover:text-primary-700 focus:outline-none"}">Show More
								</button>`}</div>` : ``}` : `<div class="${"mb-5 text-sm"}">No reviews yet, be the first one to review the data.product?.
					</div>`}

				<button type="${"button"}" class="${"group flex items-center gap-1 text-sm font-bold text-primary-500 hover:text-primary-700 focus:outline-none"}"><span>Add Your Review</span>

					<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transform transition duration-500 group-hover:translate-x-2"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg></button></div>

			<hr class="${"mb-5 w-full"}">

			

			<div class="${"mb-5"}"><iframe class="${"lazy h-[40vh] w-full"}" data-src="${"https://www.youtube.com/embed/n95DT3K0Yac"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe></div></div></div>

	${((_O = data.relatedProducts) == null ? void 0 : _O.length) > 0 ? `<hr class="${"mb-5 w-full sm:mb-10"}">

		<div class="${"mb-5 sm:mb-10"}"><h2 class="${"mb-5 text-lg font-bold capitalize sm:text-xl md:text-2xl"}">Frequently bought together
			</h2>

			<div class="${"flex flex-wrap items-end gap-4 sm:gap-6"}">${each(data.relatedProducts, (rp) => {
      return `${validate_component(FrequentlyBoughtProduct, "FrequentlyBoughtProduct").$$render($$result, { product: rp }, {}, {})}`;
    })}</div></div>` : ``}

	${((_Q = (_P = data.product) == null ? void 0 : _P.relatedProducts) == null ? void 0 : _Q.length) ? `<hr class="${"mb-5 w-full sm:mb-10"}">

		${validate_component(SimilarProducts, "SimilarProducts").$$render(
      $$result,
      {
        similarProducts: (_R = data.product) == null ? void 0 : _R.relatedProducts
      },
      {},
      {}
    )}` : ``}</div>

${``}

${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
