import { cookies, draftMode } from "next/headers";

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
export const fetchGraphql = async (query: string, variables?: Record<string, any>) => {
  const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
  try {
    const hasRequest = isRequestAvailable();
    let isPreview = false;
    let isDraftMode = false;
    if (hasRequest) {
      const cookieStore = await cookies();
      isPreview = cookieStore.get("preview")?.value === "true";
      isDraftMode = (await draftMode()).isEnabled;
    }
    const status = isDraftMode ? "DRAFT" : "PUBLISHED";

    const body = JSON.stringify({
      query,
      variables: { ...variables, status },
    });

    const response = await fetch(`${API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
      cache: isPreview ? "no-store" : "force-cache",
      next: { revalidate: isPreview ? 0 : 3600 },
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('GraphQL fetch error:', error);
    return null;
  }
}