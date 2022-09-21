import { c as create_ssr_component, b as subscribe, d as escape, e as each } from "./index.js";
import { p as page } from "./stores.js";
/* empty css                                          */const css = {
  code: ".active.svelte-5kdmnb{background-color:#282c3f;color:#fff}",
  map: null
};
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pages;
  let startTab;
  let endTab;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { count = 10, current = 1 } = $$props;
  count = +count;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css);
  pages = +count;
  startTab = 5 - current <= 5 && 5 - current >= 0 ? 1 : current - 4;
  endTab = startTab + 9;
  $$unsubscribe_page();
  return `${count > 1 ? `<div class="${"items-center justify-between border-t border-gray-200 lg:flex lg:pt-5"}"><div class="${"items-center whitespace-nowrap py-4 text-xs text-gray-500 sm:text-base"}">Page ${escape(current)} of ${escape(count)}</div>

		<div class="${"flex items-center justify-center gap-2 text-center xl:mx-2"}">${+current > 1 ? `<button class="${"inline-flex items-center rounded border border-gray-300 p-0.5 font-bold tracking-wide text-gray-800 hover:border-gray-800 focus:outline-none sm:p-2 lg:py-2 lg:px-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 sm:mr-2"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 19l-7-7 7-7"}"></path></svg>

					<span class="${"hidden text-xs sm:block"}">Previous</span></button>` : ``}

			<div class="${"flex flex-wrap gap-1"}">${each({ length: pages }, (_, i) => {
    return `${startTab <= i + 1 && endTab - 1 >= i ? `<button class="${[
      "mx-auto h-5 w-5 rounded border-gray-800 text-xs hover:border hover:border-gray-800 focus:outline-none sm:h-8 sm:w-8 sm:text-base svelte-5kdmnb",
      +current === i + 1 ? "active" : ""
    ].join(" ").trim()}">${escape(i + 1)}
						</button>` : ``}`;
  })}</div>

			${+current < count ? `<button class="${"inline-flex items-center rounded border border-gray-300 p-0.5 text-center font-bold tracking-wide text-gray-800 hover:border-gray-800 focus:outline-none sm:p-2 lg:py-2 lg:px-4"}"><span class="${"hidden text-xs sm:block"}">Next</span>

					<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 sm:ml-2"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg></button>` : ``}</div></div>` : ``}`;
});
export {
  Pagination as P
};
