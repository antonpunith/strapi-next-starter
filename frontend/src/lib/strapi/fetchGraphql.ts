import { cookies, draftMode } from "next/headers";
import {
  GRAPHQL_ENDPOINT,
  GRAPHQL_TOKEN,
  STATUS_DRAFT,
  STATUS_PUBLISHED,
  DEFAULT_CACHE_TIME,
} from "./config";

export function isRequestAvailable(): boolean {
  try {
    // Throws during build time if no request context
    draftMode();
    cookies();
    return true;
  } catch {
    return false;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchGraphql = async (
  query: string,
  variables?: Record<string, unknown>
) => {
  try {
    const hasRequest = isRequestAvailable();
    let isPreview = false;
    let isDraftMode = false;
    if (hasRequest) {
      const cookieStore = await cookies();
      isPreview = cookieStore.get("preview")?.value === "true";
      isDraftMode = (await draftMode()).isEnabled;
    }
    const status = isDraftMode ? STATUS_DRAFT : STATUS_PUBLISHED;

    const body = JSON.stringify({
      query,
      variables: { ...variables, status },
    });

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (GRAPHQL_TOKEN) {
      headers["Authorization"] = `Bearer ${GRAPHQL_TOKEN}`;
    }
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers,
      body,
      cache: isPreview ? "no-store" : "force-cache",
      next: { revalidate: isPreview ? 0 : DEFAULT_CACHE_TIME },
    });

    if (!response.ok) {
      throw new Error(
        `GraphQL request failed with status ${response.status} ${JSON.stringify(
          { query, variables }
        )}`
      );
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return null;
  }
};
