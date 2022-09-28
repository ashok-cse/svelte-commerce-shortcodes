export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41')];

			export const server_loads = [0];

			export const dictionary = {
	"(marketing)/about-us": [7,[2]],
	"(marketing)/contact-us": [8,[2]],
	"(marketing)/faqs": [9,[2]],
	"app": [~14,[3]],
	"shortcodes": [40],
	"tests": [41],
	"(marketing)/p/payments-returns": [10,[2]],
	"(marketing)/p/printing-terms-cancellation-policy": [11,[2]],
	"(marketing)/p/privacy-policy": [12,[2]],
	"(marketing)/p/terms-conditions": [13,[2]],
	"app/autosuggest": [17,[5]],
	"app/bulk-order-inquiry": [18,[3]],
	"app/cart": [~19,[3]],
	"app/categories": [20,[3]],
	"app/my": [~25,[3,6]],
	"app/new-arrivals": [34,[3]],
	"app/search": [~38,[3]],
	"app/auth/otp-login": [16,[4]],
	"app/checkout/add-address": [~22,[3]],
	"app/checkout/address": [~23,[3]],
	"app/checkout/payment-options": [~24,[3]],
	"app/my/addresses": [~26,[3,6]],
	"app/my/orders": [~28,[3,6]],
	"app/my/profile": [~30,[3,6]],
	"app/my/reviews": [~31,[3,6]],
	"app/my/wishlist": [~33,[3,6]],
	"app/payment/failure": [35,[3]],
	"app/payment/success": [~36,[3]],
	"app/my/orders/details": [~29,[3,6]],
	"app/my/reviews/create": [32,[3,6]],
	"app/my/addresses/[id]": [~27,[3,6]],
	"app/category/[slug]": [~21,[3]],
	"app/product/[slug]": [~37,[3]],
	"app/shop/[slug]": [~39,[3]],
	"app/[slug]": [~15,[3]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error); return { message: 'Internal Error' }; }),
			};