import { c as create_ssr_component, p as createEventDispatcher, d as escape, j as add_attribute, b as subscribe, v as validate_component, e as each } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import "../../../../../chunks/store.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { p as page } from "../../../../../chunks/stores.js";
import { T as ToggleSwitch } from "../../../../../chunks/ToggleSwitch.js";
import { P as Pagination } from "../../../../../chunks/Pagination.js";
const SearchBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value = "", placeholder = "" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `<div class="${"relative w-full " + escape(clazz, true)}"><input type="${"search"}"${add_attribute("placeholder", placeholder, 0)} class="${"w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-14 text-sm font-semibold placeholder-gray-400 transition duration-300 placeholder:font-normal hover:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"}"${add_attribute("value", value, 0)}>

	<button type="${"submit"}" class="${"absolute inset-y-0 right-0 flex items-center justify-center px-4 text-gray-500 focus:outline-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg></button></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".h-rem-empty.svelte-ex4pok{height:70vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let search;
  let sort;
  let err;
  let addresses;
  let count;
  let query;
  let currentPage;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const seoProps = {
    title: "Dashboard - Addresses ",
    description: "My Addresses"
  };
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ search, sort, err, addresses, count, query, currentPage } = data);
    $$rendered = `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"text-gray-800"}"><div class="${"mb-5 flex items-center justify-between gap-4 sm:gap-6"}">${validate_component(SearchBox, "SearchBox").$$render(
      $$result,
      {
        placeholder: "Search addresses name, title, content and status...",
        value: search
      },
      {
        value: ($$value) => {
          search = $$value;
          $$settled = false;
        }
      },
      {}
    )}

		<a href="${"/my/addresses/new"}" aria-label="${"Click to route new address"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        roundedFull: true,
        class: "flex h-10 w-10 transform items-center justify-center shadow shadow-primary-500/30 hover:scale-110 hover:shadow-lg md:h-12 md:w-12"
      },
      {},
      {
        default: () => {
          return `<svg class="${"h-6 w-6 md:h-8 md:w-8"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 6v6m0 0v6m0-6h6m-6 0H6"}"></path></svg>`;
        }
      }
    )}</a></div>

	${(addresses == null ? void 0 : addresses.isFetching) ? `Loading....` : `${(addresses == null ? void 0 : addresses.errors) ? `${escape(addresses)}` : `${addresses.count > 0 ? `<header class="${"mb-5 flex flex-wrap items-center justify-between gap-2 sm:gap-5"}"><h1 class="${"text-xl font-bold md:text-2xl"}">Addresses (${escape(addresses.count)})
			</h1>

			<label><span class="${"text-sm"}">Sort: </span>

				<select class="${"border-b border-gray-300 bg-transparent p-0.5 text-sm font-semibold focus:outline-none"}"><option value="${"-updatedAt"}" selected class="${"p-4"}">Whats New</option><option value="${"status"}">Status ASC</option><option value="${"-status"}">Status DESC</option><option value="${"-active"}">Active</option><option value="${"active"}">Inactive</option></select></label></header>

		<div class="${"overflow-hidden border-b border-gray-200 shadow-md sm:rounded-lg"}"><table class="${"min-w-full divide-y divide-gray-200 text-left text-sm tracking-wider"}"><thead class="${"whitespace-nowrap bg-primary-500 text-xs font-medium uppercase text-white"}"><tr><th scope="${"col"}" class="${"px-6 py-3"}">First Name </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Last Name </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Email </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Phone </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Address </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Locality </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">City </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">State </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Country </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Zip </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Active </th>
						<th scope="${"col"}" class="${"px-6 py-3"}">Actions </th></tr></thead>

				<tbody class="${"divide-y divide-gray-200"}">${addresses.data.length ? each(addresses.data, (i, ix) => {
      return `${i ? `<tr><td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.firstName)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.lastName)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.email)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.phone)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.address)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.locality)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.city)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.state)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.country)}</td>
								<td class="${"whitespace-pre-line px-6 py-3"}">${escape(i.zip)}</td>

								<td class="${"whitespace-nowrap px-6 py-3"}">${validate_component(ToggleSwitch, "ToggleSwitch").$$render(
        $$result,
        {
          color: "blue",
          size: "sm",
          checked: i.active
        },
        {
          checked: ($$value) => {
            i.active = $$value;
            $$settled = false;
          }
        },
        {}
      )}</td>

								<td class="${"whitespace-nowrap px-6 py-3"}"><div class="${"flex items-center gap-5 text-sm text-gray-500"}"><a${add_attribute("href", `/my/addresses/${i.id}`, 0)} aria-label="${"Click to route edit address"}" class="${"w-9 rounded-full bg-gray-100 p-2 text-xs text-gray-500 transition duration-300 hover:bg-gray-200"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}"></path></svg></a>

										<button type="${"button"}" class="${"w-9 rounded-full bg-gray-100 p-2 text-xs text-gray-500 transition duration-300 hover:bg-gray-200"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}"></path></svg></button>
									</div></td>
							</tr>` : ``}`;
    }) : `<div class="${"px-6 py-3 text-sm text-gray-500 whitespace-nowrap"}">No Pages Data Found!
						</div>`}</tbody></table></div>

		${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        count: Math.ceil(count / 40),
        current: currentPage
      },
      {},
      {}
    )}` : `<div class="${"h-rem-empty flex flex-col items-center justify-center text-center svelte-ex4pok"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: "/no/empty-address.svg",
        alt: "empty address",
        height: "240",
        class: "mb-5 h-60 object-contain"
      },
      {},
      {}
    )}</div>

			<span class="${"mb-3 text-xl font-medium md:text-3xl"}">Empty Addresses!!</span>

			<span class="${"mb-5 text-xs"}">We didn&#39;t find any address, Add a address by clicking the plus icon
			</span></div>`}`}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
