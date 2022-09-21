import { c as create_ssr_component, b as subscribe, d as escape, v as validate_component, e as each, j as add_attribute } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { r as readable } from "../../../../../chunks/index3.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import { a as loginUrl } from "../../../../../chunks/store.js";
/* empty css                                                             */import { p as page } from "../../../../../chunks/stores.js";
import { P as Pagination } from "../../../../../chunks/Pagination.js";
const time = readable(new Date().getTime(), function start(set) {
  const interval = setInterval(() => {
    set(new Date().getTime());
  }, 1e3);
  return function stop() {
    clearInterval(interval);
  };
});
const TimeAgo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let asDate;
  let diff;
  let seconds;
  let minutes;
  let hours;
  let days;
  let months;
  let years;
  let unit;
  let obj;
  let $time, $$unsubscribe_time;
  $$unsubscribe_time = subscribe(time, (value) => $time = value);
  let { date = new Date().getTime() } = $$props;
  let { live = false } = $$props;
  let { withSuffix = true } = $$props;
  let { suffix = " ago" } = $$props;
  let { asPrefix = false } = $$props;
  let { units = {
    seconds: "s",
    minutes: "m",
    hours: "h",
    days: "d",
    months: "mo",
    years: "y"
  } } = $$props;
  const __units = {
    seconds: "s",
    minutes: "m",
    hours: "h",
    days: "d",
    months: "mo",
    years: "y"
  };
  let now = new Date().getTime();
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.withSuffix === void 0 && $$bindings.withSuffix && withSuffix !== void 0)
    $$bindings.withSuffix(withSuffix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.asPrefix === void 0 && $$bindings.asPrefix && asPrefix !== void 0)
    $$bindings.asPrefix(asPrefix);
  if ($$props.units === void 0 && $$bindings.units && units !== void 0)
    $$bindings.units(units);
  asDate = typeof date == "number" ? date.toString().length == 10 ? new Date(date * 1e3).getTime() : new Date(date).getTime() : new Date(date).getTime();
  diff = live == true ? $time - asDate : now - asDate;
  seconds = diff / 1e3;
  minutes = seconds / 60;
  hours = minutes / 60;
  days = hours / 24;
  months = days / 30;
  years = months / 12;
  unit = seconds < 60 ? "seconds" : minutes < 60 ? "minutes" : hours < 24 ? "hours" : days < 31 ? "days" : months < 12 ? "months" : "years";
  obj = {
    seconds,
    minutes,
    hours,
    days,
    months,
    years
  };
  $$unsubscribe_time();
  return `${withSuffix && asPrefix ? `${escape(suffix)}` : ``}${escape(parseInt(obj[unit]))}${escape(units[unit] ?? __units[unit])}${withSuffix && !asPrefix ? `${escape(suffix)}` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".frosted.svelte-3phudq{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background-color:hsla(0,0%,100%,.3)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f;
  let $$unsubscribe_loginUrl;
  let $$unsubscribe_page;
  $$unsubscribe_loginUrl = subscribe(loginUrl, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  const seoProps = {
    title: "Dashboard - Reviews ",
    description: "My Reviews"
  };
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_loginUrl();
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"w-full text-gray-800"}">${((_a = data.reviews) == null ? void 0 : _a.isFetching) ? `Loading....` : `${((_b = data.reviews) == null ? void 0 : _b.errors) ? `${escape(data.reviews.errors)}` : `${((_c = data.reviews.data) == null ? void 0 : _c.myReviews.count) ? `<header class="${"mb-3 flex flex-wrap items-center justify-between"}">${data.reviews.count > 0 ? `<h1 class="${"mb-2 text-xl font-bold md:text-2xl "}">Reviews (${escape(data.reviews.count)})
				</h1>

				<label class="${"mb-2"}"><span class="${"text-sm"}">Sort: </span>

					<select class="${"border-b border-gray-300 bg-transparent p-0.5 text-sm font-semibold focus:outline-none"}"><option value="${"-updatedAt"}" selected class="${"p-4"}">Whats New</option><option value="${"name"}">Name ASC</option><option value="${"-name"}">Name DESC</option><option value="${"-active"}">Active</option><option value="${"active"}">Inactive</option></select></label>` : ``}</header>

		<div class="${"flex flex-col gap-2 sm:gap-4"}">${each((_d = data.reviews.data) == null ? void 0 : _d.myReviews.data, (review) => {
    var _a2, _b2, _c2, _d2;
    return `${review.listing ? `<div class="${"frosted rounded-lg border p-4 shadow-lg md:p-6 svelte-3phudq"}"><div class="${"mb-2 flex w-full"}"><div class="${"mr-2 w-20 sm:mr-5 sm:w-32"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: (_a2 = review.listing) == null ? void 0 : _a2.imgCdn,
        alt: ((_b2 = review.listing) == null ? void 0 : _b2.name) || "",
        width: "128",
        class: "h-full w-full object-contain object-top"
      },
      {},
      {}
    )}</div>

							<div class="${"relative flex h-auto w-full flex-1 flex-col"}"><a${add_attribute("href", `/product/${(_c2 = review.listing) == null ? void 0 : _c2.slug}`, 0)} aria-label="${"Click to view the product details"}" class="${"mb-2 font-semibold"}">${escape((_d2 = review.listing) == null ? void 0 : _d2.name)}</a>

								<div class="${"mb-2 flex flex-row items-center"}"><div class="${"mr-2 flex items-center gap-1 rounded bg-primary-500 py-0.5 px-2 text-center text-sm font-bold text-white"}">${escape(review.rating)}

										<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></div>

									<div class="${"text-normal flex-1 text-lg font-semibold"}">${review.rating === 1 ? `<span class="${"font-semibold text-red-600"}">Very Disappointed </span>` : `${review.rating === 2 ? `<span class="${"font-semibold text-orange-600"}">Slightly Disapponted </span>` : `${review.rating === 3 ? `<span class="${"font-semibold text-green-600"}">Good</span>` : `${review.rating === 4 ? `<span class="${"font-semibold text-green-600"}">Very Good</span>` : `${review.rating === 5 ? `<span class="${"font-semibold text-green-600"}">Excellent</span>` : ``}`}`}`}`}
									</div></div>

								<p class="${"mb-2 text-sm"}"><i>- ${escape(review.message)}</i></p>

								<div class="${"text-xs"}">${validate_component(TimeAgo, "TimeAgo").$$render($$result, { date: +review.updatedAt }, {}, {})}</div>
							</div></div>

						<div class="${"flex justify-end"}"><button class="${"w-9 rounded-full bg-gray-100 p-2 text-xs text-gray-500 transition duration-300 hover:bg-gray-200"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"}" clip-rule="${"evenodd"}"></path></svg>
							</button></div>
					</div>` : ``}`;
  })}</div>

		${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      count: Math.ceil(((_e = data.reviews.data) == null ? void 0 : _e.myReviews.count) / ((_f = data.reviews.data) == null ? void 0 : _f.myReviews.pageSize)),
      current: +data.currentPage
    },
    {},
    {}
  )}` : `<div class="${"flex h-full flex-col items-center justify-center text-center"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/online-review-animate.svg",
      alt: "empty reviews",
      height: "240",
      class: "mb-5 h-60 object-contain"
    },
    {},
    {}
  )}</div>

			<span class="${"mb-3 text-xl font-medium md:text-3xl"}">Empty Reviews !!</span>

			<span class="${"mb-5 text-xs"}">We didn&#39;t find any review against your listing. </span>

			<a href="${"/"}" aria-label="${"Click to route home"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "w-40 py-2 text-sm" }, {}, {
    default: () => {
      return `BROWSE ITEMS`;
    }
  })}</a></div>`}`}`}</div>`;
});
export {
  Page as default
};
