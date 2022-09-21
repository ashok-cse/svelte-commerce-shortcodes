import { g as get_store_value, c as create_ssr_component, b as subscribe, e as each, d as escape, v as validate_component, m as missing_component, f as assign, h as now, l as loop, i as identity, j as add_attribute } from "./index.js";
import { w as writable } from "./index3.js";
/* empty css                                         */import { p as page } from "./stores.js";
function notificationsStore(initialValue = []) {
  const store = writable(initialValue);
  const { set, update, subscribe: subscribe2 } = store;
  let defaultOptions = {
    duration: 3e3,
    placement: "bottom-right",
    type: "info",
    theme: "dark"
  };
  function add(options) {
    const {
      duration = 3e3,
      placement = "bottom-right",
      type = "info",
      theme = "dark",
      ...rest
    } = { ...defaultOptions, ...options };
    const uid = Date.now();
    const obj = {
      ...rest,
      uid,
      placement,
      type,
      theme,
      duration,
      remove: () => {
        update((v) => v.filter((i) => i.uid !== uid));
      },
      update: (data) => {
        var _a;
        delete data.uid;
        const index = (_a = get_store_value(store)) == null ? void 0 : _a.findIndex((v) => (v == null ? void 0 : v.uid) === uid);
        if (index > -1) {
          update((v) => [
            ...v.slice(0, index),
            { ...v[index], ...data },
            ...v.slice(index + 1)
          ]);
        }
      }
    };
    update((v) => [...v, obj]);
    if (duration > 0) {
      setTimeout(() => {
        obj.remove();
        if (typeof obj.onRemove === "function")
          obj.onRemove();
      }, duration);
    }
    return obj;
  }
  function getById(uid) {
    var _a;
    return (_a = get_store_value(store)) == null ? void 0 : _a.find((v) => (v == null ? void 0 : v.uid) === uid);
  }
  function clearAll() {
    set([]);
  }
  function clearLast() {
    update((v) => {
      return v.slice(0, v.length - 1);
    });
  }
  function setDefaults(options) {
    defaultOptions = { ...defaultOptions, ...options };
  }
  return {
    subscribe: subscribe2,
    add,
    success: getHelper("success", add),
    info: getHelper("info", add),
    error: getHelper("error", add),
    warning: getHelper("warning", add),
    clearAll,
    clearLast,
    getById,
    setDefaults
  };
}
const toasts = notificationsStore([]);
function getHelper(type, add) {
  return function() {
    if (typeof arguments[0] === "object") {
      const options = arguments[0];
      return add({ ...options, type });
    } else if (typeof arguments[0] === "string" && typeof arguments[1] === "string") {
      const options = arguments[2] || {};
      return add({
        ...options,
        type,
        title: arguments[0],
        description: arguments[1]
      });
    } else if (typeof arguments[0] === "string") {
      const options = arguments[1] || {};
      return add({
        ...options,
        type,
        description: arguments[0]
      });
    }
  };
}
const css$1 = {
  code: "ul.svelte-10wfhch.svelte-10wfhch{list-style:none;margin:0;padding:0}li.svelte-10wfhch.svelte-10wfhch{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.toast-container.svelte-10wfhch.svelte-10wfhch{box-sizing:border-box;color:#fff;max-width:100%;padding:4px;pointer-events:none;position:fixed;width:-webkit-max-content;width:-moz-max-content;width:max-content;z-index:9999}.toast-container.bottom-right.svelte-10wfhch.svelte-10wfhch{bottom:1em;right:1em}.toast-container.bottom-left.svelte-10wfhch.svelte-10wfhch{bottom:1em;left:1em}.toast-container.top-left.svelte-10wfhch.svelte-10wfhch{left:1em;top:1em}.toast-container.top-right.svelte-10wfhch.svelte-10wfhch{right:1em;top:1em}.toast-container.top-center.svelte-10wfhch.svelte-10wfhch{left:50%;right:50%;top:1em;transform:translate(-50%)}.toast-container.bottom-center.svelte-10wfhch.svelte-10wfhch{bottom:1em;left:50%;right:50%;transform:translate(-50%)}.toast-container.center-center.svelte-10wfhch.svelte-10wfhch{left:50%;right:50%;top:50%;transform:translate(-50%,-50%)}.toast-container.svelte-10wfhch>.svelte-10wfhch:not(:last-child){margin-bottom:10px}",
  map: null
};
const ToastContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  let { theme = "dark" } = $$props;
  let { placement = "bottom-right" } = $$props;
  let { type = "info" } = $$props;
  let { showProgress = false } = $$props;
  let { duration = 3e3 } = $$props;
  let { width = "320px" } = $$props;
  const placements = [
    "bottom-right",
    "bottom-left",
    "top-right",
    "top-left",
    "top-center",
    "bottom-center",
    "center-center"
  ];
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.showProgress === void 0 && $$bindings.showProgress && showProgress !== void 0)
    $$bindings.showProgress(showProgress);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css$1);
  $$unsubscribe_toasts();
  return `${each(placements, (placement2) => {
    return `<div class="${"toast-container " + escape(placement2, true) + " svelte-10wfhch"}" style="${"width: " + escape(width, true)}"><ul class="${"svelte-10wfhch"}">${each($toasts.filter((n) => n.placement === placement2).reverse(), (toast) => {
      return `<li class="${"svelte-10wfhch"}">${toast.component ? `${validate_component(toast.component || missing_component, "svelte:component").$$render($$result, { data: toast }, {}, {})}` : `${slots.default ? slots.default({ data: toast }) : ``}`}
        </li>`;
    })}</ul>
  </div>`;
  })}`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css = {
  code: '.st-toast.svelte-apwndr.svelte-apwndr{box-shadow:0 2px 6px 0 rgba(0,0,0,.2);color:#fff;cursor:pointer;display:flex;height:auto;padding-left:.875rem;pointer-events:auto;position:relative;width:320px}.st-toast.svelte-apwndr .st-toast-icon.svelte-apwndr{flex-shrink:0;margin-right:.875rem;margin-top:.875rem}.st-toast.svelte-apwndr progress[value].svelte-apwndr{-webkit-appearance:none;-moz-appearance:none;appearance:none;bottom:0;display:block;height:4px;left:0;position:absolute;right:0;width:100%}.st-toast.dark.svelte-apwndr.svelte-apwndr{background:#393939;color:#fff}.st-toast.dark.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-bar{background-color:#393939}.st-toast.dark.svelte-apwndr .st-toast-close-btn svg.svelte-apwndr{fill:#fff}.st-toast.dark.svelte-apwndr .st-toast-close-btn.svelte-apwndr:focus{border:1px solid #fff}.st-toast.dark.success.svelte-apwndr.svelte-apwndr{border-left:3px solid #16a34a}.st-toast.dark.success.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#16a34a;color:#fff}.st-toast.dark.success.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#16a34a}.st-toast.dark.info.svelte-apwndr.svelte-apwndr{border-left:3px solid #0284c7}.st-toast.dark.info.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#0284c7;color:#fff}.st-toast.dark.info.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#0284c7}.st-toast.dark.error.svelte-apwndr.svelte-apwndr{border-left:3px solid #e11d48}.st-toast.dark.error.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#e11d48;color:#fff}.st-toast.dark.error.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#e11d48}.st-toast.dark.warning.svelte-apwndr.svelte-apwndr{border-left:3px solid #ca8a04}.st-toast.dark.warning.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#ca8a04;color:#fff}.st-toast.dark.warning.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#ca8a04}.st-toast.light.svelte-apwndr.svelte-apwndr{fill:#161616;color:#161616}.st-toast.light.success.svelte-apwndr.svelte-apwndr{border-left:3px solid #16a34a}.st-toast.light.success.svelte-apwndr.svelte-apwndr,.st-toast.light.success.svelte-apwndr progress.svelte-apwndr{background:rgba(22,163,74,.2)}.st-toast.light.success.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-bar{background-color:transparent}.st-toast.light.success.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#16a34a}.st-toast.light.success.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#16a34a}.st-toast.light.success.svelte-apwndr .st-toast-close-btn.svelte-apwndr:focus{border:1px solid #16a34a}.st-toast.light.success.svelte-apwndr.svelte-apwndr:before{border:1px solid #16a34a;border-left-width:0;box-sizing:border-box;content:"";filter:opacity(.4);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.st-toast.light.info.svelte-apwndr.svelte-apwndr{border-left:3px solid #0284c7}.st-toast.light.info.svelte-apwndr.svelte-apwndr,.st-toast.light.info.svelte-apwndr progress.svelte-apwndr{background:rgba(2,132,199,.2)}.st-toast.light.info.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-bar{background-color:transparent}.st-toast.light.info.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#0284c7}.st-toast.light.info.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#0284c7}.st-toast.light.info.svelte-apwndr .st-toast-close-btn.svelte-apwndr:focus{border:1px solid #0284c7}.st-toast.light.info.svelte-apwndr.svelte-apwndr:before{border:1px solid #0284c7;border-left-width:0;box-sizing:border-box;content:"";filter:opacity(.4);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.st-toast.light.error.svelte-apwndr.svelte-apwndr{border-left:3px solid #e11d48}.st-toast.light.error.svelte-apwndr.svelte-apwndr,.st-toast.light.error.svelte-apwndr progress.svelte-apwndr{background:rgba(225,29,72,.2)}.st-toast.light.error.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-bar{background-color:transparent}.st-toast.light.error.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#e11d48}.st-toast.light.error.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#e11d48}.st-toast.light.error.svelte-apwndr .st-toast-close-btn.svelte-apwndr:focus{border:1px solid #e11d48}.st-toast.light.error.svelte-apwndr.svelte-apwndr:before{border:1px solid #e11d48;border-left-width:0;box-sizing:border-box;content:"";filter:opacity(.4);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.st-toast.light.warning.svelte-apwndr.svelte-apwndr{border-left:3px solid #ca8a04}.st-toast.light.warning.svelte-apwndr.svelte-apwndr,.st-toast.light.warning.svelte-apwndr progress.svelte-apwndr{background:rgba(202,138,4,.2)}.st-toast.light.warning.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-bar{background-color:transparent}.st-toast.light.warning.svelte-apwndr progress[value].svelte-apwndr::-webkit-progress-value{background-color:#ca8a04}.st-toast.light.warning.svelte-apwndr .st-toast-icon.svelte-apwndr{fill:#ca8a04}.st-toast.light.warning.svelte-apwndr .st-toast-close-btn.svelte-apwndr:focus{border:1px solid #ca8a04}.st-toast.light.warning.svelte-apwndr.svelte-apwndr:before{border:1px solid #ca8a04;border-left-width:0;box-sizing:border-box;content:"";filter:opacity(.4);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.st-toast-details.svelte-apwndr.svelte-apwndr{align-self:flex-start;margin-right:1rem;margin-top:.875rem;text-align:left}.st-toast-details.svelte-apwndr .st-toast-title.svelte-apwndr{font-weight:600;margin:0;outline:none}.st-toast-details.svelte-apwndr .st-toast-description.svelte-apwndr,.st-toast-details.svelte-apwndr .st-toast-title.svelte-apwndr{font-size:.875rem;letter-spacing:.16px;line-height:1.125rem;word-break:break-word}.st-toast-details.svelte-apwndr .st-toast-description.svelte-apwndr{font-weight:400;margin-bottom:1rem;margin-top:0}.st-toast-close-btn.svelte-apwndr.svelte-apwndr{align-items:center;background-color:transparent;border:none;cursor:pointer;display:flex;height:3rem;justify-content:center;margin-left:auto;min-height:3rem;min-width:3rem;outline:2px solid transparent;outline-offset:-2px;padding:0;transition:outline .11s,background-color .11s;width:3rem}',
  map: null
};
const FlatToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { theme = "light" } = $$props;
  let { data = {} } = $$props;
  const progress = tweened(1, { duration: data.duration, easing: identity });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_progress();
  return `<div class="${"st-toast flat " + escape(data.theme || theme, true) + " " + escape(data.type || "info", true) + " svelte-apwndr"}" role="${"alert"}" aria-live="${"assertive"}" aria-atomic="${"true"}">${slots.icon ? slots.icon({}) : `
    ${data.type === "success" ? `<svg class="${"st-toast-icon svelte-apwndr"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}"></path><path fill="${"none"}" d="${"M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>` : `${data.type === "info" ? `<svg class="${"st-toast-icon svelte-apwndr"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 32 32"}" aria-hidden="${"true"}"><path d="${"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,7Zm4,17.12H12V21.88h2.88V15.12H13V12.88h4.13v9H20Z"}"></path></svg>` : `${data.type === "error" ? `<svg class="${"st-toast-icon svelte-apwndr"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}"></path><path d="${"M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>` : `<svg class="${"st-toast-icon svelte-apwndr"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}"></path><path d="${"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>`}`}`}
  `}

  <div class="${"st-toast-details svelte-apwndr"}">${data.title ? `<h3 class="${"st-toast-title svelte-apwndr"}">${escape(data.title)}</h3>` : ``}

    <p class="${"st-toast-description svelte-apwndr"}">${escape(data.description)}</p>
    <div class="${"st-toast-extra"}">${slots.extra ? slots.extra({}) : ``}</div></div>
  <button class="${"st-toast-close-btn svelte-apwndr"}" type="${"button"}" aria-label="${"close"}">${slots["close-icon"] ? slots["close-icon"]({}) : `
      <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--toast-notification__close-icon svelte-apwndr"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 32 32"}" aria-hidden="${"true"}"><path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path></svg>
    `}</button>
  ${data.showProgress ? `<progress style="${"height: " + escape(data.duration > 0 ? "4px" : 0, true)}"${add_attribute("value", $progress, 0)} class="${"svelte-apwndr"}"></progress>` : ``}
</div>`;
});
const GoogleAnalytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-VBF1CPS8VD", { page_path: $page.url.pathname });
      }
    }
  }
  $$unsubscribe_page();
  return ``;
});
export {
  FlatToast as F,
  GoogleAnalytics as G,
  ToastContainer as T
};
