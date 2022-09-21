import { c as create_ssr_component, p as createEventDispatcher, d as escape, w as null_to_empty, j as add_attribute } from "./index.js";
const TextboxFloating_svelte_svelte_type_style_lang = "";
const css = {
  code: ".floating-label.svelte-15w066o.svelte-15w066o{position:relative}.floating-input.svelte-15w066o.svelte-15w066o{border-bottom:2px solid #e5e7eb;color:#000;display:block;font-size:14px;height:46px;padding:12px 0 0;width:100%}.floating-input.svelte-15w066o.svelte-15w066o:focus{border-bottom:2px solid #112d4e;outline:none}label.svelte-15w066o.svelte-15w066o{color:#1f2937;font-size:14px;font-weight:400;left:0;pointer-events:none;position:absolute;top:18px;transition:all .2s ease;-moz-transition:all .2s ease;-webkit-transition:all .2s ease}.floating-input.svelte-15w066o:not(:-moz-placeholder-shown)~label.svelte-15w066o{color:#999;font-size:12px;top:0}.floating-input.svelte-15w066o:focus~label.svelte-15w066o,.floating-input.svelte-15w066o:not(:placeholder-shown)~label.svelte-15w066o{color:#999;font-size:12px;top:0}input.svelte-15w066o.svelte-15w066o:-webkit-autofill,input.svelte-15w066o.svelte-15w066o:-webkit-autofill:active,input.svelte-15w066o.svelte-15w066o:-webkit-autofill:focus,input.svelte-15w066o.svelte-15w066o:-webkit-autofill:hover{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}",
  map: null
};
const TextboxFloating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label = "", type = "text", value = "", id = "", name = "", class: className = "", placeholder = " ", required = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(className), true) + " svelte-15w066o"}"><div class="${"floating-label svelte-15w066o"}">${type === "text" ? `<input type="${"text"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"floating-input w-full bg-transparent focus:outline-none svelte-15w066o"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>` : `${type === "email" ? `<input type="${"email"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"floating-input w-full bg-transparent focus:outline-none svelte-15w066o"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>` : `${type === "password" ? `<input type="${"password"}" id="${"password"}" name="${"password"}" class="${"floating-input w-full bg-transparent focus:outline-none svelte-15w066o"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>` : `${type === "date" ? `<input type="${"date"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"floating-input w-full bg-transparent focus:outline-none svelte-15w066o"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>` : `${type === "time" ? `<input type="${"time"}" name="${"time"}" id="${"time"}" class="${"floating-input w-full bg-transparent focus:outline-none svelte-15w066o"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>` : `${type === "number" ? `<input type="${"number"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"floating-input w-full bg-transparent focus:outline-none svelte-15w066o"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>` : `${type === "tel" ? `<input type="${"tel"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${"floating-input w-full bg-transparent focus:outline-none svelte-15w066o"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)} ${required ? "required" : ""}${add_attribute("value", value, 0)}>` : ``}`}`}`}`}`}`}
		<span class="${"highlight"}"></span>

		<label for="${"textbox"}" class="${"svelte-15w066o"}">${escape(label)}</label>
		${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  TextboxFloating as T
};
