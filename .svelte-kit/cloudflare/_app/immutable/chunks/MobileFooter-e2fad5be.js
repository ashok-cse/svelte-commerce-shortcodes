import{S as E,i as S,s as N,k as m,l as f,m as g,h as p,n as w,p as T,b as x,A as _,I as q,G as D,a as B,q as F,c as I,r as G,C as u,R as O,ah as H,e as k,ai as V}from"./index-98fbb2d4.js";import{g as P}from"./navigation-b6190580.js";import{p as R}from"./stores-73d8742c.js";function A(a,l,n){const t=a.slice();return t[5]=l[n],t}function U(a){let l,n=a[5].icon+"",t;return{c(){l=new H(!1),t=k(),this.h()},l(e){l=V(e,!1),t=k(),this.h()},h(){l.a=t},m(e,o){l.m(n,e,o),x(e,t,o)},p:_,d(e){e&&p(t),e&&l.d()}}}function W(a){let l,n=a[5].activeIcon+"",t;return{c(){l=new H(!1),t=k(),this.h()},l(e){l=V(e,!1),t=k(),this.h()},h(){l.a=t},m(e,o){l.m(n,e,o),x(e,t,o)},p:_,d(e){e&&p(t),e&&l.d()}}}function j(a){let l,n,t,e,o=a[5].name+"",s,v,r,b,M;function y(h,c){return h[0].link===h[5].link?W:U}let d=y(a),i=d(a);function L(){return a[4](a[5])}return{c(){l=m("button"),n=m("div"),i.c(),t=B(),e=m("span"),s=F(o),v=B(),this.h()},l(h){l=f(h,"BUTTON",{type:!0,class:!0});var c=g(l);n=f(c,"DIV",{});var z=g(n);i.l(z),z.forEach(p),t=I(c),e=f(c,"SPAN",{class:!0});var C=g(e);s=G(C,o),C.forEach(p),v=I(c),c.forEach(p),this.h()},h(){w(e,"class","text-rem font-semibold tracking-wide svelte-3z2k2c"),w(l,"type","button"),w(l,"class",r="flex flex-col items-center justify-center "+(a[0].link===a[5].link?"text-primary-500":"text-gray-500"))},m(h,c){x(h,l,c),u(l,n),i.m(n,null),u(l,t),u(l,e),u(e,s),u(l,v),b||(M=O(l,"click",L),b=!0)},p(h,c){a=h,d===(d=y(a))&&i?i.p(a,c):(i.d(1),i=d(a),i&&(i.c(),i.m(n,null))),c&1&&r!==(r="flex flex-col items-center justify-center "+(a[0].link===a[5].link?"text-primary-500":"text-gray-500"))&&w(l,"class",r)},d(h){h&&p(l),i.d(),b=!1,M()}}}function J(a){let l,n=a[1],t=[];for(let e=0;e<n.length;e+=1)t[e]=j(A(a,n,e));return{c(){l=m("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){l=f(e,"DIV",{class:!0,style:!0});var o=g(l);for(let s=0;s<t.length;s+=1)t[s].l(o);o.forEach(p),this.h()},h(){w(l,"class","fixed inset-x-0 bottom-0 z-50 flex h-14 w-full items-center justify-between gap-2 bg-white px-4"),T(l,"box-shadow","0px -4px 10px rgba(50, 50, 50, 0.2)")},m(e,o){x(e,l,o);for(let s=0;s<t.length;s+=1)t[s].m(l,null)},p(e,[o]){if(o&7){n=e[1];let s;for(s=0;s<n.length;s+=1){const v=A(e,n,s);t[s]?t[s].p(v,o):(t[s]=j(v),t[s].c(),t[s].m(l,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:_,o:_,d(e){e&&p(l),q(t,e)}}}function K(a,l,n){let t;D(a,R,r=>n(3,t=r));let e={},o=[{name:"Home",link:"/",icon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				></path>
			</svg>`,activeIcon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
				></path>
			</svg>`},{name:"Categories",link:"/categories",icon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
				></path>
			</svg>`,activeIcon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
				></path>
			</svg>`},{name:"New Arrivals",link:"/new-arrivals",icon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
				></path>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
			</svg>`,activeIcon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
					clip-rule="evenodd"></path>
			</svg>`},{name:"Wishlist",link:"/my/wishlist",icon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				></path>
			</svg>`,activeIcon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
					clip-rule="evenodd"></path>
			</svg>`},{name:"Account",link:"/my",icon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
			</svg>`,activeIcon:`<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
					clip-rule="evenodd"></path>
			</svg>`}];function s(r){P(r.link),n(0,e=r)}const v=r=>s(r);return a.$$.update=()=>{a.$$.dirty&8&&n(0,e.link=t==null?void 0:t.url.pathname,e)},[e,o,s,t,v]}class Z extends E{constructor(l){super(),S(this,l,K,J,N,{})}}export{Z as M};
