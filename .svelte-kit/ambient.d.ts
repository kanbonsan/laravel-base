
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const APP_NAME: string;
	export const APP_ENV: string;
	export const APP_KEY: string;
	export const APP_DEBUG: string;
	export const APP_TIMEZONE: string;
	export const APP_URL: string;
	export const APP_LOCALE: string;
	export const APP_FALLBACK_LOCALE: string;
	export const APP_FAKER_LOCALE: string;
	export const APP_MAINTENANCE_DRIVER: string;
	export const PHP_CLI_SERVER_WORKERS: string;
	export const BCRYPT_ROUNDS: string;
	export const LOG_CHANNEL: string;
	export const LOG_STACK: string;
	export const LOG_DEPRECATIONS_CHANNEL: string;
	export const LOG_LEVEL: string;
	export const DB_CONNECTION: string;
	export const DB_HOST: string;
	export const DB_PORT: string;
	export const DB_DATABASE: string;
	export const DB_USERNAME: string;
	export const DB_PASSWORD: string;
	export const SESSION_DRIVER: string;
	export const SESSION_LIFETIME: string;
	export const SESSION_ENCRYPT: string;
	export const SESSION_PATH: string;
	export const SESSION_DOMAIN: string;
	export const BROADCAST_CONNECTION: string;
	export const FILESYSTEM_DISK: string;
	export const QUEUE_CONNECTION: string;
	export const CACHE_STORE: string;
	export const CACHE_PREFIX: string;
	export const MEMCACHED_HOST: string;
	export const REDIS_CLIENT: string;
	export const REDIS_HOST: string;
	export const REDIS_PASSWORD: string;
	export const REDIS_PORT: string;
	export const MAIL_MAILER: string;
	export const MAIL_HOST: string;
	export const MAIL_PORT: string;
	export const MAIL_USERNAME: string;
	export const MAIL_PASSWORD: string;
	export const MAIL_ENCRYPTION: string;
	export const MAIL_FROM_ADDRESS: string;
	export const MAIL_FROM_NAME: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const AWS_DEFAULT_REGION: string;
	export const AWS_BUCKET: string;
	export const AWS_USE_PATH_STYLE_ENDPOINT: string;
	export const VITE_APP_NAME: string;
	export const SCOUT_DRIVER: string;
	export const MEILISEARCH_HOST: string;
	export const MEILISEARCH_NO_ANALYTICS: string;
	export const SANCTUM_STATEFUL_DOMAINS: string;
	export const npm_config_user_agent: string;
	export const HOSTNAME: string;
	export const npm_node_execpath: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const npm_package_json: string;
	export const XDEBUG_CONFIG: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const COLOR: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const XDEBUG_MODE: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const LARAVEL_SAIL: string;
	export const SUPERVISOR_PHP_COMMAND: string;
	export const NODE: string;
	export const WWWUSER: string;
	export const SUPERVISOR_PHP_USER: string;
	export const npm_lifecycle_script: string;
	export const DEBIAN_FRONTEND: string;
	export const npm_lifecycle_event: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const npm_execpath: string;
	export const PWD: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const TZ: string;
	export const IGNITION_LOCAL_SITES_PATH: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_GOOGLE_MAPS: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		APP_NAME: string;
		APP_ENV: string;
		APP_KEY: string;
		APP_DEBUG: string;
		APP_TIMEZONE: string;
		APP_URL: string;
		APP_LOCALE: string;
		APP_FALLBACK_LOCALE: string;
		APP_FAKER_LOCALE: string;
		APP_MAINTENANCE_DRIVER: string;
		PHP_CLI_SERVER_WORKERS: string;
		BCRYPT_ROUNDS: string;
		LOG_CHANNEL: string;
		LOG_STACK: string;
		LOG_DEPRECATIONS_CHANNEL: string;
		LOG_LEVEL: string;
		DB_CONNECTION: string;
		DB_HOST: string;
		DB_PORT: string;
		DB_DATABASE: string;
		DB_USERNAME: string;
		DB_PASSWORD: string;
		SESSION_DRIVER: string;
		SESSION_LIFETIME: string;
		SESSION_ENCRYPT: string;
		SESSION_PATH: string;
		SESSION_DOMAIN: string;
		BROADCAST_CONNECTION: string;
		FILESYSTEM_DISK: string;
		QUEUE_CONNECTION: string;
		CACHE_STORE: string;
		CACHE_PREFIX: string;
		MEMCACHED_HOST: string;
		REDIS_CLIENT: string;
		REDIS_HOST: string;
		REDIS_PASSWORD: string;
		REDIS_PORT: string;
		MAIL_MAILER: string;
		MAIL_HOST: string;
		MAIL_PORT: string;
		MAIL_USERNAME: string;
		MAIL_PASSWORD: string;
		MAIL_ENCRYPTION: string;
		MAIL_FROM_ADDRESS: string;
		MAIL_FROM_NAME: string;
		AWS_ACCESS_KEY_ID: string;
		AWS_SECRET_ACCESS_KEY: string;
		AWS_DEFAULT_REGION: string;
		AWS_BUCKET: string;
		AWS_USE_PATH_STYLE_ENDPOINT: string;
		VITE_APP_NAME: string;
		SCOUT_DRIVER: string;
		MEILISEARCH_HOST: string;
		MEILISEARCH_NO_ANALYTICS: string;
		SANCTUM_STATEFUL_DOMAINS: string;
		npm_config_user_agent: string;
		HOSTNAME: string;
		npm_node_execpath: string;
		npm_config_noproxy: string;
		HOME: string;
		npm_package_json: string;
		XDEBUG_CONFIG: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		COLOR: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		TERM: string;
		npm_config_cache: string;
		XDEBUG_MODE: string;
		npm_config_node_gyp: string;
		PATH: string;
		LARAVEL_SAIL: string;
		SUPERVISOR_PHP_COMMAND: string;
		NODE: string;
		WWWUSER: string;
		SUPERVISOR_PHP_USER: string;
		npm_lifecycle_script: string;
		DEBIAN_FRONTEND: string;
		npm_lifecycle_event: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		npm_execpath: string;
		PWD: string;
		npm_config_global_prefix: string;
		npm_command: string;
		TZ: string;
		IGNITION_LOCAL_SITES_PATH: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_GOOGLE_MAPS: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
