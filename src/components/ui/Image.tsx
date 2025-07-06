import NextImage, { ImageProps } from 'next/image';
import { getAssetPath } from '@/utils/getBasePath';

interface CustomImageProps extends Omit<ImageProps, 'src'> {
  src: string | { src: string; height: number; width: number; blurDataURL?: string };
}

export function Image({ src, alt, ...props }: CustomImageProps) {
  // 處理 src，如果是字符串則加上 basePath
  const processedSrc = typeof src === 'string' ? getAssetPath(src) : src;
  
  return <NextImage src={processedSrc} alt={alt} {...props} />;
}

// 匯出 Next.js 原始 Image 組件以供需要時使用
export { default as NextImage } from 'next/image';