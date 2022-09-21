import { c as create_ssr_component, b as subscribe, d as escape, v as validate_component } from "../../../../../chunks/index.js";
import "dayjs";
import "hash-it";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import { M as MobileFooter } from "../../../../../chunks/MobileFooter.js";
import { p as page } from "../../../../../chunks/stores.js";
/* empty css                                                              *//* empty css                                                             */import "../../../../../chunks/store.js";
/* empty css                                                               *//* empty css                                                            *//* empty css                                                                */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  (_a = $page == null ? void 0 : $page.url) == null ? void 0 : _a.searchParams;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `

${$$result.head += `${$$result.title = `<title>${escape((_b = data.category) == null ? void 0 : _b.name)}</title>`, ""}`, ""}

<div><div class="${"mb-20 flex min-h-screen w-full flex-col gap-5 lg:flex-row lg:gap-10 lg:px-10"}">${``}

		<div class="${"flex w-full px-3 py-5"}"><div class="${"w-full"}">${`<div class="${"flex items-center justify-center"}" style="${"height: 60vh;"}"><div class="${"m-10 flex flex-col items-center justify-center text-center"}"><h1 class="${"mb-10 text-xl capitalize sm:text-2xl lg:text-3xl"}">Oops!!, No result found ${((_c = data.category) == null ? void 0 : _c.name) ? `for &quot;${escape((_d = data.category) == null ? void 0 : _d.name)}&quot;` : ``}</h1>

							<div class="${"mb-5"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/no-data-availible.png",
      alt: "no data availible",
      width: "80",
      height: "80",
      class: "h-20 w-20 text-xs"
    },
    {},
    {}
  )}</div>

							<p class="${"mb-5 text-center text-gray-500"}">No data found</p>

							${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "text-sm" }, {}, {
    default: () => {
      return `Back to Home
							`;
    }
  })}</div></div>`}</div></div></div>

	<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
