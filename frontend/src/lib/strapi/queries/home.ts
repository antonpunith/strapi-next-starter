import { PAGE_SECTIONS } from './fragments/pageSections';

const GET_HOME = `
query ($status: PublicationStatus) {
  homePage(status: $status) {
    title
    ${PAGE_SECTIONS}
  }
}
`;

export { GET_HOME };
