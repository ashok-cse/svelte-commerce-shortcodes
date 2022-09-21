import { c as create_ssr_component, d as escape } from "./index.js";
const CheckoutHeader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dashes.svelte-1wmeboz{border-top:1px dashed}",
  map: null
};
const CheckoutHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected = null } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css);
  return `<section class="${"flex flex-wrap justify-center"}"><div class="${"flex w-full justify-between text-center text-xs font-semibold tracking-widest text-gray-700 md:w-2/3 lg:w-1/3"}"><a href="${"/cart"}" aria-label="${"Click to go inside cart"}" class="${"mx-2 flex flex-col"}" sveltekit:prefetch><div class="${"mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-primary-500 text-center " + escape(
    selected === "cart" ? "bg-primary-500  text-white" : "bg-white text-primary-500 ",
    true
  )}">1
			</div>

			<div class="${"mt-1 text-primary-500"}">Cart</div></a>

		<hr class="${"dashes mx-3 my-4 flex-1 text-primary-500 svelte-1wmeboz"}">

		

		${selected == "address" ? `<div class="${"flex flex-col items-center text-center"}"><div class="${"mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-primary-500 text-center " + escape(
    selected === "address" ? "bg-primary-500  text-white" : "bg-white text-primary-500  ",
    true
  )}">
					2
				</div>

				<span class="${"mt-1 text-center text-primary-500"}">Address</span></div>` : `<a href="${"/checkout/address"}" aria-label="${"Click to go inside address"}" class="${"flex flex-col items-center text-center"}"><div class="${"mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-primary-500 text-center " + escape(
    selected === "address" ? "bg-primary-500  text-white" : "bg-white text-primary-500",
    true
  )}">
					2
				</div>

				<span class="${"mt-1 text-center text-primary-500"}">Address</span></a>`}

		<hr class="${"dashes mx-3 my-4 flex-1 text-primary-500 svelte-1wmeboz"}">

		${selected == "payment" ? `<div class="${"flex flex-col items-center text-center"}"><div class="${"mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-primary-500 text-center " + escape(
    selected === "payment" ? "bg-primary-500  text-white " : "bg-white text-primary-500 ",
    true
  )}">
					3
				</div>

				<span class="${"mt-1 text-center text-primary-500"}">Payment</span></div>` : `<div class="${"flex flex-col items-center text-center"}"><div class="${"mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-primary-500 text-center " + escape(
    selected === "payment" ? "bg-primary-500  text-white" : "bg-white text-primary-500",
    true
  )}">
					3
				</div>

				<span class="${"mt-1 text-center text-primary-500"}">Payment</span></div>`}</div></section>`;
});
export {
  CheckoutHeader as C
};
