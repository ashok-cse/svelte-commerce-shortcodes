import { c as create_ssr_component, p as createEventDispatcher, v as validate_component, e as each, j as add_attribute, d as escape } from "../../../../../../chunks/index.js";
import { S as SEO } from "../../../../../../chunks/index6.js";
import { C as CtrlS } from "../../../../../../chunks/CtrlS.js";
import { E as Error } from "../../../../../../chunks/Error.js";
import { T as Textbox } from "../../../../../../chunks/Textbox.js";
/* empty css                                                                */import "../../../../../../chunks/store.js";
import { T as ToggleSwitch } from "../../../../../../chunks/ToggleSwitch.js";
import { T as Textarea } from "../../../../../../chunks/Textarea.js";
import { B as BackButton } from "../../../../../../chunks/BackButton.js";
const SaveAddress_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  createEventDispatcher();
  let err = null;
  let loading = false;
  let formChanged = false;
  let { states = false } = $$props;
  let { countries = false } = $$props;
  let { address = {} } = $$props;
  if ($$props.states === void 0 && $$bindings.states && states !== void 0)
    $$bindings.states(states);
  if ($$props.countries === void 0 && $$bindings.countries && countries !== void 0)
    $$bindings.countries(countries);
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"min-h-screen"}">${validate_component(Error, "Error").$$render($$result, { err }, {}, {})}

	<div class="${"max-w-3xl"}"><form><div class="${"mb-5 flex flex-col gap-2 lg:mb-10"}"><div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">First Name</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter First Name",
        value: address.firstName
      },
      {
        value: ($$value) => {
          address.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Last Name</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        placeholder: "Enter Last Name",
        value: address.lastName
      },
      {
        value: ($$value) => {
          address.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Email</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Email",
        value: address.email
      },
      {
        value: ($$value) => {
          address.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Phone</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Phone",
        value: address.phone
      },
      {
        value: ($$value) => {
          address.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Address</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        placeholder: "Enter Address",
        value: address.address
      },
      {
        value: ($$value) => {
          address.address = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Locality</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        placeholder: "Enter Locality",
        value: address.locality
      },
      {
        value: ($$value) => {
          address.locality = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">City</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        placeholder: "Enter City",
        value: address.city
      },
      {
        value: ($$value) => {
          address.city = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
				${(address == null ? void 0 : address.country) && ((_a = states.data) == null ? void 0 : _a.length) ? `<div><h6 class="${"mb-2 font-semibold"}">State</h6>
						<select class="${"w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm placeholder-gray-400 transition duration-300 placeholder:font-normal hover:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"}"><option value="${""}" selected>-- Select a State --</option>${each(states.data, (c) => {
      return `${c ? `<option${add_attribute("value", c.name, 0)}>${escape(c.name)}
									</option>` : ``}`;
    })}</select>
						</div>` : ``}
				<div><h6 class="${"mb-2 font-semibold"}">Country</h6>
					<select class="${"w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm placeholder-gray-400 transition duration-300 placeholder:font-normal hover:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"}"><option value="${""}" selected>-- Select a Country --</option>${((_b = countries == null ? void 0 : countries.data) == null ? void 0 : _b.length) ? `${each(countries.data, (c) => {
      var _a2, _b2;
      return `${(c == null ? void 0 : c.country) ? `<option${add_attribute("value", (_a2 = c.country) == null ? void 0 : _a2.code, 0)}>${escape((_b2 = c.country) == null ? void 0 : _b2.name)}
									</option>` : ``}`;
    })}` : ``}</select>
					</div>

				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">zip</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        placeholder: "Enter zip",
        value: address.zip
      },
      {
        value: ($$value) => {
          address.zip = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Active</h6>

					<div class="${"mb-2 w-full max-w-md"}">${validate_component(ToggleSwitch, "ToggleSwitch").$$render(
      $$result,
      {
        color: "blue",
        size: "sm",
        checked: address.active
      },
      {
        checked: ($$value) => {
          address.active = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div></form></div></div>

${validate_component(CtrlS, "CtrlS").$$render(
      $$result,
      {
        loading,
        loadingMessage: "Saving Address Info.",
        formChanged
      },
      {},
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  const seoProps = {
    title: "Address Details ",
    description: "Details about the category, name, contact, ratings, message, comments"
  };
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"text-gray-800"}"><header class="${"mb-3 flex flex-col-reverse items-start justify-between md:flex-row"}"><h1 class="${"line-clamp-2 mb-2 mr-5 text-xl font-bold md:text-2xl"}">${data.params.id === "new" ? `<span>Add New Address </span>` : `${!((_a = data.address) == null ? void 0 : _a.title) ? `<span>Address Details</span>` : `<span>Address Details of &quot;${escape((_b = data.address) == null ? void 0 : _b.title)}&quot;</span>`}`}</h1>

		<div class="${"mb-2 md:my-2"}">${validate_component(BackButton, "BackButton").$$render(
    $$result,
    {
      to: "/my/addresses?sort=-updatedAt",
      class: ""
    },
    {},
    {}
  )}</div></header>

	${validate_component(SaveAddress_1, "SaveAddress").$$render($$result, { address: data.address }, {}, {})}</div>`;
});
export {
  Page as default
};
