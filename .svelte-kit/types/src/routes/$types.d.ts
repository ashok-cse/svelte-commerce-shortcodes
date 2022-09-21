import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureParentData<T> = T extends null | undefined ? {} : T;
type LayoutParams = RouteParams & { slug?: string,id?: string }
type LayoutServerParentData = EnsureParentData<{}>;
type LayoutParentData = EnsureParentData<{}>;

export type LayoutServerLoad<OutputData extends OutputDataShape<LayoutServerParentData> = OutputDataShape<LayoutServerParentData>> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Expand<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.server.js').load>>>>;
export type LayoutData = Expand<Omit<LayoutParentData, keyof LayoutServerData> & LayoutServerData>;