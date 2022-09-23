import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureParentData<T> = T extends null | undefined ? {} : T;
type PageParentData = Omit<EnsureParentData<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureParentData<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(app)/new-arrivals/+page.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(app)/new-arrivals/+page.js').load>>>>;