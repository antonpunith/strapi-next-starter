import qs from "qs";

export async function fetchFromStrapi<T>(
  endpoint: string,
  isPreview: boolean = false
): Promise<T> {
  const query = qs.stringify({
    publicationState: isPreview ? "preview" : "live",
    populate: "deep",
  });

  const res = await fetch(`${process.env.STRAPI_API_URL}${endpoint}?${query}`, {
    cache: isPreview ? "no-store" : "force-cache",
    next: { revalidate: isPreview ? 0 : 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}
