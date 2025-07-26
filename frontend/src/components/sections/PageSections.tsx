'use client';
import React from 'react';
import { HeroBannerSection } from './HeroBannerSection';
import { IntroTextSection } from './IntroTextSection';
import { ImageOrColorBanner } from './ImageOrColorBanner';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { SectionsContainer } from '@/components';
import { PageSectionsProps } from '@/lib/strapi/types/global';


export const PageSections: React.FC<PageSectionsProps> = ({ sections }) => {
  if (!sections || sections.length === 0) return null;
  return (
    <SectionsContainer>
      {sections.map((section, idx) => {
        if (section.__typename === 'ComponentPageHeroBanner') {
          return <HeroBannerSection key={`hero-banner-${section.id}` || idx} {...section} />;
        }
        if (section.__typename === 'ComponentPageIntroText') {
          return <IntroTextSection key={`intro-text-${section.id}` || idx} title={section.introTitle} content={section.content as BlocksContent} ctaText={section.ctaText} ctaLink={section.ctaLink} />;
        }
        if (section.__typename === 'ComponentPageImageOrColorBanner') {
          return <ImageOrColorBanner key={`image-or-color-banner-${section.id}` || idx} title={section.colorBannerTitle ?? ''} description={section.description as BlocksContent} ctaText={section.ctaText} ctaLink={section.ctaLink} />;
        }
        return null;
      })}
    </SectionsContainer>
  );
};
