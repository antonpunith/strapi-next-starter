import {
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
}

export interface PageResponse {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: Seo | null;
  pageSections: Array<HeroBannerSectionType | IntroTextSectionType | ImageOrColorBannerType>;
}

// Type declarations for HeroBannerSection and IntroTextSection

export interface HeroBannerSectionType {
  id: number;
  __component: "page.hero-banner";
  heroTitle: string;
  speed: number;
}

export interface IntroTextSectionType {
  id: number;
  __component: "page.intro-text";
  introTitle: string;
  content: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  ctaText: string;
  ctaLink: string;
}

export interface ImageOrColorBannerType {
  id?: string | number;
  colorBannerTitle?: string;
  description?: BlocksContent;
  ctaLink?: string;
  ctaText?: string;
  __component: "page.image-or-color-banner";
}


