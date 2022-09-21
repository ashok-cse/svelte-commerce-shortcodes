import { c as create_ssr_component, b as subscribe, d as escape, e as each, v as validate_component } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { d as date } from "../../../../../chunks/index4.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { p as page } from "../../../../../chunks/stores.js";
import { P as Pagination } from "../../../../../chunks/Pagination.js";
const _MyOrder_svelte_svelte_type_style_lang = "";
const css = {
  code: ".track.svelte-n02b7s{border-radius:25px;font-size:11px}",
  map: null
};
const MyOrder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { currentPage, orders } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.orders === void 0 && $$bindings.orders && orders !== void 0)
    $$bindings.orders(orders);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  $$result.css.add(css);
  $page.store;
  $$unsubscribe_page();
  return `<div class="${"w-full text-gray-800 " + escape(clazz, true) + " svelte-n02b7s"}">${orders.count > 0 ? `<div><div class="${"mb-4 flex w-full flex-row items-center justify-between"}"><h1 class="${"font-serif text-2xl font-medium md:text-3xl lg:text-4xl"}">Orders <span class="${"text-lg md:text-xl lg:text-2xl"}">(${escape(orders.count)})</span></h1>

				<a href="${"/"}" aria-label="${"Click to route home"}" class="${"text-sm text-blue-400 underline lg:hidden"}">Shop More
				</a></div>

			${((_a = orders == null ? void 0 : orders.data) == null ? void 0 : _a.length) > 0 ? `<div>${each(orders.data, (order) => {
    return `<div class="${"mb-4 hidden sm:mb-10 xl:block"}"><div class="${"mb-3 flex items-center justify-between text-sm text-gray-500 sm:mb-4"}"><h6>Order No : #${escape(order.orderNo)}</h6>

								<h6>Order Date : ${escape(date(order.createdAt))}</h6></div>

							<table class="${"min-w-full divide-y divide-gray-200 rounded-md border border-gray-200 text-center text-gray-500 shadow-md"}"><thead class="${"whitespace-nowrap rounded-t-md bg-gray-100 text-xs uppercase"}"><tr><th class="${"px-5 py-3 font-medium tracking-wider text-gray-500"}"># </th>

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Image </th>

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Vendor </th>

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Name </th>

										

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Qty </th>

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Price </th>

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Shipping </th>

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Total </th>

										<th class="${"p-3 font-medium tracking-wider text-gray-500"}">Status </th>
									</tr></thead>

								<tbody class="${"divide-y divide-gray-200 rounded-b-md bg-white text-sm"}"><tr class="${"cursor-pointer bg-white transition duration-300 hover:bg-primary-50"}"><td class="${"p-3"}"><div class="${"mx-auto max-w-max"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: order.imgCdn,
        alt: " ",
        width: "80",
        class: "h-auto w-20 object-contain object-center"
      },
      {},
      {}
    )}
											</div></td>

										<td class="${"p-3"}">${escape(order.vendorBusinessName)}</td>

										<td class="${"p-3"}">${escape(order.name)}</td>

										

										<td class="${"whitespace-nowrap p-3"}">${escape(order.qty)}</td>

										<td class="${"whitespace-nowrap p-3"}">${escape(order.price)}</td>

										<td class="${"whitespace-nowrap p-3"}">${escape(order.shippingCharge)}</td>

										<td class="${"whitespace-nowrap p-3"}">${escape(order.total)}</td>

										<td class="${"p-3"}"><span class="${"whitespace-nowrap font-semibold text-primary-500"}">${escape(order.status)}</span>
										</td></tr></tbody>
							</table></div>

						<div class="${"xl:hidden"}"><div class="${"mb-3 flex items-center justify-between text-sm text-gray-500 sm:mb-4"}"><h6><span class="${"hidden sm:block"}">Order No :</span>

									${escape(order.orderNo)}</h6>

								<h6><span class="${"hidden sm:block"}">Order Date :</span>

									${escape(date(order.createdAt))}
								</h6></div>

							<div class="${"mb-4 w-full divide-y divide-gray-200 rounded-md border bg-white text-sm text-gray-600 shadow-md sm:mb-10"}"><div><div class="${"flex items-start gap-2 p-4 sm:gap-5"}"><div class="${"flex-shrink-0"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: order.imgCdn,
        alt: "",
        width: "64",
        class: "h-auto w-16 object-contain object-top"
      },
      {},
      {}
    )}</div>

										<div class="${"w-full flex-1"}">

											<div class="${"mb-2 flex items-start justify-between"}"><span class="${"flex-1"}">${escape(order.name)}</span>

												</div>

											<div class="${"flex flex-wrap gap-2 text-sm"}"><div class="${"flex items-center gap-2"}"><h6>Price :</h6>

													<b class="${"text-gray-500"}">${escape(order.price)}

														* ${escape(order.qty)}
													</b></div>

												<div class="${"flex items-center gap-2"}"><h6>Delivery :</h6>

													<b class="${"text-gray-500"}">${escape(order.shippingCharge)}
													</b></div>

												<div class="${"flex items-center gap-2"}"><h6>Total :</h6>

													<b class="${"text-gray-500"}">${escape(order.total)}
													</b></div>

												<div class="${"flex items-center gap-2"}"><h6>Status :</h6>

													<b class="${"text-primary-500"}">${escape(order.status)}</b>
												</div></div>
										</div></div>
								</div></div>
						</div>`;
  })}</div>` : ``}</div>
		${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      count: Math.ceil(orders.count / orders.pageSize),
      current: +currentPage
    },
    {},
    {}
  )}` : `${orders.count === 0 ? `<div class="${"flex flex-col items-center justify-center text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
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
  })}</a></div>` : ``}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const seoProps = { title: "Orders ", description: "Orders " };
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section>${validate_component(MyOrder, "MyOrder").$$render(
    $$result,
    {
      orders: data.orders,
      currentPage: data.currentPage
    },
    {},
    {}
  )}</section>`;
});
export {
  Page as default
};
