import qs from "qs";
import { cookies, draftMode } from "next/headers";

export async function fetchFromStrapi<T>(
  slug: string,
): Promise<T> {
  try {
    const { isEnabled: isDraftMode } = await draftMode();

    const cookieStore = await cookies();
    const isPreview = cookieStore.get("preview")?.value === "true";

    const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

    const query = qs.stringify({
      filters: {
        slug: {
          $eq: slug,
        },
      },
      status: isDraftMode ? "draft" : "published",
    });

    // TODO evaluate slug pattern

    const res = await fetch(`${API_URL}/api/pages?${query}`, {
      cache: isPreview ? "no-store" : "force-cache",
      next: { revalidate: isPreview ? 0 : 3600 },
    });

    if (!res.ok)
      throw new Error(
        `Failed to fetch ${slug} ${API_URL}/api/pages?${query} : ${res.statusText}`
      );
    return res.json();

  } catch (error) {
    console.error(`Error fetching content for ${slug}:`, error);
    return null as unknown as T; // Return null or handle error appropriately
  }






}
