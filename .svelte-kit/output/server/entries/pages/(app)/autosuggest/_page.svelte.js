import { c as create_ssr_component, b as subscribe, v as validate_component, j as add_attribute, e as each, d as escape } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import { L as LazyImg } from "../../../../chunks/LazyImg.js";
import "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let seoProps = {
    title: `Auto suggest`,
    description: `Auto suggest`
  };
  let searchInput = null, q = "", trending = [], popular = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<main class="${"w-ful h-screen"}"><div class="${"fixed inset-x-0 top-0"}"><div class="${"absolute z-20 my-auto mt-4 px-1"}"><a href="${"/"}" aria-label="${"Click to search"}" sveltekit:prefetch><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"my-auto h-6 w-8 text-gray-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"}" clip-rule="${"evenodd"}"></path></svg></a></div>

		<div class="${"w-full"}"><div class="${"w-full"}"><div class="${"z-50 flex w-full flex-col justify-start"}"><div class="${"flex flex-wrap"}">

						<form autocomplete="${"off"}" class="${"flex w-full flex-row"}"><input${add_attribute("placeholder", "Search for products, brands...", 0)}${add_attribute("value", q, 0)} class="${"text-normal relative h-14 w-full truncate border px-10 font-light focus:outline-none focus:ring-2 focus:ring-primary-500"}"${add_attribute("this", searchInput, 0)}>

							<div class="${"flex h-full cursor-pointer justify-end"}">${`<svg class="${"absolute my-auto mr-2 mt-4 flex h-6 w-6 justify-end text-sm text-gray-500"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg>`}</div></form>

						<div class="${"mt-1 w-full overflow-auto rounded border-gray-400 bg-white scrollbar-none"}">${each([], (v, i) => {
    return `<div class="${"flex w-full cursor-pointer flex-row items-center justify-between border-b text-base font-light text-gray-500 hover:bg-gray-100"}"><div class="${"flex w-10/12 flex-row"}">${v.imgCdn ? `<div class="${"my-auto w-1/6"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: v.imgCdn,
        alt: "",
        height: "40",
        class: "mx-auto my-auto h-10 object-contain"
      },
      {},
      {}
    )}
											</div>` : ``}

										<span class="${"w-5/6 truncate p-3"}">${escape(v.name)}</span></div>

									<svg class="${"mx-2"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}"><g fill="${"none"}" fill-rule="${"evenodd"}"><path d="${"M0 0h24v24H0z"}"></path><path fill="${"#000"}" fill-opacity="${".54"}" fill-rule="${"nonzero"}" d="${"M16.631 19.015l1.384-1.45-9.55-9.62h6.59v-2h-10v10h2v-6.59z"}"></path></g></svg>
								</div>`;
  })}</div></div></div></div></div></div>

	${((_a = trending == null ? void 0 : trending.data) == null ? void 0 : _a.length) ? `<div class="${"mt-16 px-4"}"><h6 class="${"mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600"}">Trending on ${escape(data.store.websiteName)}</h6>

			<div class="${"flex flex-col gap-4"}">${each(trending == null ? void 0 : trending.data, (s) => {
    return `<a href="${"/product/" + escape(s.slug, true)}" aria-label="${"Click to route product details"}" class="${"flex items-start gap-4"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: s.imgCdn,
        alt: s.name,
        width: "56",
        class: "w-14"
      },
      {},
      {}
    )}

						<div class="${"flex flex-1 items-center gap-4"}"><div class="${"w-full flex-1 text-sm"}">${s.brand ? `<h6 class="${"font-medium"}">${escape(s.brand)}</h6>` : ``}

								${s.name ? `<p>${escape(s.name)}</p>` : ``}</div>

							<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 flex-shrink-0"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg></div>
					</a>`;
  })}</div></div>` : ``}

	${((_b = popular == null ? void 0 : popular.data) == null ? void 0 : _b.length) ? `<div class="${"mt-16 px-4"}"><h6 class="${"mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600"}">Popular on ${escape(data.store.websiteName)}</h6>

			<div class="${"flex flex-col gap-4"}">${each(popular == null ? void 0 : popular.data, (s) => {
    return `<a href="${"/product/" + escape(s.slug, true)}" aria-label="${"Click to route product details"}" class="${"flex items-start gap-4"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: s.imgCdn,
        alt: s.name,
        width: "56",
        class: "w-14"
      },
      {},
      {}
    )}

						<div class="${"flex flex-1 items-center gap-4"}"><div class="${"w-full flex-1 text-sm"}">${s.brand ? `<h6 class="${"font-medium"}">${escape(s.brand)}</h6>` : ``}

								${s.name ? `<p>${escape(s.name)}</p>` : ``}</div>

							<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 flex-shrink-0"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg></div>
					</a>`;
  })}</div></div>` : ``}</main>`;
});
export {
  Page as default
};
