import { DraftModeStatus } from '@/components/DraftModeStatus';
import { PageClient } from '@/components/PageClient';
import { PageSections } from '@/components/PageSections';
import { fetchGraphql } from '@/lib/strapi/fetchGraphql';
import { GET_HOME } from '@/lib/strapi/queries/home';

export const dynamic = 'force-dynamic';

const HomePage = async () => {
  const data = await fetchGraphql(GET_HOME);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{data?.title || 'Home'}</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <PageSections sections={data.homePage.pageSections} />
      </div>
      <DraftModeStatus />
      <PageClient />
    </div>
  );
}

export default HomePage;