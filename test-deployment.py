#!/usr/bin/env python3
"""
使用 Playwright 測試 GitHub Pages 部署
"""

import asyncio
import time
from playwright.async_api import async_playwright

class DeploymentTest:
    def __init__(self):
        self.url = "https://p8552015.github.io/Personal-website/"
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
    
    async def check_deployment(self):
        """檢查部署狀態"""
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context()
            page = await context.new_page()
            
            self.log("開始檢查 GitHub Pages 部署狀態...")
            self.log(f"目標網址: {self.url}")
            
            try:
                # 嘗試訪問網站
                self.log("嘗試連接網站...")
                response = await page.goto(self.url, wait_until='networkidle', timeout=30000)
                
                if response:
                    status_code = response.status
                    self.log(f"HTTP 狀態碼: {status_code}")
                    
                    if status_code == 200:
                        self.log("網站成功回應！", "SUCCESS")
                        
                        # 檢查頁面標題
                        title = await page.title()
                        self.log(f"頁面標題: {title}")
                        
                        if "智慧製造" in title:
                            self.log("標題驗證通過！", "SUCCESS")
                        else:
                            self.log("標題不符合預期", "WARNING")
                        
                        # 檢查主要內容
                        try:
                            # 等待主要內容載入
                            await page.wait_for_selector("h1", timeout=5000)
                            h1_text = await page.locator("h1").first.text_content()
                            self.log(f"找到 H1 標題: {h1_text}", "SUCCESS")
                            
                            # 檢查導航列
                            nav = await page.locator("nav").count()
                            if nav > 0:
                                self.log("導航列已載入", "SUCCESS")
                            else:
                                self.log("未找到導航列", "WARNING")
                            
                            # 檢查按鈕
                            buttons = await page.locator("button").count()
                            self.log(f"找到 {buttons} 個按鈕", "SUCCESS")
                            
                            # 截圖
                            screenshot_path = "deployment-test.png"
                            await page.screenshot(path=screenshot_path, full_page=True)
                            self.log(f"已保存截圖: {screenshot_path}", "SUCCESS")
                            
                        except Exception as e:
                            self.log(f"內容檢查失敗: {str(e)}", "ERROR")
                    
                    elif status_code == 404:
                        self.log("網站返回 404 - 可能還在部署中", "WARNING")
                        self.log("請稍後再試或檢查 GitHub Pages 設定", "WARNING")
                    
                    else:
                        self.log(f"網站返回非預期狀態碼: {status_code}", "ERROR")
                
                else:
                    self.log("無法取得網站回應", "ERROR")
                    
            except Exception as e:
                self.log(f"連接失敗: {str(e)}", "ERROR")
                self.log("可能原因：", "INFO")
                self.log("1. 網站還在部署中（第一次部署可能需要 5-10 分鐘）", "INFO")
                self.log("2. GitHub Pages 未正確設定", "INFO")
                self.log("3. 網路連線問題", "INFO")
            
            finally:
                await browser.close()
    
    async def check_subpages(self):
        """檢查子頁面"""
        subpages = [
            ("/debug", "Debug 頁面"),
            ("/assistants/calendar-bot", "行事曆助手頁面"),
            ("/tech-stack", "技術架構頁面")
        ]
        
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context()
            page = await context.new_page()
            
            self.log("\n檢查子頁面...")
            
            for path, name in subpages:
                url = self.url.rstrip('/') + path
                try:
                    self.log(f"檢查 {name}: {url}")
                    response = await page.goto(url, wait_until='networkidle', timeout=15000)
                    
                    if response and response.status == 200:
                        self.log(f"{name} 載入成功", "SUCCESS")
                    else:
                        self.log(f"{name} 載入失敗", "ERROR")
                        
                except Exception as e:
                    self.log(f"{name} 訪問錯誤: {str(e)}", "ERROR")
            
            await browser.close()
    
    def print_summary(self):
        """列印總結"""
        print("\n" + "="*60)
        print("🔍 部署檢查總結")
        print("="*60)
        
        success_count = len([r for r in self.results if r["status"] == "SUCCESS"])
        error_count = len([r for r in self.results if r["status"] == "ERROR"])
        warning_count = len([r for r in self.results if r["status"] == "WARNING"])
        
        print(f"✅ 成功: {success_count}")
        print(f"⚠️  警告: {warning_count}")
        print(f"❌ 錯誤: {error_count}")
        
        if error_count == 0 and success_count > 0:
            print("\n🎉 網站部署成功！")
            print(f"🌐 訪問網址: {self.url}")
        elif warning_count > 0:
            print("\n⚠️  網站可能還在部署中，請稍後再試")
        else:
            print("\n❌ 部署可能有問題，請檢查 GitHub Actions 狀態")
        
        print("="*60)

async def main():
    print("🚀 GitHub Pages 部署測試工具")
    print(f"📅 測試時間: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    print("-"*60)
    
    tester = DeploymentTest()
    
    # 基本部署檢查
    await tester.check_deployment()
    
    # 如果主頁成功，檢查子頁面
    if any(r["status"] == "SUCCESS" for r in tester.results):
        await tester.check_subpages()
    
    # 列印總結
    tester.print_summary()

if __name__ == "__main__":
    asyncio.run(main())