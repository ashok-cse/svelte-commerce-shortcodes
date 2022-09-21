import { c as create_ssr_component, p as createEventDispatcher, d as escape, j as add_attribute, e as each, b as subscribe, v as validate_component } from "./index.js";
/* empty css                                         *//* empty css                                            */import { p as page } from "./stores.js";
import "./store.js";
/* empty css                                        *//* empty css                                             */const css$1 = {
  code: "@media(max-width:768px){}@media(min-width:768px){}input[type=search].svelte-zi1okv::-webkit-search-cancel-button{display:none}",
  map: null
};
const CheckboxEs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredTerms;
  createEventDispatcher();
  let { model, items = [], selectedItems = [], color = "none", name = "", required = false, disabled = false, title = "" } = $$props;
  let noOfitems = 3;
  let searchTerm;
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
  filteredTerms = items;
  return `<div><div class="${"relative mb-3 flex items-center justify-between gap-4"}">${title ? `<h6 class="${"relative z-0 font-bold tracking-wide"}">${escape(title)}</h6>` : ``}

		<div class="${"absolute inset-x-0 right-0 z-10 flex h-8 justify-end"}"><div class="${"relative mb-3 h-8 rounded-full bg-gray-100 " + escape("w-8", true)}"><input type="${"search"}" id="${escape(title, true) + "searchText"}" placeholder="${"Search for " + escape(title, true)}" class="${"h-8 w-full truncate rounded-full bg-transparent py-2 pl-4 pr-10 text-sm focus:outline-none svelte-zi1okv"}"${add_attribute("value", searchTerm, 0)}>

				<button type="${"button"}" class="${"absolute inset-y-0 right-2 z-20 flex items-center justify-center text-gray-500 focus:outline-none"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg>`}</button></div></div></div>

	<ul class="${"flex flex-col"}">${each(filteredTerms, (i, ix) => {
    return `${ix <= noOfitems ? `${i.key ? `<li><label class="${"inline-flex items-center"}"><input type="${"checkbox"}"${add_attribute("name", name, 0)}${add_attribute("id", i.key, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("color", color, 0)}${add_attribute("value", i.key, 0)} class="${"input-checkbox h-4 w-4 rounded-md border border-gray-200 bg-transparent text-primary-500"}"${~selectedItems.indexOf(i.key) ? add_attribute("checked", true, 1) : ""}>

							

							<div class="${"ml-2 flex-1 text-sm leading-tight"}"><span class="${"text-gray-800"}">${escape(i.key)}</span>

								<span class="${"text-gray-500"}">(${escape(i.doc_count)})</span>
							</div></label>
					</li>` : ``}` : ``}`;
  })}

		${filteredTerms.length > 3 ? `<button type="${"button"}" class="${"text-left text-sm font-semibold text-primary-500 hover:underline focus:outline-none"}">${`See all`}</button>` : ``}</ul></div>`;
});
const DesktopFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  createEventDispatcher();
  let { facets = {}, fl = {}, appliedFilters = {}, query, filterLength = 0, mergedArr = [] } = $$props;
  let { class: clazz } = $$props;
  let megaMenu = [];
  let selectedCategory;
  let showSubCategory = [];
  if ($$props.facets === void 0 && $$bindings.facets && facets !== void 0)
    $$bindings.facets(facets);
  if ($$props.fl === void 0 && $$bindings.fl && fl !== void 0)
    $$bindings.fl(fl);
  if ($$props.appliedFilters === void 0 && $$bindings.appliedFilters && appliedFilters !== void 0)
    $$bindings.appliedFilters(appliedFilters);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.filterLength === void 0 && $$bindings.filterLength && filterLength !== void 0)
    $$bindings.filterLength(filterLength);
  if ($$props.mergedArr === void 0 && $$bindings.mergedArr && mergedArr !== void 0)
    $$bindings.mergedArr(mergedArr);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  {
    {
      filterLength = 0;
      mergedArr = [];
      for (let a in appliedFilters) {
        const arr = appliedFilters[a] || [];
        if (Array.isArray(arr)) {
          mergedArr.concat(arr);
          filterLength += arr.length;
        } else {
          mergedArr.concat(arr.split(","));
          filterLength += arr.split(",").length;
        }
      }
    }
  }
  $$unsubscribe_page();
  return `<div class="${escape(clazz, true) + " flex h-[85vh] w-56 flex-shrink-0 flex-col items-start overflow-x-auto overflow-x-hidden pr-6 scrollbar-thin scrollbar-thumb-slate-200"}"><div class="${"flex flex-col items-start gap-1"}"><h6 class="${"font-bold tracking-wide"}"><span>${filterLength ? `${escape(filterLength)}` : ``}</span>

			<span>${escape(filterLength > 1 ? "Filters" : "Filter")}</span></h6>

		<ul class="${"flex flex-row flex-wrap gap-1 text-xs"}">${each(Object.entries(appliedFilters), ([key, value], index) => {
    return `${value ? `<li class="${"first-letter:uppercase"}">${escape(value)}
					</li>` : ``}`;
  })}</ul>

		${filterLength ? `<button type="${"button"}" class="${"text-xs text-primary-500 transition duration-300 hover:underline focus:outline-none"}">Clear All
			</button>` : ``}</div>

	${megaMenu.length ? `<div class="${"my-3"}"><hr class="${"mb-3 w-full"}">

			<h6 class="${"mb-3 font-bold tracking-wide"}">Categories</h6>

			<ul class="${"flex w-full cursor-pointer flex-col text-sm"}">${each(megaMenu, (m, mx) => {
    var _a2;
    return `<li>${((_a2 = m.children) == null ? void 0 : _a2.length) ? `<div class="${"flex w-full items-center justify-between gap-2 " + escape(
      selectedCategory === m.name ? "text-blue-600 font-medium" : "hover:text-blue-600",
      true
    )}"><a href="${"/" + escape(m.slug, true)}" class="${"flex-1"}">${escape(m.name)}</a>

								<button type="${"button"}" class="${"overflow-hidden p-1 focus:outline-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"h-5 w-5 flex-shrink-0 transition duration-300 " + escape(showSubCategory[mx] ? "transform rotate-90" : "", true)}"><path fill-rule="${"evenodd"}" d="${"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"}" clip-rule="${"evenodd"}"></path></svg></button>
							</div>` : `<a href="${"/" + escape(m.slug, true)}" class="${"flex w-full items-center justify-between gap-2 py-1 text-left hover:text-blue-600 focus:outline-none"}">${escape(m.name)}
							</a>`}

						${showSubCategory[mx] ? `<ul class="${"ml-2"}">${each(m.children, (c) => {
      return `<li><a href="${"/" + escape(c.slug, true)}" type="${"button"}" class="${"flex w-full items-center justify-between gap-2 py-1 text-left hover:text-blue-600 focus:outline-none"}">${escape(c.name)}</a>
									</li>`;
    })}
							</ul>` : ``}
					</li>`;
  })}</ul></div>` : ``}

	${((_d = (_c = (_b = (_a = facets == null ? void 0 : facets.all_aggs) == null ? void 0 : _a.brands) == null ? void 0 : _b.all) == null ? void 0 : _c.buckets) == null ? void 0 : _d.length) > 0 ? `<div class="${"my-3"}"><hr class="${"mb-3 w-full"}">

			${validate_component(CheckboxEs, "CheckboxEs").$$render(
    $$result,
    {
      items: (_g = (_f = (_e = facets.all_aggs) == null ? void 0 : _e.brands) == null ? void 0 : _f.all) == null ? void 0 : _g.buckets,
      title: "Brands",
      model: "brands",
      selectedItems: fl.brands || []
    },
    {},
    {}
  )}</div>` : ``}

	${((_k = (_j = (_i = (_h = facets == null ? void 0 : facets.vendors) == null ? void 0 : _h.all) == null ? void 0 : _i.all) == null ? void 0 : _j.buckets) == null ? void 0 : _k.length) > 0 ? `<div class="${"my-3"}"><hr class="${"mb-3 w-full"}">

			${validate_component(CheckboxEs, "CheckboxEs").$$render(
    $$result,
    {
      items: (_n = (_m = (_l = facets == null ? void 0 : facets.vendors) == null ? void 0 : _l.all) == null ? void 0 : _m.all) == null ? void 0 : _n.buckets,
      title: "vendors",
      model: "vendors",
      selectedItems: fl.vendors || []
    },
    {},
    {}
  )}</div>` : ``}

	${((_s = (_r = (_q = (_p = (_o = facets == null ? void 0 : facets.all_aggs) == null ? void 0 : _o.price) == null ? void 0 : _p.all) == null ? void 0 : _q.all) == null ? void 0 : _r.buckets) == null ? void 0 : _s.length) > 0 ? `<div class="${"my-3"}"><hr class="${"mb-3 w-full"}">

			${validate_component(CheckboxEs, "CheckboxEs").$$render(
    $$result,
    {
      items: (_w = (_v = (_u = (_t = facets == null ? void 0 : facets.all_aggs) == null ? void 0 : _t.price) == null ? void 0 : _u.all) == null ? void 0 : _v.all) == null ? void 0 : _w.buckets,
      title: "PRICE",
      model: "price",
      selectedItems: fl.price || []
    },
    {},
    {}
  )}</div>` : ``}

	${((_B = (_A = (_z = (_y = (_x = facets == null ? void 0 : facets.all_aggs) == null ? void 0 : _x.discount) == null ? void 0 : _y.all) == null ? void 0 : _z.all) == null ? void 0 : _A.buckets) == null ? void 0 : _B.length) > 0 ? `<div class="${"my-3"}"><hr class="${"mb-3 w-full"}">

			${validate_component(CheckboxEs, "CheckboxEs").$$render(
    $$result,
    {
      items: (_F = (_E = (_D = (_C = facets == null ? void 0 : facets.all_aggs) == null ? void 0 : _C.discount) == null ? void 0 : _D.all) == null ? void 0 : _E.all) == null ? void 0 : _F.buckets,
      title: "DISCOUNT",
      model: "discount",
      selectedItems: fl.discount || []
    },
    {},
    {}
  )}</div>` : ``}</div>`;
});
const css = {
  code: ".frosted-black.svelte-100zzw5{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.8)}",
  map: null
};
const MobileFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  createEventDispatcher();
  let { class: clazz = "" } = $$props;
  let { facets = {}, fl = {}, appliedFilters = {}, filterLength = 0, mergedArr = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.facets === void 0 && $$bindings.facets && facets !== void 0)
    $$bindings.facets(facets);
  if ($$props.fl === void 0 && $$bindings.fl && fl !== void 0)
    $$bindings.fl(fl);
  if ($$props.appliedFilters === void 0 && $$bindings.appliedFilters && appliedFilters !== void 0)
    $$bindings.appliedFilters(appliedFilters);
  if ($$props.filterLength === void 0 && $$bindings.filterLength && filterLength !== void 0)
    $$bindings.filterLength(filterLength);
  if ($$props.mergedArr === void 0 && $$bindings.mergedArr && mergedArr !== void 0)
    $$bindings.mergedArr(mergedArr);
  $$result.css.add(css);
  {
    {
      filterLength = 0;
      mergedArr = [];
      for (let a in appliedFilters) {
        const arr = appliedFilters[a] || [];
        if (Array.isArray(arr)) {
          mergedArr.concat(arr);
          filterLength += arr.length;
        } else {
          mergedArr.concat(arr.split(","));
          filterLength += arr.split(",").length;
        }
      }
    }
  }
  $$unsubscribe_page();
  return `<div class="${escape(clazz, true) + " grid w-full grid-cols-2 divide-x divide-gray-300 border-t border-b bg-white font-medium shadow-md svelte-100zzw5"}">

	<button type="${"button"}" class="${"flex items-center justify-center gap-2 p-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}"></path></svg>

		<span>Filter</span></button>

	

	<button type="${"button"}" class="${"flex items-center justify-center gap-2 p-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"}"></path></svg>

		<span>Sort</span></button></div>

${``}

${``}`;
});
export {
  DesktopFilter as D,
  MobileFilter as M
};
