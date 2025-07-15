import { PageClient } from '@/components/PageClient';
import { fetchFromStrapi } from '@/lib/strapi/fetchFromStrapi';
import { draftMode } from 'next/headers';


export default async function Page({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const { isEnabled } = await draftMode();
  const { slug } = awaitedParams;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await fetchFromStrapi(slug);
  if(!data.data.length) {
    return null;
  }
  const { title } = data.data[0];

  return (<div><h1>{title}</h1>
    <p>{JSON.stringify(data)}</p>
    {isEnabled ? (
      <p className="text-green-500">Draft mode is enabled</p>
    ) : (
      <p className="text-red-500">Draft mode is disabled</p>
    )}
    <PageClient />
  </div>);
}