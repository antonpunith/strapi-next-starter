'use client';
import React from 'react';
import { HeroBannerSection } from './HeroBannerSection';
import { IntroTextSection } from './IntroTextSection';
import { ImageOrColorBanner } from './ImageOrColorBanner';
import { HeroBannerSectionType, ImageOrColorBannerType, IntroTextSectionType } from '@/lib/strapi/types';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export type PageSection =
  | (HeroBannerSectionType & { __typename: 'ComponentPageHeroBanner' })
  | (IntroTextSectionType & { __typename: 'ComponentPageIntroText' })
  | (ImageOrColorBannerType & { __typename: 'ComponentPageImageOrColorBanner' });

interface PageSectionsProps {
  sections: PageSection[];
}

export const PageSections: React.FC<PageSectionsProps> = ({ sections }) => {
  if (!sections || sections.length === 0) return null;
  return (
    <div className="space-y-6">
      {sections.map((section, idx) => {
        if (section.__typename === 'ComponentPageHeroBanner') {
          return <HeroBannerSection key={`hero-banner-${section.id}` || idx} section={section} />;
        }
        if (section.__typename === 'ComponentPageIntroText') {
          return <IntroTextSection key={`intro-text-${section.id}` || idx} title={section.introTitle} content={section.content as BlocksContent} ctaText={section.ctaText} ctaLink={section.ctaLink} />;
        }
        if (section.__typename === 'ComponentPageImageOrColorBanner') {
          return <ImageOrColorBanner key={`image-or-color-banner-${section.id}` || idx} title={section.colorBannerTitle ?? ''} description={section.description as BlocksContent} ctaText={section.ctaText} ctaLink={section.ctaLink} />;
        }
        return null;
      })}
    </div>
  );
};
