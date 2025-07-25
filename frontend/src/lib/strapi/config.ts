const environment = process.env.NODE_ENV;

const ENV_CONFIG = {
  development: {
    apiUrl: process.env.STRAPI_API_URL_DEV,
    graphqlToken: process.env.STRAPI_AUTH_TOKEN_DEV,
  },
  test: {
    apiUrl: process.env.STRAPI_API_URL_TEST,
    graphqlToken: process.env.STRAPI_AUTH_TOKEN_TEST,
  },
  production: {
    apiUrl: process.env.STRAPI_API_URL,
    graphqlToken: process.env.STRAPI_AUTH_TOKEN,
  },
};

export const API_URL =
  ENV_CONFIG[environment]?.apiUrl || "http://localhost:1337";
export const GRAPHQL_TOKEN = ENV_CONFIG[environment]?.graphqlToken;

export const MEDIA_URL = API_URL;
export const GRAPHQL_ENDPOINT = `${API_URL}/graphql`;
export const ADMIN_URL = `${API_URL}/admin`;
export const DEFAULT_CACHE_TIME = 3600;
export const STATUS_DRAFT = "DRAFT";
export const STATUS_PUBLISHED = "PUBLISHED";
