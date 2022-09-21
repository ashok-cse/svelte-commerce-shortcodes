import { c as create_ssr_component, p as createEventDispatcher, e as each, d as escape } from "./index.js";
const CtrlS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { loading = false, formChanged = false, loadingMessage = null, successMessage = null, errors = null } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.formChanged === void 0 && $$bindings.formChanged && formChanged !== void 0)
    $$bindings.formChanged(formChanged);
  if ($$props.loadingMessage === void 0 && $$bindings.loadingMessage && loadingMessage !== void 0)
    $$bindings.loadingMessage(loadingMessage);
  if ($$props.successMessage === void 0 && $$bindings.successMessage && successMessage !== void 0)
    $$bindings.successMessage(successMessage);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `
${formChanged ? `<div class="${"bg-primary-100 fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between p-2 text-center text-sm shadow-lg md:p-3 md:px-5"}"><h6 class="${"flex max-w-max flex-row items-center gap-2 text-gray-600 md:mx-auto"}">${loading ? `<span class="${"sm:block "}"><!-- HTML_TAG_START -->${loadingMessage || "Saving..."}<!-- HTML_TAG_END --></span>` : `${successMessage ? `<span class="${"sm:block "}"><!-- HTML_TAG_START -->${successMessage || "Success."}<!-- HTML_TAG_END --></span>` : `${errors && errors.length ? `${each(errors, (e) => {
    return `<span class="${"sm:block "}"><!-- HTML_TAG_START -->${e.message}<!-- HTML_TAG_END --> </span>`;
  })}` : `<span class="${"sm:block"}">There are unsaved changes on this page. Press
        </span>
        <span><b>Ctrl + S</b> to save.</span>`}`}`}</h6>

    <form class="${"max-w-max"}"><button class="${"btn px-10 sm:px-16 " + escape(loading ? "loading" : "", true)}" type="${"submit"}">SAVE</button></form></div>` : ``}`;
});
export {
  CtrlS as C
};
