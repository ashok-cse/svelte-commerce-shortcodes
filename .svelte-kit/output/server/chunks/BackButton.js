import { c as create_ssr_component, d as escape } from "./index.js";
const BackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { to = "", whiteText = false } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.whiteText === void 0 && $$bindings.whiteText && whiteText !== void 0)
    $$bindings.whiteText(whiteText);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `<section class="${"max-w-max " + escape(clazz, true)}"><button class="${"flex max-w-max transform items-center transition duration-300 hover:-translate-x-1 focus:outline-none " + escape(
    whiteText ? "text-gray-200 hover:text-white" : "text-gray-800 hover:text-primary-500",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" d="${"M15 19l-7-7 7-7"}"></path></svg>

		<span>Back</span></button></section>`;
});
export {
  BackButton as B
};
