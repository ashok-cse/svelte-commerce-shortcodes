import { c as create_ssr_component } from "./index.js";
/* empty css                                                   */const css = {
  code: ".progress-container.svelte-13nz7e1{height:4px;width:100%;z-index:999}.progress.svelte-13nz7e1,.progress-container.svelte-13nz7e1{left:0;position:absolute;top:0}.progress.svelte-13nz7e1{background-color:#5cb85c;height:100%;transition:width .4s}.fade.svelte-13nz7e1{-webkit-animation:svelte-13nz7e1-fade .4s;animation:svelte-13nz7e1-fade .4s;background-color:hsla(0,0%,100%,.3);height:100%;pointer-events:none;position:fixed;width:100%;z-index:998}@-webkit-keyframes svelte-13nz7e1-fade{0%{opacity:0}to{opacity:1}}@keyframes svelte-13nz7e1-fade{0%{opacity:0}to{opacity:1}}",
  map: null
};
const PreloadingIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${``}

${``}`;
});
export {
  PreloadingIndicator as P
};
