import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "點餐彙整小幫手 | 智慧製造 AI 解決方案",
  description: "群組訂單自動彙總，支援 Line Pay 結帳，讓團隊點餐變得更加便利和高效。",
};

export default function OrderBot() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 導航 */}
      <nav className="p-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-600">
            智慧製造 AI
          </Link>
          <Link 
            href="/" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            返回首頁
          </Link>
        </div>
      </nav>

      {/* Hero 區域 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🍱</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            點餐彙整小幫手
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            群組訂單自動彙總，支援 Line Pay 結帳
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
              立即點餐
            </button>
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-colors">
              查看菜單
            </button>
          </div>
        </div>
      </section>

      {/* 功能特色 */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">強大功能</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "群組點餐",
                description: "支援多人同時點餐，自動彙整所有訂單"
              },
              {
                icon: "🔄",
                title: "自動彙總",
                description: "智能計算總金額，自動生成訂單清單"
              },
              {
                icon: "💰",
                title: "Line Pay 整合",
                description: "支援 Line Pay 付款，分帳功能讓結帳更簡單"
              },
              {
                icon: "🏪",
                title: "多店家支援",
                description: "整合多家餐廳菜單，提供豐富的選擇"
              },
              {
                icon: "⏰",
                title: "配送追蹤",
                description: "即時追蹤訂單狀態，準確掌握配送時間"
              },
              {
                icon: "🎯",
                title: "智能推薦",
                description: "根據歷史訂單和偏好，提供個性化推薦"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-xl card-hover">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用流程 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">點餐流程</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "發起群組點餐",
                description: "在 Line 群組中輸入「開始點餐」，小幫手會自動建立訂單"
              },
              {
                step: "2",
                title: "選擇餐廳",
                description: "從合作餐廳清單中選擇，或直接說出想吃的料理類型"
              },
              {
                step: "3",
                title: "群組成員點餐",
                description: "群組成員可以直接回覆想要的餐點，系統自動記錄"
              },
              {
                step: "4",
                title: "自動彙總結帳",
                description: "小幫手彙總所有訂單，支援 Line Pay 分帳付款"
              },
              {
                step: "5",
                title: "追蹤配送",
                description: "即時追蹤訂單狀態，配送完成時自動通知"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作餐廳 */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">合作餐廳</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "🍜 拉麵店",
              "🍕 披薩屋",
              "🍔 漢堡店",
              "🥗 輕食館",
              "🍱 便當店",
              "🍣 日式料理",
              "🥘 中式餐廳",
              "☕ 咖啡廳"
            ].map((restaurant, index) => (
              <div key={index} className="bg-zinc-800 p-4 rounded-xl text-center card-hover">
                <div className="text-2xl mb-2">{restaurant.split(' ')[0]}</div>
                <div className="text-sm text-gray-300">{restaurant.split(' ')[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 區域 */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            讓團隊點餐變得更簡單
          </h2>
          <p className="text-xl mb-8 opacity-90">
            現在就開始使用點餐小幫手，享受便利的群組點餐體驗
          </p>
          <button className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            立即開始點餐
          </button>
        </div>
      </section>
    </main>
  );
}