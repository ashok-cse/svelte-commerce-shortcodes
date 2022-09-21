import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SEO } from "../../../../chunks/index6.js";
import { P as PrimaryButton } from "../../../../chunks/PrimaryButton.js";
import { T as Textarea } from "../../../../chunks/Textarea.js";
import { T as Textbox } from "../../../../chunks/Textbox.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".checkmark.svelte-1ylgl2a{stroke:#4bb71b;-webkit-animation:svelte-1ylgl2a-fill .4s ease-in-out .4s forwards,svelte-1ylgl2a-scale .3s ease-in-out .9s both;animation:svelte-1ylgl2a-fill .4s ease-in-out .4s forwards,svelte-1ylgl2a-scale .3s ease-in-out .9s both;border-radius:50%;box-shadow:inset 0 0 0 #4bb71b;display:block;height:100px;margin:0 auto;position:relative;right:5px;top:5px;width:100px}.checkmark.svelte-1ylgl2a,.checkmark__circle.svelte-1ylgl2a{stroke-width:4;stroke-miterlimit:10}.checkmark__circle.svelte-1ylgl2a{stroke-dasharray:166;stroke-dashoffset:166;stroke:#4bb71b;fill:#fff;-webkit-animation:svelte-1ylgl2a-stroke .6s cubic-bezier(.65,0,.45,1) forwards;animation:svelte-1ylgl2a-stroke .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark__check.svelte-1ylgl2a{stroke-dasharray:48;stroke-dashoffset:48;-webkit-animation:svelte-1ylgl2a-stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards;animation:svelte-1ylgl2a-stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards;transform-origin:50% 50%}@-webkit-keyframes svelte-1ylgl2a-stroke{to{stroke-dashoffset:0}}@keyframes svelte-1ylgl2a-stroke{to{stroke-dashoffset:0}}@-webkit-keyframes svelte-1ylgl2a-scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes svelte-1ylgl2a-scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@-webkit-keyframes svelte-1ylgl2a-fill{to{box-shadow:inset 0 0 0 30px #4bb71b}}@keyframes svelte-1ylgl2a-fill{to{box-shadow:inset 0 0 0 30px #4bb71b}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let seoProps = {
    title: `Bulk order inquiry`,
    description: `Bulk order inquiry`
  };
  $$result.css.add(css);
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}

<section class="${"min-h-screen p-3 sm:p-10"}"><div class="${"container mx-auto w-full max-w-lg"}">

		<div><h1 class="${"mb-5 text-center font-serif text-2xl font-medium sm:mb-10 md:text-3xl lg:text-4xl"}">Contact for Bulk Orders
			</h1>

			<form><ul class="${"mb-8 flex flex-col gap-4"}"><li><h6 class="${"mb-2 font-semibold"}">Name <span class="${"text-red-500"}">*</span></h6>

						${validate_component(Textbox, "Textbox").$$render($$result, { class: "w-full" }, {}, {})}</li>

					<li><h6 class="${"mb-2 font-semibold"}">Company Name <span class="${"text-red-500"}">*</span></h6>

						${validate_component(Textbox, "Textbox").$$render($$result, { class: "w-full" }, {}, {})}</li>

					<li><h6 class="${"mb-2 font-semibold"}">Email <span class="${"text-red-500"}">*</span></h6>

						${validate_component(Textbox, "Textbox").$$render($$result, { class: "w-full" }, {}, {})}</li>

					<li><h6 class="${"mb-2 font-semibold"}">Phone Number <span class="${"text-red-500"}">*</span></h6>

						${validate_component(Textbox, "Textbox").$$render($$result, { class: "w-full" }, {}, {})}</li>

					<li><h6 class="${"mb-2 font-semibold"}">Interested Product <span class="${"text-red-500"}">*</span></h6>

						<ul class="${"flex flex-col gap-2"}"><li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>Mobile Cover</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>Keychain</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>T-Shirt</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>Pop Socket</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>Coffee Mug</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>Mouse Pad</span></label></li></ul></li>

					<li><div class="${"mb-2"}"><h6 class="${"mb-1 font-semibold"}">Min. Quantity <span class="${"text-red-500"}">*</span></h6>

							<p class="${"text-sm"}">Must be greater than or equal to 25+</p></div>

						<ul class="${"flex flex-col gap-2"}"><li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>50+</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>100+</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>200+</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>500+</span></label></li>

							<li><label class="${"flex items-center gap-3 text-sm font-semibold"}"><input type="${"checkbox"}" class="${"h-4 w-4 border-2"}">

									<span>More than 100+</span></label></li></ul></li>

					<li><h6 class="${"mb-2 font-semibold"}">Any Note for Us</h6>

						${validate_component(Textarea, "Textarea").$$render(
    $$result,
    {
      placeholder: "We are happy to listen you, write your note..."
    },
    {},
    {}
  )}</li></ul>

				${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "px-20 uppercase" }, {}, {
    default: () => {
      return `submit`;
    }
  })}</form></div>

		

		<div class="${"flex flex-col gap-8"}"><div class="${"flex flex-col items-center justify-center gap-4 text-center"}"><div class="${"mb-5 sm:mb-10"}"><svg class="${"checkmark svelte-1ylgl2a"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 52 52"}"><circle class="${"checkmark__circle svelte-1ylgl2a"}" cx="${"26"}" cy="${"26"}" r="${"25"}" fill="${"none"}"></circle><path class="${"checkmark__check svelte-1ylgl2a"}" fill="${"none"}" d="${"M14.1 27.2l7.1 7.2 16.7-16.8"}"></path></svg></div>

				<h1 class="${"text-2xl font-semibold md:text-3xl lg:text-4xl"}">Thank You for Your Order</h1>

				<p class="${"text-sm"}">One of our team member will contact you shortly</p></div>

			<div><h6 class="${"mb-2 text-lg font-bold"}">Order Details</h6>

				<ul class="${"flex flex-col gap-2"}"><li class="${"flex gap-4"}"><h6 class="${"w-36 font-semibold"}">Name</h6>

						<div class="${"flex flex-1 gap-2"}"><span>:</span>

							<span>Robert Downey, Jr </span></div></li>

					<li class="${"flex gap-4"}"><h6 class="${"w-36 font-semibold"}">Company Name</h6>

						<div class="${"flex flex-1 gap-2"}"><span>:</span>

							<span>Stark Industries </span></div></li>

					<li class="${"flex gap-4"}"><h6 class="${"w-36 font-semibold"}">Email</h6>

						<div class="${"flex flex-1 gap-2"}"><span>:</span>

							<span>tonystark@gmail.com </span></div></li>

					<li class="${"flex gap-4"}"><h6 class="${"w-36 font-semibold"}">Phone Number</h6>

						<div class="${"flex flex-1 gap-2"}"><span>:</span>

							<span>+91 9876543210 </span></div></li>

					<li class="${"flex gap-4"}"><h6 class="${"w-36 font-semibold"}">Interested Product</h6>

						<div class="${"flex flex-1 gap-2"}"><span>:</span>

							<ul class="${"flex flex-1 flex-wrap gap-2"}"><li>Mobile Cover,</li>

								<li>Keychain,</li>

								<li>Pop Socket</li></ul></div></li>

					<li class="${"flex gap-4"}"><h6 class="${"w-36 font-semibold"}">Min. Quantity</h6>

						<div class="${"flex flex-1 gap-2"}"><span>:</span>

							<span>50+ </span></div></li>

					<li class="${"flex gap-4"}"><h6 class="${"w-36 font-semibold"}">Yodivr Note for Us</h6>

						<div class="${"flex flex-1 gap-2"}"><span>:</span>

							<span>I will pay 30% in advance and rest of amount after delivery, i need this order in
								between one week.
							</span></div></li></ul></div>

			${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { class: "mx-auto px-10" }, {}, {
    default: () => {
      return `Go to Home`;
    }
  })}</div></div></section>`;
});
export {
  Page as default
};
