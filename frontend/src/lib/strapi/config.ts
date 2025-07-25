export const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
export const MEDIA_URL = API_URL;
export const GRAPHQL_ENDPOINT = `${API_URL}/graphql`;
export const ADMIN_URL = `${API_URL}/admin`;
export const DEFAULT_CACHE_TIME = 3600;
export const STATUS_DRAFT = "DRAFT";
export const STATUS_PUBLISHED = "PUBLISHED";
export const GRAPHQL_TOKEN = process.env.STRAPI_AUTH_TOKEN;
