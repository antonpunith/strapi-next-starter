import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";

const GET_PAGE_BY_SLUG = `
query ($slug: String, $status: PublicationStatus) {
  pages(filters: { slug: {eq: $slug}}, status: $status) {
      slug
      title
      pageSections {
        ...PageSections
      }
      seo {
        ...SeoFields
      }
  }
}
${PAGE_SECTIONS}
${SEO_FRAGMENT}
`;

export { GET_PAGE_BY_SLUG };
