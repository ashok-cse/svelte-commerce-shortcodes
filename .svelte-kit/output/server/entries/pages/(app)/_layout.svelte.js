import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Nav, F as Footer } from "../../../chunks/Footer.js";
import { P as PageTransitions } from "../../../chunks/PageTransitions.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      me: data.me,
      cart: data.cart,
      store: data.store,
      q: data.q
    },
    {},
    {}
  )}

${validate_component(PageTransitions, "PageTransitions").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `<div class="${"h-rem mt-20 w-full flex-1"}">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}

<div class="${"hidden sm:block"}">${validate_component(Footer, "Footer").$$render($$result, { me: data.me, cart: data.cart }, {}, {})}</div>`;
});
export {
  Layout as default
};
