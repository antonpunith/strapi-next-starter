import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";
import { BANNER_FRAGMENT } from "./fragments/banner";
import { HERO_BANNER_SECTION_FRAGMENT } from "./fragments/heroBannerSection";

const GET_HOME = `
query ($status: PublicationStatus) {
  homePage(status: $status) {
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
}
${HERO_BANNER_SECTION_FRAGMENT}
${PAGE_SECTIONS}
${BANNER_FRAGMENT}
${SEO_FRAGMENT}
`;

export { GET_HOME };
