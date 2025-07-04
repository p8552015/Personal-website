const { chromium } = require('playwright');

async function testLayer5Image() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('🔍 正在測試 Layer 5 圖片顯示...');
    
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // 檢查 Layer 5 區域是否存在
    const layer5Section = await page.locator('text=生成式 AI 應用層').first();
    const layer5Exists = await layer5Section.isVisible();
    console.log('✅ Layer 5 區域存在:', layer5Exists);
    
    // 檢查圖片是否存在
    const layer5Image = await page.locator('img[alt="生成式 AI 應用展示"]').first();
    const imageExists = await layer5Image.isVisible();
    console.log('🖼️ Layer 5 圖片存在:', imageExists);
    
    if (imageExists) {
      const imageSrc = await layer5Image.getAttribute('src');
      console.log('📍 圖片路徑:', imageSrc);
    }
    
    // 檢查是否有 AI Agent 品牌更新
    const navbar = await page.locator('text=AI Agent').first();
    const brandUpdated = await navbar.isVisible();
    console.log('🏷️ 品牌已更新為 AI Agent:', brandUpdated);
    
    // 截圖保存
    await page.screenshot({ 
      path: 'layer5-test-screenshot.png', 
      fullPage: true 
    });
    console.log('📸 截圖已保存為 layer5-test-screenshot.png');
    
    // 檢查網路請求
    page.on('response', response => {
      if (response.url().includes('layer5.svg')) {
        console.log('🌐 圖片請求狀態:', response.status());
      }
    });
    
    // 重新載入頁面檢查網路請求
    await page.reload();
    await page.waitForLoadState('networkidle');
    
  } catch (error) {
    console.error('❌ 測試失敗:', error);
  } finally {
    await browser.close();
  }
}

// 如果是直接執行這個檔案
if (require.main === module) {
  testLayer5Image().then(() => {
    console.log('✅ 測試完成');
  });
}

module.exports = { testLayer5Image };