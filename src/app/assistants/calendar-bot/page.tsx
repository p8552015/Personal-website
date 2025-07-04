import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "行事曆小幫手 | 智慧製造 AI 解決方案",
  description: "使用自然語言進行排程，秒速同步 Google Calendar 和 Outlook，讓會議安排變得更加智能化。",
};

export default function CalendarBot() {
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
          <div className="text-6xl mb-6">📅</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            行事曆小幫手
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            使用自然語言進行排程，秒速同步 Google Calendar 和 Outlook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
              立即體驗
            </button>
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-colors">
              查看示範
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
                icon: "🗣️",
                title: "自然語言排程",
                description: "只需說出「明天下午2點開會」，系統自動識別並創建行程"
              },
              {
                icon: "🔄",
                title: "多平台同步",
                description: "支援 Google Calendar、Outlook、Apple Calendar 等多平台同步"
              },
              {
                icon: "🤖",
                title: "智能提醒",
                description: "AI 智能分析會議重要性，提供個性化提醒服務"
              },
              {
                icon: "📊",
                title: "會議分析",
                description: "自動分析會議效率，提供時間管理建議"
              },
              {
                icon: "👥",
                title: "團隊協作",
                description: "群組排程、會議室預約、參與者可用性檢查"
              },
              {
                icon: "🔐",
                title: "安全保障",
                description: "企業級安全標準，確保行程資料絕對安全"
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

      {/* 使用方式 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">如何使用</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "添加 Line 好友",
                description: "掃描 QR Code 或搜尋 Line ID 添加行事曆小幫手"
              },
              {
                step: "2",
                title: "連接行事曆",
                description: "授權連接您的 Google Calendar 或 Outlook"
              },
              {
                step: "3",
                title: "開始對話",
                description: "直接用自然語言告訴小幫手您的排程需求"
              },
              {
                step: "4",
                title: "智能管理",
                description: "享受 AI 驅動的智能行程管理體驗"
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

      {/* CTA 區域 */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            準備好讓 AI 管理您的行程了嗎？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            現在就開始使用行事曆小幫手，體驗智能排程的便利性
          </p>
          <button className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            立即開始使用
          </button>
        </div>
      </section>
    </main>
  );
}