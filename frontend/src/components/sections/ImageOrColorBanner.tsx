import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface ImageOrColorBannerProps {
  title: string;
  description: BlocksContent;
  ctaText?: string;
  ctaLink?: string;
}

export const ImageOrColorBanner: React.FC<ImageOrColorBannerProps> = ({ title, description, ctaText, ctaLink }) => (
  <div className="bg-gray-100 rounded-lg p-4 shadow">
    <h2 className="text-2xl font-semibold text-gray-600 mb-2">{title}</h2>
    <div className="text-gray-800 text-lg">
      <BlocksRenderer content={description} />
    </div>
    {ctaLink && ctaText && (
      <a href={ctaLink} className="text-blue-600 hover:underline">
        {ctaText}
      </a>
    )}
  </div>
);
