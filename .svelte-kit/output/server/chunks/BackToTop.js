import { c as create_ssr_component } from "./index.js";
const BackToTop_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back-to-top.svelte-1mzg1xq{bottom:70px;position:fixed;right:20px;transition:opacity .5s,visibility .5s;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:99}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css);
  return `

${``}`;
});
export {
  BackToTop as B
};
