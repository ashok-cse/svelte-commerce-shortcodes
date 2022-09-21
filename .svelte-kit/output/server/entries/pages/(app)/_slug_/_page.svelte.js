import { c as create_ssr_component, b as subscribe, v as validate_component, d as escape, e as each, j as add_attribute } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import { p as page } from "../../../../chunks/stores.js";
import { L as LazyImg } from "../../../../chunks/LazyImg.js";
import { b as sorts } from "../../../../chunks/index5.js";
/* empty css                                                          */import { P as PrimaryButton } from "../../../../chunks/PrimaryButton.js";
import "../../../../chunks/store.js";
import { P as ProductCard } from "../../../../chunks/ProductCard.js";
import { D as DesktopFilter, M as MobileFilter } from "../../../../chunks/MobileFilter.js";
import { M as MobileFooter } from "../../../../chunks/MobileFooter.js";
import { P as Pagination } from "../../../../chunks/Pagination.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width:1024px){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let seoProps = {
    title: `Find best ${data.searchData || " "}`,
    metadescription: `Find best ${data.searchData || " "}`
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div><div class="${"mb-20 flex w-full flex-col gap-5 lg:flex-row lg:gap-10 lg:p-10"}">${data.facets ? `${validate_component(DesktopFilter, "DesktopFilter").$$render(
    $$result,
    {
      facets: data.facets,
      query: data.query,
      class: "sticky top-[7.5rem] hidden lg:top-[5.5rem] lg:block"
    },
    {},
    {}
  )}

			${validate_component(MobileFilter, "MobileFilter").$$render(
    $$result,
    {
      facets: data.facets,
      class: "sticky top-[5rem] z-50 block lg:hidden"
    },
    {},
    {}
  )}` : ``}

		<div class="${"flex w-full px-3 sm:px-10 lg:px-0"}">${data.products ? `<div class="${"w-full"}">${data.products.length > 0 ? `<h1 class="${"mb-5 text-xl font-bold capitalize md:text-2xl"}">Showing results

							${data.searchData ? `for &quot;${escape(data.searchData)}&quot;` : ``}

							(${escape(data.count)})
						</h1>

						<div class="${"mb-4 hidden flex-wrap items-center justify-between md:flex"}"><label class="${"flex items-center gap-2"}"><span>Sort : </span>

								<select class="${"bg-transparent px-2 py-1 font-semibold hover:underline focus:outline-none"}">${each(sorts, (s) => {
    return `<option${add_attribute("value", s.val, 0)}>${escape(s.name)}</option>`;
  })}</select></label></div>

						<div class="${"mb-5 grid w-full grid-cols-2 items-start gap-3 sm:mb-10 sm:flex sm:flex-wrap sm:justify-between lg:mb-20 lg:gap-6"}">${each(data.products, (p, lx) => {
    return `${validate_component(ProductCard, "ProductCard").$$render($$result, { product: p }, {}, {})}`;
  })}</div>

						${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      count: Math.ceil(data.count / 40),
      current: data.currentPage
    },
    {},
    {}
  )}` : `<div class="${"flex items-center justify-center"}" style="${"height: 60vh;"}"><div class="${"m-10 flex flex-col items-center justify-center text-center"}"><h1 class="${"mb-10 text-xl capitalize sm:text-2xl lg:text-3xl"}">Oops!!, No result found ${data.searchData ? `for &quot;${escape(data.searchData)}&quot;` : ``}</h1>

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
  })}</div></div>`}</div>` : ``}</div></div>

	

	${((_a = data.category) == null ? void 0 : _a.description) ? `<div class="${"w-full justify-center bg-gray-50 p-3 text-sm sm:p-10"}"><div class="${"container mx-auto max-w-6xl"}"><p class="${"prose text-gray-500"}"><!-- HTML_TAG_START -->${(_b = data.category) == null ? void 0 : _b.description}<!-- HTML_TAG_END --></p></div></div>` : ``}

	<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
