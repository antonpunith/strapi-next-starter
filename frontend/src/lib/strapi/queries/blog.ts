import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";

const GET_BLOG_ARTICLES = `
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
  articles {
    slug
    title
  }
}
${PAGE_SECTIONS}
${SEO_FRAGMENT}
`;

export { GET_BLOG_ARTICLES };
