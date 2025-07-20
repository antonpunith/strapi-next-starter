import { MediaImage } from '@/components';
import React from 'react';

interface BannerItem {
  id: string | number;
  title: string;
  description?: string;
  mobileImage?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  ctaText?: string;
  ctaLink?: string;
}

interface HeroBannerSectionProps {
  section: {
    heroTitle: string;
    banner?: BannerItem[];
  };
}

export const HeroBannerSection: React.FC<HeroBannerSectionProps> = ({ section }) => (
  <div className="bg-blue-50 rounded-lg p-4 shadow">
    <h2>{section.heroTitle}</h2>
    {section.banner && Array.isArray(section.banner) && (
      <div className="mt-4 space-y-4">
        {section.banner.map((item: BannerItem) => (
          <div key={`hero-banner${item.id}`} className="bg-white rounded p-3 shadow">
            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
            {item.mobileImage?.url && (
              <MediaImage
                url={item.mobileImage.url}
                alt={item.mobileImage.alternativeText || item.title}
                width={item.mobileImage.width}
                height={item.mobileImage.height}
                className="rounded mb-2"
              />
            )}
            <p className="mb-1">{item.description}</p>
            {item.ctaText && item.ctaLink && (
              <a href={item.ctaLink} className="text-blue-600 hover:underline">
                {item.ctaText}
              </a>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);
