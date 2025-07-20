// lib/graphql.ts
import { cache } from "react";
import { fetchGraphql } from "@/lib/strapi/fetchGraphql";

// Universal GraphQL fetcher with per-request cache
export const getGraphqlData = cache(
  async (query: string, variables: Record<string, unknown> = {}) => {
    const response = await fetchGraphql(query, variables);
    return response;
  }
);
