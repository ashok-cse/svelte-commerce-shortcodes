import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import { L as LazyImg } from "../../../../chunks/LazyImg.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let seoProps = {
    title: `About Us`,
    description: `About Us`
  };
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section class="${"min-h-screen p-3 sm:p-10"}"><div class="${"container mx-auto flex w-full max-w-6xl flex-col items-center gap-5 text-center text-sm sm:gap-10 sm:text-base"}">

		<h1 class="${"font-serif text-2xl font-medium md:text-3xl lg:text-4xl"}">About Us</h1>

		<p class="${"text-gray-500"}">Misiki is the best place to shop online in India. Misiki is a well-established brand in the
			personalized gifts segment. Choose from a wide range of mobile covers, t-shirts, photo mugs,
			key-chains, 3D-crystals, photo clocks, picture frames and hundreds of other gifts.
		</p>

		<p class="${"text-gray-500"}">Misiki has been delivering Mobile Cover\u2018s Orders since we opened in 2018. Our goal is to
			provide both a superior customer experience and tremendous value for our customers.
		</p>

		<div class="${"grid grid-cols-1 gap-5 text-left sm:grid-cols-2 sm:gap-10"}"><div class="${"col-span-1 flex items-start gap-5"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/design.png",
      alt: " ",
      width: "64",
      class: "h-auto w-16 object-contain"
    },
    {},
    {}
  )}</div>

				<div class="${"flex-1"}"><h2 class="${"mb-1 text-xl font-semibold"}">Misiki.in is</h2>

					<p class="${"text-gray-500"}">Distinctive fashion for the contemporary Indian with In-house capabilities in design,
						manufacturing, technology, data science, and marketing
					</p></div></div>

			<div class="${"col-span-1 flex items-start gap-5"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/design-2.png",
      alt: " ",
      width: "64",
      class: "h-auto w-16 object-contain"
    },
    {},
    {}
  )}</div>

				<div class="${"flex-1"}"><h2 class="${"mb-1 text-xl font-semibold"}">Unique Design</h2>

					<p class="${"text-gray-500"}">We started from a design focused company that puts innovative and trendy design from
						around the world into the hands of Indian consumers, quite literally.
					</p></div></div>

			<div class="${"col-span-1 flex items-start gap-5"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/team.png",
      alt: " ",
      width: "64",
      class: "h-auto w-16 object-contain"
    },
    {},
    {}
  )}</div>

				<div class="${"flex-1"}"><h2 class="${"mb-1 text-xl font-semibold"}">Our team</h2>

					<p class="${"text-gray-500"}">We\u2019ve built an active and extensive online store that sparks much of our innovation \u2013
						we\u2019re always finding new ways to engage with customers and share the joy of Misiki.in.
						So, stop wandering and begin exploring. Experience an innovation to make your memories
						lasts longer.
					</p></div></div>

			<div class="${"col-span-1 flex items-start gap-5"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/product.png",
      alt: " ",
      width: "64",
      class: "h-auto w-16 object-contain"
    },
    {},
    {}
  )}</div>

				<div class="${"flex-1"}"><h2 class="${"mb-1 text-xl font-semibold"}">Our Products</h2>

					<p class="${"text-gray-500"}">We use advanced technologies to create products that are as durable as they are
						delightful. We stand behindour products with customer service and support previously
						unseen in India.
					</p></div></div></div>

		<div class="${"relative"}"><div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/phone.jpg",
      alt: "",
      width: "400",
      class: "h-full w-full"
    },
    {},
    {}
  )}</div>

			<div class="${"absolute left-40 top-20 flex w-60 flex-col items-center justify-center gap-4 bg-gray-100 p-4 text-center text-sm text-gray-500"}"><h3 class="${"text-lg font-bold text-gray-800"}">Misiki</h3>

				<p class="${"text-gray-500"}">Misiki is the best place to shop online in India. Misiki is a well-established brand in
					the personalized gifts segment.
				</p>

				<p class="${"text-gray-500"}">Choose from a wide range of mobile covers, t-shirts, photo mugs, key-chains, 3D-crystals,
					photo clocks.
				</p>

				<button class="${"max-w-max rounded-md bg-gray-400 py-2 px-10 font-bold uppercase tracking-wider text-gray-800 focus:outline-none"}">Misiki
				</button></div></div>

		<div class="${"mt-20 grid grid-cols-2 gap-5 sm:gap-10 md:grid-cols-4"}"><div class="${"col-span-1 flex flex-col items-center gap-4 bg-gray-100 text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/profile-1.jpg",
      alt: "",
      width: "250",
      height: "250",
      class: "h-full w-full"
    },
    {},
    {}
  )}

				<div class="${"p-4"}"><h6 class="${"mb-1 font-bold"}">Brian Anderson</h6>

					<p class="${"text-sm text-gray-500"}">Misiki has been delivering Mobile Cover\u2018s Orders</p></div></div>

			<div class="${"col-span-1 flex flex-col items-center gap-4 bg-gray-100 text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/profile-2.jpg",
      alt: "",
      width: "250",
      height: "250",
      class: "h-full w-full"
    },
    {},
    {}
  )}

				<div class="${"p-4"}"><h6 class="${"mb-1 font-bold"}">Jennifer Cameron</h6>

					<p class="${"text-sm text-gray-500"}">Misiki has been delivering Mobile Cover\u2018s Orders</p></div></div>

			<div class="${"col-span-1 flex flex-col items-center gap-4 bg-gray-100 text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/profile-3.jpg",
      alt: "",
      width: "250",
      height: "250",
      class: "h-full w-full"
    },
    {},
    {}
  )}

				<div class="${"p-4"}"><h6 class="${"mb-1 font-bold"}">Katherine Lambert</h6>

					<p class="${"text-sm text-gray-500"}">Misiki has been delivering Mobile Cover\u2018s Orders</p></div></div>

			<div class="${"col-span-1 flex flex-col items-center gap-4 bg-gray-100 text-center"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/about-us/profile-4.jpg",
      alt: "",
      width: "250",
      height: "250",
      class: "h-full w-full"
    },
    {},
    {}
  )}

				<div class="${"p-4"}"><h6 class="${"mb-1 font-bold"}">Eric Martin</h6>

					<p class="${"text-sm text-gray-500"}">Misiki has been delivering Mobile Cover\u2018s Orders</p></div></div></div></div></section>`;
});
export {
  Page as default
};
