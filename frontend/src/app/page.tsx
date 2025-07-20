import { PageSections } from '@/components';
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
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{data?.homePage?.title || 'Home'}</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={data?.homePage?.pageSections} />
      </div>
    </>
  );
}

export default HomePage;