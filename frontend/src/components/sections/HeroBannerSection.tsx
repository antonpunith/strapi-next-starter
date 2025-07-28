import { MediaImage } from '@/components';
import React from 'react';
import type { HeroBanner } from '@/lib/types/global';


export const HeroBannerSection: React.FC<HeroBanner> = ({ heroTitle, banner }) => {
  if (!heroTitle) return null;
  if (!banner || !Array.isArray(banner) || banner.length === 0) return (
    <div className="bg-blue-50 rounded-lg p-4 shadow">
      <h2>{heroTitle}</h2>
      {/* No banners available */}
    </div>
  );
  return (
    <div className="bg-blue-50 rounded-lg p-4 shadow">
      <h2>{heroTitle}</h2>
      {banner && Array.isArray(banner) && banner.length > 0 && (
        <div className="mt-4 space-y-4">
          {banner.map((item) => (
            <div key={`hero-banner${item.id ?? Math.random()}`} className="bg-white rounded p-3 shadow">
              <h3 className="text-lg font-bold mb-1">{item.title ?? 'Untitled'}</h3>
              {item.mobileImage?.url && (
                <MediaImage
                  url={item.mobileImage.url}
                  alt={item.mobileImage.alternativeText || item.title || 'Banner image'}
                  width={item.mobileImage.width}
                  height={item.mobileImage.height}
                  className="rounded mb-2"
                />
              )}
              {item.desktopImage?.url && (
                <MediaImage
                  url={item.desktopImage.url}
                  alt={item.desktopImage.alternativeText || item.title || 'Banner image'}
                  width={item.desktopImage.width}
                  height={item.desktopImage.height}
                  className="rounded mb-2"
                />
              )}
              {item.description && <p className="mb-1">{item.description}</p>}
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
};
