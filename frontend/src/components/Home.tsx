'use client';
import { gql, useQuery } from '@apollo/client';
import { PageSections } from './PageSections';
import { PageClient } from './PageClient';

const GET_HOME = gql`
query GetHome {
  homePage {
    title
    pageSections {
      ... on ComponentDynamicHeroBanner {
        heroTitle : title
        speed
        banner {
          ctaLink
          ctaText
          description
          desktopImage {
            url
          }
          mobileImage {
            url
          }
          title
        }
      }
      ... on ComponentDynamicIntroText {
        introTitle: title
        ctaText
        ctaLink
        content
      }
      ... on ComponentDynamicImageOrColorBanner {
        colorBannerTitle: title
        background
        ctaLink
        ctaText
        description
      }
    }
  }
}
`;

export const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{data?.title || 'Home'}</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={data.homePage.pageSections} />
      </div>
      <PageClient />
    </div>
  );
}