import { PAGE_SECTIONS } from "./fragments/pageSections";
import { SEO_FRAGMENT } from "./fragments/seo";
import { BANNER_FRAGMENT } from "./fragments/banner";

const GET_HOME = `
query ($status: PublicationStatus) {
  homePage(status: $status) {
    title
    heroBanner {
      title
      banner {
        ...BannerFields
      }
      speed
    }
    pageSections {
      ...PageSections
    }
    seo {
      ...SeoFields
    }
  }
}
${PAGE_SECTIONS}
${BANNER_FRAGMENT}
${SEO_FRAGMENT}
`;

export { GET_HOME };
