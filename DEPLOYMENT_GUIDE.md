# 雙平台部署指南：GitHub Pages + Cloudflare Pages

本指南詳細說明如何將 Next.js 靜態網站同時部署到 GitHub Pages 和 Cloudflare Pages。

## 目錄
- [架構概覽](#架構概覽)
- [GitHub Pages 部署設置](#github-pages-部署設置)
- [Cloudflare Pages 部署設置](#cloudflare-pages-部署設置)
- [重要配置文件](#重要配置文件)
- [常見問題與解決方案](#常見問題與解決方案)

## 架構概覽

### 為什麼要雙平台部署？
1. **高可用性**：一個平台出問題時，另一個可以繼續服務
2. **全球加速**：Cloudflare 提供 CDN 加速，GitHub Pages 提供穩定服務
3. **成本優化**：兩個平台都提供免費額度
4. **靈活性**：可以根據需求選擇主要入口

### 部署後的訪問地址
- **GitHub Pages**: `https://[username].github.io/[repository-name]/`
- **Cloudflare Pages**: `https://[project-name].pages.dev/`

## GitHub Pages 部署設置

### 1. 啟用 GitHub Pages
1. 進入 GitHub 儲存庫的 Settings
2. 找到 Pages 選項
3. Source 選擇 "GitHub Actions"

### 2. 創建部署工作流程
創建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build with Next.js
        run: npm run build:github

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. 配置建置腳本
在 `package.json` 中添加：

```json
{
  "scripts": {
    "build:github": "DEPLOY_TARGET=github next build"
  }
}
```

## Cloudflare Pages 部署設置

### 1. 設置 Cloudflare Pages 專案

#### 在 Cloudflare Dashboard：
1. 登入 Cloudflare Dashboard
2. 選擇 Pages
3. 創建新專案，連接到 GitHub 儲存庫
4. 記錄以下資訊：
   - Account ID
   - 專案名稱

#### 在 GitHub 設置 Secrets：
1. 進入儲存庫 Settings → Secrets and variables → Actions
2. 添加以下 secrets：
   - `CLOUDFLARE_API_TOKEN`：從 Cloudflare 創建的 API Token
   - `CLOUDFLARE_ACCOUNT_ID`：您的 Cloudflare 帳戶 ID
   - `CLOUDFLARE_PROJECT_NAME`：Cloudflare Pages 專案名稱

### 2. 創建 Cloudflare 部署工作流程
創建 `.github/workflows/deploy-cloudflare.yml`：

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run linting
        run: npm run lint
        
      - name: Run type checking
        run: npm run type-check
        
      - name: Build project for Cloudflare Pages
        run: npm run build:cloudflare
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        if: ${{ env.CLOUDFLARE_API_TOKEN != '' }}
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ${{ secrets.CLOUDFLARE_PROJECT_NAME }}
          directory: out
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

### 3. 配置建置腳本
在 `package.json` 中添加：

```json
{
  "scripts": {
    "build:cloudflare": "DEPLOY_TARGET=cloudflare next build && cp _redirects out/"
  }
}
```

### 4. 創建 _redirects 文件（可選）
如果需要處理 404 頁面：

```
# Cloudflare Pages 重定向規則
/*    /404.html   404
```

## 重要配置文件

### 1. next.config.ts
```typescript
import type { NextConfig } from "next";

// 檢測部署平台
const isGitHubPages = process.env.DEPLOY_TARGET === 'github';
const isCloudflarePages = process.env.DEPLOY_TARGET === 'cloudflare';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  
  // 只有 GitHub Pages 需要 basePath
  ...(isGitHubPages && {
    basePath: '/Personal-website',
    assetPrefix: '/Personal-website',
  }),
  
  // Cloudflare Pages 不需要特殊配置
  // 避免使用 trailingSlash: true，會導致無限重定向
};

export default nextConfig;
```

### 2. 動態資源路徑處理（src/utils/getBasePath.ts）
```typescript
export function getBasePath() {
  // 只在 GitHub Pages 上使用 basePath
  if (typeof window !== 'undefined' && window.location.hostname === 'p8552015.github.io') {
    return '/Personal-website';
  }
  return '';
}

export function getAssetPath(path: string) {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}
```

### 3. wrangler.toml（可選）
```toml
# Cloudflare Pages 專案配置
name = "your-project-name"
compatibility_date = "2024-01-01"

[build]
command = "npm run build"
publish = "out"

[env.production]
# 生產環境變數

[env.preview]
# 預覽環境變數
```

## 常見問題與解決方案

### 1. GitHub Pages 顯示 404
**問題**：推送後網站顯示 404
**解決方案**：
- 確認 `.nojekyll` 文件存在
- 等待 5-10 分鐘讓 GitHub Pages 同步
- 檢查 Settings → Pages 中的部署狀態

### 2. Cloudflare Pages 無限重定向
**問題**：訪問頁面時出現 "ERR_TOO_MANY_REDIRECTS"
**解決方案**：
- 不要在 `next.config.ts` 中設置 `trailingSlash: true`
- 檢查 `_redirects` 文件規則是否正確
- 確保沒有循環重定向規則

### 3. 圖片無法顯示
**問題**：圖片在某個平台無法顯示
**解決方案**：
- 使用動態路徑函數 `getAssetPath()`
- 確保圖片放在 `public` 目錄
- 檢查建置時的環境變數設置

### 4. 部署權限錯誤
**問題**：GitHub Actions 報錯 "Resource not accessible by integration"
**解決方案**：
在工作流程中添加權限設置：
```yaml
permissions:
  contents: read
  deployments: write  # Cloudflare Pages 需要
  pages: write        # GitHub Pages 需要
  id-token: write     # GitHub Pages 需要
```

## 部署流程總結

### 每次推送到 main 分支時：
1. **GitHub Actions 自動觸發兩個工作流程**
   - `deploy.yml`：部署到 GitHub Pages
   - `deploy-cloudflare.yml`：部署到 Cloudflare Pages

2. **建置過程**
   - 安裝依賴
   - 執行 linting 和類型檢查
   - 根據目標平台建置（使用不同的環境變數）
   - 生成靜態文件到 `out` 目錄

3. **部署結果**
   - GitHub Pages：約 5-10 分鐘後生效
   - Cloudflare Pages：約 2-5 分鐘後生效

### 手動部署
如果需要手動觸發部署：
1. 進入 GitHub Actions 頁面
2. 選擇對應的工作流程
3. 點擊 "Run workflow"

## 監控與維護

### 檢查部署狀態
- **GitHub Pages**：Settings → Pages → 查看部署歷史
- **Cloudflare Pages**：Dashboard → Pages → 專案名稱 → 查看部署

### 性能監控
- 使用 Google PageSpeed Insights 測試兩個網址
- 比較載入速度和性能分數
- 根據結果優化資源

### 定期維護
- 更新依賴套件
- 檢查 API Token 有效期
- 監控流量和使用量
- 定期測試兩個平台的可用性

## 結論

通過這個雙平台部署策略，您可以：
- 獲得更高的網站可用性
- 利用 Cloudflare 的全球 CDN 加速
- 保持 GitHub Pages 作為穩定備份
- 靈活選擇主要訪問入口

記住定期檢查兩個平台的狀態，確保網站始終可用！