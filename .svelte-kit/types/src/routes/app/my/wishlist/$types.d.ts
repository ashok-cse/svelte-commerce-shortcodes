import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureParentData<T> = T extends null | undefined ? {} : T;
type PageServerParentData = Omit<Omit<EnsureParentData<import('../../../$types.js').LayoutServerData>, keyof import('../../$types.js').LayoutServerData> & EnsureParentData<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureParentData<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<Omit<EnsureParentData<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureParentData<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureParentData<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = Expand<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../../../src/routes/app/my/wishlist/+page.server.js').load>>>>;
export type PageData = Expand<Omit<PageParentData, keyof PageServerData> & PageServerData>;
export type Action = Kit.Action<RouteParams>
export type Actions = Kit.Actions<RouteParams>
export type RequestEvent = Kit.RequestEvent<RouteParams>;