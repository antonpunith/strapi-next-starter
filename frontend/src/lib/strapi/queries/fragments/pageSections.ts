const PAGE_SECTIONS = `
pageSections {
  ... on ComponentDynamicHeroBanner {
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
  ... on ComponentDynamicIntroText {
    __typename
    introTitle: title
    ctaText
    ctaLink
    content
  }
  ... on ComponentDynamicImageOrColorBanner {
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
