import { c as create_ssr_component, b as subscribe, v as validate_component, j as add_attribute } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import { p as page } from "../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let paymentUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let seoProps = { title: `Failure`, description: `Failure` };
  paymentUrl = (_a = $page == null ? void 0 : $page.url) == null ? void 0 : _a.searchParams.get("ref");
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"min-h-screen w-full"}"><div class="${"flex flex-col items-center justify-center gap-5 py-20 text-center"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/cancle.png",
      alt: "failed",
      class: "h-auto w-20 object-contain object-top"
    },
    {},
    {}
  )}</div>

		<h1 class="${"text-xl font-bold sm:text-2xl md:text-3xl"}">Payment Failed!</h1>

		<a${add_attribute("href", paymentUrl, 0)} aria-label="${"Click to go back to payment methode"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "uppercase" }, {}, {
    default: () => {
      return `Pay Again`;
    }
  })}</a></div></div>`;
});
export {
  Page as default
};
