// app/blog/[slug]/page.tsx
import { PageSections } from '@/components';
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
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">
        {pageData.title}
      </h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={pageData.pageSections} />
      </div>
    </>
  );
}
