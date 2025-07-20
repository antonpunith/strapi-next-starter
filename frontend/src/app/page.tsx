import { PageSections } from '@/components';
import { fetchGraphql } from '@/lib/strapi/fetchGraphql';
import { GET_HOME } from '@/lib/strapi/queries/home';

const HomePage = async () => {
  const data = await fetchGraphql(GET_HOME);
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