import { c as create_ssr_component } from "./index.js";
/* empty css                                        */const css = {
  code: ".small-box.svelte-38rfqp{height:3.5rem;width:3.5rem}@media(min-width:640px){.small-box.svelte-38rfqp{height:5rem;width:5rem}}.extra-small-box.svelte-38rfqp{height:1.75rem;width:1.75rem}@media(min-width:640px){.extra-small-box.svelte-38rfqp{height:3.5rem;width:3.5rem}}.small-gaping.svelte-38rfqp{gap:.5rem}@media(min-width:640px){.small-gaping.svelte-38rfqp{gap:.75rem}}.extra-small-gaping.svelte-38rfqp{gap:.25rem}@media(min-width:640px){.extra-small-gaping.svelte-38rfqp{gap:.5rem}}.small-line.svelte-38rfqp{height:.5rem}@media(min-width:640px){.small-line.svelte-38rfqp{height:.75rem}}.extra-small-line.svelte-38rfqp{height:.25rem}@media(min-width:640px){.extra-small-line.svelte-38rfqp{height:.375rem}}",
  map: null
};
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { small = false, extraSmall = false } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.extraSmall === void 0 && $$bindings.extraSmall && extraSmall !== void 0)
    $$bindings.extraSmall(extraSmall);
  $$result.css.add(css);
  return `<div class="${[
    "flex w-full animate-pulse gap-5",
    (small ? "gap-3" : "") + " " + (extraSmall ? "gap-2" : "")
  ].join(" ").trim()}"><div class="${[
    "h-24 w-24 rounded-md bg-gray-200 sm:h-40 sm:w-40 svelte-38rfqp",
    (small ? "small-box" : "") + " " + (extraSmall ? "extra-small-box" : "")
  ].join(" ").trim()}"></div>

	<div class="${[
    "flex w-full flex-1 flex-col gap-3 sm:gap-4 svelte-38rfqp",
    (small ? "small-gaping" : "") + " " + (extraSmall ? "extra-small-gaping" : "")
  ].join(" ").trim()}"><div class="${[
    "h-3 w-4/5 rounded-md bg-gray-200 sm:h-5 svelte-38rfqp",
    (small ? "small-line" : "") + " " + (extraSmall ? "extra-small-line" : "")
  ].join(" ").trim()}"></div>

		<div class="${[
    "h-3 w-3/5 rounded-md bg-gray-200 sm:h-5 svelte-38rfqp",
    (small ? "small-line" : "") + " " + (extraSmall ? "extra-small-line" : "")
  ].join(" ").trim()}"></div>

		<div class="${[
    "h-3 w-2/6 rounded-md bg-gray-200 sm:h-5 svelte-38rfqp",
    (small ? "small-line" : "") + " " + (extraSmall ? "extra-small-line" : "")
  ].join(" ").trim()}"></div></div></div>`;
});
export {
  Skeleton as S
};
