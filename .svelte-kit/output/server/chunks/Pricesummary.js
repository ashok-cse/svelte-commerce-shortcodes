import { c as create_ssr_component, p as createEventDispatcher, d as escape, v as validate_component } from "./index.js";
import { c as currency } from "./index4.js";
import { P as PrimaryButton } from "./PrimaryButton.js";
const Pricesummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e, _f, _g;
  createEventDispatcher();
  let { cart, nextpage = null, text = "Proceed to checkout", loading = false, disabled = false, hideCheckoutButton = false, showNextIcon = false } = $$props;
  if ($$props.cart === void 0 && $$bindings.cart && cart !== void 0)
    $$bindings.cart(cart);
  if ($$props.nextpage === void 0 && $$bindings.nextpage && nextpage !== void 0)
    $$bindings.nextpage(nextpage);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.hideCheckoutButton === void 0 && $$bindings.hideCheckoutButton && hideCheckoutButton !== void 0)
    $$bindings.hideCheckoutButton(hideCheckoutButton);
  if ($$props.showNextIcon === void 0 && $$bindings.showNextIcon && showNextIcon !== void 0)
    $$bindings.showNextIcon(showNextIcon);
  return `${cart ? `<section class="${"my-5 border-t border-gray-200 py-5 text-gray-800"}"><h5 class="${"text-xl font-bold capitalize tracking-wide"}"><span>Price Summary</span>

			<span class="${"text-sm font-medium"}">(${escape(cart.qty)}
				${cart.qty > 1 ? `items ` : `item `})
			</span></h5>

		<h6 class="${"mt-1 text-xs tracking-wider text-gray-400"}">Includes all government taxes</h6>

		<div class="${"mt-3"}"><div class="${"mt-2 flex items-center justify-between font-medium"}"><h4>Total</h4>

				<h4>${escape(((_a = cart.formattedAmount) == null ? void 0 : _a.subtotal) || "-")}</h4></div>

			<div class="${"mt-2 flex items-center justify-between font-medium"}"><h4>Discount</h4>

				<h4 class="${"text-green-500"}">${((_b = cart == null ? void 0 : cart.discount) == null ? void 0 : _b.amount) > 0 ? `- ${escape(currency((_c = cart == null ? void 0 : cart.discount) == null ? void 0 : _c.amount))}` : `0`}</h4></div>

			<div class="${"mt-2 flex items-center justify-between font-medium"}"><h4>Tax</h4>

				<h4>${escape(((_d = cart == null ? void 0 : cart.formattedAmount) == null ? void 0 : _d.tax) || "-")}</h4></div>

			<div class="${"mt-2 flex items-center justify-between font-medium"}"><h4>Shipping</h4>

				<h4>${((_e = cart.shipping) == null ? void 0 : _e.charge) < 1 ? `<span class="${"text-green-500"}">Free</span>` : `${escape(currency((_f = cart.shipping) == null ? void 0 : _f.charge))}`}</h4></div>

			</div>

		<hr class="${"my-5 border-t border-dashed border-gray-200"}">

		${cart.subtotal ? `<div class="${"my-2 mb-5 flex items-center justify-between text-lg font-bold "}"><h4>Total Amount</h4>

				${escape((_g = cart.formattedAmount) == null ? void 0 : _g.total)}</div>` : ``}

		<div class="${"hidden md:block"}">${cart.qty > 0 && !hideCheckoutButton ? `${nextpage ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      class: "group w-full uppercase",
      loading,
      disabled
    },
    {},
    {
      default: () => {
        return `<span>${escape(text)}</span>

						${showNextIcon ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transform transition duration-700 group-hover:translate-x-2"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg>` : ``}`;
      }
    }
  )}` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      type: "submit",
      class: "w-full uppercase",
      loading,
      disabled
    },
    {},
    {
      default: () => {
        return `<span>${escape(text)}</span>

						${showNextIcon ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transform transition duration-700 group-hover:translate-x-2"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg>` : ``}`;
      }
    }
  )}`}` : ``}</div>

		<div class="${"fixed inset-x-0 bottom-0 z-50 block w-full md:hidden"}">${cart.qty > 0 && !hideCheckoutButton ? `${nextpage ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      roundedNone: true,
      class: "w-full uppercase",
      loading,
      disabled
    },
    {},
    {
      default: () => {
        return `<span>${escape(text)}</span>

						${showNextIcon ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transform transition duration-700 group-hover:translate-x-2"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg>` : ``}`;
      }
    }
  )}` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      roundedNone: true,
      type: "submit",
      class: "w-full uppercase",
      loading,
      disabled
    },
    {},
    {
      default: () => {
        return `<span>${escape(text)}</span>

						${showNextIcon ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transform transition duration-700 group-hover:translate-x-2"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg>` : ``}`;
      }
    }
  )}`}` : ``}</div></section>` : ``}`;
});
export {
  Pricesummary as P
};
