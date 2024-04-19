import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBanner extends Schema.Component {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    caption: Attribute.String;
    text: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    disabled: Attribute.Boolean;
    cta: Attribute.Component<'shared.button', true>;
    image: Attribute.Media;
  };
}

export interface BlocksCarousel extends Schema.Component {
  collectionName: 'components_shared_carousels';
  info: {
    displayName: 'carousel';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'shared.image', true>;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    icp: Attribute.Component<'shared.icp', true>;
    socialNetworks: Attribute.Component<'shared.social-network', true>;
    contact: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    logo: Attribute.Media;
  };
}

export interface HomepageInformation extends Schema.Component {
  collectionName: 'components_homepage_information';
  info: {
    displayName: 'information';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    target: Attribute.Enumeration<['_blank', '_self']>;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    label: Attribute.String;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SharedIcp extends Schema.Component {
  collectionName: 'components_shared_icps';
  info: {
    displayName: 'icp';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    icon: Attribute.Media;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    caption: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    text: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    image: Attribute.Media & Attribute.Required;
    href: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_self']>;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    image: Attribute.Media;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
    structuredData: Attribute.JSON;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'socialNetwork';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    qrcode: Attribute.Media & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.banner': BlocksBanner;
      'blocks.carousel': BlocksCarousel;
      'blocks.cta': BlocksCta;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'homepage.information': HomepageInformation;
      'shared.button': SharedButton;
      'shared.header': SharedHeader;
      'shared.icp': SharedIcp;
      'shared.image': SharedImage;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.social-network': SharedSocialNetwork;
    }
  }
}
