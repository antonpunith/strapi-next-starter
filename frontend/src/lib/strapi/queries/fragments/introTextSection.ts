const INTRO_TEXT_SECTION_FRAGMENT = `
fragment IntroTextSectionFields on ComponentPageIntroText {
  id
  introTitle: title
  content
  ctaText
  ctaLink
  __typename
}
`;

export { INTRO_TEXT_SECTION_FRAGMENT };
