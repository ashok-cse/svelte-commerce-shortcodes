import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/index.js";
import { N as Nav, F as Footer } from "../../../chunks/Footer.js";
import { p as page } from "../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"h-rem w-full flex-1"}">${validate_component(Nav, "Nav").$$render($$result, { me: $page.data.me, cart: $page.data.cart }, {}, {})}

	<div class="${"mt-20"}">${slots.default ? slots.default({}) : ``}</div></div>

<div class="${"hidden sm:block"}">${validate_component(Footer, "Footer").$$render($$result, { me: $page.data.me, cart: $page.data.cart }, {}, {})}</div>`;
});
export {
  Layout as default
};
