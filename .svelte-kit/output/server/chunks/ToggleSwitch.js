import { c as create_ssr_component, p as createEventDispatcher, j as add_attribute, d as escape } from "./index.js";
const ToggleSwitch_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-161zqup:checked~.dot.svelte-161zqup{transform:translateX(100%)}input.svelte-161zqup:checked~.green.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(34 197 94/var(--tw-bg-opacity))}input.svelte-161zqup:checked~.blue.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}input.svelte-161zqup:checked~.red.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}input.svelte-161zqup:checked~.yellow.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(234 179 8/var(--tw-bg-opacity))}input.svelte-161zqup:checked~.indigo.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(99 102 241/var(--tw-bg-opacity))}input.svelte-161zqup:checked~.pink.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(236 72 153/var(--tw-bg-opacity))}input.svelte-161zqup:checked~.purple.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(168 85 247/var(--tw-bg-opacity))}input.svelte-161zqup:checked~.black.svelte-161zqup{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}",
  map: null
};
const ToggleSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { color = "green" } = $$props;
  let { checked } = $$props;
  let { name = "" } = $$props;
  let { required = false } = $$props;
  let { disabled = false } = $$props;
  let { textFirst = false } = $$props;
  let { size = "sm" } = $$props;
  let { onText = "" } = $$props;
  let { offText = "" } = $$props;
  createEventDispatcher();
  let { class: clazz = "" } = $$props;
  let uniqueId;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.textFirst === void 0 && $$bindings.textFirst && textFirst !== void 0)
    $$bindings.textFirst(textFirst);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.onText === void 0 && $$bindings.onText && onText !== void 0)
    $$bindings.onText(onText);
  if ($$props.offText === void 0 && $$bindings.offText && offText !== void 0)
    $$bindings.offText(offText);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  $$result.css.add(css);
  return `<div${add_attribute("class", clazz, 0)}>

	<label${add_attribute("for", uniqueId, 0)} class="${"group flex max-w-max cursor-pointer items-center " + escape(textFirst ? "flex-row-reverse" : "flex-row", true) + " " + escape(
    disabled ? "opacity-40 cursor-not-allowed" : "opacity-100",
    true
  )}">

		<div class="${"relative mr-2"}"><input type="${"checkbox"}"${add_attribute("id", uniqueId, 0)}${add_attribute("name", name || uniqueId, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""} class="${"hidden svelte-161zqup"}"${add_attribute("checked", checked, 1)}>

			

			<div class="${"block rounded-full bg-gray-300 " + escape(
    disabled ? "" : "opacity-100 group-hover:opacity-90 transition duration-300",
    true
  ) + " " + escape(size == "xs" ? "h-5 w-8" : "", true) + " " + escape(size == "sm" ? "h-6 w-10" : "", true) + " " + escape(size == "md" ? "h-9 w-16" : "", true) + " " + escape(color == "green" ? "green" : "", true) + " " + escape(color == "blue" ? "blue" : "", true) + " " + escape(color == "red" ? "red" : "", true) + " " + escape(color == "pink" ? "pink" : "", true) + " " + escape(color == "purple" ? "purple" : "", true) + " " + escape(color == "yellow" ? "yellow" : "", true) + " " + escape(color == "indigo" ? "indigo" : "", true) + " " + escape(color == "black" ? "black" : "", true) + " svelte-161zqup"}"></div>

			

			<div class="${"dot absolute left-1 top-1 rounded-full bg-white transition duration-300 ease-in-out " + escape(size == "xs" ? "h-3 w-3" : "", true) + " " + escape(size == "sm" ? "h-4 w-4" : "", true) + " " + escape(size == "md" ? "h-7 w-7" : "", true) + " svelte-161zqup"}"></div></div>

		${slots.default ? slots.default({}) : `
			<div class="${"font-semibold " + escape(textFirst ? "mr-2" : "ml-2", true) + " " + escape(
    disabled ? "" : "opacity-100 group-hover:opacity-90 transition duration-300",
    true
  ) + " " + escape(
    color == "green" && checked === true ? "text-green-500" : "text-gray-400",
    true
  ) + " " + escape(
    color == "blue" && checked === true ? "text-blue-500" : "text-gray-400",
    true
  ) + " " + escape(
    color == "red" && checked === true ? "text-red-500" : "text-gray-400",
    true
  ) + " " + escape(
    color == "pink" && checked === true ? "text-pink-500" : "text-gray-400",
    true
  ) + " " + escape(
    color == "purple" && checked === true ? "text-purple-500" : "text-gray-400",
    true
  ) + " " + escape(
    color == "yellow" && checked === true ? "text-yellow-500" : "text-gray-400",
    true
  ) + " " + escape(
    color == "indigo" && checked === true ? "text-indigo-500" : "text-gray-400",
    true
  ) + " " + escape(
    color == "black" && checked === true ? "" : "text-gray-400",
    true
  ) + " " + escape(size == "xs" ? "text-sm" : "", true) + " " + escape(size == "sm" ? "text-base" : "", true) + " " + escape(size == "md" ? "text-xl" : "", true)}">${checked === true && onText ? `${escape(onText)}` : `${offText ? `${escape(offText)}` : ``}`}</div>
		`}</label></div>`;
});
export {
  ToggleSwitch as T
};
