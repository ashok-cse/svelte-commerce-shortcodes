import { c as create_ssr_component, p as createEventDispatcher, j as add_attribute, d as escape } from "./index.js";
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { class: clazz = "" } = $$props;
  let { value = "", name = "", id = "", placeholder = " ", cols = 30, rows = 4, disabled = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<textarea${add_attribute("name", name, 0)}${add_attribute("id", id, 0)}${add_attribute("cols", cols, 0)}${add_attribute("rows", rows, 0)}${add_attribute("placeholder", placeholder, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("aria-label", placeholder, 0)}>${value || ""}</textarea>`;
});
export {
  Textarea as T
};
