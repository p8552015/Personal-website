# 故障排除指南

本文檔記錄了在部署和配置過程中遇到的問題、根本原因分析以及解決方案，作為未來問題排除的參考指南。

## 目錄

- [Wrangler Pages 部署問題](#wrangler-pages-部署問題)
- [GitHub Pages 內容顯示錯誤](#github-pages-內容顯示錯誤)
- [配置檔案最佳實踐](#配置檔案最佳實踐)
- [故障排除流程](#故障排除流程)

---

## Wrangler Pages 部署問題

### 問題描述

```bash
wrangler pages deploy out
✘ [ERROR] Unknown arguments: compatibility-date, compatibilityDate
```

### 根本原因分析

使用 **深度研究方法** 發現：

1. **配置混淆**：將 Cloudflare Workers 的配置應用到 Cloudflare Pages
2. **參數不支援**：`wrangler pages deploy` 不支援 `--compatibility-date` 參數
3. **配置檔案問題**：wrangler.toml 使用了過時的配置格式

### 解決步驟

#### 1. 移除不支援的參數

**位置**：`.github/workflows/deploy-cloudflare.yml:44-45`

**修改前**：
```yaml
run: |
  wrangler pages deploy out \
    --project-name="${{ secrets.CLOUDFLARE_PROJECT_NAME }}" \
    --compatibility-date=2024-01-01
```

**修改後**：
```yaml
run: |
  wrangler pages deploy out \
    --project-name="${{ secrets.CLOUDFLARE_PROJECT_NAME }}"
```

#### 2. 更新 wrangler.toml 配置

**修改前**：
```toml
name = "smart-manufacturing-website"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

[build]
command = "npm run build:cloudflare"
publish = "out"
```

**修改後**：
```toml
name = "smart-manufacturing-website"
pages_build_output_dir = "out"

# 使用新的 pages_build_output_dir 配置格式
# 不再需要 [build] 區塊，因為 Pages 部署直接使用預建的靜態檔案
```

### 關鍵洞察

- **Cloudflare Workers** 需要 `compatibility_date`
- **Cloudflare Pages** 使用 `pages_build_output_dir`
- **避免配置重複**：不要同時使用新舊格式

---

## GitHub Pages 內容顯示錯誤

### 問題描述

- 網站部署成功但顯示錯誤內容
- 本地建置正確，但 GitHub Pages 顯示舊版本或錯誤內容

### 根本原因分析

使用 **Serena 工具深度研究** 發現：

1. **部署機制混淆**：GitHub Pages 和 Cloudflare Pages 使用不同的部署流程
2. **配置差異**：GitHub Pages 需要特定的 basePath 配置
3. **自動化未觸發**：GitHub Actions 沒有重新執行

### 解決步驟

#### 1. 檢查本地生成內容

```bash
# 檢查本地生成的內容是否正確
grep -o "AI Agent" /Users/yen/Desktop/web/out/index.html | wc -l
head -30 /Users/yen/Desktop/web/out/index.html
```

#### 2. 使用正確的部署命令

```bash
# GitHub Pages 專用部署命令
npm run deploy:github
```

這個命令會：
- 使用 `DEPLOY_TARGET=github` 環境變數
- 設置正確的 basePath
- 創建 `.nojekyll` 檔案
- 設置 CNAME 檔案

#### 3. 觸發 GitHub Actions

```bash
# 推送更改觸發自動部署
git add .
git commit -m "觸發 GitHub Pages 重新部署"
git push origin main
```

### 關鍵洞察

- **不同平台不同配置**：GitHub Pages 和 Cloudflare Pages 需要不同的建置配置
- **自動化部署**：依賴 GitHub Actions 而非手動推送 out 目錄
- **環境變數重要性**：`DEPLOY_TARGET` 決定建置配置

---

## 配置檔案最佳實踐

### Next.js 配置 (next.config.ts)

```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 根據部署目標設置 basePath
  basePath: process.env.DEPLOY_TARGET === 'github' ? '/Personal-website' : '',
  assetPrefix: process.env.DEPLOY_TARGET === 'github' ? '/Personal-website' : '',
}
```

### Package.json 腳本

```json
{
  "scripts": {
    "build:cloudflare": "DEPLOY_TARGET=cloudflare next build && cp _redirects out/",
    "build:github": "DEPLOY_TARGET=github next build",
    "deploy:cloudflare": "npm run build:cloudflare && npx wrangler pages deploy out",
    "deploy:github": "npm run build:github && touch out/.nojekyll && echo 'domain.com' > out/CNAME"
  }
}
```

### Wrangler.toml 現代化配置

```toml
# Cloudflare Pages 專案配置
name = "project-name"
pages_build_output_dir = "out"

# 環境變數配置
[env.production]
# 生產環境變數

[env.preview] 
# 預覽環境變數
```

---

## 故障排除流程

### 深度研究方法論

1. **使用 Serena 工具進行分析**
   ```bash
   # 查找相關檔案
   find_file(file_mask="*.toml", relative_path=".")
   find_file(file_mask="*.yml", relative_path=".github/workflows")
   
   # 搜尋問題相關內容
   search_for_pattern(substring_pattern="compatibility-date")
   search_for_pattern(substring_pattern="pages_build_output_dir")
   ```

2. **問題根源定位**
   - 不要只看表面錯誤訊息
   - 深入分析配置檔案和部署流程
   - 比較不同環境的配置差異

3. **系統性思考**
   - 考慮修改對整體系統的影響
   - 檢查相關配置是否一致
   - 驗證修改是否解決根本問題

### 批判性思維框架

1. **識別假設和盲點**
   - 是否假設所有部署平台使用相同配置？
   - 是否忽略了版本更新帶來的配置變化？
   - 是否混淆了不同服務的配置要求？

2. **跳脫框架思考**
   - 考慮使用平台原生整合（如 Cloudflare Git 整合）
   - 評估簡化部署流程的可能性
   - 探索自動化配置管理方案

3. **風險評估**
   - 修改是否會影響其他部署目標？
   - 是否有回滾機制？
   - 新配置是否向前相容？

### 驗證修復結果

1. **本地驗證**
   ```bash
   npm run build:github
   npm run build:cloudflare
   ```

2. **部署驗證**
   ```bash
   # 檢查 GitHub Actions 狀態
   # 訪問部署 URL 確認內容正確
   ```

3. **監控部署**
   - GitHub Actions: https://github.com/user/repo/actions
   - Cloudflare Dashboard: Pages 專案狀態

---

## 經驗教訓

### 技術層面

1. **配置管理**：不同部署目標需要不同配置
2. **版本更新**：工具更新可能改變配置要求
3. **自動化優先**：依賴 CI/CD 而非手動操作

### 流程層面

1. **深度研究**：使用適當工具進行系統性分析
2. **根本原因**：不滿足於修復表面問題
3. **文檔記錄**：為未來問題排除建立知識庫

### 思維層面

1. **批判思維**：質疑假設，識別盲點
2. **系統思考**：考慮修改的連鎖影響
3. **持續改進**：從問題中學習，優化流程

---

## 相關文檔

- [CLAUDE.md](../CLAUDE.md) - 專案開發指南
- [next.config.ts](../next.config.ts) - Next.js 配置
- [wrangler.toml](../wrangler.toml) - Cloudflare 配置
- [.github/workflows/](../.github/workflows/) - CI/CD 配置

---

*本文檔由 Claude Code 協助建立，記錄真實的問題排除過程，作為未來參考指南。*