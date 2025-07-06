import type { NextConfig } from "next";

// 檢測部署平台
const isGitHubPages = process.env.DEPLOY_TARGET === 'github';
const isCloudflarePages = process.env.DEPLOY_TARGET === 'cloudflare';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  
  // 根據部署平台動態設置 basePath
  ...(isGitHubPages && {
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
  
  // Cloudflare Pages 專用配置
  ...(isCloudflarePages && {
    trailingSlash: false,
    skipTrailingSlashRedirect: true,
  }),
};

export default nextConfig;
