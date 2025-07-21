import { BANNER_FRAGMENT } from "./fragments/banner";
import { HERO_BANNER_SECTION_FRAGMENT } from "./fragments/heroBannerSection";
import { INTRO_TEXT_SECTION_FRAGMENT } from "./fragments/introTextSection";
import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";

const GET_PAGE_BY_SLUG = `
query ($slug: String, $status: PublicationStatus) {
  pages(filters: { slug: {eq: $slug}}, status: $status) {
    slug
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
${BANNER_FRAGMENT}
${HERO_BANNER_SECTION_FRAGMENT}
${INTRO_TEXT_SECTION_FRAGMENT}
${PAGE_SECTIONS}
${SEO_FRAGMENT}
`;

export { GET_PAGE_BY_SLUG };
