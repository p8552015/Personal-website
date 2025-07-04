# 代碼風格和約定

## TypeScript 約定
- 使用嚴格模式 (`"strict": true`)
- 使用接口（interface）定義類型
- 導出類型使用 `export type`
- 使用函式宣告或箭頭函式（保持一致性）
- 使用 `const` 斷言用於不可變數據

## React 約定
- 使用函式組件（Function Components）
- 使用 TypeScript 類型化 props
- 使用 `export default` 導出組件
- 組件名稱使用 PascalCase
- 文件名使用 PascalCase（如 `HomePage.tsx`）

## 樣式約定
- 使用 Tailwind CSS 實用程式類別
- 優先使用 Tailwind 的設計代幣
- 使用 `className` 而非 `class`
- 響應式設計使用 Tailwind 的斷點前綴

## 命名約定
- 變數和函式使用 camelCase
- 常數使用 UPPER_SNAKE_CASE
- 組件使用 PascalCase
- 目錄使用 kebab-case

## 檔案結構
- 組件放在 `src/components/` 目錄
- 頁面放在 `src/app/` 目錄
- 共用類型放在 `src/types/` 目錄
- 實用程式函式放在 `src/utils/` 目錄

## SOLID 原則遵循
- 單一職責原則（SRP）：每個組件只負責一個功能
- 開放封閉原則（OCP）：組件應該對擴展開放，對修改封閉
- 里氏替換原則（LSP）：子組件應該能夠替換父組件
- 介面隔離原則（ISP）：不要強迫客戶端依賴它們不使用的介面
- 依賴倒置原則（DIP）：高階模組不應該依賴低階模組