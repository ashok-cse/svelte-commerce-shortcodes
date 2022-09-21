import { c as currency$1 } from "./index5.js";
import "./index.js";
/* empty css                                         */function date(value) {
  const date2 = new Date(value);
  return date2.toLocaleString(["en-US"], {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function currency(value, currency2 = "\u20B9", decimals) {
  const digitsRE = /(\d{3})(?=\d)/g;
  value = parseFloat(value);
  if (!isFinite(value) || !value && value !== 0)
    return "";
  currency2 = currency2 != null ? currency2 : currency$1.symbol;
  decimals = decimals != null ? decimals : 0;
  let stringified = Math.abs(value).toFixed(decimals);
  let _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  let i = _int.length % 3;
  let head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "," : "") : "";
  let _float = decimals ? stringified.slice(-1 - decimals) : "";
  let sign = value < 0 ? "-" : "";
  return sign + currency2 + " " + head + _int.slice(i).replace(digitsRE, "$1,") + _float;
}
export {
  currency as c,
  date as d
};
