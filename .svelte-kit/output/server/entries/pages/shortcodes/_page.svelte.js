import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"prose"}"><b>Code: <!-- HTML_TAG_START -->${data.faqs[0].code}<!-- HTML_TAG_END --></b>
	<br>
	<br>
	<br>
	<br>
	<!-- HTML_TAG_START -->${data.faqs[0].data}<!-- HTML_TAG_END --></div>`;
});
export {
  Page as default
};
