# SVG 圖片更新指南

## 常見錯誤與正確做法

### ❌ 錯誤做法
1. **錯誤理解需求**
   - 誤以為要把圖片放在主要內容區域
   - 沒有仔細確認用戶指定的具體位置

2. **技術選擇錯誤**
   - 使用 Next.js Image 組件處理 SVG（可能有兼容性問題）
   - 過度複雜化圖片載入方式

3. **測試不充分**
   - 只測試圖片是否存在，沒有確認具體顯示位置
   - 沒有針對用戶指定的特定區域進行測試

### ✅ 正確做法

#### 1. 需求確認
- **仔細閱讀用戶需求**：用戶明確說要放在「架構圖示 Layer 5 技術堆疊」區塊
- **查看截圖細節**：紅色圈出的區域是右側的架構圖示區塊，不是左側主內容

#### 2. 代碼定位策略
```bash
# 搜索關鍵文字定位組件
mcp__serena__search_for_pattern "架構圖示"
mcp__serena__search_for_pattern "Layer 5 技術堆疊"
```

#### 3. 正確的圖片實現
```tsx
// 在 LayerDetail 組件的架構圖示區塊中
<div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center border border-zinc-600">
  {layerNumber === 5 ? (
    <img 
      src="/layer5.svg" 
      alt="Layer 5 技術堆疊圖示"
      className="w-full h-full object-contain rounded-xl"
    />
  ) : (
    <div className={`text-6xl ${color} opacity-20`}>{icon}</div>
  )}
</div>
```

#### 4. 技術要點
- **使用標準 img 標籤**：對 SVG 最穩定可靠
- **條件渲染**：只在特定 layer (Layer 5) 顯示圖片
- **正確的 CSS 類別**：`object-contain` 保持比例，`w-full h-full` 填滿容器

#### 5. 測試驗證
- 圖片文件可訪問性：`curl -I http://localhost:3000/layer5.svg`
- 使用 Playwright 測試具體位置
- 在瀏覽器中訪問對應頁面確認

## 文件位置記錄
- **SVG 文件**：`/Users/yen/Desktop/web/public/layer5.svg`
- **修改組件**：`src/app/architecture/page.tsx` (LayerDetail 組件)
- **目標頁面**：http://localhost:3000/architecture

## 關鍵經驗
1. **先理解需求再動手**：仔細確認用戶指定的具體位置
2. **搜索定位優於猜測**：用關鍵字搜索找到正確的組件
3. **簡單解決方案優先**：標準 img 標籤通常比框架組件更可靠
4. **條件渲染處理特殊情況**：只在特定條件下顯示圖片
5. **測試要全面**：不僅測試存在性，還要測試顯示位置