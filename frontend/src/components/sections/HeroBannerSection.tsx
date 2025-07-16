/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
// import Image from 'next/image'

interface HeroBannerSectionProps {
  section: any
}

export const HeroBannerSection: React.FC<HeroBannerSectionProps> = ({ section }) => (
  <div className="bg-blue-50 rounded-lg p-4 shadow">
    {section.banner && Array.isArray(section.banner) && (
      <div className="mt-4 space-y-4">
        {section.banner.map((item: any) => (
          <div key={`hero-banner${item.id}`} className="bg-white rounded p-3 shadow">
            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
            {/* {item.mobileImage?.url && (
							<Image
								src={`http://localhost:1337${item.mobileImage.url}`}
								alt={item.mobileImage.alternativeText || item.title}
								className="rounded mb-2"
								/>
						)} */}
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
