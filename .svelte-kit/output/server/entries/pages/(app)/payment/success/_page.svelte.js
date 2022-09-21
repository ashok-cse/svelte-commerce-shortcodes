import { c as create_ssr_component, e as each, d as escape, v as validate_component } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import { d as date, c as currency } from "../../../../../chunks/index4.js";
import "../../../../../chunks/store.js";
import { W as WhiteButton } from "../../../../../chunks/WhiteButton.js";
const Confetti_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.confetti-holder.svelte-3qvzxl.svelte-3qvzxl{position:relative}@-webkit-keyframes svelte-3qvzxl-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}to{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz),calc(var(--rotation-deg) + 1turn))}}@keyframes svelte-3qvzxl-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}to{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz),calc(var(--rotation-deg) + 1turn))}}@-webkit-keyframes svelte-3qvzxl-translate{0%{opacity:1}8%{opacity:1;transform:translateY(calc(var(--translate-y)*.95)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.9)))}12%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.95)))}16%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*var(--x-spread)))}to{opacity:0;transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x))}}@keyframes svelte-3qvzxl-translate{0%{opacity:1}8%{opacity:1;transform:translateY(calc(var(--translate-y)*.95)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.9)))}12%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.95)))}16%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*var(--x-spread)))}to{opacity:0;transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x))}}@-webkit-keyframes svelte-3qvzxl-no-gravity-translate{0%{opacity:1}to{opacity:0;transform:translateY(var(--translate-y)) translateX(var(--translate-x))}}@keyframes svelte-3qvzxl-no-gravity-translate{0%{opacity:1}to{opacity:0;transform:translateY(var(--translate-y)) translateX(var(--translate-x))}}.confetti.svelte-3qvzxl.svelte-3qvzxl{--translate-y:calc(-200px*var(--translate-y-multiplier));--translate-x:calc(200px*var(--translate-x-multiplier));-webkit-animation:svelte-3qvzxl-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;animation:svelte-3qvzxl-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;height:calc(var(--size)*var(--scale));opacity:0;pointer-events:none;position:absolute;width:calc(var(--size)*var(--scale))}.confetti.svelte-3qvzxl.svelte-3qvzxl:before{--full-rotation:var(--rotation-xyz),var(--rotation-deg);-webkit-animation:svelte-3qvzxl-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;animation:svelte-3qvzxl-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;background:var(--color);background-size:contain;content:"";display:block;height:100%;transform:skew(var(--skew)) rotate3d(var(--full-rotation));width:100%}.rounded.svelte-3qvzxl .confetti.svelte-3qvzxl:before{border-radius:50%}.cone.svelte-3qvzxl .confetti.svelte-3qvzxl{--translate-x:calc(200px*var(--translate-y-multiplier)*var(--translate-x-multiplier))}.no-gravity.svelte-3qvzxl .confetti.svelte-3qvzxl{-webkit-animation-name:svelte-3qvzxl-no-gravity-translate;animation-name:svelte-3qvzxl-no-gravity-translate;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@media(prefers-reduced-motion){.confetti.svelte-3qvzxl.svelte-3qvzxl,.confetti.svelte-3qvzxl.svelte-3qvzxl:before{-webkit-animation:none;animation:none}}',
  map: null
};
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
const Confetti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 10 } = $$props;
  let { x = [-0.5, 0.5] } = $$props;
  let { y = [0.25, 1] } = $$props;
  let { duration = 2e3 } = $$props;
  let { infinite = false } = $$props;
  let { delay = [0, 50] } = $$props;
  let { colorRange = [0, 360] } = $$props;
  let { colorArray = [] } = $$props;
  let { amount = 50 } = $$props;
  let { iterationCount = 1 } = $$props;
  let { fallDistance = "100px" } = $$props;
  let { rounded = false } = $$props;
  let { cone = false } = $$props;
  let { noGravity = false } = $$props;
  let { xSpread = 0.15 } = $$props;
  let { destroyOnComplete = true } = $$props;
  function getColor() {
    if (colorArray.length)
      return colorArray[Math.round(Math.random() * (colorArray.length - 1))];
    else
      return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%`;
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.infinite === void 0 && $$bindings.infinite && infinite !== void 0)
    $$bindings.infinite(infinite);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.colorRange === void 0 && $$bindings.colorRange && colorRange !== void 0)
    $$bindings.colorRange(colorRange);
  if ($$props.colorArray === void 0 && $$bindings.colorArray && colorArray !== void 0)
    $$bindings.colorArray(colorArray);
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.iterationCount === void 0 && $$bindings.iterationCount && iterationCount !== void 0)
    $$bindings.iterationCount(iterationCount);
  if ($$props.fallDistance === void 0 && $$bindings.fallDistance && fallDistance !== void 0)
    $$bindings.fallDistance(fallDistance);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.cone === void 0 && $$bindings.cone && cone !== void 0)
    $$bindings.cone(cone);
  if ($$props.noGravity === void 0 && $$bindings.noGravity && noGravity !== void 0)
    $$bindings.noGravity(noGravity);
  if ($$props.xSpread === void 0 && $$bindings.xSpread && xSpread !== void 0)
    $$bindings.xSpread(xSpread);
  if ($$props.destroyOnComplete === void 0 && $$bindings.destroyOnComplete && destroyOnComplete !== void 0)
    $$bindings.destroyOnComplete(destroyOnComplete);
  $$result.css.add(css$1);
  return `${`<div class="${[
    "confetti-holder svelte-3qvzxl",
    (rounded ? "rounded" : "") + " " + (cone ? "cone" : "") + " " + (noGravity ? "no-gravity" : "")
  ].join(" ").trim()}">${each({ length: amount }, (_) => {
    return `<div class="${"confetti svelte-3qvzxl"}" style="${"--fall-distance: " + escape(fallDistance, true) + "; --size: " + escape(size, true) + "px; --color: " + escape(getColor(), true) + "; --skew: " + escape(randomBetween(-45, 45), true) + "deg," + escape(randomBetween(-45, 45), true) + "deg; --rotation-xyz: " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + "; --rotation-deg: " + escape(randomBetween(0, 360), true) + "deg; --translate-y-multiplier: " + escape(randomBetween(y[0], y[1]), true) + "; --translate-x-multiplier: " + escape(randomBetween(x[0], x[1]), true) + "; --scale: " + escape(0.1 * randomBetween(2, 10), true) + "; --transition-duration: " + escape(
      infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`,
      true
    ) + "; --transition-delay: " + escape(randomBetween(delay[0], delay[1]), true) + "ms; --transition-iteration-count: " + escape(infinite ? "infinite" : iterationCount, true) + "; --x-spread: " + escape(1 - xSpread, true)}"></div>`;
  })}</div>`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".checkmark.svelte-1ylgl2a{stroke:#4bb71b;-webkit-animation:svelte-1ylgl2a-fill .4s ease-in-out .4s forwards,svelte-1ylgl2a-scale .3s ease-in-out .9s both;animation:svelte-1ylgl2a-fill .4s ease-in-out .4s forwards,svelte-1ylgl2a-scale .3s ease-in-out .9s both;border-radius:50%;box-shadow:inset 0 0 0 #4bb71b;display:block;height:100px;margin:0 auto;position:relative;right:5px;top:5px;width:100px}.checkmark.svelte-1ylgl2a,.checkmark__circle.svelte-1ylgl2a{stroke-width:4;stroke-miterlimit:10}.checkmark__circle.svelte-1ylgl2a{stroke-dasharray:166;stroke-dashoffset:166;stroke:#4bb71b;fill:#fff;-webkit-animation:svelte-1ylgl2a-stroke .6s cubic-bezier(.65,0,.45,1) forwards;animation:svelte-1ylgl2a-stroke .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark__check.svelte-1ylgl2a{stroke-dasharray:48;stroke-dashoffset:48;-webkit-animation:svelte-1ylgl2a-stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards;animation:svelte-1ylgl2a-stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards;transform-origin:50% 50%}@-webkit-keyframes svelte-1ylgl2a-stroke{to{stroke-dashoffset:0}}@keyframes svelte-1ylgl2a-stroke{to{stroke-dashoffset:0}}@-webkit-keyframes svelte-1ylgl2a-scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes svelte-1ylgl2a-scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@-webkit-keyframes svelte-1ylgl2a-fill{to{box-shadow:inset 0 0 0 30px #4bb71b}}@keyframes svelte-1ylgl2a-fill{to{box-shadow:inset 0 0 0 30px #4bb71b}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { data } = $$props;
  const seoProps = {
    title: "Success ",
    metadescription: "Success "
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}



${data.order ? `<div class="${"container mx-auto w-full max-w-6xl px-4 py-5 pb-10 text-gray-800 sm:px-10 md:py-10 "}">

		<div class="${"text-center"}"><div class="${"mb-5 sm:mb-10"}"><svg class="${"checkmark svelte-1ylgl2a"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 52 52"}"><circle class="${"checkmark__circle svelte-1ylgl2a"}" cx="${"26"}" cy="${"26"}" r="${"25"}" fill="${"none"}"></circle><path class="${"checkmark__check svelte-1ylgl2a"}" fill="${"none"}" d="${"M14.1 27.2l7.1 7.2 16.7-16.8"}"></path></svg></div>

			${data.order ? `<h2 class="${"mb-5 text-2xl font-bold sm:text-3xl"}">${data.order.seatsBooked ? `Thank You For Your Booking!!` : `Thank You For Your Purchase!!`}</h2>` : ``}

			<ul class="${"mx-auto mb-2 flex max-w-max flex-col gap-2"}"><li class="${"flex items-center gap-2 text-sm"}"><p class="${"w-40 text-right"}">Order Number :</p>

					<spn><b>${escape(data.order.orderNo)}</b></spn></li>

				<li class="${"flex items-center gap-2 text-sm"}"><p class="${"w-40 text-right"}">Order place on :</p>

					<spn><b>${escape(date(data.order.createdAt))}</b></spn></li></ul>

			<p class="${"mb-5 text-sm sm:mb-10"}">A confirmation e-mail will be sent to the e-mail address that you specified in Order
				details.
			</p>

			<div class="${"mb-5 flex flex-wrap items-center justify-center gap-5 sm:mb-10"}">${data.order.seatsBooked ? `<a href="${"/my/orders?page=1#BusTickets"}" rel="${"noopener"}" aria-label="${"Click to view the booking details"}">${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { type: "button" }, {}, {
    default: () => {
      return `View Booking Details`;
    }
  })}</a>` : `<a href="${"/my/orders"}" rel="${"noopener"}" aria-label="${"Click to view the order details"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { type: "button" }, {}, {
    default: () => {
      return `View Order Details`;
    }
  })}</a>`}

				<a href="${"/"}" rel="${"noopener"}" aria-label="${"Click to route home"}" sveltekit:prefetch>${validate_component(WhiteButton, "WhiteButton").$$render($$result, { type: "button" }, {}, {
    default: () => {
      return `Continue Shopping`;
    }
  })}</a></div></div>

		<div class="${"mx-auto max-w-7xl gap-5 sm:flex sm:items-start sm:justify-center sm:gap-10 md:gap-20"}"><div class="${"sm:w-1/2"}">${((_a = data.order.items) == null ? void 0 : _a.length) > 0 ? `<div class="${"mb-5"}"><h6 class="${"border-b border-dashed border-gray-400 pb-2 text-base font-bold sm:text-lg"}">Item Details
						</h6>

						<div class="${"itmes-start flex flex-col"}">${each(data.order.items, (item, ix) => {
    return `<a href="${"/product/" + escape(item.slug, true) + "?id=" + escape(item.pid, true)}" aria-label="${"Click to view the product details"}" class="${"group flex w-full flex-row justify-between py-4 " + escape(ix != data.order.items.length - 1 ? "border-b" : "", true)}"><div class="${"flex w-full flex-row gap-4"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: item.imgCdn,
        alt: "",
        width: "80",
        class: "h-auto w-20 object-contain"
      },
      {},
      {}
    )}</div>

										<div class="${"w-4/5 flex-1 lg:w-10/12"}">

											<div class="${"mb-2 flex items-start gap-2"}"><a href="${"/products/" + escape(item.slug, true) + "?id=" + escape(item.pid, true)}" aria-label="${"Click to view the product details"}" class="${"text-sm text-gray-500 group-hover:underline"}">${escape(item.name)}</a>

												</div>

											<div class="${"mb-2 flex w-full items-center gap-4 text-sm"}"><div class="${"me-4"}"><span class="${"me-2 font-medium text-gray-500"}">Qty :</span>

													<b>${escape(item.qty)}</b></div>

												<div><span class="${"me-2 font-medium text-gray-500"}">Price :</span>

													<b>${escape(currency(item.price))}</b>
												</div></div>

											

											${item.usedOptions ? `<div class="${"mb-2 flex flex-col gap-2 text-sm sm:mb-4"}">${each(item.usedOptions, (o) => {
      return `<div class="${"flex flex-col items-start sm:flex-row"}"><h6 class="${"sm:me-5 mb-1 w-full sm:mb-0 sm:w-52"}">${escape(o.name)}</h6>

															${o.val && o.val.length ? `<span class="${"font-medium"}">${escape(o.val[0])}
																</span>` : ``}

															<div class="${"flex flex-col gap-1 font-medium"}">${o.dates && o.dates[0] ? `<span>${escape(o.dates[0])}
																	</span>` : ``}

																${o.dates && o.dates[1] ? `<span>${escape(o.dates[1])}
																	</span>` : ``}</div>
														</div>`;
    })}
												</div>` : ``}
										</div></div>
								</a>`;
  })}</div></div>` : ``}

				${((_b = data.order.seats) == null ? void 0 : _b.length) > 0 ? `<div class="${"mb-5"}"><h6 class="${"mb-4 border-b border-dashed border-gray-400 pb-2 text-base font-semibold sm:text-lg"}">Booking Details
						</h6>

						<div class="${"itmes-start flex flex-col divide-y text-sm"}">${each(data.order.seats, (seat) => {
    return `<div class="${"flex flex-col gap-2 py-4"}"><span><b>Seat Number : \xA0 </b> ${escape(seat.seatNo)}</span>

									<span><b>Seat Type : \xA0 </b>

										${seat.seatType === "horizontal_sleeper" ? `Sleeper` : `Seater`}</span>
								</div>`;
  })}</div></div>` : ``}</div>

			<div class="${"flex flex-col gap-4 sm:w-1/2"}">${data.order && data.order.address ? `<div class="${"text-sm"}"><h6 class="${"mb-4 border-b border-dashed border-gray-400 pb-2 text-base font-semibold sm:text-lg"}">Shipping Information
						</h6>

						<div class="${"text-sm text-gray-600"}">${data.order.address.firstName ? `<h5 class="${"mb-2 text-base font-semibold capitalize tracking-wide"}">${escape(data.order.address.firstName)}

									${escape(data.order.address.lastName)}</h5>` : ``}

							<div class="${"s flex flex-wrap"}">${data.order.address.address ? `<div>${escape(data.order.address.address)},
									</div>` : ``}

								${data.order.address.city ? `<div>${escape(data.order.address.city)},
									</div>` : ``}

								${data.order.address.country ? `<div>${escape(data.order.address.country)}</div>` : ``}

								${data.order.address.zip ? `<div>${escape(data.order.address.zip)}</div>` : ``}</div>

							${data.order.address.phone || data.order.address.userPhone ? `<div><b>Phone:</b>

									<span>${escape(data.order.address.phone || data.order.userPhone)}</span></div>` : ``}

							${data.order.address.email ? `<div><b>Email:</b>

									<span>${escape(data.order.address.email)}</span></div>` : ``}</div></div>` : ``}

				${data.order && data.order.amount ? `<div class="${"text-sm"}"><h6 class="${"mb-4 border-b border-dashed border-gray-400 pb-2 text-base font-semibold sm:text-lg"}">Payment Information
						</h6>

						<div class="${"flex max-w-max flex-col items-start gap-2"}">${data.order.amount.subtotal ? `<div class="${"flex items-center"}"><h6 class="${"mr-2 w-20"}">Subtotal</h6>

									<span>: \xA0 ${escape(currency(data.order.amount.subtotal))}</span></div>` : ``}

							${data.order.amount.discount ? `<div class="${"flex items-center"}"><h6 class="${"mr-2 w-20"}">Discount</h6>

									<span>: \xA0 ${escape(currency(data.order.amount.discount))}</span></div>` : ``}

							${data.order.amount.shipping ? `<div class="${"flex items-center"}"><h6 class="${"mr-2 w-20"}">Shipping</h6>

									<span>: \xA0 ${escape(currency(data.order.amount.shipping))}</span></div>` : ``}

							${data.order.amount.total ? `<hr class="${"w-full border-t-2 border-gray-300"}">

								<div class="${"flex items-center text-base font-bold"}"><h6 class="${"mr-2 w-20"}">Total</h6>

									<span>: \xA0 ${escape(currency(data.order.amount.total))}</span></div>` : ``}</div></div>` : ``}</div></div></div>` : ``}

<div style="${"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"}">${validate_component(Confetti, "Confetti").$$render(
    $$result,
    {
      x: [-5, 5],
      y: [0, 0.1],
      delay: [50, 2e3],
      duration: "2000",
      amount: "500",
      fallDistance: "100vh"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
