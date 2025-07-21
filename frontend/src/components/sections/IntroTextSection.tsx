import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface IntroTextSectionProps {
  title: string;
  content: BlocksContent;
  ctaText?: string;
  ctaLink?: string;
}

export const IntroTextSection: React.FC<IntroTextSectionProps> = ({ title, content, ctaText, ctaLink }) => {
  if (!title) return null;
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow">
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">{title}</h2>
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
