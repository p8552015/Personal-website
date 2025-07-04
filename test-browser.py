#!/usr/bin/env python3
"""
智慧製造網站瀏覽器自動化測試腳本
使用 Playwright 進行全面的網站功能測試
"""

import asyncio
import sys
from playwright.async_api import async_playwright
import time

class WebsiteTest:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.results = []
    
    def log_result(self, test_name, status, message=""):
        result = {
            "test": test_name,
            "status": status,
            "message": message,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        }
        self.results.append(result)
        status_icon = "✅" if status == "PASS" else "❌"
        print(f"{status_icon} {test_name}: {message}")
    
    async def test_homepage_load(self, page):
        """測試首頁載入"""
        try:
            await page.goto(self.base_url)
            await page.wait_for_load_state('networkidle')
            
            # 檢查標題
            title = await page.title()
            if "智慧製造" in title:
                self.log_result("首頁載入", "PASS", f"標題: {title}")
            else:
                self.log_result("首頁載入", "FAIL", f"標題不正確: {title}")
            
            # 檢查主要元素
            hero_text = await page.locator("h1").first.text_content()
            if "智慧製造" in hero_text or "AI 革命" in hero_text:
                self.log_result("Hero 區塊顯示", "PASS", f"找到文字: {hero_text}")
            else:
                self.log_result("Hero 區塊顯示", "FAIL", "Hero 文字未找到")
                
        except Exception as e:
            self.log_result("首頁載入", "FAIL", str(e))
    
    async def test_navigation(self, page):
        """測試導航功能"""
        try:
            # 測試導航列是否存在
            nav = page.locator("nav")
            if await nav.count() > 0:
                self.log_result("導航列存在", "PASS", "找到導航列")
            else:
                self.log_result("導航列存在", "FAIL", "未找到導航列")
            
            # 測試 Logo 點擊
            logo = page.locator('a[href="/"]').first
            if await logo.count() > 0:
                await logo.click()
                await page.wait_for_load_state('networkidle')
                current_url = page.url
                if current_url == self.base_url or current_url == f"{self.base_url}/":
                    self.log_result("Logo 導航", "PASS", "Logo 點擊正常")
                else:
                    self.log_result("Logo 導航", "FAIL", f"導航到錯誤頁面: {current_url}")
            
        except Exception as e:
            self.log_result("導航功能", "FAIL", str(e))
    
    async def test_debug_page(self, page):
        """測試 Debug 頁面"""
        try:
            await page.goto(f"{self.base_url}/debug")
            await page.wait_for_load_state('networkidle')
            
            # 檢查是否顯示登入表單
            password_input = page.locator('input[type="password"]')
            if await password_input.count() > 0:
                self.log_result("Debug 頁面載入", "PASS", "顯示登入表單")
                
                # 測試登入功能
                await password_input.fill("debug123")
                login_button = page.locator('button[type="submit"]')
                await login_button.click()
                
                # 等待登入完成
                await page.wait_for_timeout(1000)
                
                # 檢查是否成功登入
                debug_title = page.locator("h1").filter(has_text="開發者工具")
                if await debug_title.count() > 0:
                    self.log_result("Debug 登入", "PASS", "成功登入 Debug 頁面")
                else:
                    self.log_result("Debug 登入", "FAIL", "登入後未顯示正確內容")
            else:
                self.log_result("Debug 頁面載入", "FAIL", "未找到登入表單")
                
        except Exception as e:
            self.log_result("Debug 頁面", "FAIL", str(e))
    
    async def test_responsive_design(self, page):
        """測試響應式設計"""
        try:
            # 測試桌面版
            await page.set_viewport_size({"width": 1920, "height": 1080})
            await page.goto(self.base_url)
            await page.wait_for_load_state('networkidle')
            
            # 檢查導航是否在桌面版顯示
            desktop_nav = page.locator("nav .hidden.md\\:flex")
            if await desktop_nav.count() > 0:
                self.log_result("桌面版導航", "PASS", "桌面版導航顯示正常")
            else:
                self.log_result("桌面版導航", "FAIL", "桌面版導航未正確顯示")
            
            # 測試手機版
            await page.set_viewport_size({"width": 375, "height": 667})
            await page.wait_for_timeout(500)
            
            # 檢查手機選單按鈕
            mobile_menu_button = page.locator("button.md\\:hidden")
            if await mobile_menu_button.count() > 0:
                self.log_result("手機版選單按鈕", "PASS", "手機版選單按鈕存在")
                
                # 測試選單開關
                await mobile_menu_button.click()
                await page.wait_for_timeout(500)
                
                # 檢查選單是否展開
                mobile_menu = page.locator("nav .md\\:hidden .flex.flex-col")
                if await mobile_menu.count() > 0:
                    self.log_result("手機版選單展開", "PASS", "選單成功展開")
                else:
                    self.log_result("手機版選單展開", "FAIL", "選單未展開")
            else:
                self.log_result("手機版選單按鈕", "FAIL", "未找到手機版選單按鈕")
                
        except Exception as e:
            self.log_result("響應式設計", "FAIL", str(e))
    
    async def test_ui_components(self, page):
        """測試 UI 組件"""
        try:
            await page.goto(self.base_url)
            await page.wait_for_load_state('networkidle')
            
            # 測試按鈕
            buttons = page.locator("button")
            button_count = await buttons.count()
            if button_count > 0:
                self.log_result("按鈕組件", "PASS", f"找到 {button_count} 個按鈕")
            else:
                self.log_result("按鈕組件", "FAIL", "未找到按鈕")
            
            # 測試卡片
            cards = page.locator("div").filter(has_text="hover:scale-105")
            card_count = await cards.count()
            if card_count > 0:
                self.log_result("卡片組件", "PASS", f"找到卡片組件")
            else:
                self.log_result("卡片組件", "FAIL", "未找到卡片組件")
            
            # 測試懸停效果
            first_button = buttons.first
            if await first_button.count() > 0:
                await first_button.hover()
                self.log_result("懸停效果", "PASS", "按鈕懸停測試完成")
                
        except Exception as e:
            self.log_result("UI 組件", "FAIL", str(e))
    
    async def test_performance(self, page):
        """測試效能指標"""
        try:
            # 記錄載入時間
            start_time = time.time()
            await page.goto(self.base_url)
            await page.wait_for_load_state('networkidle')
            load_time = time.time() - start_time
            
            if load_time < 3.0:
                self.log_result("頁面載入速度", "PASS", f"載入時間: {load_time:.2f}秒")
            else:
                self.log_result("頁面載入速度", "FAIL", f"載入時間過長: {load_time:.2f}秒")
            
            # 檢查控制台錯誤
            errors = []
            page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
            
            await page.reload()
            await page.wait_for_load_state('networkidle')
            
            if len(errors) == 0:
                self.log_result("控制台錯誤", "PASS", "無控制台錯誤")
            else:
                self.log_result("控制台錯誤", "FAIL", f"發現 {len(errors)} 個錯誤")
                
        except Exception as e:
            self.log_result("效能測試", "FAIL", str(e))
    
    def print_summary(self):
        """印出測試總結"""
        total_tests = len(self.results)
        passed_tests = len([r for r in self.results if r["status"] == "PASS"])
        failed_tests = total_tests - passed_tests
        
        print("\n" + "="*60)
        print("🧪 測試總結報告")
        print("="*60)
        print(f"總測試數: {total_tests}")
        print(f"✅ 通過: {passed_tests}")
        print(f"❌ 失敗: {failed_tests}")
        print(f"📊 成功率: {(passed_tests/total_tests*100):.1f}%")
        print("="*60)
        
        if failed_tests > 0:
            print("\n❌ 失敗的測試:")
            for result in self.results:
                if result["status"] == "FAIL":
                    print(f"  - {result['test']}: {result['message']}")
    
    async def run_all_tests(self):
        """執行所有測試"""
        print("🚀 開始網站自動化測試...")
        print(f"🌐 測試目標: {self.base_url}")
        print("-"*60)
        
        async with async_playwright() as p:
            # 使用 Chromium 瀏覽器
            browser = await p.chromium.launch(headless=False)  # headless=False 可以看到瀏覽器動作
            context = await browser.new_context()
            page = await context.new_page()
            
            try:
                # 執行所有測試
                await self.test_homepage_load(page)
                await self.test_navigation(page)
                await self.test_debug_page(page)
                await self.test_responsive_design(page)
                await self.test_ui_components(page)
                await self.test_performance(page)
                
            finally:
                await browser.close()
        
        # 印出總結
        self.print_summary()

async def main():
    """主函數"""
    base_url = "http://localhost:3000"
    
    # 檢查是否有自定義 URL
    if len(sys.argv) > 1:
        base_url = sys.argv[1]
    
    print(f"🔧 智慧製造網站自動化測試工具")
    print(f"📅 測試時間: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    
    test_runner = WebsiteTest(base_url)
    await test_runner.run_all_tests()

if __name__ == "__main__":
    asyncio.run(main())