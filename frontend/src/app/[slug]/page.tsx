import { draftMode } from 'next/headers';

export default async function Page({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const { isEnabled } = await draftMode();
  const { slug } = awaitedParams;
  return (<div><h1>{slug}</h1>
    {isEnabled ? (
      <p className="text-green-500">Draft mode is enabled</p>
    ) : (
      <p className="text-red-500">Draft mode is disabled</p>
    )}
  </div>);
}