import { c as create_ssr_component, v as validate_component, e as each, y as add_classes, d as escape } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import { S as Skeleton } from "../../../../chunks/Skeleton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let seoProps = {
    title: `Frequently Asked Questions`,
    description: `Frequently Asked Questions`
  };
  let show = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section class="${"min-h-screen p-3 sm:p-10"}"><div class="${"container mx-auto w-full max-w-6xl"}">${data.loading ? `<div class="${"flex flex-col gap-5"}">${each({ length: 3 }, (_) => {
    return `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`;
  })}</div>` : `${data.count > 0 ? `

			<div><h1 class="${"mb-5 text-center font-serif text-2xl font-medium sm:mb-10 md:text-3xl lg:text-4xl"}">Frequently Asked Questions
				</h1>

				<div class="${"divide-y overflow-hidden rounded-md border"}">${each(data.faqs, (f, fx) => {
    return `<div${add_classes((show[fx] ? "text-primary-500" : "").trim())}><button type="${"button"}" class="${"flex w-full cursor-pointer items-start justify-between p-4 text-left focus:outline-none sm:p-6"}"><span class="${"flex-1 text-base font-medium md:text-lg"}">${escape(f.question)}</span>

								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 transition duration-300 sm:h-6 " + escape(
      show[fx] ? "text-primary-500 transform rotate-45 transition duration-300" : "",
      true
    )}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 4v16m8-8H4"}"></path></svg></button>

							${show[fx] ? `<div class="${"prose animate-dropdown px-4 pb-4 text-sm text-gray-500 first-letter:uppercase sm:px-6 sm:pb-6 md:text-base"}"><!-- HTML_TAG_START -->${f.answer}<!-- HTML_TAG_END -->
								</div>` : ``}
						</div>`;
  })}</div></div>` : ``}`}</div></section>`;
});
export {
  Page as default
};
