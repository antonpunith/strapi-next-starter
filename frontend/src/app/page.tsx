import { fetchFromStrapi } from '@/lib/strapi/fetchFromStrapi';
import { PageResponse } from '@/lib/strapi/types';
import { DraftModeStatus } from '@/components/DraftModeStatus';
import { PageSections } from '@/components/PageSections';
import { PageClient } from '@/components/PageClient';
import { cache } from 'react';

let cachedData: PageResponse | null = null;

 const getHomePageData = cache(async () => {
  if (!cachedData) {
    cachedData = await fetchFromStrapi('/');
  }
  return cachedData;
});

export async function generateMetadata() {
  const data = await getHomePageData();
  return {
    title: data?.seo?.metaTitle || data?.title || 'Home',
    description: data?.seo?.metaDescription || '',
  };
}

export default async function Home() {
  const data = await getHomePageData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{data?.title || 'Home'}</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={data?.pageSections || []} />
      </div>
      <DraftModeStatus />
      <PageClient />
    </div>
  );
}