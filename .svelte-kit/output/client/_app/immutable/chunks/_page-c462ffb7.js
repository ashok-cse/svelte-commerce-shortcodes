import{g as n}from"./api-8ad212b5.js";async function w({url:o,params:g,fetch:i,parent:d,setHeaders:_}){const{store:t}=await d();let a;const e=await n(`faqs?store=${t==null?void 0:t.id}`);a=e==null?void 0:e.data[0];var p=/\[(.*?)\]/gm,f=/[\[\]'"]+/gm,s=JSON.stringify(a.answer).match(p);for(let r=0;r<s.length;r++){var h=s[r].replace(f,""),v=h.split(" "),u=v[1].split("="),c=u[1].replaceAll("\\","");const m=await l(c);a.answer=a.answer.replace('[block id="'+c+'"]',m)}return{faq:a}}const l=async o=>(await n(`short-code/${o}`)).data,S=Object.freeze(Object.defineProperty({__proto__:null,load:w,getShortCodeData:l},Symbol.toStringTag,{value:"Module"}));export{S as _,l as g,w as l};