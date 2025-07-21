import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";
import { BANNER_FRAGMENT } from "./fragments/banner";
import { HERO_BANNER_SECTION_FRAGMENT } from "./fragments/heroBannerSection";
import { INTRO_TEXT_SECTION_FRAGMENT } from "./fragments/introTextSection";

const GET_HOME = `
query ($status: PublicationStatus) {
  homePage(status: $status) {
    title
    heroBanner {
      ...HeroBannerSectionFields
    }
    intro {
      ...IntroTextSectionFields
    }
    pageSections {
      ...PageSections
    }
    seo {
      ...SeoFields
    }
  }
}
${INTRO_TEXT_SECTION_FRAGMENT}
${HERO_BANNER_SECTION_FRAGMENT}
${PAGE_SECTIONS}
${BANNER_FRAGMENT}
${SEO_FRAGMENT}
`;

export { GET_HOME };
