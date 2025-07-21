import { Heading, PageSections } from '@/components';
import { getGraphqlData } from '@/lib/graphql';
import { GET_BLOG } from '@/lib/strapi/queries/blog';
import { GET_GLOBAL_SEO } from '@/lib/strapi/queries/global';


export async function generateMetadata() {
  const [pageData, global] = await Promise.all([
    getGraphqlData(GET_BLOG),
    getGraphqlData(GET_GLOBAL_SEO),
  ]);
  const pageSeo = pageData?.blog?.seo;
  const globalSeo = global?.global?.defaultSeo;
  return {
    title: pageSeo?.metaTitle || globalSeo?.metaTitle || 'Blog',
    description: pageSeo.metaDescription || globalSeo?.metaDescription || 'Blog',
  };
}

export default async function BlogPage() {
  const data = await getGraphqlData(GET_BLOG);
  return (
    <>
      <Heading>{data?.blog?.title || 'Blog'}</Heading>
      <PageSections sections={data?.blog?.pageSections} />
    </>
  );
}
