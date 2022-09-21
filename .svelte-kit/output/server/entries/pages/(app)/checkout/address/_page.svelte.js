import { c as create_ssr_component, p as createEventDispatcher, v as validate_component, j as add_attribute, d as escape, e as each } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { P as Pricesummary } from "../../../../../chunks/Pricesummary.js";
import { E as Error } from "../../../../../chunks/Error.js";
import "../../../../../chunks/store.js";
import { C as CheckoutHeader } from "../../../../../chunks/CheckoutHeader.js";
const AddressSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full p-4 sm:p-6"}"><div class="${"w-3/5 h-6 my-3 bg-gray-200 rounded animate-pulse"}"></div>
	<div class="${"w-4/5 h-6 my-3 bg-gray-200 rounded animate-pulse"}"></div>
	<div class="${"w-2/5 h-6 my-3 bg-gray-200 rounded animate-pulse"}"></div>
	<div class="${"w-1/5 h-6 my-3 bg-gray-200 rounded animate-pulse"}"></div></div>`;
});
const SelectAddress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { address, selectedAddress, loading } = $$props;
  let err;
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.selectedAddress === void 0 && $$bindings.selectedAddress && selectedAddress !== void 0)
    $$bindings.selectedAddress(selectedAddress);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  return `${validate_component(Error, "Error").$$render($$result, { err }, {}, {})}

${loading ? `${validate_component(AddressSkeleton, "AddressSkeleton").$$render($$result, {}, {}, {})}` : `${address ? `<div class="${"border-b p-4 sm:p-6"}"><label class="${"flex w-full cursor-pointer flex-row gap-2 sm:gap-4"}"><input type="${"radio"}"${add_attribute("value", address._id, 0)} name="${"group"}" class="${"mt-1.5 h-4 w-4 focus:outline-none focus:ring-0 focus:ring-offset-0"}"${address._id === selectedAddress ? add_attribute("checked", true, 1) : ""}>

			<div class="${"flex w-full cursor-pointer flex-col gap-2 font-light text-gray-800"}"><h5 class="${"flex-1 font-semibold capitalize tracking-wide md:text-lg"}">${escape(address.firstName)}
					${escape(address.lastName)}</h5>

				<div class="${"flex flex-wrap items-start text-sm md:flex-nowrap"}"><h5 class="${"w-20 font-semibold"}">Address</h5>

					<p class="${"flex flex-1 flex-wrap items-center"}">:
						${address.address ? `${escape(address.address)}` : ``}
						${address.locality ? `, ${escape(address.locality)}` : ``}
						${address.city ? `, ${escape(address.city)}` : ``}
						${address.state ? `, ${escape(address.state)}` : ``}
						${address.country ? `, ${escape(address.country)}` : ``}</p></div>

				<div class="${"flex flex-wrap items-start text-sm md:flex-nowrap"}"><h5 class="${"w-20 font-semibold"}">Pin Code</h5>

					<p class="${"flex flex-1 flex-col"}">: ${escape(address.zip)}</p></div>

				<div class="${"flex flex-wrap items-start text-sm md:flex-nowrap"}"><h5 class="${"w-20 font-semibold"}">Phone</h5>

					<p class="${"flex flex-1 flex-col"}">: ${escape(address.phone)}</p></div>

				<div class="${"flex flex-wrap items-start text-sm md:flex-nowrap"}"><h5 class="${"w-20 font-semibold"}">Email</h5>

					<p class="${"flex flex-1 flex-col"}">: ${escape(address.email)}</p></div></div></label>

		<div class="${"ml-6 mt-5 flex items-center gap-5 text-sm sm:ml-8"}"><button type="${"button"}" class="${"w-full rounded-md border border-primary-500 py-2 px-4 font-semibold tracking-wide text-primary-500 shadow-md transition duration-300 hover:bg-primary-500 hover:text-white focus:outline-none"}">EDIT
			</button>

			<button type="${"button"}" class="${"w-full rounded-md border border-transparent bg-transparent py-2 px-4 font-semibold tracking-wide text-gray-500 transition duration-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white hover:shadow-md focus:outline-none"}">${`<span>REMOVE</span>`}</button></div></div>` : ``}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cart;
  let loading;
  let myAddresses;
  let err;
  let prescriptionId;
  let selectedAddress;
  let { data } = $$props;
  const seoProps = {
    title: "Address ",
    metadescription: "Address"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ cart, loading, myAddresses, err, prescriptionId, selectedAddress } = data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"container mx-auto min-h-screen w-full max-w-6xl p-3 py-5 sm:p-10"}">${validate_component(Error, "Error").$$render($$result, { err }, {}, {})}

	${validate_component(CheckoutHeader, "CheckoutHeader").$$render($$result, { selected: "address" }, {}, {})}
	

	<div class="${"mt-5 md:mt-10 lg:flex lg:justify-center lg:gap-10 xl:gap-20"}"><div class="${"w-full flex-1"}"><h1 class="${"text-xl font-bold capitalize tracking-wide sm:text-2xl"}">Select Delivery Address
			</h1>

			${(myAddresses == null ? void 0 : myAddresses.count) > 0 ? `<div class="${"mx-auto mt-5 rounded-lg border bg-white shadow-lg"}">${each(myAddresses.data, (ads) => {
    return `${validate_component(SelectAddress, "SelectAddress").$$render($$result, { loading, address: ads, selectedAddress }, {}, {})}`;
  })}</div>` : `<hr class="${"mt-5"}">`}

			<div class="${"my-10 w-1/2"}"><a href="${"/checkout/add-address?id=new"}" aria-label="${"Click to route add address"}" class="${"group flex h-40 w-full flex-col items-center justify-center rounded-md border border-dashed border-gray-400 hover:border-blue-500 sm:h-60 "}"><div class="${"flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 bg-gray-50 group-hover:border-blue-500 sm:h-10 sm:w-10"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6 text-gray-600 group-hover:text-blue-500"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 6v6m0 0v6m0-6h6m-6 0H6"}"></path></svg></div>

					<span class="${"mt-2 text-sm font-medium text-gray-800 group-hover:text-blue-500 sm:text-base"}">ADD NEW ADDRESS
					</span></a></div></div>

		<div class="${"w-full lg:w-80 lg:flex-shrink-0 lg:flex-grow-0"}"><h2 class="${"text-xl font-bold capitalize tracking-wide sm:text-2xl"}">Cart Summary</h2>

			${selectedAddress ? `${validate_component(Pricesummary, "Pricesummary").$$render(
    $$result,
    {
      cart,
      text: "Proceed",
      showNextIcon: true,
      nextpage: "\n				    " + (prescriptionId ? `/checkout/payment-options?address=${selectedAddress}&prescription=${prescriptionId}` : `/checkout/payment-options?address=${selectedAddress}`),
      loading
    },
    {},
    {}
  )}` : `${validate_component(Pricesummary, "Pricesummary").$$render(
    $$result,
    {
      cart,
      text: "Please select address",
      loading
    },
    {},
    {}
  )}`}</div></div></div>`;
});
export {
  Page as default
};
