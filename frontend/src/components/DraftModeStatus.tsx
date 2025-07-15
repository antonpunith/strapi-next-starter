import { draftMode } from 'next/headers';
import React from 'react';



export const DraftModeStatus: React.FC = async () => {
    const { isEnabled } = await draftMode();
    return (
  isEnabled ? (
    <p className="text-green-500">Draft mode is enabled</p>
  ) : (
    <p className="text-red-500">Draft mode is disabled</p>
  )
)};
