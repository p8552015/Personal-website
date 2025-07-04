# 建議的命令

## 開發命令
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
npm run lint -- --fix
```

## Git 命令
```bash
# 查看狀態
git status

# 新增檔案
git add .

# 提交變更
git commit -m "commit message"

# 推送到遠端
git push origin main

# 查看分支
git branch

# 切換分支
git checkout branch-name

# 創建新分支
git checkout -b new-branch-name
```

## 系統命令 (macOS/Darwin)
```bash
# 列出檔案
ls -la

# 查找檔案
find . -name "*.tsx"

# 搜尋內容
grep -r "search-term" src/

# 查看目錄結構
tree -I node_modules

# 查看磁碟使用情況
du -sh *

# 查看進程
ps aux | grep node

# 殺死進程
kill -9 PID
```

## 包管理
```bash
# 安裝依賴
npm install

# 安裝開發依賴
npm install -D package-name

# 安裝生產依賴
npm install package-name

# 更新依賴
npm update

# 查看過時的包
npm outdated

# 清理快取
npm cache clean --force
```

## 調試和診斷
```bash
# 查看 Next.js 版本
npx next --version

# 查看 Node.js 版本
node --version

# 查看 npm 版本
npm --version

# 檢查端口是否被占用
lsof -i :3000

# 查看環境變數
printenv
```