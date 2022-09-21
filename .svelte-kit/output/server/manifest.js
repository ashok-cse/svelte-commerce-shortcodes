export const manifest = {
	appDir: "_app",
	assets: new Set(["about-us/design-2.png","about-us/design.png","about-us/phone.jpg","about-us/product.png","about-us/profile-1.jpg","about-us/profile-2.jpg","about-us/profile-3.jpg","about-us/profile-4.jpg","about-us/team.png","app/app-store.svg","app/google-play.png","dashboard/my-orders.png","dashboard/profile.png","dashboard/reviews.png","dashboard/wishlist.png","dots-loading.gif","error/404.svg","error/add-to-cart-animate.svg","error/closed-sign-animate.svg","error/demo-request.svg","error/dog.png","error/empty-animate.svg","error/online-review-animate.svg","error/search.svg","favicon.ico","fonts/karla-v23-latin-200.eot","fonts/karla-v23-latin-200.svg","fonts/karla-v23-latin-200.ttf","fonts/karla-v23-latin-200.woff","fonts/karla-v23-latin-200.woff2","fonts/karla-v23-latin-300.eot","fonts/karla-v23-latin-300.svg","fonts/karla-v23-latin-300.ttf","fonts/karla-v23-latin-300.woff","fonts/karla-v23-latin-300.woff2","fonts/karla-v23-latin-500.eot","fonts/karla-v23-latin-500.svg","fonts/karla-v23-latin-500.ttf","fonts/karla-v23-latin-500.woff","fonts/karla-v23-latin-500.woff2","fonts/karla-v23-latin-600.eot","fonts/karla-v23-latin-600.svg","fonts/karla-v23-latin-600.ttf","fonts/karla-v23-latin-600.woff","fonts/karla-v23-latin-600.woff2","fonts/karla-v23-latin-700.eot","fonts/karla-v23-latin-700.svg","fonts/karla-v23-latin-700.ttf","fonts/karla-v23-latin-700.woff","fonts/karla-v23-latin-700.woff2","fonts/karla-v23-latin-800.eot","fonts/karla-v23-latin-800.svg","fonts/karla-v23-latin-800.ttf","fonts/karla-v23-latin-800.woff","fonts/karla-v23-latin-800.woff2","fonts/karla-v23-latin-regular.eot","fonts/karla-v23-latin-regular.svg","fonts/karla-v23-latin-regular.ttf","fonts/karla-v23-latin-regular.woff","fonts/karla-v23-latin-regular.woff2","gray-dot.png","icon.png","icons/icon-120x120.png","icons/icon-128x128.png","icons/icon-144x144.png","icons/icon-152x152.png","icons/icon-180x180.png","icons/icon-192x192.png","icons/icon-256x256.png","icons/icon-384x384.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","login/bg-lighter.svg","logo.png","manifest.json","no/add-to-cart-animate.svg","no/cancle.png","no/empty-address.svg","no/empty-wishlist.svg","no/no-data-availible.png","product/cod.png","product/delivery.png","product/opposite-arrows.png","profile.png","razorpay-icon.jpg","razorpay-logo-white.svg","robots.txt","user-empty-profile.png","service-worker.js"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".gif":"image/gif",".ico":"image/vnd.microsoft.icon",".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".json":"application/json",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-94e3df22.js","imports":["_app/immutable/start-94e3df22.js","_app/immutable/chunks/index-98fbb2d4.js","_app/immutable/chunks/singletons-edd21494.js","_app/immutable/chunks/index-7c2e2153.js","_app/immutable/chunks/control-a6874251.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js')
		],
		routes: [
			{
				id: "(app)",
				pattern: /^\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "rss.xml",
				pattern: /^\/rss\.xml$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/rss.xml/_server.js')
			},
			{
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/sitemap.xml/_server.js')
			},
			{
				id: "(app)/autosuggest",
				pattern: /^\/autosuggest\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "(app)/bulk-order-inquiry",
				pattern: /^\/bulk-order-inquiry\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "(app)/cart",
				pattern: /^\/cart\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "(app)/categories",
				pattern: /^\/categories\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "(app)/my",
				pattern: /^\/my\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "(app)/new-arrivals",
				pattern: /^\/new-arrivals\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "(app)/search",
				pattern: /^\/search\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "(marketing)/about-us",
				pattern: /^\/about-us\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "(marketing)/contact-us",
				pattern: /^\/contact-us\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "(marketing)/faqs",
				pattern: /^\/faqs\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "shortcodes",
				pattern: /^\/shortcodes\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 40 },
				endpoint: null
			},
			{
				id: "tests",
				pattern: /^\/tests\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 41 },
				endpoint: null
			},
			{
				id: "(app)/auth/otp-login",
				pattern: /^\/auth\/otp-login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "(app)/checkout/add-address",
				pattern: /^\/checkout\/add-address\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "(app)/checkout/address",
				pattern: /^\/checkout\/address\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "(app)/checkout/payment-options",
				pattern: /^\/checkout\/payment-options\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "(app)/my/addresses",
				pattern: /^\/my\/addresses\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "(app)/my/orders",
				pattern: /^\/my\/orders\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "(app)/my/profile",
				pattern: /^\/my\/profile\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "(app)/my/reviews",
				pattern: /^\/my\/reviews\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "(app)/my/wishlist",
				pattern: /^\/my\/wishlist\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "(app)/payment/failure",
				pattern: /^\/payment\/failure\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "(app)/payment/success",
				pattern: /^\/payment\/success\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "(marketing)/p/payments-returns",
				pattern: /^\/p\/payments-returns\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "(marketing)/p/printing-terms-cancellation-policy",
				pattern: /^\/p\/printing-terms-cancellation-policy\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "(marketing)/p/privacy-policy",
				pattern: /^\/p\/privacy-policy\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "(marketing)/p/terms-conditions",
				pattern: /^\/p\/terms-conditions\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "(app)/my/orders/details",
				pattern: /^\/my\/orders\/details\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "(app)/my/reviews/create",
				pattern: /^\/my\/reviews\/create\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "(app)/my/addresses/[id]",
				pattern: /^\/my\/addresses\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0,2,5], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "(app)/category/[slug]",
				pattern: /^\/category\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "(app)/product/[slug]",
				pattern: /^\/product\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "(app)/shop/[slug]",
				pattern: /^\/shop\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "(app)/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
