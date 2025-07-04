#!/usr/bin/env python3
"""
測試所有新建立的頁面
"""

import asyncio
import time
from playwright.async_api import async_playwright

class AllPagesTest:
    def __init__(self):
        self.base_url = "https://p8552015.github.io/Personal-website"
        self.pages = [
            ("/", "首頁"),
            ("/solutions", "解決方案"),
            ("/cases", "案例展示"),
            ("/about", "關於我們"),
            ("/assistants", "智能助手"),
            ("/debug", "Debug 頁面"),
            ("/tech-stack", "技術架構"),
            ("/assistants/calendar-bot", "行事曆助手"),
            ("/assistants/order-bot", "點餐助手"),
            ("/assistants/production-bot", "產線助手")
        ]
        self.results = []
    
    def log(self, message, status="INFO"):
        timestamp = time.strftime("%H:%M:%S")
        icon = {
            "INFO": "ℹ️",
            "SUCCESS": "✅",
            "ERROR": "❌",
            "WARNING": "⚠️"
        }.get(status, "📝")
        print(f"[{timestamp}] {icon} {message}")
        self.results.append({"time": timestamp, "status": status, "message": message})
    
    async def test_page(self, page, path, name):
        """測試單一頁面"""
        try:
            url = f"{self.base_url}{path}"
            self.log(f"測試 {name}: {url}")
            
            response = await page.goto(url, wait_until='networkidle', timeout=15000)
            
            if response and response.status == 200:
                # 檢查頁面標題
                title = await page.title()
                
                # 檢查是否有主要內容
                h1_count = await page.locator("h1").count()
                nav_count = await page.locator("nav").count()
                
                if h1_count > 0 and nav_count > 0:
                    self.log(f"{name} 載入成功 - 標題: {title}", "SUCCESS")
                    return True
                else:
                    self.log(f"{name} 載入但內容不完整", "WARNING")
                    return False
            else:
                status_code = response.status if response else "無回應"
                self.log(f"{name} 載入失敗 - 狀態碼: {status_code}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"{name} 測試錯誤: {str(e)}", "ERROR")
            return False
    
    async def test_navigation(self, page):
        """測試導航連結"""
        try:
            # 回到首頁
            await page.goto(f"{self.base_url}/", wait_until='networkidle')
            
            # 檢查導航連結
            nav_links = await page.locator("nav a").all()
            self.log(f"找到 {len(nav_links)} 個導航連結", "INFO")
            
            working_links = 0
            for link in nav_links[:5]:  # 只測試前 5 個連結
                try:
                    href = await link.get_attribute("href")
                    if href and href.startswith("/"):
                        await link.click()
                        await page.wait_for_load_state('networkidle', timeout=5000)
                        current_url = page.url
                        if "404" not in current_url:
                            working_links += 1
                        await page.go_back()
                        await page.wait_for_load_state('networkidle', timeout=5000)
                except:
                    pass
            
            self.log(f"導航測試: {working_links}/5 連結正常工作", "SUCCESS" if working_links >= 4 else "WARNING")
            
        except Exception as e:
            self.log(f"導航測試錯誤: {str(e)}", "ERROR")
    
    def print_summary(self):
        """列印總結"""
        print("\n" + "="*70)
        print("🔍 完整網站測試總結")
        print("="*70)
        
        success_count = len([r for r in self.results if r["status"] == "SUCCESS"])
        error_count = len([r for r in self.results if r["status"] == "ERROR"])
        warning_count = len([r for r in self.results if r["status"] == "WARNING"])
        
        print(f"✅ 成功: {success_count}")
        print(f"⚠️  警告: {warning_count}")
        print(f"❌ 錯誤: {error_count}")
        
        success_rate = (success_count / len(self.results)) * 100 if self.results else 0
        print(f"📊 成功率: {success_rate:.1f}%")
        
        if success_rate >= 80:
            print("\n🎉 網站整體狀況良好！")
        elif success_rate >= 60:
            print("\n⚠️  網站基本正常，但有部分問題需要關注")
        else:
            print("\n❌ 網站存在較多問題，建議進一步檢查")
        
        print("="*70)

    async def run_all_tests(self):
        """執行所有測試"""
        print("🚀 開始完整網站測試...")
        print(f"🌐 測試目標: {self.base_url}")
        print("-"*70)
        
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context()
            page = await context.new_page()
            
            try:
                # 測試所有頁面
                self.log("開始測試所有頁面...")
                success_count = 0
                
                for path, name in self.pages:
                    if await self.test_page(page, path, name):
                        success_count += 1
                
                self.log(f"頁面測試完成: {success_count}/{len(self.pages)} 頁面正常", "SUCCESS")
                
                # 測試導航
                self.log("\n開始測試導航功能...")
                await self.test_navigation(page)
                
                # 截圖首頁
                await page.goto(f"{self.base_url}/", wait_until='networkidle')
                await page.screenshot(path="final-test-homepage.png", full_page=False)
                self.log("已保存首頁截圖: final-test-homepage.png", "SUCCESS")
                
            finally:
                await browser.close()
        
        # 列印總結
        self.print_summary()

async def main():
    print(f"🔧 智慧製造網站完整測試工具")
    print(f"📅 測試時間: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    
    tester = AllPagesTest()
    await tester.run_all_tests()

if __name__ == "__main__":
    asyncio.run(main())