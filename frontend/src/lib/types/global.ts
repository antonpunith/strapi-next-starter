import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface ImageOrColorBannerSection {
  __typename: "ComponentPageImageOrColorBanner";
  colorBannerTitle?: string;
  background?: string;
  ctaLink?: string;
  ctaText?: string;
  description?: BlocksContent;
}

export type PageSection =
  | (HeroBannerSectionType & { __typename: "ComponentPageHeroBanner" })
  | (IntroTextSectionType & { __typename: "ComponentPageIntroText" })
  | (ImageOrColorBannerType & {
      __typename: "ComponentPageImageOrColorBanner";
    });
export interface PageSectionsProps {
  sections: PageSection[];
}
export interface IntroTextSection {
  id: string | number;
  title: string;
  content: BlocksContent;
  ctaText?: string;
  ctaLink?: string;
  __typename?: string;
}

export interface Image {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface Seo {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: Image;
  id?: number;
}
export interface SubNav {
  id: string;
  title: string;
  slug: string;
}

export interface Nav {
  id: string;
  title: string;
  slug: string;
  subNav?: SubNav[];
}

export interface GlobalData {
  global: {
    title: string;
    defaultSeo: Seo;
    header: {
      headerNavigation: Nav[];
      secondaryNav: SubNav[];
    };
    footer: {
      footerNavigation: Nav[];
    };
  };
}

export interface HomePageData {
  homePage?: {
    title?: string;
    heroBanner?: HeroBanner;
    intro?: IntroTextSection;
    pageSections?: PageSection[];
    seo?: Seo;
  };
}

export interface BannerItem {
  id: string | number;
  title: string;
  description?: string;
  mobileImage?: Image;
  desktopImage?: Image;
  ctaText?: string;
  ctaLink?: string;
  __typename?: string;
}

export interface HeroBanner {
  heroTitle?: string;
  banner?: BannerItem[];
  speed?: number;
  __typename?: string;
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
  pageSections: Array<
    HeroBannerSectionType | IntroTextSectionType | ImageOrColorBannerType
  >;
}

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
  content: BlocksContent;
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
