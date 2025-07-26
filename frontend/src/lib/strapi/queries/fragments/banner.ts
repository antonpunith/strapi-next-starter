// Always import BANNER_FRAGMENT if you use ...BannerFields in your query
const BANNER_FRAGMENT = `
fragment BannerFields on ComponentBaseBanner {
  id
  title
  description
  mobileImage {
    url
    alternativeText
    width
    height
  }
  desktopImage {
    url
    alternativeText
    width
    height
  }
  ctaText
  ctaLink
}
`;

export { BANNER_FRAGMENT };
