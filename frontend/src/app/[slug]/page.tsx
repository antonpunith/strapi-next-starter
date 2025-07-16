import { PageClient } from '@/components/PageClient';
import { DraftModeStatus } from '@/components/DraftModeStatus';
import { PageSections } from '@/components/PageSections';
import { fetchGraphql } from '@/lib/strapi/fetchGraphql';
import { GET_PAGE_BY_SLUG } from '@/lib/strapi/queries/pages';




export default async function Page({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  const variables = {
    slug
  };
  const data = await fetchGraphql(GET_PAGE_BY_SLUG, variables);
  const pageData = data?.pages?.[0];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{data.title}</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={pageData.pageSections} />
      </div>
      <DraftModeStatus />
      <PageClient />
    </div>
  );
}