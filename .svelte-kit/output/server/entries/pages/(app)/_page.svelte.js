import { c as create_ssr_component, j as add_attribute, e as each, d as escape, v as validate_component, x as is_promise, n as noop } from "../../../chunks/index.js";
import { S as SEO } from "../../../chunks/index6.js";
import { H as Hero, a as HeroBanners } from "../../../chunks/HeroBanners.js";
import { L as LazyImg } from "../../../chunks/LazyImg.js";
import { P as ProductCard } from "../../../chunks/ProductCard.js";
import { M as MobileFooter } from "../../../chunks/MobileFooter.js";
const CategoriesMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loading, categories } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `<div${add_attribute("class", clazz, 0)}>${loading ? `<div class="${"w-screen overflow-x-auto p-3 py-5 scrollbar-none sm:px-10"}"><div class="${"container mx-auto flex items-start justify-start gap-4"}">${each({ length: 8 }, (_) => {
    return `<div class="${"flex flex-col items-center"}"><div class="${"mb-1 h-16 w-16 animate-pulse rounded-full bg-gray-300 sm:mb-4"}"></div>

						<div class="${"h-2 w-full animate-pulse rounded-full bg-gray-300"}"></div>
					</div>`;
  })}</div></div>` : `${categories && categories.length ? `<div class="${"w-screen overflow-x-auto py-5 scrollbar-none sm:px-10"}"><div class="${"flex items-center pl-3"}">${each(categories, (category) => {
    return `${category.imgCdn ? `<div class="${"pr-3"}"><a href="${"/search?q=" + escape(category.slug, true)}" aria-label="${"Click to view related products of this category"}" class="${"group flex w-16 flex-col items-center justify-center"}"><div class="${"mb-1 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full shadow-md group-hover:border-primary-500 group-hover:shadow-xl sm:mb-4"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: category.imgCdn,
        alt: category.name,
        width: "64",
        height: "64",
        class: "h-full w-full scale-100 transform object-cover text-xs transition-all duration-300 group-hover:scale-105"
      },
      {},
      {}
    )}</div>

								<h6 class="${"w-full truncate overflow-ellipsis text-center text-xs capitalize tracking-tighter text-gray-500 group-hover:font-medium group-hover:text-primary-500"}">${escape(category.name)}
								</h6></a>
						</div>` : ``}`;
  })}</div></div>` : ``}`}</div>`;
});
const PickedBanners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pickedBanners;
  let pickedBannersForDeals;
  let { banners } = $$props;
  if ($$props.banners === void 0 && $$bindings.banners && banners !== void 0)
    $$bindings.banners(banners);
  pickedBanners = banners == null ? void 0 : banners.filter((b) => {
    var _a, _b;
    return ((_a = b._id) == null ? void 0 : _a.type) === "picked" && ((_b = b._id) == null ? void 0 : _b.title) !== "DEAL ZONE";
  });
  pickedBannersForDeals = banners == null ? void 0 : banners.filter((b) => {
    var _a, _b;
    return ((_a = b._id) == null ? void 0 : _a.type) === "picked" && ((_b = b._id) == null ? void 0 : _b.title) === "DEAL ZONE";
  });
  return `<div class="${"flex flex-col gap-5 sm:gap-10"}">${(pickedBannersForDeals == null ? void 0 : pickedBannersForDeals.length) ? `<div class="${"flex flex-col gap-5 sm:gap-10"}">${each(pickedBannersForDeals, (b) => {
    var _a, _b;
    return `<div class="${"flex flex-col gap-5 sm:gap-10"}"><h1 class="${"p-3 py-5 text-center font-serif text-xl font-medium tracking-wider sm:px-10 sm:text-2xl md:py-10 md:text-3xl xl:text-4xl"}">${escape((_a = b._id) == null ? void 0 : _a.title)}</h1>

					${((_b = b.data) == null ? void 0 : _b.length) ? `<div class="${"flex flex-wrap items-center justify-center gap-5 sm:gap-10 xl:gap-20"}">${each(b.data, (banner) => {
      return `${banner.imgCdn ? `<div role="${"banner"}" class="${"h-[40vw] w-[40vw] overflow-hidden rounded-full shadow-md sm:h-[30vw] sm:w-[30vw] lg:h-[20vw] lg:w-[20vw] xl:h-[15vw] xl:w-[15vw]"}"><a${add_attribute("href", banner.link, 0)} sveltekit:prefetch>${validate_component(LazyImg, "LazyImg").$$render(
        $$result,
        {
          src: banner.imgCdn,
          alt: "",
          width: "375",
          class: "h-full w-full object-cover object-center"
        },
        {},
        {}
      )}</a>
									</div>` : ``}`;
    })}
						</div>` : ``}
				</div>`;
  })}</div>` : ``}

	${(pickedBanners == null ? void 0 : pickedBanners.length) ? `<div class="${"flex flex-col gap-5 sm:gap-10"}">${each(pickedBanners, (b) => {
    var _a, _b;
    return `<div><h1 class="${"p-3 py-5 text-center font-serif text-xl font-medium tracking-wider sm:px-10 sm:text-2xl md:py-10 md:text-3xl xl:text-4xl"}">${escape((_a = b._id) == null ? void 0 : _a.title)}</h1>

					${((_b = b.data) == null ? void 0 : _b.length) ? `<div class="${"max-w-screen overflow-x-auto scrollbar-none lg:hidden"}"><div role="${"banner"}" class="${"flex flex-row"}">${each(b.data, (banner) => {
      return `${banner.imgCdn ? `<a${add_attribute("href", banner.link, 0)} class="${"flex-shrink-0"}" sveltekit:prefetch>${validate_component(LazyImg, "LazyImg").$$render(
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
      return `${banner.imgCdn ? `<a${add_attribute("href", banner.link, 0)} class="${"col-span-1"}" sveltekit:prefetch>${validate_component(LazyImg, "LazyImg").$$render(
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
  })}</div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let heroBanners;
  let { data } = $$props;
  const seoProps = {
    title: "Custom Printed Mobile Back Cover and Cases Online @Rs. 99 - Misiki",
    description: "Customised Mobile Covers - Buy Custom Photo Printed Mobile Back Cover And Cases Online For All Stylish Phone Models @Rs.99 On Misiki Store. 100% Easy Returns.",
    slug: "/",
    keywords: "Customised Mobile Covers, Buy Custom Photo Printed Mobile Back Cover,Misiki Store,100% Easy Returns ",
    featuredImage: {
      url: "/logo.png",
      width: 672,
      height: 448,
      caption: "Home page"
    },
    ogImage: { url: "/logo.png" },
    ogSquareImage: { url: "/logo.png" },
    twitterImage: { url: "/logo.png" }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  heroBanners = (_b = (_a = data.home) == null ? void 0 : _a.banners) == null ? void 0 : _b.data.filter((b) => {
    return b.type === "hero";
  });
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}



<div class="${"bg-opacity-25 bg-center bg-repeat"}" style="${"background-image:url('/gray-dot.png') ;"}"><div class="${"mb-20"}">

		${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(home) {
      var _a2;
      return `
			<div class="${"block sm:hidden"}">${validate_component(CategoriesMobile, "CategoriesMobile").$$render(
        $$result,
        {
          loading: home.isFetching,
          categories: ((_a2 = home == null ? void 0 : home.categories) == null ? void 0 : _a2.data) ?? []
        },
        {},
        {}
      )}</div>
		`;
    }(__value);
  }(data.home)}

		<div class="${"mb-5 sm:mb-10"}">${validate_component(Hero, "Hero").$$render($$result, { banners: (_c = data.home.banners) == null ? void 0 : _c.data }, {}, {})}</div>

		

		${((_f = (_e = (_d = data.home) == null ? void 0 : _d.categories) == null ? void 0 : _e.data) == null ? void 0 : _f.length) > 0 ? `<div class="${"mb-5 sm:mb-10"}"><h1 class="${"p-3 py-5 text-center font-serif text-xl font-medium tracking-wider sm:px-10 sm:text-2xl md:py-10 md:text-3xl xl:text-4xl"}">TOP CATEGORIES
				</h1>

				<div class="${"max-w-screen overflow-x-auto scrollbar-none lg:hidden"}"><div class="${"flex flex-row"}">${each((_h = (_g = data.home) == null ? void 0 : _g.categories) == null ? void 0 : _h.data, (category) => {
    return `${(category == null ? void 0 : category.imgCdn) ? `<a${add_attribute("href", category.link, 0)} aria-label="${"Click to get the category related products"}" class="${"flex-shrink-0"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: category.imgCdn,
        alt: "",
        width: "375",
        class: "w-[47vw] object-contain sm:w-60"
      },
      {},
      {}
    )}
								</a>` : ``}`;
  })}</div></div>

				<div class="${"hidden grid-cols-7 lg:grid"}">${each((_j = (_i = data.home) == null ? void 0 : _i.categories) == null ? void 0 : _j.data, (category) => {
    return `${(category == null ? void 0 : category.imgCdn) ? `<a${add_attribute("href", category.link, 0)} aria-label="${"Click to get the category related products"}" class="${"col-span-1"}">${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: category.imgCdn,
        alt: "",
        width: "375",
        class: "h-full w-full object-contain"
      },
      {},
      {}
    )}
							</a>` : ``}`;
  })}</div></div>` : ``}

		

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
    return function(home) {
      return `
			${heroBanners.length ? `<div class="${"mb-5 sm:mb-10"}"><h1 class="${"p-3 py-5 text-center font-serif text-xl font-medium tracking-wider sm:px-10 md:py-10 sm:text-2xl md:text-3xl xl:text-4xl"}">BEST OF MISIKI EXCLUSIVE
					</h1>

					${validate_component(HeroBanners, "HeroBanners").$$render($$result, { heroBanners }, {}, {})}</div>` : ``}
		`;
    }();
  }(data.home)}

		

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
    return function(home) {
      var _a2;
      return `
			${((_a2 = home.groupByBanner) == null ? void 0 : _a2.length) > 0 ? `<div class="${"mb-5 sm:mb-10"}">${validate_component(PickedBanners, "PickedBanners").$$render($$result, { banners: home.groupByBanner }, {}, {})}</div>` : ``}
		`;
    }(__value);
  }(data.home)}

		

		${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(home) {
      var _a2;
      return `
			${(home == null ? void 0 : home.popular) ? `<div class="${"mb-5 sm:mb-10"}"><h1 class="${"p-3 py-5 text-center font-serif text-xl font-medium tracking-wider sm:px-10 md:py-10 sm:text-2xl md:text-3xl xl:text-4xl"}">POPULAR PRODUCTS
					</h1>

					<div class="${"grid w-full grid-cols-2 items-end sm:flex sm:flex-wrap sm:justify-center sm:gap-10"}">${each((_a2 = home == null ? void 0 : home.popular) == null ? void 0 : _a2.data, (p, px) => {
        return `${p ? `${validate_component(ProductCard, "ProductCard").$$render($$result, { product: p }, {}, {})}` : ``}`;
      })}</div></div>` : ``}
		`;
    }(__value);
  }(data.home)}

		

		

		</div>

	

	<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
