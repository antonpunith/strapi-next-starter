import type { Schema, Struct } from '@strapi/strapi';

export interface BaseBanner extends Struct.ComponentSchema {
  collectionName: 'components_base_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    desktopImage: Schema.Attribute.Media<'images'>;
    mobileImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseContact extends Struct.ComponentSchema {
  collectionName: 'components_base_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseFooter extends Struct.ComponentSchema {
  collectionName: 'components_base_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    footerCopyrightMessage: Schema.Attribute.Blocks;
    footerNavigation: Schema.Attribute.Component<'base.nav', true>;
    footerText: Schema.Attribute.Blocks;
  };
}

export interface BaseHeader extends Struct.ComponentSchema {
  collectionName: 'components_base_headers';
  info: {
    displayName: 'header';
    icon: 'server';
  };
  attributes: {
    headerNavigation: Schema.Attribute.Component<'base.nav', true>;
    secondaryNav: Schema.Attribute.Component<'base.sub-nav', true>;
  };
}

export interface BaseNav extends Struct.ComponentSchema {
  collectionName: 'components_base_navs';
  info: {
    displayName: 'nav';
    icon: 'oneWay';
  };
  attributes: {
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    subNav: Schema.Attribute.Component<'base.sub-nav', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BasePromoContent extends Struct.ComponentSchema {
  collectionName: 'components_base_promo_contents';
  info: {
    displayName: 'Promo Content';
  };
  attributes: {
    caption: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseSeo extends Struct.ComponentSchema {
  collectionName: 'components_base_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface BaseSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_base_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'tiktok', 'youtube', 'linkedin']
    >;
  };
}

export interface BaseSubNav extends Struct.ComponentSchema {
  collectionName: 'components_base_sub_navs';
  info: {
    displayName: 'subNav';
    icon: 'bulletList';
  };
  attributes: {
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HouseFloorplanCustomisation extends Struct.ComponentSchema {
  collectionName: 'components_house_floorplan_customisations';
  info: {
    displayName: 'floorplanCustomisation';
  };
  attributes: {
    appliesTo: Schema.Attribute.Enumeration<['ground', 'first', 'both']> &
      Schema.Attribute.DefaultTo<'ground'>;
    firstFloorImage: Schema.Attribute.Media<'images'>;
    firstFloorImageFlipped: Schema.Attribute.Media<'images'>;
    groundFloorImage: Schema.Attribute.Media<'images'>;
    groundFloorImageFlipped: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HouseFloorplans extends Struct.ComponentSchema {
  collectionName: 'components_house_floorplans';
  info: {
    displayName: 'floorplans';
  };
  attributes: {
    customisations: Schema.Attribute.Component<
      'house.floorplan-customisation',
      true
    >;
    firstFloorImage: Schema.Attribute.Media<'images'>;
    firstFloorImageFlipped: Schema.Attribute.Media<'images'>;
    groundFloorImage: Schema.Attribute.Media<'images'>;
    groundFloorImageFlipped: Schema.Attribute.Media<'images'>;
  };
}

export interface HouseHouseFilters extends Struct.ComponentSchema {
  collectionName: 'components_house_house_filters';
  info: {
    displayName: 'houseFilters';
  };
  attributes: {
    bathrooms: Schema.Attribute.Integer;
    bedrooms: Schema.Attribute.Integer;
    garage: Schema.Attribute.Integer;
    houseArea: Schema.Attribute.Decimal;
    houseLength: Schema.Attribute.Decimal;
    houseWidth: Schema.Attribute.Decimal;
    minBlockDepth: Schema.Attribute.Decimal;
    minBlockWidth: Schema.Attribute.Decimal;
    stories: Schema.Attribute.Integer;
    totalArea: Schema.Attribute.Decimal;
  };
}

export interface PageFullWidthBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_full_width_banners';
  info: {
    description: 'A banner that can display a full-width image or muted video with text and a call to action.';
    displayName: 'Full width Banner';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    backgroundType: Schema.Attribute.Enumeration<['image', 'video', 'color']> &
      Schema.Attribute.DefaultTo<'image'>;
    image: Schema.Attribute.Media<'images'>;
    promoText: Schema.Attribute.Component<'base.promo-content', false>;
    textColor: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface PageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    banner: Schema.Attribute.Component<'base.banner', true>;
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
  };
  attributes: {
    background: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageIntroText extends Struct.ComponentSchema {
  collectionName: 'components_page_intro_texts';
  info: {
    displayName: 'IntroText';
    icon: 'grid';
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
      'base.banner': BaseBanner;
      'base.contact': BaseContact;
      'base.footer': BaseFooter;
      'base.header': BaseHeader;
      'base.nav': BaseNav;
      'base.promo-content': BasePromoContent;
      'base.seo': BaseSeo;
      'base.social-links': BaseSocialLinks;
      'base.sub-nav': BaseSubNav;
      'house.floorplan-customisation': HouseFloorplanCustomisation;
      'house.floorplans': HouseFloorplans;
      'house.house-filters': HouseHouseFilters;
      'page.full-width-banner': PageFullWidthBanner;
      'page.hero-banner': PageHeroBanner;
      'page.image-or-color-banner': PageImageOrColorBanner;
      'page.intro-text': PageIntroText;
    }
  }
}
