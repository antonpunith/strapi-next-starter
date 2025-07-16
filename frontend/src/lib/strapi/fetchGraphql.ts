
// TODO preivew and draft mode

export const filterBySlug = (slug: string) => {
  return {
    filters: {
      slug: {
        eq: slug,
      },
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchGraphql = async (query: string, variables?: Record<string, any>) => {
  const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

  const response = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed with status ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}