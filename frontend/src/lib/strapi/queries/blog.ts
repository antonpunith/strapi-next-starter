import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";

const GET_BLOG = `
query ($status: PublicationStatus) {
  blog(status: $status) {
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

export { GET_BLOG };
