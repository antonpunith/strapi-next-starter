import { SEO_FRAGMENT } from "./fragments/seo";

const GET_GLOBAL = `
query ($status: PublicationStatus) {
  global(status: $status) {
    footer {
      footerNavigation {
        id
        slug
        title
      }
      id
    }
    header {
      headerNavigation {
        id
        slug
        title
      }
    }
    title
    defaultSeo {
      ...SeoFields
    }
  }
}
${SEO_FRAGMENT}
`;

const GET_GLOBAL_SEO = `
query ($status: PublicationStatus) {
  global(status: $status) {
    title
    defaultSeo {
      ...SeoFields
    }
  }
}
${SEO_FRAGMENT}
`;

export { GET_GLOBAL, GET_GLOBAL_SEO };
