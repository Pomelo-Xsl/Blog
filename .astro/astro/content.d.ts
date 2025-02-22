declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2024-11-12(FishVim技能篇).md": {
	id: "2024-11-12(FishVim技能篇).md";
  slug: "2024-11-12fishvim技能篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-12(学习篇).md": {
	id: "2024-11-12(学习篇).md";
  slug: "2024-11-12学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-12(工作篇).md": {
	id: "2024-11-12(工作篇).md";
  slug: "2024-11-12工作篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-12(生活篇).md": {
	id: "2024-11-12(生活篇).md";
  slug: "2024-11-12生活篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-12（健身篇）.md": {
	id: "2024-11-12（健身篇）.md";
  slug: "2024-11-12健身篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-13(部署blog学习篇).md": {
	id: "2024-11-13(部署blog学习篇).md";
  slug: "2024-11-13部署blog学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-16(学习篇).md": {
	id: "2024-11-16(学习篇).md";
  slug: "2024-11-16学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-18(学习篇).md": {
	id: "2024-11-18(学习篇).md";
  slug: "2024-11-18学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-19（学习篇）.md": {
	id: "2024-11-19（学习篇）.md";
  slug: "2024-11-19学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-21(学习篇).md": {
	id: "2024-11-21(学习篇).md";
  slug: "2024-11-21学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-22(Mysql学习篇).md": {
	id: "2024-11-22(Mysql学习篇).md";
  slug: "2024-11-22mysql学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-22(Python学习篇).md": {
	id: "2024-11-22(Python学习篇).md";
  slug: "2024-11-22python学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-22(学习篇).md": {
	id: "2024-11-22(学习篇).md";
  slug: "2024-11-22学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-22(整理旧知识学习篇).md": {
	id: "2024-11-22(整理旧知识学习篇).md";
  slug: "2024-11-22整理旧知识学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-23(Js学习篇).md": {
	id: "2024-11-23(Js学习篇).md";
  slug: "2024-11-23js学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-24(测试前置基础知识总结).md": {
	id: "2024-11-24(测试前置基础知识总结).md";
  slug: "2024-11-24测试前置基础知识总结";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-24(混淆知识卷王版).md": {
	id: "2024-11-24(混淆知识卷王版).md";
  slug: "2024-11-24混淆知识卷王版";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-24(给IP配置Https学习篇).md": {
	id: "2024-11-24(给IP配置Https学习篇).md";
  slug: "2024-11-24给ip配置https学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-27(简易web服务器).md": {
	id: "2024-11-27(简易web服务器).md";
  slug: "2024-11-27简易web服务器";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-28（使用docker部署python容器）.md": {
	id: "2024-11-28（使用docker部署python容器）.md";
  slug: "2024-11-28使用docker部署python容器";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-29(进程-线程-协程).md": {
	id: "2024-11-29(进程-线程-协程).md";
  slug: "2024-11-29进程-线程-协程";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-11-29（nvim安装和配置）.md": {
	id: "2024-11-29（nvim安装和配置）.md";
  slug: "2024-11-29nvim安装和配置";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-01(遗留的配置ip和域名的https问题).md": {
	id: "2024-12-01(遗留的配置ip和域名的https问题).md";
  slug: "2024-12-01遗留的配置ip和域名的https问题";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-07（英语学习篇）.md": {
	id: "2024-12-07（英语学习篇）.md";
  slug: "2024-12-07英语学习篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-08（健身计划书).md": {
	id: "2024-12-08（健身计划书).md";
  slug: "2024-12-08健身计划书";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-11(MyKepMap安装).md": {
	id: "2024-12-11(MyKepMap安装).md";
  slug: "2024-12-11mykepmap安装";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-17（自学python篇）.md": {
	id: "2024-12-17（自学python篇）.md";
  slug: "2024-12-17自学python篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-20(自学Python篇).md": {
	id: "2024-12-20(自学Python篇).md";
  slug: "2024-12-20自学python篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-21(自学Python篇).md": {
	id: "2024-12-21(自学Python篇).md";
  slug: "2024-12-21自学python篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-21（控制台贪吃蛇）.md": {
	id: "2024-12-21（控制台贪吃蛇）.md";
  slug: "2024-12-21控制台贪吃蛇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-12-30(Python解释器).md": {
	id: "2024-12-30(Python解释器).md";
  slug: "2024-12-30python解释器";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2025-01-04(Python从入门到实践pdf).md": {
	id: "2025-01-04(Python从入门到实践pdf).md";
  slug: "2025-01-04python从入门到实践pdf";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2025-1-10(自写Python解释器).md": {
	id: "2025-1-10(自写Python解释器).md";
  slug: "2025-1-10自写python解释器";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"个人简历.mdx": {
	id: "个人简历.mdx";
  slug: "个人简历";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"登录框.mdx": {
	id: "登录框.mdx";
  slug: "登录框";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
