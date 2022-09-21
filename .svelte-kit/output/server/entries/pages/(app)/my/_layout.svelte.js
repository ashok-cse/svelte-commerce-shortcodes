import { c as create_ssr_component, b as subscribe, p as createEventDispatcher, j as add_attribute, d as escape, w as null_to_empty, e as each, v as validate_component } from "../../../../chunks/index.js";
import { P as PageTransitions } from "../../../../chunks/PageTransitions.js";
/* empty css                                                          */import { p as page } from "../../../../chunks/stores.js";
/* empty css                                                                    */import { B as BackToTop } from "../../../../chunks/BackToTop.js";
import "../../../../chunks/store.js";
import "cookie-universal";
/* empty css                                                         *//* empty css                                                              */import "vanilla-lazyload";
const _SidebarDashboard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".active.svelte-10si73w{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.active-submenu.svelte-10si73w{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity))}.active-submenu.svelte-10si73w:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}",
  map: null
};
const SidebarDashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let { me, sidebar } = $$props;
  if ($$props.me === void 0 && $$bindings.me && me !== void 0)
    $$bindings.me(me);
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `${sidebar ? `<aside aria-label="${"Sidebar"}"><ul><li><div aria-controls="${"dropdown-example"}" data-collapse-toggle="${"dropdown-example"}" class="${"w-full whitespace-pre-wrap text-left text-sm tracking-wider"}">${sidebar.hidden === "hidden" && sidebar.downArrow !== "" && (sidebar == null ? void 0 : sidebar.subItems) && ((_a = sidebar == null ? void 0 : sidebar.subItems[0]) == null ? void 0 : _a.name) !== "" ? `

						<a sveltekit:prefetch${add_attribute("href", sidebar.url, 0)} aria-label="${"Click to route this page"}" class="${[
    "flex w-full items-center justify-start gap-2 p-3 text-white svelte-10si73w",
    $page.url.pathname === sidebar.pathName ? "active" : ""
  ].join(" ").trim()}"><div class="${"dutaion-500 flex flex-1 transform items-center gap-2 transition hover:translate-x-2"}"><div><!-- HTML_TAG_START -->${sidebar.svg}<!-- HTML_TAG_END --></div>

								<span class="${"flex-1 whitespace-pre-wrap capitalize"}" sidebar-toggle-item>${escape(sidebar.name)}</span></div>

							${sidebar.downArrow !== "" && (sidebar == null ? void 0 : sidebar.subItems) && ((_b = sidebar == null ? void 0 : sidebar.subItems[0]) == null ? void 0 : _b.name) !== "" ? `

								<svg data-accordion-icon="${""}" class="${"h-5 w-5 flex-shrink-0 " + escape(
    sidebar.hidden === "hidden" ? "" : "transform -rotate-180",
    true
  )}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 \n										0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>` : ``}</a>

						` : `${sidebar.hidden !== "" ? `<a sveltekit:prefetch${add_attribute("href", sidebar.url, 0)} aria-label="${"Click to route this page"}" class="${[
    "flex w-full items-center justify-start gap-2 p-3 text-white svelte-10si73w",
    $page.url.pathname === sidebar.pathName ? "active" : ""
  ].join(" ").trim()}"><div class="${"dutaion-500 flex flex-1 transform items-center gap-2 transition hover:translate-x-2"}"><div><!-- HTML_TAG_START -->${sidebar.svg}<!-- HTML_TAG_END --></div>

								<span class="${"flex-1 whitespace-pre-wrap capitalize"}" sidebar-toggle-item>${escape(sidebar.name)}</span></div>

							${sidebar.downArrow !== "" && (sidebar == null ? void 0 : sidebar.subItems) && ((_c = sidebar == null ? void 0 : sidebar.subItems[0]) == null ? void 0 : _c.name) !== "" ? `

								<svg data-accordion-icon="${""}" class="${"h-5 w-5 flex-shrink-0 " + escape(
    sidebar.hidden === "hidden" ? "" : "transform -rotate-180",
    true
  )}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>` : ``}</a>` : ``}`}</div>

				<ul id="${"dropdown-example"}" class="${escape(null_to_empty(sidebar.hidden), true) + " svelte-10si73w"}">${sidebar && sidebar.subItems ? `${each(sidebar.subItems, (subItems) => {
    var _a2;
    return `<li><a sveltekit:prefetch${add_attribute("href", subItems.url, 0)} aria-label="${"Click to route this page"}" class="${[
      "svelte-10si73w",
      ((_a2 = $page.url) == null ? void 0 : _a2.pathname) === subItems.pathName ? "active-submenu" : ""
    ].join(" ").trim()}"><div class="${"px-3 py-2 capitalize text-white"}">${escape(subItems.name)}
									</div></a>
							</li>`;
  })}` : ``}</ul></li></ul></aside>` : ``}`;
});
const menu = [
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  			  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
			  </svg>`,
    name: "Orders",
    hidden: "hidden",
    url: "/my/orders?sort=-updatedAt",
    pathName: "/my/orders",
    role: ""
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  			  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
			  </svg>`,
    name: "Profile",
    hidden: "hidden",
    url: "/my/profile",
    pathName: "/my/profile",
    role: "user"
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
			  </svg>`,
    name: "Wishlist",
    hidden: "hidden",
    url: "/my/wishlist?sort=-updatedAt",
    pathName: "/my/wishlist",
    role: "user"
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
			  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			  </svg>`,
    name: "Addresses",
    hidden: "hidden",
    url: "/my/addresses?sort=-updatedAt",
    pathName: "/my/addresses",
    role: "user"
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
			  </svg>`,
    name: "Reviews",
    hidden: "hidden",
    url: "/my/reviews?sort=-updatedAt",
    pathName: "/my/reviews",
    role: "user"
  }
];
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width:640px){}@media(min-width:640px){}.h-rem.svelte-44gpg7{height:93.1vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let url;
  let sort;
  let isHome;
  let q;
  let currentPage;
  let me;
  let cart;
  let store;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ path, url, sort, isHome, q, currentPage, me, cart, store } = data);
  return `<div class="${"flex h-full w-full items-start"}">${(menu == null ? void 0 : menu.length) > 0 ? `<div class="${"h-rem relative hidden w-52 flex-shrink-0 overflow-y-auto overflow-x-hidden bg-primary-500 scrollbar-none sm:block svelte-44gpg7"}">

			${`<button type="${"button"}" title="${"Close sidebar"}" class="${"absolute top-0 right-0 z-10 bg-black p-1 text-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transform transition duration-300 hover:scale-110"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>`}

			

			<a href="${"/my"}" aria-label="${"Click to route dashboard"}" sveltekit:prefetch><button type="${"button"}" class="${"w-full p-3 text-left text-sm text-gray-400 focus:outline-none"}">Dashboard
				</button></a>

			

			${each(menu, (s) => {
    return `${validate_component(SidebarDashboard, "SidebarDashboard").$$render($$result, { me, sidebar: s }, {}, {})}`;
  })}</div>` : ``}

	<div class="${"h-rem w-full flex-1 overflow-y-auto svelte-44gpg7"}">

		${``}

		${validate_component(PageTransitions, "PageTransitions").$$render($$result, { url }, {}, {
    default: () => {
      return `<div class="${"p-3 py-5 sm:p-10"}">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}</div>

	${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
