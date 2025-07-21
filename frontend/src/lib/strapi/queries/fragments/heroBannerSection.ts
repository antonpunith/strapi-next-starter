const HERO_BANNER_SECTION_FRAGMENT = `
fragment HeroBannerSectionFields on ComponentPageHeroBanner {
  heroTitle : title
  banner {
    ...BannerFields
  }
  speed
  __typename
}
`;

export { HERO_BANNER_SECTION_FRAGMENT };
