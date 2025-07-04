#!/usr/bin/env python3
"""
檢查 GitHub Actions 狀態
"""

import asyncio
from playwright.async_api import async_playwright

async def check_github_actions():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)  # 設為 False 以便查看瀏覽器
        page = await browser.new_page()
        
        print("🔍 檢查 GitHub Actions 狀態...")
        
        # 訪問 Actions 頁面
        actions_url = "https://github.com/p8552015/Personal-website/actions"
        print(f"訪問: {actions_url}")
        
        await page.goto(actions_url)
        await page.wait_for_load_state('networkidle')
        
        # 截圖
        await page.screenshot(path="github-actions-status.png", full_page=False)
        print("已保存截圖: github-actions-status.png")
        
        # 檢查設定頁面
        settings_url = "https://github.com/p8552015/Personal-website/settings/pages"
        print(f"\n訪問 Pages 設定: {settings_url}")
        
        await page.goto(settings_url)
        await page.wait_for_timeout(3000)
        
        await page.screenshot(path="github-pages-settings.png", full_page=False)
        print("已保存截圖: github-pages-settings.png")
        
        print("\n請檢查：")
        print("1. Actions 是否成功執行（綠色勾勾）")
        print("2. Pages 設定中 Source 是否設為 'GitHub Actions'")
        print("3. 如果 Source 還是 'Deploy from a branch'，請改為 'GitHub Actions'")
        
        await page.wait_for_timeout(5000)  # 等待 5 秒讓您查看
        await browser.close()

if __name__ == "__main__":
    asyncio.run(check_github_actions())