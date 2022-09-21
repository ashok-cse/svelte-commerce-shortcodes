import { c as create_ssr_component, d as escape, v as validate_component } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import { M as MobileFooter } from "../../../../chunks/MobileFooter.js";
import { L as LazyImg } from "../../../../chunks/LazyImg.js";
const UserDashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { me, myOrders, myWishlist, myReviews } = $$props;
  if ($$props.me === void 0 && $$bindings.me && me !== void 0)
    $$bindings.me(me);
  if ($$props.myOrders === void 0 && $$bindings.myOrders && myOrders !== void 0)
    $$bindings.myOrders(myOrders);
  if ($$props.myWishlist === void 0 && $$bindings.myWishlist && myWishlist !== void 0)
    $$bindings.myWishlist(myWishlist);
  if ($$props.myReviews === void 0 && $$bindings.myReviews && myReviews !== void 0)
    $$bindings.myReviews(myReviews);
  return `<section class="${"h-full w-full tracking-wide text-gray-800"}"><div class="${"mb-5 flex items-end"}"><h1 class="${"mr-1 text-xl font-semibold sm:text-3xl"}">Hi</h1>

		<h2 class="${"mr-1 font-semibold first-letter:text-xl"}">${escape((me == null ? void 0 : me.firstName) || (me == null ? void 0 : me.email))}
			${escape((me == null ? void 0 : me.lastName) || "")}</h2></div>

	<div class="${"mt-2 space-y-4 lg:mt-5 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:space-y-0"}"><a href="${"/my/orders?sort=-updatedAt"}" aria-label="${"Click to route my orders"}" class="${"relative flex items-end justify-between overflow-hidden rounded-lg bg-gradient-to-r from-primary-500 to-fuchsia-600 p-4 text-white shadow-lg shadow-orange-500/30 sm:p-6 lg:w-1/2"}"><div class="${"flex-1"}"><h3 class="${"mt-2 text-xl font-bold sm:text-2xl"}">Orders</h3>

				<div class="${"mt-2 flex items-center"}"><h6 class="${"mr-2 text-sm"}">Total orders</h6>

					<span class="${"font-semibold"}">${escape(myOrders == null ? void 0 : myOrders.count)}</span></div></div>

			<div class="${"absolute right-0 bottom-0 -m-5 overflow-hidden lg:-m-7"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/dashboard/my-orders.png",
      alt: " ",
      width: "128",
      height: "128",
      class: "h-28 w-28 opacity-50 lg:h-32 lg:w-32"
    },
    {},
    {}
  )}</div></a>

		<a href="${"/my/wishlist?sort=-updatedAt"}" aria-label="${"Click to route my wishlist"}" class="${"relative flex items-end justify-between overflow-hidden rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4 text-white shadow-lg shadow-fuchsia-500/30 sm:p-6 lg:w-1/2"}"><div class="${"flex-1"}"><h3 class="${"mt-2 text-xl font-bold sm:text-2xl"}">Wishlist</h3>

				<div class="${"mt-2 flex items-center"}"><h6 class="${"mr-2 text-sm"}">Wishlisted items</h6>

					<span class="${"font-semibold"}">${escape(myWishlist == null ? void 0 : myWishlist.count)}</span></div></div>

			<div class="${"absolute right-0 bottom-0 -mr-2 -mb-5 overflow-hidden lg:-mb-7"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/dashboard/wishlist.png",
      alt: " ",
      width: "128",
      height: "128",
      class: "h-28 w-28 opacity-50 lg:h-32 lg:w-32"
    },
    {},
    {}
  )}</div></a></div>

	<div class="${"mt-4 space-y-4 lg:mt-8 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:space-y-0"}"><a href="${"/my/reviews?sort=-updatedAt"}" aria-label="${"Click to route my reviews"}" class="${"relative flex items-end justify-between overflow-hidden rounded-lg bg-gradient-to-r from-secondary-500 to-cyan-600 p-4 text-white shadow-lg shadow-purple-500/30 sm:p-6 lg:w-1/2"}"><div class="${"flex-1"}"><h3 class="${"mt-2 text-xl font-bold sm:text-2xl"}">Reviews</h3>

				<div class="${"mt-2 flex items-center"}"><h6 class="${"mr-2 text-sm"}">Total reviews</h6>

					<span class="${"font-semibold"}">${escape(myReviews == null ? void 0 : myReviews.count)}</span></div></div>

			<div class="${"absolute right-0 bottom-0 -m-5 overflow-hidden lg:-m-7"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/dashboard/reviews.png",
      alt: " ",
      width: "128",
      height: "128",
      class: "h-28 w-28 opacity-50 lg:h-32 lg:w-32"
    },
    {},
    {}
  )}</div></a>

		<a href="${"/my/profile"}" aria-label="${"Click to route my profile"}" class="${"relative flex items-end justify-between overflow-hidden rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-600 p-4 text-white shadow-lg shadow-cyan-500/30 sm:p-6 lg:w-1/2"}"><div class="${"flex-1"}"><h3 class="${"mt-2 text-xl font-bold sm:text-2xl"}">Profile</h3>

				<div class="${"mt-2 flex items-center text-sm font-semibold"}">${me.phone ? `${escape(me.phone)}` : ``}

					${me.phone && me.email ? `/` : ``}

					${me.email ? `${escape(me.email)}` : ``}</div></div>

			<div class="${"absolute right-0 bottom-0 -m-5 overflow-hidden lg:-m-7"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/dashboard/profile.png",
      alt: " ",
      width: "128",
      height: "128",
      class: "h-28 w-28 opacity-50 lg:h-32 lg:w-32"
    },
    {},
    {}
  )}</div></a></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const seoProps = {
    title: "Dashboard",
    metadescription: "Dashboard"
  };
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div><div class="${"mb-20"}">${validate_component(UserDashboard, "UserDashboard").$$render(
    $$result,
    {
      me: data.me,
      myOrders: data.myOrders,
      myWishlist: data.myWishlist,
      myReviews: data.myReviews
    },
    {},
    {}
  )}</div>

	

	<div class="${"block sm:hidden"}">${validate_component(MobileFooter, "MobileFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
