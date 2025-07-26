import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import type { IntroTextSectionType } from '@/lib/types/global';

export const IntroTextSection: React.FC<IntroTextSectionType> = ({ introTitle, content, ctaText, ctaLink }) => {
  if (!introTitle) return null;
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow">
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">{introTitle}</h2>
      {content && <div className="text-gray-800 text-lg">
        <BlocksRenderer content={content} />
      </div>}
      {ctaLink && ctaText && (
        <a href={ctaLink} className="text-blue-600 hover:underline">
          {ctaText}
        </a>
      )}
    </div>
  );
};
