import { fetchFromStrapi } from '@/lib/strapi/fetchFromStrapi';
import { PageResponse } from '@/lib/strapi/types';


export default async function BlogPage() {
  const data: PageResponse = await fetchFromStrapi('blog');
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">
        {data.title || 'Blog'}
      </h1>
    </div>
  );
}
