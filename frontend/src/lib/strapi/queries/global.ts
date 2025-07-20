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
      metaDescription
      metaTitle
      shareImage {
        url
        alternativeText
      }
    }
  }
}
`;

export { GET_GLOBAL };
