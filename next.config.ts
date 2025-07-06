import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Cloudflare Pages 不需要 basePath 和 assetPrefix
  // 移除 GitHub Pages 特定的配置
  
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
  // Cloudflare Pages 特定配置
  trailingSlash: false,
  // 確保路由正確處理
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
