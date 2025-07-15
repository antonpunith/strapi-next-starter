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
  pageSections: Array<HeroBannerSection | IntroTextSection>;
}

// Type declarations for HeroBannerSection and IntroTextSection

export interface HeroBannerSection {
    id: number;
    __component: "page.hero-banner";
    title: string;
    speed: number;
}

export interface IntroTextSection {
    id: number;
    __component: "page.intro-text-section";
    title: string;
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
