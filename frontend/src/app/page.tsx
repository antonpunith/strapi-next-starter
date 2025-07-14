
import { draftMode } from 'next/headers';

export default async function Home() {
  const { isEnabled } = await draftMode();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome!</h1>
      {isEnabled ? (
        <p className="text-green-500">Draft mode is enabled</p>
      ) : (
        <p className="text-red-500">Draft mode is disabled</p>
      )}
    </div>
  );
}
