// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-red-600">AI Agent</h3>
            <p className="mt-2 text-gray-400 text-sm">重定義智慧製造的未來。</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">導覽</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/architecture" className="text-base text-gray-400 hover:text-white">技術架構</Link></li>
              <li><Link href="/solutions" className="text-base text-gray-400 hover:text-white">解決方案</Link></li>
              <li><Link href="/use-cases" className="text-base text-gray-400 hover:text-white">應用範例</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">關於</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-base text-gray-400 hover:text-white">關於我們</Link></li>
              <li><Link href="/assistants" className="text-base text-gray-400 hover:text-white">AI 小幫手</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">聯絡資訊</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="mailto:contact@mcp-ai.com" className="hover:text-white">contact@mcp-ai.com</a></li>
              <li><a href="tel:+886-2-1234-5678" className="hover:text-white">+886-2-1234-5678</a></li>
              <li>台北市信義區市府路45號</li>
            </ul>
          </div>

        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} AI Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}