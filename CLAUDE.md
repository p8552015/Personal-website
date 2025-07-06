# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用開發命令

### 基本開發
```bash
# 啟動開發伺服器（使用 Turbopack）
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm run start

# 執行 ESLint 檢查
npm run lint

# 執行 ESLint 並自動修復
npm run lint:fix

# TypeScript 類型檢查
npm run type-check
```

### 測試和分析
```bash
# 瀏覽器自動化測試
npm run test:browser

# 分析打包大小
npm run analyze

# 清理緩存
npm run clean
```

### 部署相關
```bash
# 建置並準備部署
npm run deploy

# 部署到 Cloudflare Pages
npm run deploy:cloudflare

# 部署到 GitHub Pages
npm run deploy:github

# 執行自動提交
npm run auto-commit
```

## 代碼庫架構

### 技術堆疊
- **Next.js 15.3.5** with App Router
- **React 19** with TypeScript 5
- **Tailwind CSS 4** for styling
- **Turbopack** for fast development builds
- **ESLint 9** for code linting
- **Playwright** for browser automation testing

### 核心項目特色
這是一個智慧製造 AI 解決方案網站，採用 Netflix 風格的暗色主題設計。主要功能包括：
- 三大 Line + MCP 智能小幫手（行事曆、點餐彙整、產線查詢）
- 四層技術架構展示（OT 資料採集、知識庫、AI 協作、智慧應用）
- 響應式設計的現代化 UI

### 目錄結構
```
src/
├── app/                    # Next.js App Router 頁面
│   ├── debug/             # Debug 工具頁面
│   ├── assistants/        # 智能助手頁面
│   └── tech-stack/        # 技術架構頁面
├── components/
│   ├── ui/                # 共用 UI 組件庫
│   ├── layout/            # 版面組件 (導航/頁尾)
│   └── sections/          # 頁面區塊組件
└── utils/                 # 實用程式函式
```

### 配置文件
- **next.config.ts**: 生產環境使用 basePath `/Personal-website`，支援靜態導出
- **tsconfig.json**: 嚴格模式 TypeScript，使用 `@/*` 路徑別名
- **package.json**: 包含自動化腳本和 MCP 相關依賴

## 代碼風格約定

### TypeScript 約定
- 使用嚴格模式 (`"strict": true`)
- 使用 interface 定義類型
- 組件使用 PascalCase 命名
- 使用 `export default` 導出組件

### React 約定
- 使用函式組件和 React 19 features
- 使用 TypeScript 類型化 props
- 遵循 App Router 約定

### 樣式約定
- 使用 Tailwind CSS 實用程式類別
- 響應式設計使用 Tailwind 斷點
- 暗色主題優先

## 開發注意事項

### 圖片資源處理
- 所有圖片放在 `public/` 目錄
- 使用 `getAssetPath` 工具函式處理 GitHub Pages 路徑
- 生產環境會自動加上 basePath 前綴

### 部署配置
- 配置為靜態導出 (`output: 'export'`)
- 支援 Cloudflare Pages 和 GitHub Pages 雙重部署
- 圖片設置 `unoptimized: true` 以支援靜態導出
- Cloudflare Pages 不需要 basePath 配置

### 自動化工具
- 包含瀏覽器自動化測試腳本
- 支援自動提交功能
- Debug 頁面提供開發者工具

### MCP 整合
項目整合了以下 MCP 伺服器：
- **serena**: AI 協作與代碼分析
- **browser-use-mcp-server**: 瀏覽器自動化控制

### 性能優化
- 使用 Turbopack 作為開發伺服器
- 啟用 React Strict Mode 和 SWC 編譯器
- 生產環境啟用壓縮和 gzip

## Cloudflare Pages 自動部署

### 設置步驟
1. 在 Cloudflare Dashboard 中創建新的 Pages 專案
2. 連接到 GitHub 儲存庫
3. 在 GitHub 儲存庫設置中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`：Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`：Cloudflare 帳戶 ID
   - `CLOUDFLARE_PROJECT_NAME`：Cloudflare Pages 專案名稱

### 部署配置
- **建置命令**：`npm run build`
- **輸出目錄**：`out`
- **Node.js 版本**：18
- **環境變數**：可在 wrangler.toml 中配置

### 自動部署觸發
- 推送到 `main` 分支時自動部署
- Pull Request 時建立預覽部署
- 支援 GitHub Actions 工作流程

### 檔案說明
- `.github/workflows/deploy-cloudflare.yml`：GitHub Actions 工作流程
- `wrangler.toml`：Cloudflare Pages 專案配置
- `_redirects`：處理 Next.js 路由重定向