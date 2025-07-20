const SEO_FRAGMENT = `
fragment SeoFields on ComponentBaseSeo {
  metaDescription
  metaTitle
  shareImage {
    url
    alternativeText
  }
}
`;

export { SEO_FRAGMENT };
