import { c as create_ssr_component, e as each, d as escape, v as validate_component, j as add_attribute } from "../../../../../../chunks/index.js";
import { S as SEO } from "../../../../../../chunks/index6.js";
import { T as Textarea } from "../../../../../../chunks/Textarea.js";
/* empty css                                                                */import { L as LazyImg } from "../../../../../../chunks/LazyImg.js";
import { B as BackButton } from "../../../../../../chunks/BackButton.js";
import "../../../../../../chunks/store.js";
import { P as PrimaryButton } from "../../../../../../chunks/PrimaryButton.js";
const Errors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { errors } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `<div class="${"mb-4 text-sm text-red-600"}">${errors ? `<ul class="${"ml-4 list-decimal gap-2"}">${each(errors, (e) => {
    return `<li>${escape(e.message)}
				</li>`;
  })}</ul>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const seoProps = {
    title: "Reviews Details",
    description: "Reviews Details"
  };
  let { data } = $$props;
  let information = [
    {
      question: `Have you used this business?`,
      answer: `Your review should be about your experience with the business.`
    },
    {
      question: `Why review a business?`,
      answer: `Your valuable feedback will help fellow shoppers decide!`
    },
    {
      question: `How to review a business?`,
      answer: `Your review should include facts. An honest opinion is always appreciated. If you have an issue with the business or service please contact us from the help centre.`
    }
  ];
  let review = {
    id: "new",
    product: data.product._id,
    message: "",
    rating: null
  };
  let select = null, errors = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"text-gray-800"}">${validate_component(BackButton, "BackButton").$$render($$result, { to: data.ref, class: "mb-2" }, {}, {})}

	<div class="${"mb-3 flex flex-col justify-between lg:flex-row lg:items-center"}"><h1 class="${"mb-2 font-serif text-2xl font-medium md:text-3xl lg:text-4xl"}">Ratings and Reviews
		</h1>

		${data.product ? `<a${add_attribute("href", data.ref, 0)} aria-label="${"Click to view the product details"}" class="${"mb-2 flex max-w-max flex-row items-center gap-4 text-sm text-gray-500 lg:flex-row-reverse"}"><div class="${"h-12 w-12 rounded-md border shadow-md"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: data.product.img,
        alt: "Business img",
        width: "48",
        height: "48",
        class: "h-full w-full object-contain object-center text-xs"
      },
      {},
      {}
    )}</div>

				<span>${escape(data.product.name)}</span></a>` : ``}</div>

	${validate_component(Errors, "Errors").$$render($$result, { errors }, {}, {})}

	<div class="${"flex flex-col-reverse xl:flex-row xl:gap-4"}"><div class="${"mt-4 flex w-full flex-col gap-2 xl:mt-0 xl:w-1/3"}"><div class="${"rounded-md border bg-white p-4 text-lg font-semibold capitalize shadow-md"}">What makes a good review
			</div>

			<ul class="${"gap-2 divide-y rounded-md border bg-white shadow-md"}">${each(information, (info) => {
      return `<li class="${"flex flex-col gap-1 p-4 text-sm"}"><span class="${"font-semibold"}">${escape(info.question)}</span>

						<span>${escape(info.answer)}</span>
					</li>`;
    })}</ul></div>

		<div class="${"h-full w-full"}"><div class="${"flex flex-col rounded-md border bg-white p-4 shadow-md"}"><div class="${"mb-2 flex flex-wrap items-center"}"><h1 class="${"mb-2 mr-4 text-lg font-semibold capitalize"}">Rate this business</h1>

					<div class="${"mb-2"}"><div class="${"flex items-center gap-4"}"><div class="${"flex items-center gap-2"}">${each({ length: 5 }, (_, i) => {
      return `<button type="${"button"}" class="${"focus:outline-none focus:ring-0 focus:ring-offset-0"}"><svg class="${"block h-8 w-8 " + escape(
        select >= i && select != null ? "text-primary-500" : "text-gray-300",
        true
      )}" fill="${"currentColor"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}"><path d="${"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}"></path></svg>
									</button>`;
    })}</div>

							${``}

							${``}

							${``}

							${``}

							${``}</div></div></div>

				<div><h1 class="${"mb-2 mr-4 text-lg font-semibold capitalize"}">Reviews this business</h1>

					<form><div class="${"mb-4"}">${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        placeholder: "Description",
        value: review.message
      },
      {
        value: ($$value) => {
          review.message = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

						<div class="${"ml-auto max-w-max"}">${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { type: "submit", class: "w-40" }, {}, {
      default: () => {
        return `SUBMIT`;
      }
    })}</div></form></div></div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
