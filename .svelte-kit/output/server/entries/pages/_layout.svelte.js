import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { G as GoogleAnalytics, T as ToastContainer, F as FlatToast } from "../../chunks/GoogleAnalytics.js";
/* empty css                                                    */import { P as PreloadingIndicator } from "../../chunks/PreloadingIndicator.js";
import { B as BackToTop } from "../../chunks/BackToTop.js";
/* empty css                                                          */import { n as navigating } from "../../chunks/stores.js";
const app = "";
const fonts = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_navigating();
  return `${$navigating ? `${validate_component(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}

<section class="${"minimum-width relative flex min-h-screen flex-col bg-white antialiased"}"><div class="${"h-rem w-full flex-1"}">${slots.default ? slots.default({}) : ``}</div></section>

${validate_component(GoogleAnalytics, "GoogleAnalytics").$$render($$result, {}, {}, {})}

${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}

${validate_component(ToastContainer, "ToastContainer").$$render($$result, {}, {}, {
    default: ({ data }) => {
      return `${validate_component(FlatToast, "FlatToast").$$render($$result, { data }, {}, {})}`;
    }
  })}`;
});
export {
  Layout as default
};
