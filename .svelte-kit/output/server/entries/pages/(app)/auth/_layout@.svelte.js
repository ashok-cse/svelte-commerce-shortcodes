import { c as create_ssr_component, b as subscribe, v as validate_component, j as add_attribute } from "../../../../chunks/index.js";
import { P as PageTransitions } from "../../../../chunks/PageTransitions.js";
import { T as ToastContainer, F as FlatToast, G as GoogleAnalytics } from "../../../../chunks/GoogleAnalytics.js";
/* empty css                                                          */import { p as page, n as navigating } from "../../../../chunks/stores.js";
import { P as PreloadingIndicator } from "../../../../chunks/PreloadingIndicator.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return `<section class="${"minimum-width bg-white font-sans antialiased"}">
	${validate_component(PageTransitions, "PageTransitions").$$render($$result, { url: $page == null ? void 0 : $page.url }, {}, {
    default: () => {
      return `<div class="${"minimum-width relative bg-white font-sans antialiased"}">${$navigating ? `${validate_component(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}

			<div${add_attribute("class", $navigating ? "h-screen" : "", 0)}><section class="${"fixed inset-0 h-screen w-full bg-gradient-to-br from-secondary-100 to-primary-100"}"><div class="${"flex h-full w-full items-center justify-center overflow-y-auto p-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-400 sm:p-10 md:p-20"}">${slots.default ? slots.default({}) : ``}</div></section></div></div>`;
    }
  })}</section>

${validate_component(ToastContainer, "ToastContainer").$$render($$result, {}, {}, {
    default: ({ data }) => {
      return `${validate_component(FlatToast, "FlatToast").$$render($$result, { data }, {}, {})}`;
    }
  })}

${validate_component(GoogleAnalytics, "GoogleAnalytics").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
