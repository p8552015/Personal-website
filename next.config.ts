import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // 部署在 GitHub Pages 子路徑
  basePath: '/Personal-website',
  assetPrefix: '/Personal-website',
};

export default nextConfig;
