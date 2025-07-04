import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "產線查詢小幫手 | 智慧製造 AI 解決方案",
  description: "隨問即答 OEE、稼動率等生產數據，提供即時產線監控和智能分析功能。",
};

export default function ProductionBot() {
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
          <div className="text-6xl mb-6">🏭</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            產線查詢小幫手
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            隨問即答 OEE、稼動率，智能監控生產線狀態
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
              查看 Dashboard
            </button>
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-colors">
              即時監控
            </button>
          </div>
        </div>
      </section>

      {/* 實時數據展示 */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">即時生產數據</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "OEE 效率",
                value: "89.5%",
                trend: "+2.3%",
                color: "text-green-400"
              },
              {
                title: "稼動率",
                value: "94.2%",
                trend: "+1.8%",
                color: "text-blue-400"
              },
              {
                title: "良品率",
                value: "99.1%",
                trend: "+0.5%",
                color: "text-yellow-400"
              },
              {
                title: "產能利用率",
                value: "87.6%",
                trend: "-0.8%",
                color: "text-red-400"
              }
            ].map((metric, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-xl card-hover">
                <h3 className="text-sm text-gray-400 mb-2">{metric.title}</h3>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className={`text-sm ${metric.color}`}>
                  {metric.trend} vs 昨日
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特色 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">強大功能</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "即時數據查詢",
                description: "隨時查詢 OEE、稼動率、良品率等關鍵生產指標"
              },
              {
                icon: "🔍",
                title: "智能分析",
                description: "AI 分析生產數據，提供優化建議和預測報告"
              },
              {
                icon: "⚠️",
                title: "異常警報",
                description: "自動監控設備狀態，異常時立即發送警報通知"
              },
              {
                icon: "📈",
                title: "趨勢分析",
                description: "分析生產趨勢，預測產能變化和維護需求"
              },
              {
                icon: "🎯",
                title: "目標追蹤",
                description: "設定生產目標，追蹤達成率和績效表現"
              },
              {
                icon: "📱",
                title: "行動查詢",
                description: "透過 Line 隨時隨地查詢產線狀態和數據"
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

      {/* 查詢指令範例 */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">查詢指令範例</h2>
          <div className="space-y-6">
            {[
              {
                command: "今天的 OEE 是多少？",
                response: "今天的 OEE 是 89.5%，比昨天提高了 2.3%"
              },
              {
                command: "產線 A 的稼動率如何？",
                response: "產線 A 目前稼動率為 94.2%，運行狀況良好"
              },
              {
                command: "有哪些設備需要維護？",
                response: "設備 M-001 建議在 3 天內進行預防性維護"
              },
              {
                command: "本週的生產目標達成率？",
                response: "本週目標達成率 97.8%，超出預期目標"
              }
            ].map((example, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-xl">
                <div className="mb-4">
                  <div className="text-blue-400 font-medium mb-2">
                    👤 您：{example.command}
                  </div>
                  <div className="text-green-400 font-medium">
                    🤖 小幫手：{example.response}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 整合設備 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">支援設備</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "🏭 PLC 控制器",
              "🔧 CNC 機台",
              "🤖 工業機器人",
              "📡 感測器",
              "⚙️ 驅動器",
              "💨 空壓機",
              "🔥 加熱爐",
              "📊 SCADA 系統"
            ].map((device, index) => (
              <div key={index} className="bg-zinc-800 p-4 rounded-xl text-center card-hover">
                <div className="text-2xl mb-2">{device.split(' ')[0]}</div>
                <div className="text-sm text-gray-300">{device.split(' ')[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 區域 */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            讓 AI 成為您的生產助理
          </h2>
          <p className="text-xl mb-8 opacity-90">
            現在就開始使用產線查詢小幫手，享受智能化的生產管理體驗
          </p>
          <button className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            開始智能監控
          </button>
        </div>
      </section>
    </main>
  );
}