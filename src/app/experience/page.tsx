import React from 'react';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-red-600">個人經歷</h1>
        
        {/* 個人概況 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-red-500">個人概況</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">產業年資</h3>
              <p className="text-3xl font-bold text-white mb-2">22 年</p>
              <p className="text-gray-300">研發＋產學合作</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">專利數量</h3>
              <p className="text-3xl font-bold text-white mb-2">30 件</p>
              <p className="text-gray-300">國內外發明專利</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">技轉／產學案</h3>
              <p className="text-3xl font-bold text-white mb-2">60+ 件</p>
              <p className="text-gray-300">多領域合作經驗</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">合作企業</h3>
              <p className="text-3xl font-bold text-white mb-2">50 餘家</p>
              <p className="text-gray-300">跨產業合作夥伴</p>
            </div>
          </div>
          <div className="mt-6 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-red-400">2022–2024 產學計畫申請核准經費</h3>
            <p className="text-4xl font-bold text-white">2 億元以上</p>
          </div>
        </section>

        {/* 技術專長 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-red-500">技術專長</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-400">通訊協定</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 控制器自訂協定</li>
                <li>• MCP（Model Context Protocol）</li>
                <li>• OPC UA Server</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-400">AI／Edge</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AI 機邊運算</li>
                <li>• 生成式 AI 應用（RAG、Agents 等）</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-400">XR 技術</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AR/MR 遠端支援</li>
                <li>• 虛實整合</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-400">OT 資料採集</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 感測器串接</li>
                <li>• 工業資料管線</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg md:col-span-2">
              <h3 className="text-lg font-semibold mb-3 text-red-400">系統整合</h3>
              <p className="text-gray-300">產線 OT–IT–AI 端到端解決方案</p>
            </div>
          </div>
        </section>

        {/* 產學合作與技轉 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-red-500">產學合作與技轉</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-400">產學合作經驗</h3>
              <p className="text-3xl font-bold text-white">15 年</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-400">技轉／產學案</h3>
              <p className="text-3xl font-bold text-white">60+ 件</p>
              <p className="text-gray-300 mt-2">涵蓋智慧製造、機械、電子、AIoT 等</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-400">核心成果</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AI 邊緣裝置</li>
                <li>• 智慧機台控制器</li>
                <li>• OPC UA 軟體堆疊</li>
                <li>• XR 遠端導引系統</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 近三年競賽與榮譽 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-red-500">近三年競賽與榮譽</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
              <thead className="bg-red-600">
                <tr>
                  <th className="px-6 py-3 text-left text-white">年度</th>
                  <th className="px-6 py-3 text-left text-white">比賽名稱</th>
                  <th className="px-6 py-3 text-left text-white">獎項／名次</th>
                  <th className="px-6 py-3 text-left text-white">榮譽／獎金</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4">2022</td>
                  <td className="px-6 py-4">中華電信比賽</td>
                  <td className="px-6 py-4 font-semibold text-red-400">最佳技術獎</td>
                  <td className="px-6 py-4">NT$ 80,000</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4">2022</td>
                  <td className="px-6 py-4">中華電信比賽</td>
                  <td className="px-6 py-4">佳作</td>
                  <td className="px-6 py-4">NT$ 50,000</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4">2023</td>
                  <td className="px-6 py-4">聯網大賽</td>
                  <td className="px-6 py-4 font-semibold text-red-400">季軍</td>
                  <td className="px-6 py-4">NT$ 100,000</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4">2023</td>
                  <td className="px-6 py-4">中華電信創新競賽</td>
                  <td className="px-6 py-4">入圍決賽</td>
                  <td className="px-6 py-4">NT$ 10,000</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4">2024</td>
                  <td className="px-6 py-4">EE 創意挑戰賽 (AIoT)</td>
                  <td className="px-6 py-4">入圍決賽</td>
                  <td className="px-6 py-4">—</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-6 py-4">2024</td>
                  <td className="px-6 py-4">GEN AI Stars</td>
                  <td className="px-6 py-4 font-semibold text-red-400">特優</td>
                  <td className="px-6 py-4">NT$ 100,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">2024</td>
                  <td className="px-6 py-4">MobileHero 國際大賽</td>
                  <td className="px-6 py-4 font-semibold text-red-400">國際賽前 9 名</td>
                  <td className="px-6 py-4">新創輔導 10 天</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}