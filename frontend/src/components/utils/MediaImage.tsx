import React from 'react';
import Image, { ImageProps } from 'next/image';
import { MEDIA_URL } from '@/lib/strapi/config';

interface MediaImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  url: string;
  alt: string;
  overrideSrc?: string;
}

const MediaImage: React.FC<MediaImageProps> = ({
  url,
  alt,
  width,
  height,
  fill,
  className = '',
  quality = 80,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  loading = 'lazy',
  style = { objectFit: 'cover' },
  overrideSrc,
  onError,
  onLoad,
  ...rest
}) => {
  const src = overrideSrc || (url.startsWith('http') ? url : `${MEDIA_URL}${url}`);
  const imageProps: ImageProps = {
    src: src as string,
    alt: alt || '',
    className,
    quality,
    priority,
    placeholder,
    blurDataURL,
    sizes,
    loading,
    style,
    onError,
    onLoad,
    ...rest,
  };
  if (fill || (!width && !height)) {
    imageProps.fill = true;
  } else {
    imageProps.width = width || 300;
    imageProps.height = height || 150;
  }
  return <Image {...imageProps} alt={alt || ''} />;
};

export {MediaImage};
