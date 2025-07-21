import { BANNER_FRAGMENT } from "./fragments/banner";
import { HERO_BANNER_SECTION_FRAGMENT } from "./fragments/heroBannerSection";
import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";

const GET_BLOG_ARTICLES = `
query ($status: PublicationStatus) {
  blog(status: $status) {
    title
    heroBanner {
      ...HeroBannerSectionFields
    }
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
${HERO_BANNER_SECTION_FRAGMENT}
${PAGE_SECTIONS}
${BANNER_FRAGMENT}
${SEO_FRAGMENT}
`;

export { GET_BLOG_ARTICLES };
