const PAGE_SECTIONS = `
pageSections {
  ... on ComponentPageHeroBanner {
    __typename
    heroTitle : title
    speed
    banner {
        ctaLink
        ctaText
        description
        title
        desktopImage {
        url
        alternativeText
        }
        mobileImage {
        url
        alternativeText
        }
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
