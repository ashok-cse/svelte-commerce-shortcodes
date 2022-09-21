import { c as create_ssr_component, d as escape, p as createEventDispatcher, j as add_attribute, v as validate_component, m as missing_component, e as each, q as spread, r as escape_object, t as escape_attribute_value, u as globals, b as subscribe } from "./index.js";
import { p as post, g as getAPI } from "./api.js";
import { c as currency } from "./index4.js";
import { p as page } from "./stores.js";
import Cookie from "cookie-universal";
/* empty css                                        */import { P as PrimaryButton } from "./PrimaryButton.js";
import { L as LazyImg } from "./LazyImg.js";
import "./store.js";
/* empty css                                         */function isOutOfViewport(parent, container) {
  const parentBounding = parent.getBoundingClientRect();
  const boundingContainer = container.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + boundingContainer.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
const css$8 = {
  code: ".item.svelte-1o9pybv{color:var(--itemColor,inherit);cursor:default;height:var(--height,42px);line-height:var(--height,42px);overflow:hidden;padding:var(--itemPadding,0 20px);text-overflow:ellipsis;white-space:nowrap}.groupHeader.svelte-1o9pybv{text-transform:var(--groupTitleTextTransform,uppercase)}.groupItem.svelte-1o9pybv{padding-left:var(--groupItemPaddingLeft,40px)}.item.svelte-1o9pybv:active{background:var(--itemActiveBackground,#b9daff)}.item.active.svelte-1o9pybv{background:var(--itemIsActiveBG,#007aff);color:var(--itemIsActiveColor,#fff)}.item.notSelectable.svelte-1o9pybv{color:var(--itemIsNotSelectableColor,#999)}.item.first.svelte-1o9pybv{border-radius:var(--itemFirstBorderRadius,4px 4px 0 0)}.item.hover.svelte-1o9pybv:not(.active){background:var(--itemHoverBG,#e7f2ff);color:var(--itemHoverColor,inherit)}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$8);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      if (item.isGroupHeader) {
        classes.push("groupHeader");
      }
      if (item.isGroupItem) {
        classes.push("groupItem");
      }
      if (!isSelectable) {
        classes.push("notSelectable");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"item " + escape(itemClasses, true) + " svelte-1o9pybv"}"><!-- HTML_TAG_START -->${getOptionLabel(item, filterText)}<!-- HTML_TAG_END --></div>`;
});
const css$7 = {
  code: ".listContainer.svelte-12ijemj{background:var(--listBackground,#fff);border:var(--listBorder,none);border-radius:var(--listBorderRadius,4px);box-shadow:var(--listShadow,0 2px 3px 0 rgba(44,62,80,.24));left:var(--listLeft,0);max-height:var(--listMaxHeight,250px);overflow-y:auto;position:var(--listPosition,absolute);right:var(--listRight,0);width:100%;z-index:var(--listZIndex,2)}.virtualList.svelte-12ijemj{height:var(--virtualListHeight,200px)}.listGroupTitle.svelte-12ijemj{color:var(--groupTitleColor,#8f8f8f);cursor:default;font-size:var(--groupTitleFontSize,12px);font-weight:var(--groupTitleFontWeight,600);height:var(--height,42px);line-height:var(--height,42px);overflow-x:hidden;padding:var(--groupTitlePadding,0 20px);text-overflow:ellipsis;text-transform:var(--groupTitleTextTransform,uppercase);white-space:nowrap}.empty.svelte-12ijemj{color:var(--listEmptyColor,#78848f);padding:var(--listEmptyPadding,20px 0);text-align:var(--listEmptyTextAlign,center)}",
  map: null
};
function isItemActive(item, value, optionIdentifier2) {
  return value && value[optionIdentifier2] === item[optionIdentifier2];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return isItemSelectable(item) && (hoverItemIndex === itemIndex || items.length === 1);
}
function isItemSelectable(item) {
  return item.isGroupHeader && item.isSelectable || item.selectable || !item.hasOwnProperty("selectable");
}
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { container = void 0 } = $$props;
  let { VirtualList: VirtualList2 = null } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { isVirtualList = false } = $$props;
  let { items = [] } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    if (option)
      return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { getGroupHeaderLabel = null } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { optionIdentifier: optionIdentifier2 = "value" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { isMulti = false } = $$props;
  let { activeItemIndex = 0 } = $$props;
  let { filterText = "" } = $$props;
  let { parent = null } = $$props;
  let { listPlacement = null } = $$props;
  let { listAutoWidth = null } = $$props;
  let { listOffset = 5 } = $$props;
  let listStyle;
  function computePlacement() {
    const { height, width } = parent.getBoundingClientRect();
    listStyle = "";
    listStyle += `min-width:${width}px;width:${listAutoWidth ? "auto" : "100%"};`;
    if (listPlacement === "top" || listPlacement === "auto" && isOutOfViewport(parent, container).bottom) {
      listStyle += `bottom:${height + listOffset}px;`;
    } else {
      listStyle += `top:${height + listOffset}px;`;
    }
  }
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList2 !== void 0)
    $$bindings.VirtualList(VirtualList2);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier2 !== void 0)
    $$bindings.optionIdentifier(optionIdentifier2);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.activeItemIndex === void 0 && $$bindings.activeItemIndex && activeItemIndex !== void 0)
    $$bindings.activeItemIndex(activeItemIndex);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  $$result.css.add(css$7);
  {
    {
      if (parent && container)
        computePlacement();
    }
  }
  return `

<div class="${["listContainer svelte-12ijemj", isVirtualList ? "virtualList" : ""].join(" ").trim()}"${add_attribute("style", listStyle, 0)}${add_attribute("this", container, 0)}>${isVirtualList ? `${validate_component(VirtualList2 || missing_component, "svelte:component").$$render($$result, { items, itemHeight }, {}, {
    default: ({ item, i }) => {
      return `<div class="${"listItem"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
        $$result,
        {
          item,
          filterText,
          getOptionLabel,
          isFirst: isItemFirst(i),
          isActive: isItemActive(item, value, optionIdentifier2),
          isHover: isItemHover(hoverItemIndex, item, i, items),
          isSelectable: isItemSelectable(item)
        },
        {},
        {}
      )}</div>`;
    }
  })}` : `${items.length ? each(items, (item, i) => {
    return `${item.isGroupHeader && !item.isSelectable ? `<div class="${"listGroupTitle svelte-12ijemj"}">${escape(getGroupHeaderLabel(item))}</div>` : `<div class="${"listItem"}" tabindex="${"-1"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        item,
        filterText,
        getOptionLabel,
        isFirst: isItemFirst(i),
        isActive: isItemActive(item, value, optionIdentifier2),
        isHover: isItemHover(hoverItemIndex, item, i, items),
        isSelectable: isItemSelectable(item)
      },
      {},
      {}
    )}
                </div>`}`;
  }) : `${!hideEmptyState ? `<div class="${"empty svelte-12ijemj"}">${escape(noOptionsMessage)}</div>` : ``}`}`}</div>`;
});
const css$6 = {
  code: ".selection.svelte-1tpioco{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}",
  map: null
};
const Selection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getSelectionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$6);
  return `<div class="${"selection svelte-1tpioco"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>`;
});
const css$5 = {
  code: ".multiSelectItem.svelte-1oaubvy.svelte-1oaubvy{background:var(--multiItemBG,#ebedef);border-radius:var(--multiItemBorderRadius,16px);cursor:default;display:flex;height:var(--multiItemHeight,32px);line-height:var(--multiItemHeight,32px);margin:var(--multiItemMargin,5px 5px 0 0);max-width:100%;padding:var(--multiItemPadding,0 10px 0 15px)}.multiSelectItem_label.svelte-1oaubvy.svelte-1oaubvy{margin:var(--multiLabelMargin,0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.active.svelte-1oaubvy.svelte-1oaubvy,.multiSelectItem.svelte-1oaubvy.svelte-1oaubvy:hover{background-color:var(--multiItemActiveBG,#006fff);color:var(--multiItemActiveColor,#fff)}.multiSelectItem.disabled.svelte-1oaubvy.svelte-1oaubvy:hover{background:var(--multiItemDisabledHoverBg,#ebedef);color:var(--multiItemDisabledHoverColor,#c1c6cc)}.multiSelectItem_clear.svelte-1oaubvy.svelte-1oaubvy{background:var(--multiClearBG,#52616f);border-radius:var(--multiClearRadius,50%);height:var(--multiClearHeight,16px);max-width:var(--multiClearWidth,16px);min-width:var(--multiClearWidth,16px);padding:var(--multiClearPadding,1px);position:relative;text-align:var(--multiClearTextAlign,center);top:var(--multiClearTop,8px)}.active.svelte-1oaubvy .multiSelectItem_clear.svelte-1oaubvy,.multiSelectItem_clear.svelte-1oaubvy.svelte-1oaubvy:hover{background:var(--multiClearHoverBG,#fff)}.active.svelte-1oaubvy .multiSelectItem_clear svg.svelte-1oaubvy,.multiSelectItem_clear.svelte-1oaubvy:hover svg.svelte-1oaubvy{fill:var(--multiClearHoverFill,#006fff)}.multiSelectItem_clear.svelte-1oaubvy svg.svelte-1oaubvy{fill:var(--multiClearFill,#ebedef);vertical-align:top}",
  map: null
};
const MultiSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value = [] } = $$props;
  let { activeValue = void 0 } = $$props;
  let { isDisabled = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { getSelectionLabel = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.activeValue === void 0 && $$bindings.activeValue && activeValue !== void 0)
    $$bindings.activeValue(activeValue);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$5);
  return `${each(value, (item, i) => {
    return `<div class="${"multiSelectItem " + escape(activeValue === i ? "active" : "", true) + " " + escape(isDisabled ? "disabled" : "", true) + " svelte-1oaubvy"}"><div class="${"multiSelectItem_label svelte-1oaubvy"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>
        ${!isDisabled && !multiFullItemClearable ? `<div class="${"multiSelectItem_clear svelte-1oaubvy"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}" class="${"svelte-1oaubvy"}"><path d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>
            </div>` : ``}
    </div>`;
  })}`;
});
const css$4 = {
  code: "svelte-virtual-list-viewport.svelte-1kdxoed{-webkit-overflow-scrolling:touch;display:block;overflow-y:auto;position:relative}svelte-virtual-list-contents.svelte-1kdxoed,svelte-virtual-list-row.svelte-1kdxoed{display:block}svelte-virtual-list-row.svelte-1kdxoed{overflow:hidden}",
  map: null
};
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = void 0 } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$4);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height, true) + ";"}" class="${"svelte-1kdxoed"}"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top, true) + "px; padding-bottom: " + escape(bottom, true) + "px;"}" class="${"svelte-1kdxoed"}"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-1kdxoed"}">${slots.default ? slots.default({
      item: row.data,
      i: row.index,
      hoverItemIndex
    }) : `Missing template`}
            </svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}"><path fill="${"currentColor"}" d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>`;
});
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
const { Object: Object_1 } = globals;
const css$3 = {
  code: ".selectContainer.svelte-y257h6.svelte-y257h6{--internalPadding:0 16px;align-items:center;background:var(--background,#fff);border:var(--border,1px solid #d8dbdf);border-radius:var(--borderRadius,3px);box-sizing:border-box;display:flex;height:var(--height,42px);margin:var(--margin,0);padding:var(--padding,var(--internalPadding));position:relative}.selectContainer.svelte-y257h6 input.svelte-y257h6{background:transparent;border:none;color:var(--inputColor,#3f4f5f);cursor:default;font-size:var(--inputFontSize,14px);height:var(--height,42px);left:var(--inputLeft,0);letter-spacing:var(--inputLetterSpacing,-.08px);line-height:var(--height,42px);margin:var(--inputMargin,0);padding:var(--inputPadding,var(--padding,var(--internalPadding)));position:absolute;width:100%}.selectContainer.svelte-y257h6 input.svelte-y257h6::-moz-placeholder{color:var(--placeholderColor,#78848f);opacity:var(--placeholderOpacity,1)}.selectContainer.svelte-y257h6 input.svelte-y257h6::placeholder{color:var(--placeholderColor,#78848f);opacity:var(--placeholderOpacity,1)}.selectContainer.svelte-y257h6 input.svelte-y257h6:focus{outline:none}.selectContainer.svelte-y257h6.svelte-y257h6:hover{border-color:var(--borderHoverColor,#b2b8bf)}.selectContainer.focused.svelte-y257h6.svelte-y257h6{border-color:var(--borderFocusColor,#006fe8)}.selectContainer.disabled.svelte-y257h6.svelte-y257h6{background:var(--disabledBackground,#ebedef);border-color:var(--disabledBorderColor,#ebedef);color:var(--disabledColor,#c1c6cc)}.selectContainer.disabled.svelte-y257h6 input.svelte-y257h6::-moz-placeholder{color:var(--disabledPlaceholderColor,#c1c6cc);opacity:var(--disabledPlaceholderOpacity,1)}.selectContainer.disabled.svelte-y257h6 input.svelte-y257h6::placeholder{color:var(--disabledPlaceholderColor,#c1c6cc);opacity:var(--disabledPlaceholderOpacity,1)}.selectedItem.svelte-y257h6.svelte-y257h6{height:var(--height,42px);line-height:var(--height,42px);overflow-x:hidden;padding:var(--selectedItemPadding,0 20px 0 0)}.selectedItem.svelte-y257h6.svelte-y257h6:focus{outline:none}.clearSelect.svelte-y257h6.svelte-y257h6{bottom:var(--clearSelectBottom,11px);color:var(--clearSelectColor,#c5cacf);flex:none!important;position:absolute;right:var(--clearSelectRight,10px);top:var(--clearSelectTop,11px);width:var(--clearSelectWidth,20px)}.clearSelect.svelte-y257h6.svelte-y257h6:hover{color:var(--clearSelectHoverColor,#2c3e50)}.selectContainer.focused.svelte-y257h6 .clearSelect.svelte-y257h6{color:var(--clearSelectFocusColor,#3f4f5f)}.indicator.svelte-y257h6.svelte-y257h6{color:var(--indicatorColor,#c5cacf);height:var(--indicatorHeight,20px);position:absolute;right:var(--indicatorRight,10px);top:var(--indicatorTop,11px);width:var(--indicatorWidth,20px)}.indicator.svelte-y257h6 svg.svelte-y257h6{fill:var(--indicatorFill,currentcolor);stroke:var(--indicatorStroke,currentcolor);stroke-width:0;display:inline-block;line-height:1}.spinner.svelte-y257h6.svelte-y257h6{-webkit-animation:svelte-y257h6-rotate .75s linear infinite;animation:svelte-y257h6-rotate .75s linear infinite;color:var(--spinnerColor,#51ce6c);height:var(--spinnerHeight,20px);position:absolute;right:var(--spinnerRight,10px);top:var(--spinnerLeft,11px);width:var(--spinnerWidth,20px)}.spinner_icon.svelte-y257h6.svelte-y257h6{bottom:0;display:block;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;-webkit-transform:none;transform-origin:center center;width:100%}.spinner_path.svelte-y257h6.svelte-y257h6{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-y257h6.svelte-y257h6{align-items:stretch;display:flex;flex-wrap:wrap;height:auto;padding:var(--multiSelectPadding,0 35px 0 16px)}.multiSelect.svelte-y257h6>.svelte-y257h6{flex:1 1 50px}.selectContainer.multiSelect.svelte-y257h6 input.svelte-y257h6{margin:var(--multiSelectInputMargin,0);padding:var(--multiSelectInputPadding,0);position:relative}.hasError.svelte-y257h6.svelte-y257h6{background:var(--errorBackground,#fff);border:var(--errorBorder,1px solid #ff2d55)}.a11yText.svelte-y257h6.svelte-y257h6{clip:rect(1px,1px,1px,1px);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;z-index:9999}@-webkit-keyframes svelte-y257h6-rotate{to{transform:rotate(1turn)}}@keyframes svelte-y257h6-rotate{to{transform:rotate(1turn)}}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let showSelectedItem;
  let showClearIcon;
  let placeholderText;
  let showMultiSelect;
  let listProps;
  let ariaSelection;
  let ariaContext;
  const dispatch = createEventDispatcher();
  let { id = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { isMulti = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isCreatable = false } = $$props;
  let { isFocused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Select..." } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { itemFilter = (label, filterText2, option) => `${label}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { isGroupHeaderSelectable = false } = $$props;
  let { getGroupHeaderLabel = (option) => {
    return option[labelIdentifier] || option.id;
  } } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { optionIdentifier: optionIdentifier2 = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { containerStyles = "" } = $$props;
  let { getSelectionLabel = (option) => {
    if (option)
      return option[labelIdentifier];
    else
      return null;
  } } = $$props;
  let { createGroupHeaderItem = (groupValue) => {
    return { value: groupValue, label: groupValue };
  } } = $$props;
  let { createItem = (filterText2) => {
    return { value: filterText2, label: filterText2 };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { isSearchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { isClearable = true } = $$props;
  let { isWaiting = false } = $$props;
  let { listPlacement = "auto" } = $$props;
  let { listOpen = false } = $$props;
  let { isVirtualList = false } = $$props;
  let { loadOptionsInterval = 300 } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { itemHeight = 40 } = $$props;
  let { Icon = void 0 } = $$props;
  let { iconProps = {} } = $$props;
  let { showChevron = false } = $$props;
  let { showIndicator = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { indicatorSvg = void 0 } = $$props;
  let { listOffset = 5 } = $$props;
  let { ClearIcon: ClearIcon$1 = ClearIcon } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { List: List$1 = List } = $$props;
  let { Selection: Selection$1 = Selection } = $$props;
  let { MultiSelection: MultiSelection$1 = MultiSelection } = $$props;
  let { VirtualList: VirtualList$1 = VirtualList } = $$props;
  function filterMethod(args) {
    if (args.loadOptions && args.filterText.length > 0)
      return;
    if (!args.items)
      return [];
    if (args.items && args.items.length > 0 && typeof args.items[0] !== "object") {
      args.items = convertStringItemsToObjects(args.items);
    }
    let filterResults = args.items.filter((item) => {
      let matchesFilter = itemFilter(getOptionLabel(item, args.filterText), args.filterText, item);
      if (matchesFilter && args.isMulti && args.value && Array.isArray(args.value)) {
        matchesFilter = !args.value.some((x) => {
          return x[args.optionIdentifier] === item[args.optionIdentifier];
        });
      }
      return matchesFilter;
    });
    if (args.groupBy) {
      filterResults = filterGroupedItems(filterResults);
    }
    if (args.isCreatable) {
      filterResults = addCreatableItem(filterResults, args.filterText);
    }
    return filterResults;
  }
  function addCreatableItem(_items, _filterText) {
    if (_filterText.length === 0)
      return _items;
    const itemToCreate = createItem(_filterText);
    if (_items[0] && _filterText === _items[0][labelIdentifier])
      return _items;
    itemToCreate.isCreator = true;
    return [..._items, itemToCreate];
  }
  let { selectedValue = null } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  let prev_isFocused;
  let hoverItemIndex;
  const getItems = debounce(
    async () => {
      isWaiting = true;
      let res = await loadOptions(filterText).catch((err) => {
        console.warn("svelte-select loadOptions error :>> ", err);
        dispatch("error", { type: "loadOptions", details: err });
      });
      if (res && !res.cancelled) {
        if (res) {
          if (res && res.length > 0 && typeof res[0] !== "object") {
            res = convertStringItemsToObjects(res);
          }
          filteredItems = [...res];
          dispatch("loaded", { items: filteredItems });
        } else {
          filteredItems = [];
        }
        if (isCreatable) {
          filteredItems = addCreatableItem(filteredItems, filterText);
        }
        isWaiting = false;
        isFocused = true;
        listOpen = true;
      }
    },
    loadOptionsInterval
  );
  function setValue() {
    if (typeof value === "string") {
      value = { [optionIdentifier2]: value, label: value };
    } else if (isMulti && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign(
      {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: false,
        tabindex: 0,
        type: "text",
        "aria-autocomplete": "list"
      },
      inputAttributes
    );
    if (id) {
      _inputAttributes.id = id;
    }
    if (!isSearchable) {
      _inputAttributes.readonly = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            isGroupHeader: true,
            isSelectable: isGroupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (isMulti) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("select", value);
        }
      }
      return;
    }
    {
      dispatch("select", value);
    }
  }
  function setupFocus() {
    if (isFocused || listOpen) {
      handleFocus();
    } else {
      if (input)
        input.blur();
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setupFilterText() {
    if (filterText.length === 0)
      return;
    isFocused = true;
    listOpen = true;
    if (loadOptions) {
      getItems();
    } else {
      listOpen = true;
      if (isMulti) {
        activeValue = void 0;
      }
    }
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[optionIdentifier2])) {
          ids.push(val[optionIdentifier2]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[optionIdentifier2] : value[optionIdentifier2];
    return items.find((item) => item[optionIdentifier2] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (isMulti ? value.some((selection) => !selection || !selection[optionIdentifier2]) : !value[optionIdentifier2]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus() {
    isFocused = true;
    if (input)
      input.focus();
  }
  function handleClear() {
    value = void 0;
    listOpen = false;
    dispatch("clear", value);
    handleFocus();
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    if (isMulti && value.length > 0) {
      selected = value.map((v) => getSelectionLabel(v)).join(", ");
    } else {
      selected = getSelectionLabel(value);
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!isFocused || !filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let label = getSelectionLabel(_item);
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(label, count);
    } else {
      return ariaFocused();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isCreatable === void 0 && $$bindings.isCreatable && isCreatable !== void 0)
    $$bindings.isCreatable(isCreatable);
  if ($$props.isFocused === void 0 && $$bindings.isFocused && isFocused !== void 0)
    $$bindings.isFocused(isFocused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.isGroupHeaderSelectable === void 0 && $$bindings.isGroupHeaderSelectable && isGroupHeaderSelectable !== void 0)
    $$bindings.isGroupHeaderSelectable(isGroupHeaderSelectable);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier2 !== void 0)
    $$bindings.optionIdentifier(optionIdentifier2);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.createItem === void 0 && $$bindings.createItem && createItem !== void 0)
    $$bindings.createItem(createItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.isWaiting === void 0 && $$bindings.isWaiting && isWaiting !== void 0)
    $$bindings.isWaiting(isWaiting);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.loadOptionsInterval === void 0 && $$bindings.loadOptionsInterval && loadOptionsInterval !== void 0)
    $$bindings.loadOptionsInterval(loadOptionsInterval);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon !== void 0)
    $$bindings.Icon(Icon);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.showIndicator === void 0 && $$bindings.showIndicator && showIndicator !== void 0)
    $$bindings.showIndicator(showIndicator);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.indicatorSvg === void 0 && $$bindings.indicatorSvg && indicatorSvg !== void 0)
    $$bindings.indicatorSvg(indicatorSvg);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.ClearIcon === void 0 && $$bindings.ClearIcon && ClearIcon$1 !== void 0)
    $$bindings.ClearIcon(ClearIcon$1);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.List === void 0 && $$bindings.List && List$1 !== void 0)
    $$bindings.List(List$1);
  if ($$props.Selection === void 0 && $$bindings.Selection && Selection$1 !== void 0)
    $$bindings.Selection(Selection$1);
  if ($$props.MultiSelection === void 0 && $$bindings.MultiSelection && MultiSelection$1 !== void 0)
    $$bindings.MultiSelection(MultiSelection$1);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList$1 !== void 0)
    $$bindings.VirtualList(VirtualList$1);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0)
    $$bindings.selectedValue(selectedValue);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = filterMethod({
      loadOptions,
      filterText,
      items,
      value,
      isMulti,
      optionIdentifier: optionIdentifier2,
      groupBy,
      isCreatable
    });
    {
      {
        if (selectedValue)
          console.warn("selectedValue is no longer used. Please use value instead.");
      }
    }
    {
      updateValueDisplay(items);
    }
    {
      {
        if (value)
          setValue();
      }
    }
    {
      {
        if (inputAttributes || !isSearchable)
          assignInputAttributes();
      }
    }
    {
      {
        if (isMulti) {
          setupMulti();
        }
      }
    }
    {
      {
        if (isMulti && value && value.length > 1) {
          checkValueForDuplicates();
        }
      }
    }
    {
      {
        if (value)
          dispatchSelectedItem();
      }
    }
    {
      {
        if (!value && isMulti && prev_value) {
          dispatch("select", value);
        }
      }
    }
    {
      {
        if (isFocused !== prev_isFocused) {
          setupFocus();
        }
      }
    }
    {
      {
        if (filterText !== prev_filterText) {
          setupFilterText();
        }
      }
    }
    showSelectedItem = value && filterText.length === 0;
    showClearIcon = showSelectedItem && isClearable && !isDisabled && !isWaiting;
    placeholderText = placeholderAlwaysShow && isMulti ? placeholder : value ? "" : placeholder;
    showMultiSelect = isMulti && value && value.length > 0;
    listProps = {
      Item: Item$1,
      filterText,
      optionIdentifier: optionIdentifier2,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      VirtualList: VirtualList$1,
      value,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight,
      getOptionLabel,
      listPlacement,
      parent: container,
      listAutoWidth,
      listOffset
    };
    ariaSelection = value ? handleAriaSelection() : "";
    ariaContext = handleAriaContent();
    $$rendered = `

<div class="${[
      "selectContainer " + escape(containerClasses, true) + " svelte-y257h6",
      (hasError ? "hasError" : "") + " " + (isMulti ? "multiSelect" : "") + " " + (isDisabled ? "disabled" : "") + " " + (isFocused ? "focused" : "")
    ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}><span aria-live="${"polite"}" aria-atomic="${"false"}" aria-relevant="${"additions text"}" class="${"a11yText svelte-y257h6"}">${isFocused ? `<span id="${"aria-selection"}">${escape(ariaSelection)}</span>
            <span id="${"aria-context"}">${escape(ariaContext)}</span>` : ``}</span>

    ${Icon ? `${validate_component(Icon || missing_component, "svelte:component").$$render($$result, Object_1.assign(iconProps), {}, {})}` : ``}

    ${showMultiSelect ? `${validate_component(MultiSelection$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        value,
        getSelectionLabel,
        activeValue,
        isDisabled,
        multiFullItemClearable
      },
      {},
      {}
    )}` : ``}

    <input${spread(
      [
        { readonly: !isSearchable || null },
        escape_object(_inputAttributes),
        {
          placeholder: escape_attribute_value(placeholderText)
        },
        {
          style: escape_attribute_value(inputStyles)
        },
        { disabled: isDisabled || null }
      ],
      { classes: "svelte-y257h6" }
    )}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}>

    ${!isMulti && showSelectedItem ? `<div class="${"selectedItem svelte-y257h6"}">${validate_component(Selection$1 || missing_component, "svelte:component").$$render($$result, { item: value, getSelectionLabel }, {}, {})}</div>` : ``}

    ${showClearIcon ? `<div class="${"clearSelect svelte-y257h6"}" aria-hidden="${"true"}">${validate_component(ClearIcon$1 || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}

    ${!showClearIcon && (showIndicator || showChevron && !value || !isSearchable && !isDisabled && !isWaiting && (showSelectedItem && !isClearable || !showSelectedItem)) ? `<div class="${"indicator svelte-y257h6"}" aria-hidden="${"true"}">${indicatorSvg ? `<!-- HTML_TAG_START -->${indicatorSvg}<!-- HTML_TAG_END -->` : `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 20 20"}" focusable="${"false"}" aria-hidden="${"true"}" class="${"svelte-y257h6"}"><path d="${"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}"></path></svg>`}</div>` : ``}

    ${isWaiting ? `<div class="${"spinner svelte-y257h6"}"><svg class="${"spinner_icon svelte-y257h6"}" viewBox="${"25 25 50 50"}"><circle class="${"spinner_path svelte-y257h6"}" cx="${"50"}" cy="${"50"}" r="${"20"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"5"}" stroke-miterlimit="${"10"}"></circle></svg></div>` : ``}

    ${listOpen ? `${validate_component(List$1 || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(listProps, { hoverItemIndex }),
      {
        hoverItemIndex: ($$value) => {
          hoverItemIndex = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

    ${!isMulti || isMulti && !showMultiSelect ? `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", value ? getSelectionLabel(value) : null, 0)} class="${"svelte-y257h6"}">` : ``}

    ${isMulti && showMultiSelect ? `${each(value, (item) => {
      return `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", item ? getSelectionLabel(item) : null, 0)} class="${"svelte-y257h6"}">`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$2 = {
  code: ".customItem.svelte-k1quyg{align-items:center;cursor:default;display:flex;height:40px;line-height:40px;overflow:hidden;padding:0 16px;text-overflow:ellipsis;white-space:nowrap}.customItem.svelte-k1quyg:active{background:#b9daff}.customItem.active.svelte-k1quyg{background:#007aff;color:#fff}.customItem.first.svelte-k1quyg{border-radius:4px 4px 0 0}.customItem.hover.svelte-k1quyg:not(.active){background:#e7f2ff}.customItem_name.svelte-k1quyg{display:inline-block;margin-right:10px}",
  map: null
};
const AutocompleteItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item = void 0 } = $$props;
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { getOptionLabel } = $$props;
  let { isSelectable = true } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$2);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"customItem " + escape(itemClasses, true) + " svelte-k1quyg"}"><div>${escape(item.key)}</div></div>`;
});
const css$1 = {
  code: ".mega-menu.svelte-3wabi2.svelte-3wabi2{left:0;left:10%;opacity:0;position:absolute;right:20%;text-align:left;transition:.3s .1s;visibility:hidden;width:70%;z-index:9999}.hoverable.svelte-3wabi2.svelte-3wabi2{position:static}.hoverable.svelte-3wabi2:hover .mega-menu.svelte-3wabi2{opacity:1;transition-delay:.1s;visibility:visible}",
  map: null
};
const MegaMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let megaMenu = [];
  let selectedCategory = "";
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<ul class="${"flex flex-row items-center justify-center font-semibold tracking-wide"}">${each(megaMenu, (category, index) => {
    var _a, _b;
    return `<li class="${"hoverable mx-1 svelte-3wabi2"}"><div class="${"itmes-center relative flex h-20 flex-shrink-0 justify-center border-b-4 border-transparent p-2 font-medium uppercase " + escape(index % 6 == 0 ? "hover:border-yellow-500" : "", true) + " " + escape(index % 6 == 1 ? "hover:border-purple-500" : "", true) + " " + escape(index % 6 == 2 ? "hover:border-red-500" : "", true) + " " + escape(index % 6 == 3 ? "hover:border-green-500" : "", true) + " " + escape(index % 6 == 4 ? "hover:border-pink-500" : "", true) + " " + escape(index % 6 == 5 ? "hover:border-blue-500" : "", true) + " " + escape(
      index % 6 == 0 && selectedCategory === category.name ? "border-yellow-500" : "",
      true
    ) + " " + escape(
      index % 6 == 1 && selectedCategory === category.name ? "border-purple-500" : "",
      true
    ) + " " + escape(
      index % 6 == 2 && selectedCategory === category.name ? "border-red-500" : "",
      true
    ) + " " + escape(
      index % 6 == 3 && selectedCategory === category.name ? "border-green-500" : "",
      true
    ) + " " + escape(
      index % 6 == 4 && selectedCategory === category.name ? "border-pink-500" : "",
      true
    ) + " " + escape(
      index % 6 == 5 && selectedCategory === category.name ? "border-blue-500" : "",
      true
    )}"><a${add_attribute("href", category.link, 0)} class="${"flex items-center gap-1"}">

					<span>${escape(category.name)}</span>

					

					${((_a = category.children) == null ? void 0 : _a.length) ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"h-4 w-4 transition duration-300 " + escape(
      selectedCategory === category.name ? "transform -rotate-180" : "",
      true
    )}"><path fill-rule="${"evenodd"}" d="${"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"}" clip-rule="${"evenodd"}"></path></svg>` : ``}
				</a></div>

			${((_b = category.children) == null ? void 0 : _b.length) ? `<div class="${"mega-menu border-b bg-white shadow-2xl svelte-3wabi2"}"><div class="${"flex max-h-[50vh] flex-col flex-wrap items-start gap-1 p-6 shadow-inner"}">

						${each(category.children, (c) => {
      return `<div class="${"mb-2 w-64 flex-1 flex-shrink-0 flex-grow-0 pr-2 text-sm"}"><a${add_attribute("href", `${c.link}`, 0)} class="${"flex"}"><h1 class="${"mb-2 " + escape(index % 6 == 0 ? "text-yellow-500 " : "", true) + " " + escape(index % 6 == 1 ? "text-purple-500 " : "", true) + " " + escape(index % 6 == 2 ? "text-red-500 " : "", true) + " " + escape(index % 6 == 3 ? "text-green-500 " : "", true) + " " + escape(index % 6 == 4 ? "text-pink-500 " : "", true) + " " + escape(index % 6 == 5 ? "text-blue-500 " : "", true)}">${escape(c.name)}
									</h1></a>

								${c && c.children ? `<div class="${"flex flex-col flex-wrap items-start gap-0.5"}">

										${each(c.children, (c1, ixx) => {
        return `<a${add_attribute("href", c1.link, 0)}><h2 class="${"min-w-full font-light hover:font-medium"}">${escape(c1.name)}</h2>
											</a>`;
      })}
									</div>` : ``}
							</div>`;
    })}</div>
				</div>` : ``}
		</li>`;
  })}</ul>`;
});
const optionIdentifier = "key";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  const cookies = Cookie();
  let { me, cart = {}, data } = $$props;
  let selectTarget = null;
  const signOut = async () => {
    let logout, error;
    try {
      await post("logout", {});
    } catch (e) {
      error = e;
    } finally {
    }
    await cookies.set("me", null, { path: "/" });
    await cookies.remove("token");
    await cookies.remove("sid");
    await cookies.remove("me");
    return { data: logout, error };
  };
  async function onSearch(filterText) {
    var _a2;
    try {
      const res = await getAPI(`es/autocomplete?q=${filterText}&store=${(_a2 = $page.data.store) == null ? void 0 : _a2.id}`);
      return (res == null ? void 0 : res.data) || [];
    } catch (e) {
    }
  }
  const getOptionLabel = (option) => option.key;
  const getSelectionLabel = (option) => option.key;
  if ($$props.me === void 0 && $$bindings.me && me !== void 0)
    $$bindings.me(me);
  if ($$props.cart === void 0 && $$bindings.cart && cart !== void 0)
    $$bindings.cart(cart);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.signOut === void 0 && $$bindings.signOut && signOut !== void 0)
    $$bindings.signOut(signOut);
  $$unsubscribe_page();
  return `<nav class="${"fixed inset-x-0 top-0 z-40 h-20 w-full justify-center bg-white px-3 shadow-md sm:px-10"}"><div class="${"flex w-full items-center justify-between gap-4"}">

		<div class="${"block sm:hidden"}">${((_a = $page == null ? void 0 : $page.data) == null ? void 0 : _a.isShowBackButton) ? `<button type="${"button"}" class="${"focus:outline-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></button>` : ``}</div>

		

		<a class="${"flex-shrink-0 py-3 "}" href="${"/"}" aria-label="${"Click to route home"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/logo.png",
      alt: "",
      height: "56",
      class: "h-14 object-contain object-center"
    },
    {},
    {}
  )}</a>

		<div class="${"hidden lg:block"}">${validate_component(MegaMenu, "MegaMenu").$$render($$result, {}, {}, {})}</div>

		

		<form class="${"form-control relative z-50 hidden w-1/3 lg:block"}"${add_attribute("this", selectTarget, 0)}>

			${validate_component(Select, "Select").$$render(
    $$result,
    {
      appendListTarget: selectTarget,
      loadOptions: onSearch,
      optionIdentifier,
      getSelectionLabel,
      getOptionLabel,
      Item: AutocompleteItem,
      placeholder: "Search for covers, cases, accessories...",
      inputStyles: "cursor: text"
    },
    {},
    {}
  )}
			</form>

		<div class="${"flex items-center"}">

			<a sveltekit:prefetch href="${"/autosuggest"}" aria-label="${"Click to route cart"}" class="${"flex h-20 flex-col items-center justify-center gap-1 border-b-4 border-transparent px-2 focus:outline-none sm:px-4 lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></a>

			<div class="${"dropdown-end dropdown"}"><button title="${"Cart"}" tabindex="${"0"}" class="${"flex h-20 flex-col items-center justify-center gap-1 border-b-4 border-transparent px-2 focus:outline-none sm:px-4"}" aria-label="${"Cart"}"><div class="${"indicator"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6 flex-shrink-0"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}"></path></svg>

							<span class="${"hidden text-center text-xs font-semibold tracking-wider lg:block"}">Bag
							</span></div>

						${(cart == null ? void 0 : cart.qty) ? `<span class="${"badge indicator-item badge-sm"}"><span>${escape((cart == null ? void 0 : cart.qty) || 0)}</span></span>` : ``}</div></button>

				<div tabindex="${"0"}" class="${"card dropdown-content card-compact mt-3 w-52 border bg-white shadow-md"}"><div class="${"card-body"}"><span class="${"text-lg font-bold"}">${escape((cart == null ? void 0 : cart.qty) || 0)} Items</span>

						<span class="${"font-medium text-primary-500"}">Subtotal: ${escape(currency((cart == null ? void 0 : cart.total) || 0))}</span>

						<div class="${"card-actions"}"><a href="${"/cart"}" aria-label="${"Click to route cart"}" class="${"w-full"}" sveltekit:prefetch>${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      loadingringsize: "sm",
      class: "w-full text-sm uppercase"
    },
    {},
    {
      default: () => {
        return `View cart
								`;
      }
    }
  )}</a></div></div></div></div>

			

			${(me == null ? void 0 : me.active) ? `<div class="${"relative hidden lg:block"}"><button class="${"h-20 gap-1 border-b-4 px-2 focus:outline-none sm:px-4 " + escape(
    "border-transparent",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mx-auto h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}"></path></svg>

						<span class="${"hidden text-center text-xs font-semibold tracking-wider lg:block"}">Profile
						</span></button>

					${``}</div>` : ``}

			${!((_b = $page.data.me) == null ? void 0 : _b.active) ? `

				<a href="${"/auth/otp-login"}" aria-label="${"Click to route login"}" sveltekit:prefetch><button class="${"h-20 gap-1 border-b-4 border-transparent px-2 focus:outline-none sm:px-4"}" aria-label="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mx-auto h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}"></path></svg>

						<span class="${"hidden text-center text-xs font-semibold tracking-wider lg:block"}">Login
						</span></button></a>` : `

				<button aria-label="${"Sidebar"}" type="${"button"}" class="${"flex h-20 flex-col items-center justify-center gap-1 px-4 focus:outline-none lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>

					<span class="${"hidden text-center text-xs font-semibold tracking-wider lg:block"}">Menu
					</span></button>`}</div></div></nav>



${``}`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".link-underline.svelte-arnh72{background-image:linear-gradient(transparent,transparent),linear-gradient(#f9fafb,#f9fafb);background-position:0 100%;background-repeat:no-repeat;background-size:0 1px;border-bottom-width:0;transition:background-size .5s ease-in-out}.link-underline-gray.svelte-arnh72{background-image:linear-gradient(transparent,transparent),linear-gradient(#6b7280,#6b7280)}.link-underline.svelte-arnh72:hover{background-position:0 100%;background-size:100% 1px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { me, cart } = $$props;
  let { class: clazz = "" } = $$props;
  let footerItems = [
    {
      heading: "Company",
      subMenu: [
        {
          title: "About Us",
          link: "/about-us",
          new: false
        },
        {
          title: "Privacy Policy",
          link: "/p/privacy-policy",
          new: false
        },
        {
          title: "Terms & Conditions",
          link: "/p/terms-conditions",
          new: false
        },
        {
          title: "Payments & Returns",
          link: "/p/payments-returns",
          new: false
        },
        {
          title: "Printing Terms & Cancellation Policy",
          link: "/p/printing-terms-cancellation-policy",
          new: false
        }
      ]
    },
    {
      heading: "Customer service",
      subMenu: [
        {
          title: "Track Your Order",
          link: "##",
          new: false
        },
        {
          title: "Bulk Order Inquiry",
          link: "/bulk-order-inquiry",
          new: true
        }
      ]
    }
  ];
  [
    {
      label: "Home",
      link: "/",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h1"></path></svg>`
    },
    {
      label: "Cart",
      link: "/cart",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>`
    },
    {
      label: "Categories",
      link: "/c",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h1a2 2 0 012 2v2M7 7h10"></path></svg>`
    },
    {
      label: "Account",
      link: (me == null ? void 0 : me.active) ? "/my" : "/auth/otp-login",
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
    }
  ];
  if ($$props.me === void 0 && $$bindings.me && me !== void 0)
    $$bindings.me(me);
  if ($$props.cart === void 0 && $$bindings.cart && cart !== void 0)
    $$bindings.cart(cart);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"bg-primary-500 p-3 text-center tracking-wide text-white sm:px-10"}"><p class="${"mb-1 text-xl font-semibold uppercase"}">Truly Indian Brand</p>

	<p>Over <span class="${"font-semibold"}">2 Million</span> Happy Customers</p></div>

<footer class="${"w-full justify-center bg-gray-50 p-3 text-sm shadow-md sm:p-10"}"><div class="${"container mx-auto max-w-6xl"}"><div class="${"mb-4 flex w-full flex-col flex-wrap items-start justify-start gap-5 sm:mb-8 sm:max-h-[30rem] sm:gap-10 lg:max-h-96 xl:max-h-60"}">${each(footerItems, (item) => {
    return `<div><h1 class="${"mb-4 whitespace-nowrap font-semibold uppercase"}">${escape(item.heading)}</h1>

					<ul class="${"flex flex-col gap-1 text-gray-500"}">${each(item.subMenu, (item2) => {
      return `<li class="${"flex max-w-max items-center"}"><a${add_attribute("href", item2.link, 0)} aria-label="${"Click to route this page"}" class="${"link-underline link-underline-gray whitespace-pre-wrap svelte-arnh72"}">${escape(item2.title)}</a>

								${item2.new ? `<div class="${"ml-2 max-w-max rounded bg-primary-500 py-[0.1rem] px-1 text-[0.5rem] font-semibold leading-3 tracking-wider text-white"}">NEW
									</div>` : ``}
							</li>`;
    })}</ul>
				</div>`;
  })}

			<div><h1 class="${"mb-4 whitespace-nowrap font-semibold uppercase"}">Contact Us</h1>

				<ul class="${"flex flex-col gap-2 text-gray-500"}"><li class="${"max-w-max"}"><h2 class="${"mb-0.5 flex items-center gap-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}"></path></svg>

							<span class="${"font-semibold"}">Email</span></h2>

						<p>help@misiki.in</p></li>

					<li class="${"max-w-max"}"><h1 class="${"mb-0.5 flex items-center gap-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M5 13l4 4L19 7"}"></path></svg>

							<span class="${"font-semibold"}">Guaranteed Response Time</span></h1>

						<p>Within 3 to 6 Hours</p></li>

					<li class="${"max-w-max"}"><h2 class="${"mb-0.5 flex items-center gap-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>

							<span class="${"font-semibold"}">Working Days/Hours</span></h2>

						<p>Mon \u2013 Sat / 9:30AM \u2013 6:30PM</p></li></ul></div>

			<div><h1 class="${"mb-4 whitespace-nowrap font-semibold uppercase"}">Experience kitcommerce app on mobile
				</h1>

				<div class="${"flex items-center gap-1"}"><a href="${"##"}" aria-label="${"Click for the app link on Google Play"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/app/google-play.png",
      alt: "",
      width: "128",
      class: "h-auto w-32 object-contain object-left"
    },
    {},
    {}
  )}</a>

					<a href="${"##"}" aria-label="${"Click for the app link on App Store"}">${validate_component(LazyImg, "LazyImg").$$render(
    $$result,
    {
      src: "/app/app-store.svg",
      alt: "",
      width: "128",
      class: "h-auto w-32 object-contain object-left p-1"
    },
    {},
    {}
  )}</a></div></div>

			<div><h1 class="${"mb-4 whitespace-nowrap font-semibold uppercase"}">Keep in touch</h1>

				<ul class="${"flex flex-wrap gap-4 text-gray-500"}">

					<li class="${"max-w-max"}"><a href="${"https://www.facebook.com/kitcommerce.store/"}" target="${"_blank"}" rel="${"noopener noreferrer"}" aria-label="${"Click for facebook link"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transition duration-300 hover:text-[#4267B2]"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"}"></path></svg></a></li>

					

					<li class="${"max-w-max"}"><a href="${"https://www.instagram.com/kitcommerce/"}" target="${"_blank"}" rel="${"noopener noreferrer"}" aria-label="${"Click for instagram link"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transition duration-300 hover:text-[#C13584]"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"4"}" y="${"4"}" width="${"16"}" height="${"16"}" rx="${"4"}"></rect><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle><line x1="${"16.5"}" y1="${"7.5"}" x2="${"16.5"}" y2="${"7.501"}"></line></svg></a></li>

					

					<li class="${"max-w-max"}"><a href="${"https://twitter.com/itswadesh"}" target="${"_blank"}" rel="${"noopener noreferrer"}" aria-label="${"Click for twitter link"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transition duration-300 hover:text-[#1DA1F2]"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"}"></path></svg></a></li>

					

					<li class="${"max-w-max"}"><a href="${"mailto:help@misiki.in"}" aria-label="${"Click to contact with mail id"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transition duration-300 hover:text-[#c71610]"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"3"}" y="${"5"}" width="${"18"}" height="${"14"}" rx="${"2"}"></rect><polyline points="${"3 7 12 13 21 7"}"></polyline></svg></a></li>

					

					<li class="${"max-w-max"}"><a href="${"https://www.linkedin.com/company/misiki/"}" target="${"_blank"}" rel="${"noopener noreferrer"}" aria-label="${"Click for linked in link"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transition duration-300 hover:text-[#0077b5]"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"4"}" y="${"4"}" width="${"16"}" height="${"16"}" rx="${"2"}"></rect><line x1="${"8"}" y1="${"11"}" x2="${"8"}" y2="${"16"}"></line><line x1="${"8"}" y1="${"8"}" x2="${"8"}" y2="${"8.01"}"></line><line x1="${"12"}" y1="${"16"}" x2="${"12"}" y2="${"11"}"></line><path d="${"M16 16v-3a2 2 0 0 0 -4 0"}"></path></svg></a></li>

					

					<li class="${"max-w-max"}"><a href="${"https://www.youtube.com/channel/UCcb3eRHh-7qAiv9ea7jmTHQ"}" target="${"_blank"}" rel="${"noopener noreferrer"}" aria-label="${"Click for youtube link"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 transition duration-300 hover:text-[#FF0000]"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><rect x="${"3"}" y="${"5"}" width="${"18"}" height="${"14"}" rx="${"4"}"></rect><path d="${"M10 9l5 3l-5 3z"}"></path></svg></a></li></ul></div></div>

		${``}

		<hr class="${"mb-4 w-full border-t sm:mb-8"}">

		<div class="${"mb-4 sm:mb-8"}"><h1 class="${"mb-4 whitespace-nowrap font-semibold uppercase"}">Registered Office Address</h1>

			<p class="${"text-gray-500"}">#22, <br>
				Global Village, <br>
				Rourkela, <br>
				Odisha - 395006 <br>
				India
			</p></div>

		<hr class="${"mb-4 w-full border-t sm:mb-8"}">

		<div class="${"flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 sm:gap-5 md:justify-between"}"><p>Copyright 2022 \xA9 Misiki Technologies Made with \u2764\uFE0F in India</p>

			<div class="${"flex items-center justify-center gap-4"}"><a href="${"/contact-us"}" aria-label="${"Click to route this page"}" class="${"font-bold uppercase text-primary-500 transition duration-300 hover:text-primary-700"}">Contact Us
				</a>

				<a href="${"/faqs"}" aria-label="${"Click to route this page"}" class="${"font-bold uppercase text-primary-500 transition duration-300 hover:text-primary-700"}">Faqs
				</a></div></div></div></footer>`;
});
export {
  Footer as F,
  Nav as N
};
