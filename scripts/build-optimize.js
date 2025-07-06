#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 開始優化建置流程...');

// 1. 清理舊的建置文件
console.log('🧹 清理舊的建置文件...');
try {
  execSync('rm -rf .next out', { stdio: 'inherit' });
  console.log('✅ 清理完成');
} catch (error) {
  console.log('⚠️ 清理過程中發生警告（可能是文件不存在）');
}

// 2. 執行類型檢查
console.log('🔍 執行 TypeScript 類型檢查...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ 類型檢查通過');
} catch (error) {
  console.error('❌ TypeScript 類型檢查失敗');
  process.exit(1);
}

// 3. 執行 ESLint 檢查
console.log('📋 執行 ESLint 檢查...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ ESLint 檢查通過');
} catch (error) {
  console.error('❌ ESLint 檢查失敗');
  process.exit(1);
}

// 4. 執行建置
console.log('🔨 執行 Next.js 建置...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ 建置完成');
} catch (error) {
  console.error('❌ 建置失敗');
  process.exit(1);
}

// 5. 分析建置結果
console.log('📊 分析建置結果...');
try {
  const buildDir = path.join(process.cwd(), 'out');
  if (fs.existsSync(buildDir)) {
    const stats = getDirectorySize(buildDir);
    console.log(`📦 建置文件總大小: ${(stats / 1024 / 1024).toFixed(2)} MB`);
    
    // 檢查大檔案
    const largeFiles = findLargeFiles(buildDir, 1024 * 1024); // 1MB 以上
    if (largeFiles.length > 0) {
      console.log('⚠️ 發現大檔案:');
      largeFiles.forEach(file => {
        console.log(`  - ${file.name}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
      });
    }
  }
} catch (error) {
  console.log('⚠️ 無法分析建置結果');
}

console.log('🎉 建置優化完成！');

// 輔助函數：獲取目錄大小
function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(currentPath) {
    const stats = fs.statSync(currentPath);
    
    if (stats.isFile()) {
      totalSize += stats.size;
    } else if (stats.isDirectory()) {
      const files = fs.readdirSync(currentPath);
      files.forEach(file => {
        calculateSize(path.join(currentPath, file));
      });
    }
  }
  
  calculateSize(dirPath);
  return totalSize;
}

// 輔助函數：找出大檔案
function findLargeFiles(dirPath, sizeLimit) {
  const largeFiles = [];
  
  function searchFiles(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    files.forEach(file => {
      const fullPath = path.join(currentPath, file);
      const stats = fs.statSync(fullPath);
      
      if (stats.isFile() && stats.size > sizeLimit) {
        largeFiles.push({
          name: path.relative(dirPath, fullPath),
          size: stats.size
        });
      } else if (stats.isDirectory()) {
        searchFiles(fullPath);
      }
    });
  }
  
  searchFiles(dirPath);
  return largeFiles;
}