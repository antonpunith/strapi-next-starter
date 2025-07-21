// Always import BANNER_FRAGMENT if you use ...BannerFields in your query
const BANNER_FRAGMENT = `
fragment BannerFields on ComponentBaseBanner {
  id
  title
  description
  desktopImage {
    url
    alternativeText
  }
  mobileImage {
    url
    alternativeText
  }
  ctaText
  ctaLink
}
`;

export { BANNER_FRAGMENT };
