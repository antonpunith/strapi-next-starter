// Always import BANNER_FRAGMENT since use ...BannerFields in this fragment
const PAGE_SECTIONS = `
fragment PageSections on PagePageSectionsDynamicZone {
  ... on ComponentPageHeroBanner {
    __typename
    heroTitle : title
    speed
    banner {
      ...BannerFields
    }
  }
  ... on ComponentPageIntroText {
    __typename
    introTitle: title
    ctaText
    ctaLink
    content
  }
  ... on ComponentPageImageOrColorBanner {
    __typename
    colorBannerTitle: title
    background
    ctaLink
    ctaText
    description
  }
}
`;

export { PAGE_SECTIONS };
