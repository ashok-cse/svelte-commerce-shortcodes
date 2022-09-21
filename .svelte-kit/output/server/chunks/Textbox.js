import { c as create_ssr_component, p as createEventDispatcher, j as add_attribute, d as escape } from "./index.js";
const Textbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { class: clazz = "" } = $$props;
  let { type = "text", id = "", name = "", placeholder = "", value = "", required = false, disabled = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `${type === "text" ? `<input type="${"text"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${type === "email" ? `<input type="${"email"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${type === "password" ? `<input type="${"password"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${type === "date" ? `<input type="${"date"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${type === "time" ? `<input type="${"time"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${type === "number" ? `<input type="${"number"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${type === "tel" ? `<input type="${"tel"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${type === "datetime-local" ? `<input type="${"datetime-local"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"w-full rounded-md border border-gray-300 p-2 text-sm placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-1 focus:ring-primary-500 " + escape(clazz, true) + " " + escape(
    disabled ? "cursor-not-allowed bg-gray-100" : "bg-transparent hover:bg-gray-50",
    true
  )}"${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("aria-label", placeholder, 0)}${add_attribute("value", value, 0)}>` : ``}`}`}`}`}`}`}`}`;
});
export {
  Textbox as T
};
