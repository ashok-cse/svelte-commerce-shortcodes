import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
import { T as Textbox } from "../../../../../chunks/Textbox.js";
import { B as BackButton } from "../../../../../chunks/BackButton.js";
import { E as Error } from "../../../../../chunks/Error.js";
/* empty css                                                             */import { P as PrimaryButton } from "../../../../../chunks/PrimaryButton.js";
import "../../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let err, loading = false;
  const seoProps = {
    title: "Add Address ",
    metadescription: "Add Address "
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

${data.ads ? `<div class="${"container mx-auto min-h-screen max-w-4xl p-3 py-5 sm:p-10"}"><div class="${"flex items-center justify-between gap-5"}"><h2 class="${"mb-5 text-xl font-bold capitalize tracking-wide sm:text-2xl"}">${data.ads.id === "new" ? `Add New Address` : `Edit Address`}</h2>

			${validate_component(BackButton, "BackButton").$$render($$result, { to: "/checkout/address", class: "" }, {}, {})}</div>

		${validate_component(Error, "Error").$$render($$result, { err }, {}, {})}

		<form novalidate autocomplete="${"off"}"><div class="${"grid grid-cols-1 gap-2 text-sm sm:gap-5 md:grid-cols-2"}"><div><h6 class="${"mb-2 font-semibold"}">First Name <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter First Name",
        required: true,
        value: data.ads.firstName
      },
      {
        value: ($$value) => {
          data.ads.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">Last Name</h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter First Name",
        value: data.ads.lastName
      },
      {
        value: ($$value) => {
          data.ads.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">Email <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Email",
        required: true,
        value: data.ads.email
      },
      {
        value: ($$value) => {
          data.ads.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">Mobile number <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Phone No",
        value: data.ads.phone
      },
      {
        value: ($$value) => {
          data.ads.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
				<div><h6 class="${"mb-2 font-semibold"}">Address (Area and Street) <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Address",
        required: true,
        value: data.ads.address
      },
      {
        value: ($$value) => {
          data.ads.address = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">Landmark <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Landmark",
        required: true,
        value: data.ads.locality
      },
      {
        value: ($$value) => {
          data.ads.locality = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">City/District/Town <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter City",
        required: true,
        value: data.ads.city
      },
      {
        value: ($$value) => {
          data.ads.city = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">State <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter State",
        required: true,
        value: data.ads.state
      },
      {
        value: ($$value) => {
          data.ads.state = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">Country <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Country",
        required: true,
        value: data.ads.country
      },
      {
        value: ($$value) => {
          data.ads.country = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><h6 class="${"mb-2 font-semibold"}">Pincode / Zip <span class="${"text-red-500"}">*</span></h6>

					${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Pincode / Zip",
        required: true,
        value: data.ads.zip
      },
      {
        value: ($$value) => {
          data.ads.zip = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

			<div class="${"mt-5 flex justify-end sm:mt-10"}">${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { type: "submit", loading, class: "px-10" }, {}, {
      default: () => {
        return `SAVE ADDRESS`;
      }
    })}</div></form></div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
