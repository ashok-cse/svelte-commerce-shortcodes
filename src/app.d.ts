/// <reference types="@sveltejs/adapter-cloudflare" />

declare namespace App {
	interface platform {
		env?: {
						YOUR_KV_NAMESPACE: string;
						YOUR_DURABLE_OBJECT_NAMESPACE: string;
					};
}
}

