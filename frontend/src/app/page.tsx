import { fetchFromStrapi } from '@/lib/strapi/fetchFromStrapi';
import { PageResponse } from '@/lib/strapi/types';
import { DraftModeStatus } from '@/components/DraftModeStatus';
import { PageSections } from '@/components/PageSections';

export default async function Home() {
  const data: PageResponse = await fetchFromStrapi('/');
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{data.title}</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={data.pageSections} />
      </div>
      <DraftModeStatus />
    </div>
  );
}

export async function generateMetadata() {
  const data: PageResponse = await fetchFromStrapi('/');
  return {
    title: data.seo?.metaTitle || data.title,
    description: data.seo?.metaDescription, // or another field from your data
  };
}
