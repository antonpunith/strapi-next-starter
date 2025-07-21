// Always import BANNER_FRAGMENT since use ...BannerFields in this fragment
const PAGE_SECTIONS = `
fragment PageSections on PagePageSectionsDynamicZone {
  ... on ComponentPageHeroBanner {
    ...HeroBannerSectionFields
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
