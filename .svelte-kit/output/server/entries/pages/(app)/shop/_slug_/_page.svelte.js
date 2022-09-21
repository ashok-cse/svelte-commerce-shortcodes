import { c as create_ssr_component, e as each, d as escape, j as add_attribute, v as validate_component, x as is_promise, n as noop } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { M as MobileFooter } from "../../../../../chunks/MobileFooter.js";
import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import { H as Hero, a as HeroBanners } from "../../../../../chunks/HeroBanners.js";
const PageIdPickedBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pickedBanners } = $$props;
  if ($$props.pickedBanners === void 0 && $$bindings.pickedBanners && pickedBanners !== void 0)
    $$bindings.pickedBanners(pickedBanners);
  return `${(pickedBanners == null ? void 0 : pickedBanners.length) ? `<div class="${"flex flex-col gap-5 sm:gap-10"}">${each(pickedBanners, (b) => {
    var _a, _b;
    return `<div><h1 class="${"p-3 py-5 text-center font-serif text-xl font-medium tracking-wider sm:px-10 sm:text-2xl md:py-10 md:text-3xl xl:text-4xl"}">${escape((_a = b._id) == null ? void 0 : _a.title)}</h1>

				${((_b = b.data) == null ? void 0 : _b.length) ? `<div class="${"max-w-screen overflow-x-auto scrollbar-none lg:hidden"}"><div role="${"banner"}" class="${"flex flex-row"}">${each(b.data, (banner) => {
      return `${banner.imgCdn ? `<a${add_attribute("href", banner.link, 0)} class="${"flex-shrink-0"}">${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: banner.imgCdn,
          alt: "",
          width: "375",
          class: "w-[47vw] object-contain sm:w-60"
        },
        {},
        {}
      )}
									</a>` : ``}`;
    })}
						</div></div>

					<div role="${"banner"}" class="${"hidden grid-cols-7 lg:grid"}">${each(b.data, (banner) => {
      return `${banner.imgCdn ? `<a${add_attribute("href", banner.link, 0)} class="${"col-span-1"}">${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: banner.imgCdn,
          alt: "",
          width: "375",
          class: "h-full w-full object-contain"
        },
        {},
        {}
      )}
								</a>` : ``}`;
    })}
					</div>` : ``}
			</div>`;
  })}</div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f;
  let heroBanners;
  let pickedBanners;
  let { data } = $$props;
  let seoProps = {
    title: `Category specific banners`,
    description: `Category specific banners`
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  heroBanners = (_a = data.banners) == null ? void 0 : _a.data.filter((b) => {
    return b.type === "hero";
  });
  pickedBanners = (_b = data.groupByBanners) == null ? void 0 : _b.filter((b) => {
    var _a2;
    return ((_a2 = b._id) == null ? void 0 : _a2.title) !== null;
  });
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div>${((_c = data.banners) == null ? void 0 : _c.count) > 0 || ((_d = data.groupByBanners) == null ? void 0 : _d.count) > 0 ? `<div class="${"bg-opacity-25 bg-center bg-repeat"}" style="${"background-image:url('/gray-dot.png') ;"}"><div class="${"mb-20 sm:mb-0"}"><div class="${"flex flex-col gap-5 sm:gap-10"}">

					

					${validate_component(Hero, "Hero").$$render($$result, { banners: (_e = data.banners) == null ? void 0 : _e.data }, {}, {})}

					

					

					

					${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
						<div class="${"grid grid-cols-2 items-center gap-2 md:grid-cols-4"}"><div class="${"col-span-2 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-2 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-1 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-1 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-2 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div></div>
					`;
    }
    return function(banner) {
      return `
						${heroBanners.length > 0 ? `<div><h1 class="${"p-3 py-5 text-center font-serif text-xl font-medium tracking-wider sm:px-10 md:py-10 sm:text-2xl md:text-3xl xl:text-4xl"}">BEST OF MISIKI EXCLUSIVE
								</h1>

								${validate_component(HeroBanners, "HeroBanners").$$render($$result, { heroBanners }, {}, {})}</div>` : ``}
					`;
    }();
  }((_f = data.banners) == null ? void 0 : _f.data)}

					

					${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
						<div class="${"grid grid-cols-2 items-center gap-2 md:grid-cols-4"}"><div class="${"col-span-2 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-2 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-1 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-1 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div>

							<div class="${"col-span-2 h-40 animate-pulse rounded-md bg-gray-300 sm:h-60"}"></div></div>
					`;
    }
    return function(banner) {
      return `
						${pickedBanners.length > 0 ? `<div>${validate_component(PageIdPickedBanner, "PageIdPickedBanner").$$render($$result, { pickedBanners }, {}, {})}</div>` : ``}
					`;
    }();
  }(data.groupByBanners)}</div></div>

			

			<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>` : `<div class="${"flex h-[70vh] items-center justify-center"}"><div class="${"m-10 flex flex-col items-center justify-center text-center"}"><h1 class="${"mb-10 text-xl font-semibold capitalize sm:text-2xl lg:text-3xl"}">Oops!!, No Items Found In this Id
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
      return `Back to banner`;
    }
  })}</div></div>`}</div>`;
});
export {
  Page as default
};
