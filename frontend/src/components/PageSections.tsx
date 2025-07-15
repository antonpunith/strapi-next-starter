import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { HeroBannerSection, IntroTextSection, ImageOrColorBanner } from '@/lib/strapi/types';

export type PageSection =
  | (HeroBannerSection & { __component: 'dynamic.hero-banner' })
  | (IntroTextSection & { __component: 'dynamic.intro-text' })
  | (ImageOrColorBanner & { __component: 'dynamic.image-or-color-banner'});

interface PageSectionsProps {
  sections: PageSection[];
}

export const PageSections: React.FC<PageSectionsProps> = ({ sections }) => {
  if (!Array.isArray(sections) || sections.length === 0) {
    return <p className="text-gray-400">No sections available.</p>;
  }
  return (
    <div className="space-y-6">
      {sections.map((section, idx) => {
        if (section.__component === 'dynamic.hero-banner') {
          return (
            <div key={`hero-banner-${section.id}` || idx} className="bg-blue-50 rounded-lg p-4 shadow">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{section.title}</h2>
            </div>
          );
        }
        if (section.__component === 'dynamic.intro-text') {
          return (
            <div key={`intro-text-${section.id}` || idx} className="bg-gray-100 rounded-lg p-4 shadow">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">{section.title}</h2>
              <div className="text-gray-800 text-lg">
                <BlocksRenderer content={section.content as BlocksContent} />
              </div>
              {section.ctaLink && section.ctaText && (
                <a href={section.ctaLink} className="text-blue-600 hover:underline">
                  {section.ctaText}
                </a>
              )}
            </div>
          );
        }
        if (section.__component === 'dynamic.image-or-color-banner') {
          return (
            <div key={`image-or-color-banner-${section.id}` || idx} className="bg-gray-100 rounded-lg p-4 shadow">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">{section.title}</h2>
              <div className="text-gray-800 text-lg">
                <BlocksRenderer content={section.description as BlocksContent} />
              </div>
              {section.ctaLink && section.ctaText && (
                <a href={section.ctaLink} className="text-blue-600 hover:underline">
                  {section.ctaText}
                </a>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
