#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 檢查是否有變更
function hasChanges() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.trim().length > 0;
  } catch (error) {
    console.error('無法檢查 git 狀態');
    return false;
  }
}

// 生成提交訊息
function generateCommitMessage() {
  const now = new Date();
  const timestamp = now.toLocaleString('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  // 獲取變更的文件類型
  let changedFiles = [];
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    const lines = status.trim().split('\n');
    
    const fileTypes = new Set();
    lines.forEach(line => {
      if (line.trim()) {
        const filename = line.substring(3).trim();
        const ext = path.extname(filename);
        
        if (ext === '.tsx' || ext === '.ts') fileTypes.add('TypeScript');
        else if (ext === '.css') fileTypes.add('樣式');
        else if (ext === '.js') fileTypes.add('JavaScript');
        else if (ext === '.json') fileTypes.add('配置');
        else if (ext === '.md') fileTypes.add('文檔');
        else fileTypes.add('其他');
      }
    });
    
    changedFiles = Array.from(fileTypes);
  } catch (error) {
    changedFiles = ['一般'];
  }

  const fileTypeStr = changedFiles.length > 0 ? changedFiles.join('、') : '一般';
  
  return `自動提交 ${timestamp} - 更新${fileTypeStr}文件

🤖 自動提交系統記錄
- 提交時間：${timestamp}
- 變更類型：${fileTypeStr}
- 系統版本：自動優化版本

🔧 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>`;
}

function main() {
  console.log('🤖 自動提交檢查開始...');
  
  if (!hasChanges()) {
    console.log('✅ 沒有需要提交的變更');
    return;
  }

  try {
    // 添加所有變更
    console.log('📦 添加變更到暫存區...');
    execSync('git add .', { stdio: 'inherit' });
    
    // 生成並執行提交
    const commitMessage = generateCommitMessage();
    console.log('💾 執行提交...');
    execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
    
    console.log('✅ 自動提交完成！');
    console.log(`📝 提交訊息：\n${commitMessage}`);
    
  } catch (error) {
    console.error('❌ 自動提交失敗：', error.message);
    process.exit(1);
  }
}

main();