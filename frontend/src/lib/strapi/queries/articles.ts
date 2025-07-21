import { BANNER_FRAGMENT } from "./fragments/banner";
import { HERO_BANNER_SECTION_FRAGMENT } from "./fragments/heroBannerSection";
import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";

const GET_ARTICLES_BY_SLUG = `
query ($slug: String, $status: PublicationStatus) {
  articles(filters: { slug: {eq: $slug}}, status: $status) {
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
${HERO_BANNER_SECTION_FRAGMENT}
${PAGE_SECTIONS}
${BANNER_FRAGMENT}
${SEO_FRAGMENT}
`;

export { GET_ARTICLES_BY_SLUG };
