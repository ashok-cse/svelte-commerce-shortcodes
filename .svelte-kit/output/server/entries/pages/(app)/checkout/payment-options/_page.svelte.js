import { c as create_ssr_component, v as validate_component, e as each, d as escape, j as add_attribute } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
/* empty css                                                             */import { E as Error } from "../../../../../chunks/Error.js";
import { P as Pricesummary } from "../../../../../chunks/Pricesummary.js";
import { L as LazyImg } from "../../../../../chunks/LazyImg.js";
import { C as CheckoutHeader } from "../../../../../chunks/CheckoutHeader.js";
import "../../../../../chunks/store.js";
/* empty css                                                                 */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading;
  let err;
  let paymentMethods;
  let address;
  let me;
  let cart;
  let prescription;
  let addressId;
  let stripePublishableKey;
  const seoProps = {
    title: "Select Payment Option",
    metadescription: "Choose your payment method"
  };
  let { data } = $$props;
  let errorMessage = "Select a Payment Method", selectedPaymentMethod = {
    id: "",
    name: "",
    text: "",
    instructions: "",
    qrcode: "",
    img: ""
  }, razorpayReady = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ loading, err, paymentMethods, address, me, cart, prescription, addressId, stripePublishableKey } = data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

${validate_component(Error, "Error").$$render($$result, { err }, {}, {})}

<div class="${"container mx-auto min-h-screen w-full max-w-6xl p-3 py-5 sm:p-10"}">${validate_component(CheckoutHeader, "CheckoutHeader").$$render($$result, { selected: "payment" }, {}, {})}

	<div class="${"mt-10 flex flex-col gap-10 md:flex-row md:justify-center xl:gap-20"}"><div class="${"w-full flex-1"}"><h2 class="${"mb-5 text-xl font-bold capitalize tracking-wide sm:text-2xl"}">Payment Options</h2>

			${paymentMethods ? `<div class="${["flex w-full flex-col gap-4", ""].join(" ").trim()}">${each(paymentMethods, (pm) => {
    return `<label class="${"flex w-full cursor-pointer items-center gap-2 rounded-md border border-gray-300 p-4 shadow-md transition duration-300 hover:bg-primary-50 sm:gap-4"}"><input type="${"radio"}"${add_attribute("value", pm, 0)} name="${"group"}" class="${"h-4 w-4 focus:outline-none focus:ring-0 focus:ring-offset-0"}"${pm === selectedPaymentMethod ? add_attribute("checked", true, 1) : ""}>

							<div class="${"flex w-full flex-1 items-center justify-between gap-4"}"><div><h2 class="${"text-xl font-semibold"}" style="${"color:" + escape(pm.color, true)}">${escape(pm.name)}</h2>

									<p class="${"mt-1 text-sm text-gray-500"}">${escape(pm.text)}</p></div>

								<div>${validate_component(LazyImg, "LazyImg").$$render(
      $$result,
      {
        src: pm.imgCdn,
        alt: pm.name,
        width: "56",
        height: "56",
        class: "h-14 w-14 rounded-full border object-cover object-center text-xs"
      },
      {},
      {}
    )}
								</div></div>
						</label>`;
  })}</div>` : `<div class="${"flex h-[50vh] items-center justify-center rounded-xl border bg-white p-4 shadow-xl"}"><div class="${"mx-auto flex max-w-md flex-col items-center justify-center text-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mb-5 h-10 w-10"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>

						<p class="${"mb-2 font-bold capitalize"}">We are very sorry!!</p>

						<p class="${"text-sm text-gray-500"}">There&#39;s no payment methode is available. If you are an admin, then add a payment
							methode as fast as possible
						</p></div></div>`}

			</div>

		<div class="${"w-full md:w-80 md:flex-shrink-0 md:flex-grow-0"}"><h2 class="${"text-xl font-bold capitalize tracking-wide sm:text-2xl"}">Cart Summary</h2>
			${address ? `<div class="${"mt-5 border-t pt-5"}"><h5 class="${"mb-2 text-xl font-bold capitalize tracking-wide"}">Delivery Address</h5>

					<div class="${"text-sm font-light"}"><div class="${"my-1 flex flex-row"}"><h5 class="${"mr-2 w-20 flex-shrink-0 font-semibold tracking-wide"}">Name</h5>

							<p>${escape(address.firstName)}
								${escape(address.lastName)}</p></div>

						<div class="${"flex flex-row"}"><h5 class="${"mr-2 w-20 flex-shrink-0 font-semibold tracking-wide"}">Address</h5>

							<p class="${"flex flex-wrap items-center"}">${address.address ? `${escape(address.address)}` : ``}

								${address.locality ? `, ${escape(address.locality)}` : ``}

								${address.city ? `, ${escape(address.city)}` : ``}

								${address.state ? `, ${escape(address.state)}` : ``}

								${address.country ? `, ${escape(address.country)}` : ``}</p></div>

						<div class="${"my-1 flex flex-row"}"><h5 class="${"mr-2 w-20 flex-shrink-0 font-semibold tracking-wide"}">Pin</h5>

							<h6>${escape(address.zip)}</h6></div>

						<div class="${"my-1 flex flex-row"}"><h5 class="${"mr-2 w-20 flex-shrink-0 font-semibold tracking-wide"}">Phone</h5>

							<h6>${escape(address.phone)}</h6></div>

						<div class="${"my-1 flex flex-row flex-wrap"}"><h5 class="${"mr-2 w-20 flex-shrink-0 font-semibold tracking-wide"}">Email</h5>

							<h6>${escape(address.email)}</h6></div></div></div>` : ``}

			${prescription ? `<div class="${"mt-5 border-t pt-5"}"><h5 class="${"mb-2 text-xl font-bold capitalize tracking-wide"}">Prescription Detail</h5>

					<div class="${"text-sm font-light"}"><div class="${"my-1 flex flex-row"}"><h5 class="${"mr-2 w-20 flex-shrink-0 font-semibold tracking-wide"}">Name</h5>

							<p>${escape(prescription.name)}</p></div>

						<div>${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: prescription.url,
      alt: "",
      height: "80",
      class: "h-20 w-auto object-contain object-top text-xs"
    },
    {},
    {}
  )}</div></div></div>` : ``}

			${validate_component(Pricesummary, "Pricesummary").$$render(
    $$result,
    {
      cart,
      text: errorMessage,
      loading,
      hideCheckoutButton: selectedPaymentMethod.name === "Stripe",
      disabled: !razorpayReady
    },
    {},
    {}
  )}</div></div></div>`;
});
export {
  Page as default
};
