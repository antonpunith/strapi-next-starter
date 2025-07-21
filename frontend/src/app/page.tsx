import { Heading, HeroBannerSection, PageSections } from '@/components';
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
      <HeroBannerSection section={homePage?.heroBanner} />
      <PageSections sections={homePage?.pageSections} />
    </>
  );
}

export default HomePage;