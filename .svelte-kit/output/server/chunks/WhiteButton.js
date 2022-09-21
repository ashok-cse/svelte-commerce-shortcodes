import { c as create_ssr_component, p as createEventDispatcher, j as add_attribute, d as escape } from "./index.js";
const WhiteButton_svelte_svelte_type_style_lang = "";
const css = {
  code: ".applyRoundedNone.svelte-1nuku24{border-radius:0}.applyroundedFull.svelte-1nuku24{border-radius:9999px}",
  map: null
};
const WhiteButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { loading = false, loadingringsize = "base", disabled = false, roundedNone = false, roundedFull = false, hideLoading = false, type = "button" } = $$props;
  let { class: clazz = "" } = $$props;
  let localLoadingPeriod = false;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.loadingringsize === void 0 && $$bindings.loadingringsize && loadingringsize !== void 0)
    $$bindings.loadingringsize(loadingringsize);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.roundedNone === void 0 && $$bindings.roundedNone && roundedNone !== void 0)
    $$bindings.roundedNone(roundedNone);
  if ($$props.roundedFull === void 0 && $$bindings.roundedFull && roundedFull !== void 0)
    $$bindings.roundedFull(roundedFull);
  if ($$props.hideLoading === void 0 && $$bindings.hideLoading && hideLoading !== void 0)
    $$bindings.hideLoading(hideLoading);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  $$result.css.add(css);
  return `<button${add_attribute("type", type, 0)} class="${[
    "relative transform items-center justify-center overflow-hidden rounded-md border px-4 py-2 text-center font-semibold tracking-wider text-gray-800 shadow-md transition duration-700 focus:outline-none focus:ring-0 focus:ring-offset-0 " + escape(clazz, true) + " " + escape(
      disabled ? "bg-gray-400 border-gray-400 cursor-not-allowed" : "bg-white hover:bg-primary-50 hover:border-primary-50 active:scale-95",
      true
    ) + " svelte-1nuku24",
    (roundedNone ? "applyRoundedNone" : "") + " " + (roundedFull ? "applyroundedFull" : "")
  ].join(" ").trim()}"><div class="${"flex items-center justify-center gap-2"}">${slots.default ? slots.default({}) : ``}</div>

	${loading || localLoadingPeriod ? `<div class="${"absolute inset-0 flex cursor-not-allowed items-center justify-center bg-black bg-opacity-70"}"><svg class="${"mx-auto animate-spin text-white " + escape(loadingringsize == "xs" ? "w-4 h-4" : "", true) + " " + escape(loadingringsize == "sm" ? "h-5 w-5" : "", true) + " " + escape(loadingringsize == "base" ? "h-6 w-6" : "", true) + " " + escape(loadingringsize == "lg" ? "h-7 w-7" : "", true)}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><circle class="${"opacity-25"}" cx="${"12"}" cy="${"12"}" r="${"10"}" stroke="${"currentColor"}" stroke-width="${"4"}"></circle><path class="${"opacity-75"}" fill="${"currentColor"}" d="${"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}"></path></svg></div>` : ``}</button>`;
});
export {
  WhiteButton as W
};
