import { PageSections } from '@/components';
import { fetchGraphql } from '@/lib/strapi/fetchGraphql';
import { GET_PAGE_BY_SLUG } from '@/lib/strapi/queries/pages';
import type { InferGetStaticPropsType } from 'next'
import { getStaticProps } from 'next/dist/build/templates/pages';


export default async function Page({ params }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug } = await params;
  const data = await fetchGraphql(GET_PAGE_BY_SLUG, { slug });
  const pageData = data?.pages?.[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{pageData.title}</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={pageData.pageSections} />
      </div>
    </div>
  );
}
