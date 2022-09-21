import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../chunks/index.js";
import { n as navigating } from "../../../../chunks/stores.js";
import { P as PreloadingIndicator } from "../../../../chunks/PreloadingIndicator.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_navigating();
  return `${$navigating ? `${validate_component(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
