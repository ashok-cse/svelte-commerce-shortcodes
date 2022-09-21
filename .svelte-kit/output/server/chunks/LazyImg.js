import { c as create_ssr_component, o as onDestroy, j as add_attribute, d as escape } from "./index.js";
import "vanilla-lazyload";
const LazyImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "" } = $$props;
  let { width = "auto" } = $$props;
  let { height = "auto" } = $$props;
  const w = width === "auto" ? "auto" : +width * 2;
  const h = height === "auto" ? "auto" : +height * 2;
  let { class: clazz } = $$props;
  onDestroy(() => {
  });
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `<img${add_attribute("alt", alt, 0)} class="${"lazy " + escape(clazz, true)}"${add_attribute("src", `${src}?tr=h-1.43,w-1:w-${w},h-${h}`, 0)}${add_attribute("data-src", `${src}?tr=w-${w},h-${h}:w-${w},h-${h}`, 0)}>`;
});
export {
  LazyImg as L
};
