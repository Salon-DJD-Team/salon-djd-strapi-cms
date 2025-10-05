import type { Schema, Struct } from '@strapi/strapi';

export interface DescriptionDescriptionWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_description_description_with_icons';
  info: {
    displayName: 'Description with icon';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DescriptionDescriptionWithImage
  extends Struct.ComponentSchema {
  collectionName: 'components_description_description_with_images';
  info: {
    displayName: 'Description with image';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface MagazineMagazine extends Struct.ComponentSchema {
  collectionName: 'components_magazine_magazines';
  info: {
    displayName: 'Magazine';
    icon: 'briefcase';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    poster: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'description.description-with-icon': DescriptionDescriptionWithIcon;
      'description.description-with-image': DescriptionDescriptionWithImage;
      'magazine.magazine': MagazineMagazine;
    }
  }
}
