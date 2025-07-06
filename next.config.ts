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
  // 效能監控配置
  serverExternalPackages: ['web-vitals'],
  // 開發環境效能監控
  ...(process.env.NODE_ENV === 'development' && {
    // 啟用 React Strict Mode 以檢測潛在問題
    reactStrictMode: true,
    // 啟用 SWC 編譯器的效能分析
    swcMinify: true,
  }),
  // 生產環境優化
  ...(process.env.NODE_ENV === 'production' && {
    // 壓縮配置
    compress: true,
    // 啟用 gzip 壓縮
    poweredByHeader: false,
  }),
};

export default nextConfig;
