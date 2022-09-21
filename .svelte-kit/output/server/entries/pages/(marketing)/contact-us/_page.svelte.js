import { c as create_ssr_component, p as createEventDispatcher, d as escape, w as null_to_empty, j as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import { P as PrimaryButton } from "../../../../chunks/PrimaryButton.js";
import { T as TextboxFloating } from "../../../../chunks/TextboxFloating.js";
const TextareaFloating_svelte_svelte_type_style_lang = "";
const css = {
  code: ".floating-label.svelte-onb6jy.svelte-onb6jy{position:relative}.floating-input.svelte-onb6jy.svelte-onb6jy{border-bottom:2px solid #e5e7eb;color:#000;display:block;font-size:14px;padding:20px 0 0;width:100%}.floating-input.svelte-onb6jy.svelte-onb6jy:focus{border-bottom:2px solid #112d4e;outline:none}label.svelte-onb6jy.svelte-onb6jy{color:#1f2937;font-size:14px;font-weight:400;left:0;pointer-events:none;position:absolute;top:20px;transition:all .2s ease;-moz-transition:all .2s ease;-webkit-transition:all .2s ease}.floating-input.svelte-onb6jy:not(:-moz-placeholder-shown)~label.svelte-onb6jy{color:#999;font-size:12px;top:0}.floating-input.svelte-onb6jy:focus~label.svelte-onb6jy,.floating-input.svelte-onb6jy:not(:placeholder-shown)~label.svelte-onb6jy{color:#999;font-size:12px;top:0}",
  map: null
};
const TextareaFloating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label = "", value = "", class: className = "", placeholder = " ", rows = 4, required = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(className), true) + " svelte-onb6jy"}"><div class="${"floating-label svelte-onb6jy"}"><textarea name="${"textarea"}"${add_attribute("rows", rows, 0)} ${required ? "required" : ""} class="${"floating-input w-full bg-transparent focus:outline-none svelte-onb6jy"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", label, 0)}>${value || ""}</textarea>

		<span class="${"highlight"}"></span>

		<label for="${"textbox"}" class="${"svelte-onb6jy"}">${escape(label)}</label>
		${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let seoProps = {
    title: `Contact Us`,
    description: `Contact Us`
  };
  let contactPerson = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section class="${"min-h-screen p-3 sm:p-10"}"><div class="${"container mx-auto w-full max-w-6xl"}">

		<div class="${"mb-5 text-center sm:mb-10"}"><h1 class="${"mb-2 font-serif text-2xl font-medium md:text-3xl lg:text-4xl"}">Contact Us</h1>

			<p class="${"text-sm text-gray-500"}">Any queation or remarks? Just write us a message!</p></div>

		<div class="${"grid grid-cols-1 rounded-xl border shadow-lg xl:grid-cols-3"}"><div class="${"col-span-1 m-2 overflow-hidden rounded-xl bg-primary-500 p-5 text-white sm:p-10"}"><h2 class="${"mb-2 text-xl font-semibold sm:text-2xl"}">Contact Information</h2>

				<p class="${"mb-5 text-sm text-gray-400 sm:text-base"}">Fill up teh form and our Team will get back to you within 24 hours.
				</p>

				<ul class="${"mb-5 flex flex-col gap-4"}"><li class="${"flex gap-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mt-0.5 h-6 w-6 text-cyan-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}"></path></svg>

						<span class="${"flex-1 text-white"}">+91 9876543210 (Wrong No.) </span></li>

					<li class="${"flex gap-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mt-0.5 h-6 w-6 text-cyan-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}"></path><path d="${"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}"></path></svg>

						<span class="${"flex-1 text-white"}">help@misiki.in </span></li>

					<li class="${"flex gap-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mt-0.5 h-6 w-6 text-cyan-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>

						<span class="${"flex-1 text-white"}">#22, Global Village, Rourkela, Odisha - 769002, India
						</span></li></ul>

				<ul class="${"flex flex-wrap items-center gap-2"}">

					<li class="${"duraton-300 h-10 w-10 overflow-hidden rounded-full text-white transition hover:bg-[#4267B2]"}"><a href="${"https://www.facebook.com/misiki.store/"}" aria-label="${"Click to route facebook page"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"flex h-full w-full items-center justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"}"></path></svg></a></li>

					

					<li class="${"duraton-300 h-10 w-10 overflow-hidden rounded-full text-white transition hover:bg-[#C13584]"}"><a href="${"https://www.instagram.com/misiki/"}" aria-label="${"Click to route instagram page"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"flex h-full w-full items-center justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"4"}" y="${"4"}" width="${"16"}" height="${"16"}" rx="${"4"}"></rect><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle><line x1="${"16.5"}" y1="${"7.5"}" x2="${"16.5"}" y2="${"7.501"}"></line></svg></a></li>

					

					<li class="${"duraton-300 h-10 w-10 overflow-hidden rounded-full text-white transition hover:bg-[#1DA1F2]"}"><a href="${"https://twitter.com/misikiofficial"}" aria-label="${"Click to route twitter page"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"flex h-full w-full items-center justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"}"></path></svg></a></li>

					

					<li class="${"duraton-300 h-10 w-10 overflow-hidden rounded-full text-white transition hover:bg-[#0077b5]"}"><a href="${"https://www.linkedin.com/company/misiki/"}" aria-label="${"Click to route linkedin page"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"flex h-full w-full items-center justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"4"}" y="${"4"}" width="${"16"}" height="${"16"}" rx="${"2"}"></rect><line x1="${"8"}" y1="${"11"}" x2="${"8"}" y2="${"16"}"></line><line x1="${"8"}" y1="${"8"}" x2="${"8"}" y2="${"8.01"}"></line><line x1="${"12"}" y1="${"16"}" x2="${"12"}" y2="${"11"}"></line><path d="${"M16 16v-3a2 2 0 0 0 -4 0"}"></path></svg></a></li>

					

					<li class="${"duraton-300 h-10 w-10 overflow-hidden rounded-full text-white transition hover:bg-[#FF0000]"}"><a href="${"https://www.youtube.com/channel/UCcb3eRHh-7qAiv9ea7jmTHQ"}" aria-label="${"Click to route youtube page"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"flex h-full w-full items-center justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"3"}" y="${"5"}" width="${"18"}" height="${"14"}" rx="${"4"}"></rect><path d="${"M10 9l5 3l-5 3z"}"></path></svg></a></li></ul></div>

			<form class="${"col-span-1 flex flex-col gap-5 p-5 sm:p-10 xl:col-span-2"}"><div class="${"grid grid-cols-2 gap-5"}">${validate_component(TextboxFloating, "TextboxFloating").$$render(
      $$result,
      {
        type: "text",
        label: "First Name",
        class: "col-span-1 w-full",
        value: contactPerson.firstName
      },
      {
        value: ($$value) => {
          contactPerson.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )}

					${validate_component(TextboxFloating, "TextboxFloating").$$render(
      $$result,
      {
        type: "text",
        label: "Last Name",
        class: "col-span-1 w-full",
        value: contactPerson.lastName
      },
      {
        value: ($$value) => {
          contactPerson.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div class="${"grid grid-cols-1 gap-5 sm:grid-cols-2"}">${validate_component(TextboxFloating, "TextboxFloating").$$render(
      $$result,
      {
        type: "text",
        label: "Email",
        class: "col-span-1 w-full",
        value: contactPerson.email
      },
      {
        value: ($$value) => {
          contactPerson.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}

					${validate_component(TextboxFloating, "TextboxFloating").$$render(
      $$result,
      {
        type: "text",
        label: "Phone",
        class: "col-span-1 w-full",
        value: contactPerson.phone
      },
      {
        value: ($$value) => {
          contactPerson.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				${validate_component(TextareaFloating, "TextareaFloating").$$render(
      $$result,
      {
        label: "Write your message here...",
        class: "w-full",
        value: contactPerson.message
      },
      {
        value: ($$value) => {
          contactPerson.message = $$value;
          $$settled = false;
        }
      },
      {}
    )}

				<div class="${"flex justify-end"}">${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { type: "submit", class: "px-10 uppercase" }, {}, {
      default: () => {
        return `submit`;
      }
    })}</div></form></div></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
