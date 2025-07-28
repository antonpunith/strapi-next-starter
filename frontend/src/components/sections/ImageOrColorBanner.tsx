import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import type { PageSection } from '@/lib/types/global';

type ImageOrColorBannerProps = Extract<PageSection, { __typename: 'ComponentPageImageOrColorBanner' }>;

export const ImageOrColorBanner: React.FC<ImageOrColorBannerProps> = ({ colorBannerTitle, description, ctaText, ctaLink }) => (
  <div className="bg-gray-100 rounded-lg p-4 shadow">
    <h2 className="text-2xl font-semibold text-gray-600 mb-2">{colorBannerTitle}</h2>
    <div className="text-gray-800 text-lg">
      <BlocksRenderer content={description ?? []} />
    </div>
    {ctaLink && ctaText && (
      <a href={ctaLink} className="text-blue-600 hover:underline">
        {ctaText}
      </a>
    )}
  </div>
);
