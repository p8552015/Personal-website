# 智慧製造 AI 解決方案

這是一個使用 [Next.js](https://nextjs.org) 建立的智慧製造 AI 解決方案網站。

## 🚀 功能特色

- **AI 智能助手** - 整合 Line + MCP 技術的智能客服系統
- **響應式設計** - 支援桌面版和手機版
- **現代化 UI** - 使用 Tailwind CSS 4 和自訂組件庫
- **四層技術架構** - 從 OT 資料採集到應用呈現的完整技術堆疊
- **開發者工具** - 內建 Debug 頁面和瀏覽器自動化測試

## 🛠 技術棧

- **前端**: Next.js 15, React 19, TypeScript 5
- **樣式**: Tailwind CSS 4
- **測試**: Playwright 瀏覽器自動化
- **工具**: ESLint 9, Claude MCP

## 📦 開始使用

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```
在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 程式碼檢查
```bash
npm run lint
```

### 瀏覽器自動化測試
```bash
npm run test:browser
```

## 📋 專案結構

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
└── test-browser.py        # 瀏覽器自動化測試腳本
```

## 🌐 頁面說明

- **首頁** (`/`) - 展示智慧製造解決方案概覽
- **Debug 頁面** (`/debug`) - 開發者工具和系統監控 (密碼: debug123)
- **智能助手** (`/assistants/*`) - 各種 AI 助手功能介紹
- **技術架構** (`/tech-stack`) - 四層技術架構詳細說明

## 🤖 MCP 整合

專案整合了以下 MCP (Model Context Protocol) 伺服器：

- **serena** - AI 協作與代碼分析
- **browser-use-mcp-server** - 瀏覽器自動化控制

## 🚀 部署

### Vercel (推薦)
最簡單的部署方式是使用 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

### 其他平台
查看 [Next.js 部署文檔](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多部署選項。

## 📄 授權

本專案使用 MIT 授權條款。

---

**Built with ❤️ using Next.js and Claude Code**# 觸發 Cloudflare Pages 部署 - Sun Jul  6 17:34:37 CST 2025
