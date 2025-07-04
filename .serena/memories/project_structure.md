# 項目結構

## 目錄結構
```
web/
├── .serena/                 # Serena 配置和記憶文件
├── public/                  # 靜態資源
│   ├── *.svg               # SVG 圖標
│   └── favicon.ico         # 網站圖標
├── src/                    # 原始碼目錄
│   ├── app/                # App Router 頁面
│   │   ├── globals.css     # 全域樣式
│   │   ├── layout.tsx      # 根佈局
│   │   ├── page.tsx        # 首頁
│   │   └── favicon.ico     # 頁面圖標
│   ├── components/         # 可重用組件（待創建）
│   ├── types/             # TypeScript 類型定義（待創建）
│   └── utils/             # 實用程式函式（待創建）
├── .gitignore             # Git 忽略文件
├── eslint.config.mjs      # ESLint 配置
├── next.config.ts         # Next.js 配置
├── package.json           # 包依賴和腳本
├── postcss.config.mjs     # PostCSS 配置
├── README.md              # 項目說明文件
└── tsconfig.json          # TypeScript 配置
```

## 關鍵文件說明
- **src/app/layout.tsx**：根佈局，包含 HTML 結構和全域設定
- **src/app/page.tsx**：首頁組件
- **src/app/globals.css**：全域 CSS 樣式和 Tailwind 導入
- **next.config.ts**：Next.js 配置文件
- **tsconfig.json**：TypeScript 編譯器配置
- **package.json**：項目依賴和腳本定義

## 計劃中的組件結構
```
src/components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Modal.tsx
├── sections/
│   ├── Hero.tsx
│   ├── CoreFeatures.tsx
│   ├── SmartAssistants.tsx
│   ├── TechStack.tsx
│   ├── CaseStudies.tsx
│   ├── Pricing.tsx
│   └── Contact.tsx
└── assistants/
    ├── CalendarBot.tsx
    ├── OrderBot.tsx
    └── ProductionBot.tsx
```

## 路由結構
```
/ (首頁)
├── /assistants (智能小幫手)
│   ├── /calendar-bot
│   ├── /order-bot
│   └── /production-bot
├── /tech-stack (技術架構)
└── /docs (文檔)
```