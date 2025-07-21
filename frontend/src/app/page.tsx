import { Heading, HeroBannerSection, IntroTextSection, PageSections } from '@/components';
import { getGraphqlData } from '@/lib/graphql';
import { GET_GLOBAL_SEO } from '@/lib/strapi/queries/global';
import { GET_HOME } from '@/lib/strapi/queries/home';

export async function generateMetadata() {
  const [pageData, global] = await Promise.all([
    getGraphqlData(GET_HOME),
    getGraphqlData(GET_GLOBAL_SEO),
  ]);
  const page = pageData?.homePage;
  const globalSeo = global?.global?.defaultSeo;
  return {
    title: page?.seo?.metaTitle || globalSeo?.metaTitle || 'Home',
    description: page?.seo?.metaDescription || globalSeo?.metaDescription || 'Welcome to our homepage',
  };
}

const HomePage = async () => {
  const data = await getGraphqlData(GET_HOME);
  const homePage = data?.homePage;

  return (
    <>
      <Heading>{homePage?.title || 'Home'}</Heading>
      {homePage?.heroBanner && <HeroBannerSection {...homePage.heroBanner} />}
      {homePage?.intro && homePage.intro.title && (
        <IntroTextSection {...homePage.intro} />
      )}
      {homePage?.pageSections && homePage.pageSections.length > 0 && (
        <PageSections sections={homePage.pageSections} />
      )}
    </>
  );
};

export default HomePage;