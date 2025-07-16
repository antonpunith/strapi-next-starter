import qs from "qs";
import { cookies, draftMode } from "next/headers";

type PopulateOption =
  | string
  | string[]
  | {[key: string]: | PopulateOption | {on: {[component: string]: PopulateOption;};};};

export async function fetchFromStrapi<T>(
  slug: string,
  populate: PopulateOption = "*"
): Promise<T> {
  try {
    const { isEnabled: isDraftMode } = await draftMode();
    const cookieStore = await cookies();
    const isPreview = cookieStore.get("preview")?.value === "true";
  

    const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

    let endpoint = "";
    let useDocumentId = true;

    const status = isDraftMode ? "draft" : "published";
    let query = qs.stringify({ status });

    switch (slug) {
      case "home-page":
      case "blog":
        endpoint = `${API_URL}/api/${slug}`;
        query = qs.stringify({ populate, status });
        useDocumentId = false;
        break;
      case "global":
        endpoint = `${API_URL}/api/global`;
        query = qs.stringify({
          status,
          populate,
        });
        useDocumentId = false;
        break;
      default:
        const idQuery = qs.stringify({
          filters: { slug: { $eq: slug } },
          status,
        });
        endpoint = `${API_URL}/api/pages?${idQuery}`;
        useDocumentId = true;
        break;
    }

    let fullData;
    if (!useDocumentId) {
      // only for pages
      const res = await fetch(`${endpoint}?${query}`, {
        cache: isPreview ? "no-store" : "force-cache",
        next: { revalidate: isPreview ? 0 : 3600 },
      });
      fullData = await res.json();
      if (!res.ok)
        throw new Error(
          `Failed to fetch ${slug} ${endpoint} : ${res.statusText}`
        );
      return fullData.data;
    } else {
      const res = await fetch(`${endpoint}?${query}`, {
        cache: isPreview ? "no-store" : "force-cache",
        next: { revalidate: isPreview ? 0 : 3600 },
      });
      const json = await res.json();
      const documentId = json.data?.[0]?.documentId;
      const deepQuery = qs.stringify({ populate, status });
      const deepRes = await fetch(
        `${API_URL}/api/pages/${documentId}?${deepQuery}`,
        {
          cache: isPreview ? "no-store" : "force-cache",
          next: { revalidate: isPreview ? 0 : 3600 },
        }
      );
      fullData = await deepRes.json();
      if (!res.ok)
        throw new Error(
          `Failed to fetch ${slug} ${endpoint} : ${res.statusText}`
        );
      return fullData.data;
    }
  } catch (error) {
    console.error(`Error fetching content for ${slug}:`, error);
    return null as unknown as T; // Return null or handle error appropriately
  }
}
