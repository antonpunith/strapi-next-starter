import type { Schema, Struct } from '@strapi/strapi';

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface PageBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_banners';
  info: {
    displayName: 'banner';
    icon: 'landscape';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    desktopImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    banner: Schema.Attribute.Component<'page.banner', true>;
    speed: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<2000>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageImageOrColorBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_image_or_color_banners';
  info: {
    displayName: 'ImageOrColorBanner';
    icon: 'expand';
  };
  attributes: {
    background: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageIntroTextSection extends Struct.ComponentSchema {
  collectionName: 'components_page_intro_text_sections';
  info: {
    displayName: 'IntroTextSection';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.seo': CommonSeo;
      'page.banner': PageBanner;
      'page.hero-banner': PageHeroBanner;
      'page.image-or-color-banner': PageImageOrColorBanner;
      'page.intro-text-section': PageIntroTextSection;
    }
  }
}
