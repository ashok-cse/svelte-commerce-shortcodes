import { c as create_ssr_component, e as each, v as validate_component, d as escape, j as add_attribute } from "../../../../../../chunks/index.js";
import { S as SEO } from "../../../../../../chunks/index6.js";
import "dayjs";
import { d as date } from "../../../../../../chunks/index4.js";
import { L as LazyImg } from "../../../../../../chunks/LazyImg.js";
import { B as BackButton } from "../../../../../../chunks/BackButton.js";
import { P as PrimaryButton } from "../../../../../../chunks/PrimaryButton.js";
import "../../../../../../chunks/store.js";
const OrderTracking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { order } = $$props;
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  return `${((_a = order.orderHistory) == null ? void 0 : _a.length) > 0 ? `<div class="${"relative xl:w-2/3"}"><div class="${"relative z-10"}"><div class="${"flex flex-col flex-wrap justify-start gap-16 xl:flex-row xl:items-center xl:justify-between xl:gap-0"}">${each(order.orderHistory, (t, tx) => {
    return `${t.index < 7 && t.public === true ? `<div class="${"flex flex-col xl:items-center xl:justify-center"}">${t.time ? `<div class="${"relative h-10 w-10 rounded-full bg-primary-500"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"absolute inset-0 m-1.5 h-7 w-7 text-white"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" d="${"M5 13l4 4L19 7"}"></path></svg>
								</div>` : `<div class="${"relative h-10 w-10 rounded-full border border-black border-opacity-40 bg-white "}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: t.icon,
        alt: "",
        width: "24",
        height: "24",
        class: "absolute inset-0 m-1.5 h-6 w-6 opacity-40"
      },
      {},
      {}
    )}
								</div>`}

							<div class="${"absolute left-12 xl:static xl:mt-2 xl:text-center " + escape(t.time ? "opacity-100" : "opacity-40", true)}"><h4 class="${"font-medium"}">${escape(t.status)}</h4>

								<h6 class="${"mt-1 text-xs font-light text-gray-500"}">${t.time ? `<span>${escape(date(t.time))}
										</span>` : `<span class="${"opacity-0"}">\xA0 </span>`}
								</h6></div>
						</div>` : ``}`;
  })}</div></div>

		<div class="${"absolute inset-0 top-5 left-5 bottom-10 isolate z-0 xl:bottom-0 xl:left-14 xl:right-14"}"><div class="${"h-full w-1 border-l-2 border-dotted border-primary-500 xl:h-1 xl:w-full xl:border-l-0 xl:border-t-2"}"></div></div></div>` : ``}`;
});
const ReturnTracking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { order } = $$props;
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  return `<div class="${"relative md:w-2/3"}"><div class="${"relative z-10"}"><div class="${"flex flex-col flex-wrap justify-start gap-16 md:flex-row md:items-center md:justify-between md:gap-0 "}">${each(order.orderHistory, (t, tx) => {
    return `${t.index < 7 && t.public === true ? `<div class="${"flex flex-col md:items-center md:justify-center"}">${t.time ? `<div class="${"relative h-10 w-10 rounded-full bg-primary-500"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"absolute inset-0 m-1.5 h-7 w-7 text-white"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" d="${"M5 13l4 4L19 7"}"></path></svg>
							</div>` : `<div class="${"relative h-10 w-10 rounded-full border border-black border-opacity-40 bg-white "}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: t.icon,
        alt: "",
        width: "24",
        height: "24",
        class: "absolute inset-0 m-1.5 h-6 w-6 opacity-40"
      },
      {},
      {}
    )}
							</div>`}

						<div class="${"absolute left-12 md:static md:mt-2 md:text-center " + escape(t.time ? "opacity-100" : "opacity-40", true)}"><h4 class="${"font-medium"}">${escape(t.status)}</h4>

							<h6 class="${"mt-1 text-xs font-light text-gray-500"}">${t.time ? `<span>${escape(date(+t.time))}
									</span>` : `<span class="${"opacity-0"}">\xA0 </span>`}
							</h6></div>
					</div>` : ``}`;
  })}</div></div>

	<div class="${"absolute inset-0 top-5 left-5 bottom-10 isolate z-0 md:bottom-0 md:left-14 md:right-12 "}"><div class="${"h-full w-1 border-l-2 border-dotted border-primary-500 md:h-1 md:w-full md:border-l-0 md:border-t-2 "}"></div></div></div>`;
});
const TransparentButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loading = false, disabled = false, loadingringsize = "sm", rounded = false, border = false, type = "button" } = $$props;
  let { class: clazz } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.loadingringsize === void 0 && $$bindings.loadingringsize && loadingringsize !== void 0)
    $$bindings.loadingringsize(loadingringsize);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `<div${add_attribute("class", clazz, 0)}><button${add_attribute("type", type, 0)} class="${"relative transform items-center justify-center border-2 px-4 py-2 text-center font-semibold tracking-wider text-primary-500 transition duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 active:scale-95 " + escape(
    disabled ? "bg-gray-400 cursor-not-allowed" : "bg-transparent",
    true
  ) + " " + escape(rounded ? "rounded-full " : "rounded-md", true) + " " + escape(
    border ? " border-primary-500 hover:border-primary-700 hover:text-primary-700 shadow-md hover:shadow" : "border-transparent hover:bg-gray-500 hover:text-white ",
    true
  )}"><div class="${"flex items-center justify-center gap-1"}">${slots.default ? slots.default({}) : ``}</div>

		${loading ? `<div class="${"absolute inset-0 flex cursor-not-allowed items-center justify-center bg-black bg-opacity-50 " + escape(rounded ? "rounded-full" : "rounded-md", true)}"><svg class="${"animate-spin text-white " + escape(
    loadingringsize == "xs" ? "w-4 h-4" : loadingringsize == "sm" ? "h-5 w-5" : loadingringsize == "base" ? "h-6 w-6" : loadingringsize == "lg" ? "h-7 w-7" : "h-7 w-7",
    true
  )}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><circle class="${"opacity-25"}" cx="${"12"}" cy="${"12"}" r="${"10"}" stroke="${"currentColor"}" stroke-width="${"4"}"></circle><path class="${"opacity-75"}" fill="${"currentColor"}" d="${"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}"></path></svg></div>` : ``}</button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba;
  let now = null;
  let { data } = $$props;
  let { class: clazz } = $$props;
  const seoProps = {
    title: "Details ",
    metadescription: "Details "
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div${add_attribute("class", clazz, 0)}>${`${data.order ? `<section class="${"text-gray-800"}">${validate_component(BackButton, "BackButton").$$render(
    $$result,
    {
      to: "/my/orders?sort=-updatedAt",
      class: "mb-2"
    },
    {},
    {}
  )}

			<div class="${"border"}"><div class="${"flex flex-wrap items-center justify-between bg-gray-200 px-4 pt-2 pb-1 text-sm tracking-wide"}"><h5 class="${"mr-4 pb-1"}"><b>Order No :</b> #${escape((_a = data.order) == null ? void 0 : _a.orderNo)}</h5>

					<h5 class="${"pb-1"}"><b>Order Date </b>: ${escape(date((_b = data.order) == null ? void 0 : _b.createdAt))}</h5></div>

				

				<div class="${"mb-4 grid grid-cols-1 lg:grid-cols-2 lg:divide-x"}"><div class="${"col-span-1 flex gap-2 py-5 lg:gap-4 lg:pr-5"}"><a${add_attribute("href", `/products/${(_c = data.order) == null ? void 0 : _c.slug}`, 0)} aria-label="${"Click to view the product details"}" class="${"flex-shrink-0"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: (_d = data.order) == null ? void 0 : _d.imgCdn,
      alt: "",
      width: "144",
      class: "w-24 object-contain object-top sm:w-36"
    },
    {},
    {}
  )}</a>

						<div class="${"flex w-full flex-1 flex-col text-sm xl:pr-4"}"><div class="${"mb-1 flex justify-between gap-2 sm:gap-4"}"><a${add_attribute("href", `/products/${(_e = data.order) == null ? void 0 : _e.slug}`, 0)} aria-label="${"Click to view the product details"}" class="${"flex-1 text-base font-semibold hover:underline"}">${escape((_f = data.order) == null ? void 0 : _f.name)}</a>

								${((_g = data.order) == null ? void 0 : _g.foodType) ? `<div>${((_h = data.order) == null ? void 0 : _h.foodType) === "V" ? `${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/product/veg.png",
      alt: "veg",
      width: "20",
      height: "20",
      class: "h-5 w-5"
    },
    {},
    {}
  )}` : `${((_i = data.order) == null ? void 0 : _i.foodType) === "N" || ((_j = data.order) == null ? void 0 : _j.foodType) === "E" ? `${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/product/non-veg.png",
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
      src: "/product/other.png",
      alt: "other",
      width: "20",
      height: "20",
      class: "h-5 w-5"
    },
    {},
    {}
  )}`}`}</div>` : ``}</div>

							${((_k = data.order) == null ? void 0 : _k.brandName) ? `<h4 class="${"mb-2 capitalize"}">${escape((_l = data.order) == null ? void 0 : _l.brandName)}</h4>` : ``}

							<div class="${"flex flex-wrap items-center whitespace-nowrap"}">${((_m = data.order) == null ? void 0 : _m.size) ? `<h6 class="${"mr-4 mb-2"}">Size :

										<span class="${"font-medium"}">${escape((_n = data.order) == null ? void 0 : _n.size)}</span></h6>` : ``}

								${((_o = data.order) == null ? void 0 : _o.color) ? `<h6 class="${"mb-2"}">Color :

										<span class="${"font-medium"}">${escape((_p = data.order) == null ? void 0 : _p.color)}</span></h6>` : ``}</div>

							${((_q = data.order) == null ? void 0 : _q.vendor) ? `<h6 class="${"mb-2"}">Seller :
									<a${add_attribute("href", `/vendor/${(_s = (_r = data.order) == null ? void 0 : _r.vendor) == null ? void 0 : _s.id}`, 0)} aria-label="${"Click to view the vendor's profile"}" class="${"font-medium"}">${escape((_u = (_t = data.order) == null ? void 0 : _t.vendor) == null ? void 0 : _u.businessName)}</a></h6>` : ``}

							<div class="${"flex flex-wrap items-center gap-2"}"><span class="${"text-base"}"><b>${escape((_v = data.order) == null ? void 0 : _v.formattedPrice)}</b></span>

								${((_w = data.order) == null ? void 0 : _w.formattedMrp) > ((_x = data.order) == null ? void 0 : _x.formattedPrice) ? `<span class="${"text-gray-500"}"><strike>${escape((_y = data.order) == null ? void 0 : _y.formattedMrp)}</strike></span>` : ``}

								${((_z = data.order) == null ? void 0 : _z.discount) > 0 ? `<span class="${"text-green-500"}">(${escape((_A = data.order) == null ? void 0 : _A.discount)}%)
									</span>` : ``}</div></div></div>

					<div class="${"col-span-1 border-t border-dashed border-gray-300 py-5 lg:border-t-0 lg:px-5"}"><div class="${"mb-4"}"><h4 class="${"font-semibold"}">Delivery Address</h4>

							<p class="${"mt-2 flex flex-col text-sm font-light text-gray-500"}"><span>${escape((_B = data.order) == null ? void 0 : _B.userFirstName)}

									${escape((_C = data.order) == null ? void 0 : _C.userLastName)},

									${escape((_E = (_D = data.order) == null ? void 0 : _D.address) == null ? void 0 : _E.address)}, ${escape((_G = (_F = data.order) == null ? void 0 : _F.address) == null ? void 0 : _G.town)},

									${escape((_I = (_H = data.order) == null ? void 0 : _H.address) == null ? void 0 : _I.city)}, ${escape((_K = (_J = data.order) == null ? void 0 : _J.address) == null ? void 0 : _K.state)}</span>

								<span>${escape((_M = (_L = data.order) == null ? void 0 : _L.address) == null ? void 0 : _M.zip)}</span></p>

							${((_N = data.order) == null ? void 0 : _N.userPhone) ? `<h6 class="${"mt-2 text-sm"}">Phone number: <span>${escape((_O = data.order) == null ? void 0 : _O.userPhone)}</span></h6>` : ``}</div>

						<div class="${"mb-4"}"><h4 class="${"font-semibold"}">Billing Address</h4>

							<p class="${"mt-2 flex flex-col text-sm font-light text-gray-500"}"><span>${escape((_P = data.order) == null ? void 0 : _P.billingAddress.firstName)}

									${escape((_Q = data.order) == null ? void 0 : _Q.billingAddress.lastName)},

									${escape((_R = data.order) == null ? void 0 : _R.billingAddress.address)}, ${escape((_S = data.order) == null ? void 0 : _S.billingAddress.town)},

									${escape((_T = data.order) == null ? void 0 : _T.billingAddress.city)}, ${escape((_U = data.order) == null ? void 0 : _U.billingAddress.state)}</span>

								<span>${escape((_V = data.order) == null ? void 0 : _V.billingAddress.zip)}</span></p>

							${((_W = data.order) == null ? void 0 : _W.userPhone) ? `<h6 class="${"mt-2 text-sm"}">Phone number: <span>${escape((_X = data.order) == null ? void 0 : _X.userPhone)}</span></h6>` : ``}</div>

						<div class="${"mb-4"}"><h4 class="${"font-semibold"}">Vendor Details</h4>

							<p class="${"mt-2 flex flex-col text-sm font-light text-gray-500"}"><span>${escape((_Y = data.order) == null ? void 0 : _Y.vendorBusinessName)},

									${escape((__ = (_Z = data.order) == null ? void 0 : _Z.vendorAddress) == null ? void 0 : __.address)}, ${escape((_aa = (_$ = data.order) == null ? void 0 : _$.vendorAddress) == null ? void 0 : _aa.town)},

									${escape((_ca = (_ba = data.order) == null ? void 0 : _ba.vendorAddress) == null ? void 0 : _ca.city)}, ${escape((_ea = (_da = data.order) == null ? void 0 : _da.vendorAddress) == null ? void 0 : _ea.state)}</span>

								<span>${escape((_ga = (_fa = data.order) == null ? void 0 : _fa.vendorAddress) == null ? void 0 : _ga.zip)}</span></p>

							${((_ha = data.order) == null ? void 0 : _ha.vendorPhone) ? `<h6 class="${"mt-2 text-sm"}">Phone number: <span>${escape((_ia = data.order) == null ? void 0 : _ia.vendorPhone)}</span></h6>` : ``}</div></div></div></div>

			

			<div>${!!((_ja = data.order) == null ? void 0 : _ja.foodType) && ((_ka = data.order) == null ? void 0 : _ka.status) !== "Delivered" && ((_la = data.order) == null ? void 0 : _la.expectedDeliveryDate) ? `<h4 class="${"my-5 flex-1 xl:w-2/3"}"><span class="${"font-medium"}">Expected Delivery Date : </span>

						<span class="${"text-sm font-light text-gray-500"}">${escape(date((_ma = data.order) == null ? void 0 : _ma.expectedDeliveryDate))}</span></h4>` : ``}

				${((_na = data.order) == null ? void 0 : _na.status) === "Delivered" ? `<div class="${"mt-2 xl:mt-0 xl:w-1/3"}"><a href="${"/rate-this-product?id=$" + escape((_oa = data.order) == null ? void 0 : _oa.pid, true)}" aria-label="${"Click to route rate & review product"}" class="${"whitespace-nowrap text-primary-500 hover:underline focus:outline-none"}">Rate &amp; Review Product
						</a></div>` : ``}

				<div class="${"mt-5 sm:mt-10 xl:flex xl:items-center xl:justify-between"}">${!((_pa = data.order) == null ? void 0 : _pa.isReplaceOrReturn) ? `${validate_component(OrderTracking, "OrderTracking").$$render($$result, { order: data.order }, {}, {})}` : `${validate_component(ReturnTracking, "ReturnTracking").$$render($$result, { order: data.order }, {}, {})}`}

					<div class="${"mt-10 mb-4 xl:mb-0 xl:mt-0 xl:w-1/3"}"><div class="${"flex flex-col xl:items-center xl:justify-center"}">${((_qa = data.order) == null ? void 0 : _qa.invoiceLink) ? `<a${add_attribute("href", (_ra = data.order) == null ? void 0 : _ra.invoiceLink, 0)} aria-label="${"Click to download invoice"}" target="${"blank"}" class="${"mb-4"}">${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "w-48", type: "button" }, {}, {
    default: () => {
      return `Download Invoice`;
    }
  })}</a>` : ``}

							${((_sa = data.order) == null ? void 0 : _sa.replaceValidTill) != null && now <= ((_ta = data.order) == null ? void 0 : _ta.replaceValidTill) && !((_ua = data.order) == null ? void 0 : _ua.isReplaceOrReturn) ? `<a href="${"/my/exchange?orderId=$" + escape((_va = data.order) == null ? void 0 : _va.orderId, true) + "&itemId=$" + escape((_wa = data.order) == null ? void 0 : _wa.itemId, true)}" aria-label="${"Click to route exchange"}" class="${"mb-4"}">${validate_component(TransparentButton, "TransparentButton").$$render(
    $$result,
    {
      class: "w-48",
      type: "button",
      border: true
    },
    {},
    {
      default: () => {
        return `Exchange`;
      }
    }
  )}</a>` : ``}

							${((_xa = data.order) == null ? void 0 : _xa.returnValidTill) != null && now <= ((_ya = data.order) == null ? void 0 : _ya.returnValidTill) && !((_za = data.order) == null ? void 0 : _za.isReplaceOrReturn) ? `<a href="${"/my/return?orderId=$" + escape((_Aa = data.order) == null ? void 0 : _Aa.orderId, true) + "&itemId=$" + escape((_Ba = data.order) == null ? void 0 : _Ba.itemId, true)}" aria-label="${"Click to route return"}">${validate_component(TransparentButton, "TransparentButton").$$render(
    $$result,
    {
      class: "w-48",
      type: "button",
      border: true
    },
    {},
    {
      default: () => {
        return `Return`;
      }
    }
  )}</a>` : ``}</div></div></div></div></section>` : `<div class="${"flex flex-col items-center justify-center text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/add-to-cart-animate.svg",
      alt: "empty cart",
      height: "240",
      class: "mb-5 h-60 object-contain"
    },
    {},
    {}
  )}

			<span class="${"mb-3 text-xl font-medium md:text-3xl"}">Your have&#39;t ordered yet !!</span>

			<span class="${"mb-4 text-xs"}">Add items to it now</span>

			<a href="${"/"}" aria-label="${"Click to route home"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "w-40 py-2 text-sm" }, {}, {
    default: () => {
      return `Shop Now`;
    }
  })}</a></div>`}`}</div>`;
});
export {
  Page as default
};
