import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // 只在生產環境使用 basePath 和 assetPrefix
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/Personal-website',
    assetPrefix: '/Personal-website',
  }),
};

export default nextConfig;
