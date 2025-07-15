import { draftMode } from 'next/headers';
import React from 'react';



export const DraftModeStatus: React.FC = async () => {
    const { isEnabled } = await draftMode();
    const cookieStore = await import('next/headers').then(m => m.cookies());
    const isPreview = (await cookieStore).get("preview")?.value === "true";
    return (
      <div className="space-y-2">
        {isEnabled ? (
          <p className="text-green-500">Draft mode is enabled</p>
        ) : (
          <p className="text-red-500">Draft mode is disabled</p>
        )}
        <p className={isPreview ? "text-blue-500" : "text-gray-500"}>
          Preview cookie: {isPreview ? "enabled" : "disabled"}
        </p>
      </div>
    );
};
