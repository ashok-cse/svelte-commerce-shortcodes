import { c as create_ssr_component, b as subscribe, v as validate_component, d as escape } from "../../../../../chunks/index.js";
import { S as SEO } from "../../../../../chunks/index6.js";
/* empty css                                                             */import "../../../../../chunks/store.js";
import "vanilla-lazyload";
import { T as Textbox } from "../../../../../chunks/Textbox.js";
/* empty css                                                            */import "dayjs";
import { C as CtrlS } from "../../../../../chunks/CtrlS.js";
import Cookie from "cookie-universal";
import { p as page } from "../../../../../chunks/stores.js";
const SingleImageUpload_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".frosted.svelte-ss3e55{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background-color:hsla(0,0%,100%,.3)}",
  map: null
};
let loading = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  const seoProps = {
    title: "Dashboard - Edit Profile ",
    description: "Edit the profile credentials"
  };
  Cookie();
  let formChanged = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<div class="${"max-w-3xl text-gray-800"}"><header class="${"mb-5"}"><h1 class="${"font-serif text-2xl font-medium md:text-3xl lg:text-4xl"}">Profile Details</h1></header>

	${`${data.profile ? `<div><form class="${"mb-5 flex flex-col gap-4 sm:mb-10"}"><div><div class="${"frosted flex flex-col gap-2 rounded-lg border border-gray-300 p-4 shadow-lg md:p-6 svelte-ss3e55"}"><div class="${"flex flex-wrap items-center"}"><div class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}"></div>

							<div class="${"mb-2 w-full max-w-md"}"><span class="${"mb-1 text-sm font-medium sm:text-lg lg:text-xl"}">${escape(data.profile.email || "")} <br></span>

								<span class="${"text-xs capitalize sm:text-sm"}">Role : <b>${escape(data.profile.role || "")}</b></span></div></div>

						<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">First Name</h6>

							<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter First Name",
        value: data.profile.firstName
      },
      {
        value: ($$value) => {
          data.profile.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

						<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Last Name</h6>

							<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Enter Last Name",
        value: data.profile.lastName
      },
      {
        value: ($$value) => {
          data.profile.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

						<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Date Of Birth</h6>

							<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        type: "date",
        placeholder: "Enter Date Of Birth",
        value: data.profile.dob
      },
      {
        value: ($$value) => {
          data.profile.dob = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

						<div class="${"flex flex-wrap"}"><h6 class="${"mb-1 mr-5 w-52 flex-shrink-0 font-medium"}">Phone</h6>

							<div class="${"mb-2 w-full max-w-md"}">${validate_component(Textbox, "Textbox").$$render(
      $$result,
      {
        disabled: true,
        type: "text",
        placeholder: "Eg: +91000000000",
        value: data.profile.phone
      },
      {
        value: ($$value) => {
          data.profile.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div></div></form></div>` : ``}`}</div>

${validate_component(CtrlS, "CtrlS").$$render(
      $$result,
      {
        loading,
        loadingMessage: "Updating Profile",
        formChanged
      },
      {},
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
