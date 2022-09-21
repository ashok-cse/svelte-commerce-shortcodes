import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-a9f780cc.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-a9f780cc.js","_app/immutable/chunks/index-98fbb2d4.js","_app/immutable/chunks/GoogleAnalytics-784ffa25.js","_app/immutable/chunks/index-7636af81.js","_app/immutable/chunks/toasts-d97c2a31.js","_app/immutable/chunks/index-7c2e2153.js","_app/immutable/chunks/index-4320d0cf.js","_app/immutable/chunks/stores-73d8742c.js","_app/immutable/chunks/singletons-edd21494.js","_app/immutable/chunks/PreloadingIndicator-865eb969.js","_app/immutable/chunks/BackToTop-70121a6a.js"];
export const stylesheets = ["_app/immutable/assets/_layout-38c4faee.css","_app/immutable/assets/FlatToast-4da694a0.css","_app/immutable/assets/PageTransitions-bc777b27.css","_app/immutable/assets/PreloadingIndicator-6be07759.css","_app/immutable/assets/BackToTop-21db51f6.css"];
