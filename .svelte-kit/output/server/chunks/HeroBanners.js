import { c as create_ssr_component, e as each, j as add_attribute, v as validate_component } from "./index.js";
import { L as LazyImg } from "./LazyImg.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sliderBanners;
  let sliderBannersMobile;
  let { banners = [] } = $$props;
  if ($$props.banners === void 0 && $$bindings.banners && banners !== void 0)
    $$bindings.banners(banners);
  sliderBanners = banners == null ? void 0 : banners.filter((b) => {
    return b.type === "slider" && b.isMobile === false;
  });
  sliderBannersMobile = banners == null ? void 0 : banners.filter((b) => {
    return b.type === "slider" && b.isMobile === true;
  });
  return `

${(sliderBanners == null ? void 0 : sliderBanners.length) > 0 ? `<div class="${"relative mx-auto hidden h-auto w-full overflow-hidden bg-white sm:block"}"><div class="${"carousel"}">${each(sliderBanners, (b, bx) => {
    return `<div${add_attribute("id", `slide${bx}`, 0)} role="${"banner"}" class="${"carousel-item relative h-auto w-full"}">${b.imgCdn ? `<a${add_attribute("href", b.link, 0)} sveltekit:prefetch>${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: b.imgCdn,
        alt: b.name,
        width: "1500",
        height: "380",
        class: "h-auto w-full object-contain object-top"
      },
      {},
      {}
    )}
						</a>` : ``}</div>

				<div class="${"absolute left-5 right-5 top-1/2 flex justify-between"}">

					${bx != 0 ? `<a${add_attribute("href", `#slide${bx - 1}`, 0)} aria-label="${"Click for previous slide"}" class="${"absolute left-5 z-10 -mt-3.5 hidden items-center justify-center rounded-full bg-white bg-opacity-50 p-2 text-gray-800 transition duration-300 hover:bg-opacity-70 sm:flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 19l-7-7 7-7"}"></path></svg>
						</a>` : ``}

					

					${bx + 1 < (sliderBanners == null ? void 0 : sliderBanners.length) ? `<a${add_attribute("href", `#slide${bx + 1}`, 0)} aria-label="${"Click for next slide"}" class="${"absolute right-5 z-10 -mt-3.5 hidden items-center justify-center rounded-full bg-white bg-opacity-50 p-2 text-gray-800 transition duration-300 hover:bg-opacity-70 sm:flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 5l7 7-7 7"}"></path></svg>
						</a>` : ``}
				</div>`;
  })}</div></div>` : ``}

${(sliderBannersMobile == null ? void 0 : sliderBannersMobile.length) > 0 ? `<div class="${"mx-auto block h-auto w-full overflow-hidden bg-white sm:hidden"}">${(sliderBannersMobile == null ? void 0 : sliderBannersMobile.length) > 0 ? `<div class="${"carousel"}">${each(sliderBannersMobile, (b, bx) => {
    return `<div${add_attribute("id", `slide${bx}`, 0)} role="${"banner"}" class="${"carousel-item h-auto w-full"}">${b.imgCdn ? `<a${add_attribute("href", b.link, 0)} class="${"h-auto w-full"}" sveltekit:prefetch>${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: b.imgCdn,
        alt: b.alt || "",
        width: "360",
        height: "190",
        class: "h-auto w-full object-contain object-top"
      },
      {},
      {}
    )}
							</a>` : ``}
					</div>`;
  })}</div>` : ``}</div>` : ``}`;
});
const HeroBanners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let { heroBanners } = $$props;
  if ($$props.heroBanners === void 0 && $$bindings.heroBanners && heroBanners !== void 0)
    $$bindings.heroBanners(heroBanners);
  return `${(heroBanners == null ? void 0 : heroBanners.length) > 0 ? `<div><div class="${"grid grid-cols-1 sm:grid-cols-2"}"><a${add_attribute("href", ((_a = heroBanners[0]) == null ? void 0 : _a.link) || "/", 0)} aria-label="${"Click here to view the banner's related products"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: (_b = heroBanners[0]) == null ? void 0 : _b.imgCdn,
      alt: "",
      width: "760",
      height: "390",
      class: "col-span-1 h-full w-full"
    },
    {},
    {}
  )}</a>

			<a${add_attribute("href", ((_c = heroBanners[1]) == null ? void 0 : _c.link) || "/", 0)} aria-label="${"Click here to view the banner's related products"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: (_d = heroBanners[1]) == null ? void 0 : _d.imgCdn,
      alt: "",
      width: "760",
      height: "390",
      class: "col-span-1 h-full w-full"
    },
    {},
    {}
  )}</a></div>

		<div class="${"grid grid-cols-1 sm:grid-cols-2"}"><div class="${"grid grid-cols-2"}"><a${add_attribute("href", ((_e = heroBanners[2]) == null ? void 0 : _e.link) || "/", 0)} aria-label="${"Click here to view the banner's related products"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: (_f = heroBanners[2]) == null ? void 0 : _f.imgCdn,
      alt: "",
      width: "370",
      height: "390",
      class: "col-span-1 h-full w-full"
    },
    {},
    {}
  )}</a>

				<a${add_attribute("href", ((_g = heroBanners[2]) == null ? void 0 : _g.link) || "/", 0)} aria-label="${"Click here to view the banner's related products"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: (_h = heroBanners[3]) == null ? void 0 : _h.imgCdn,
      alt: "",
      width: "370",
      height: "390",
      class: "col-span-1 h-full w-full"
    },
    {},
    {}
  )}</a></div>

			<div><a${add_attribute("href", ((_i = heroBanners[4]) == null ? void 0 : _i.link) || "/", 0)} aria-label="${"Click here to view the banner's related products"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: (_j = heroBanners[4]) == null ? void 0 : _j.imgCdn,
      alt: "",
      width: "760",
      height: "390",
      class: "col-span-1 h-full w-full"
    },
    {},
    {}
  )}</a></div></div></div>` : ``}`;
});
export {
  Hero as H,
  HeroBanners as a
};
