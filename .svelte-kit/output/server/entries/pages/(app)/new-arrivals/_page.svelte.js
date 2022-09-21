import { c as create_ssr_component, v as validate_component, d as escape, e as each } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import "../../../../chunks/store.js";
/* empty css                                                          */import { L as LazyImg } from "../../../../chunks/LazyImg.js";
import { P as ProductCard } from "../../../../chunks/ProductCard.js";
import { P as PrimaryButton } from "../../../../chunks/PrimaryButton.js";
import { M as MobileFooter } from "../../../../chunks/MobileFooter.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let seoProps = {
    title: `New arrivals`,
    description: `New arrivals`
  };
  let showItemCount = 10;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

${data.newArrivals && data.newArrivals[0] ? `<div><div class="${"mb-20"}">

			<div class="${"relative mb-4"}"><div class="${"h-[25vh] overflow-hidden"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: data.newArrivals[0].imgCdn,
      alt: " ",
      height: "190",
      class: "h-full w-full object-cover object-top"
    },
    {},
    {}
  )}</div>

				<div class="${"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-3xl font-bold tracking-wider text-white"}">${escape(data.newArrivals[0].name)}</div></div>

			${data.productsCount > 0 ? `

				

				

				<div class="${"mb-5 grid w-full grid-cols-2 items-start gap-3 sm:mb-10 sm:flex sm:flex-wrap sm:justify-between lg:mb-20 lg:gap-6"}">${each(data.products, (p, px) => {
    return `${showItemCount >= px + 1 ? `${validate_component(ProductCard, "ProductCard").$$render($$result, { product: p }, {}, {})}` : ``}`;
  })}</div>

				${data.productsCount > showItemCount ? `<div class="${"mx-auto max-w-max"}">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      type: "button",
      loadingringsize: "sm",
      class: "text-sm"
    },
    {},
    {
      default: () => {
        return `Show More
						`;
      }
    }
  )}</div>` : ``}` : `<div class="${"flex items-center justify-center"}"><div class="${"m-10 flex flex-col items-center justify-center text-center"}"><h1 class="${"mb-10 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl"}">Oops!!, No products there
						</h1>

						<div class="${"mb-5"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/no-data-availible.png",
      alt: "no data availible",
      width: "80",
      height: "80",
      class: "h-20 w-20 text-xs"
    },
    {},
    {}
  )}</div>

						<p class="${"mb-5 text-center text-gray-500"}">No data found</p>

						${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "text-sm" }, {}, {
    default: () => {
      return `Back to Home`;
    }
  })}</div></div>`}</div>

		

		<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>` : `<div class="${"flex h-[70vh] items-center justify-center"}"><div class="${"m-10 flex flex-col items-center justify-center text-center"}"><h1 class="${"mb-10 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl"}">Oops!!, No products there
			</h1>

			<div class="${"mb-5"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/no/no-data-availible.png",
      alt: "no data availible",
      width: "80",
      height: "80",
      class: "h-20 w-20 text-xs"
    },
    {},
    {}
  )}</div>

			<p class="${"mb-5 text-center text-gray-500"}">No data found</p>

			${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "text-sm" }, {}, {
    default: () => {
      return `Back to Home`;
    }
  })}</div></div>`}`;
});
export {
  Page as default
};
