import { BlocksContent } from "@strapi/blocks-react-renderer";

export type PageSection =
  | (HeroBannerSectionType & { __typename: "ComponentPageHeroBanner" })
  | (IntroTextSectionType & { __typename: "ComponentPageIntroText" })
  | (ImageOrColorBannerType & {
      __typename: "ComponentPageImageOrColorBanner";
    });

export interface ImageOrColorBannerSection {
  id: string | number;
  __typename?: string;
  colorBannerTitle: string;
  background?: string;
  ctaLink?: string;
  ctaText?: string;
  description?: BlocksContent;
}

export interface ImageOrColorBannerType {
  id: string | number;
  colorBannerTitle?: string;
  description?: BlocksContent;
  ctaLink?: string;
  ctaText?: string;
  __component?: string;
  __typename?: string;
}

export interface HeroBannerSectionType {
  id: string | number;
  __component: string;
  __typename?: string;
  heroTitle: string;
  banner?: BannerItem[];
  speed?: number;
}

export interface HeroBanner {
  id: string | number;
  __component: string;
  __typename?: string;
  heroTitle: string;
  banner?: BannerItem[];
  speed?: number;
}

export interface IntroTextSectionType {
  id: string | number;
  __component?: "page.intro-text";
  introTitle: string;
  content?: BlocksContent;
  ctaText?: string;
  ctaLink?: string;
}

export interface IntroTextSection {
  id: string | number;
  introTitle: string;
  content: BlocksContent;
  ctaText?: string;
  ctaLink?: string;
  __typename?: string;
}

export interface PageSectionsProps {
  sections: PageSection[];
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
