// app/blog/[slug]/page.tsx
import { Heading, HeroBannerSection, PageSections } from '@/components';
import { getGraphqlData } from '@/lib/graphql';
import { GET_ARTICLES_BY_SLUG } from '@/lib/strapi/queries/articles';
import { GET_GLOBAL_SEO } from '@/lib/strapi/queries/global';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'next/dist/build/templates/pages';


export async function generateMetadata({ params }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug } = await params;
  const [pageData, global] = await Promise.all([
    getGraphqlData(GET_ARTICLES_BY_SLUG, { slug }),
    getGraphqlData(GET_GLOBAL_SEO),
  ]);
  const articleSeo = pageData?.articles?.[0]?.seo;
  const globalSeo = global?.global?.defaultSeo;
  return {
    title: articleSeo?.metaTitle || globalSeo?.metaTitle,
    description: articleSeo?.metaDescription || globalSeo?.metaDescription,
  };
}

export default async function Article({ params }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug } = await params;
  const data = await getGraphqlData(GET_ARTICLES_BY_SLUG, { slug });
  const pageData = data?.articles?.[0];

  return (
    <>
      <Heading>{pageData.title}</Heading>
      <HeroBannerSection {...pageData.heroBanner} />
      <PageSections sections={pageData.pageSections} />
    </>
  );
}
