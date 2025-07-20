import { draftMode } from 'next/headers';
import React from 'react';

export const DraftModeStatus: React.FC = async () => {
    const { isEnabled } = await draftMode();
    const cookieStore = await import('next/headers').then(m => m.cookies());
    const isPreview = (await cookieStore).get("preview")?.value === "true";

    const pillBase = 'px-3 py-1 rounded-full text-xs font-semibold';
    // Use green for enabled, red for disabled for both draft and preview
    const enabledClass = `${pillBase} bg-green-100 text-green-700 border border-green-300`;
    const disabledClass = `${pillBase} bg-red-100 text-red-700 border border-red-300`;
    const draftClass = isEnabled ? enabledClass : disabledClass;
    const previewClass = isPreview ? enabledClass : disabledClass;

    return (
      <div className="flex gap-4 mt-2">
        <span className={draftClass}>
          Draft mode: {isEnabled ? 'enabled' : 'disabled'}
        </span>
        <span className={previewClass}>
          Preview: {isPreview ? 'enabled' : 'disabled'}
        </span>
      </div>
    );
};
