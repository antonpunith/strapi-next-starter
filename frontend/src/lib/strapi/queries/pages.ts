import { PAGE_SECTIONS } from "./fragments/pageSections";

const GET_PAGE_BY_SLUG = `
query ($slug: String) {
  pages(filters: { slug: {eq: $slug}}) {
      slug
      title
      ${PAGE_SECTIONS}
  }
}
`;

export { GET_PAGE_BY_SLUG };
