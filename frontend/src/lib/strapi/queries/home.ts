import { PAGE_SECTIONS } from './fragments/pageSections';

const GET_HOME = `
query GetHome {
  homePage {
    title
    ${PAGE_SECTIONS}
  }
}
`;

export { GET_HOME };
