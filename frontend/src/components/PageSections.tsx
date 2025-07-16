'use client';
import React from 'react';
import { HeroBannerSection } from './sections/HeroBannerSection';
import { IntroTextSection } from './sections/IntroTextSection';
import { ImageOrColorBanner } from './sections/ImageOrColorBanner';
import { HeroBannerSectionType, ImageOrColorBannerType, IntroTextSectionType } from '@/lib/strapi/types';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export type PageSection =
  | (HeroBannerSectionType & { __typename: 'ComponentDynamicHeroBanner' })
  | (IntroTextSectionType & { __typename: 'ComponentDynamicIntroText' })
  | (ImageOrColorBannerType & { __typename: 'ComponentDynamicImageOrColorBanner'});

interface PageSectionsProps {
  sections: PageSection[];
}

export const PageSections: React.FC<PageSectionsProps> = ({ sections }) => {
  return (
    <div className="space-y-6">
      {sections.map((section, idx) => {
        if (section.__typename === 'ComponentDynamicHeroBanner') {
          return <HeroBannerSection key={`hero-banner-${section.id}` || idx} section={section} />;
        }
        if (section.__typename === 'ComponentDynamicIntroText') {
          return <IntroTextSection key={`intro-text-${section.id}` || idx} title={section.title} content={section.content as BlocksContent} ctaText={section.ctaText} ctaLink={section.ctaLink} />;
        }
        if (section.__typename === 'ComponentDynamicImageOrColorBanner') {
          return <ImageOrColorBanner key={`image-or-color-banner-${section.id}` || idx} title={section.title ?? ''} description={section.description as BlocksContent} ctaText={section.ctaText} ctaLink={section.ctaLink} />;
        }
        return null;
      })}
    </div>
  );
};
