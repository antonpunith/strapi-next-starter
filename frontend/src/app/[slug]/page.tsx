// app/[slug]/page.tsx
import { Heading, PageSections } from '@/components';
import { getGraphqlData } from '@/lib/graphql';
import { GET_GLOBAL_SEO } from '@/lib/strapi/queries/global';
import { GET_PAGE_BY_SLUG } from '@/lib/strapi/queries/pages';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'next/dist/build/templates/pages';


export async function generateMetadata({ params }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug } = await params;
  const [pageData, global] = await Promise.all([
    getGraphqlData(GET_PAGE_BY_SLUG, { slug }),
    getGraphqlData(GET_GLOBAL_SEO),
  ]);
  const pageSeo = pageData?.pages?.[0]?.seo;
  const globalSeo = global?.global?.defaultSeo;
  return {
    title: pageSeo?.metaTitle || globalSeo?.metaTitle,
    description: pageSeo?.metaDescription || globalSeo?.metaDescription,
  };
}

export default async function Page({ params }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug } = await params;
  const data = await getGraphqlData(GET_PAGE_BY_SLUG, { slug });
  const pageData = data?.pages?.[0];

  return (
    <>
      <Heading>{pageData.title}</Heading>
      <PageSections sections={pageData.pageSections} />
    </>
  );
}