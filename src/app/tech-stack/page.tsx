import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "技術架構詳情 | 智慧製造 AI 解決方案",
  description: "深入了解我們的四層技術架構：OT資料採集、知識庫與語言模型、AI協作推理、智慧應用呈現。",
};

export default function TechStack() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            四層技術架構
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            從底層資料採集到上層應用呈現，打造完整的智慧製造解決方案
          </p>
        </div>
      </section>

      {/* 架構概覽 */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">架構概覽</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                layer: "第四層",
                title: "智慧應用呈現層",
                icon: "📱",
                color: "from-purple-500 to-purple-600"
              },
              {
                layer: "第三層",
                title: "AI 協作與推理層",
                icon: "🤖",
                color: "from-blue-500 to-blue-600"
              },
              {
                layer: "第二層",
                title: "知識庫與語言模型層",
                icon: "🧠",
                color: "from-green-500 to-green-600"
              },
              {
                layer: "第一層",
                title: "OT 資料採集與通訊層",
                icon: "🔗",
                color: "from-red-500 to-red-600"
              }
            ].map((layer, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-br ${layer.color} rounded-xl p-6 text-center h-full`}>
                  <div className="text-xs opacity-80 mb-2">{layer.layer}</div>
                  <div className="text-3xl mb-3">{layer.icon}</div>
                  <h3 className="text-lg font-semibold">{layer.title}</h3>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細介紹 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* 第一層：OT 資料採集與通訊層 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🔗</div>
                <div>
                  <h3 className="text-2xl font-bold">OT 資料採集與通訊層</h3>
                  <p className="text-red-400">第一層 - 基礎資料層</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                作為整個系統的基礎，負責從各種工業設備和系統中採集資料，確保資料的準確性和即時性。
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔧 控制器通訊標準化（OPC UA）</h4>
                  <p className="text-sm text-gray-300">統一的工業通訊協定，確保不同廠商設備間的互操作性</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🏭 老舊設備 OT 資料整合</h4>
                  <p className="text-sm text-gray-300">透過轉換器和閘道器整合既有設備，延續投資價值</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">支援協定</h4>
              <div className="grid grid-cols-2 gap-3">
                {["OPC UA", "Modbus", "EtherNet/IP", "PROFINET", "DeviceNet", "AS-i", "IO-Link", "MQTT"].map((protocol) => (
                  <div key={protocol} className="bg-zinc-700 p-2 rounded text-center text-sm">
                    {protocol}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 第二層：知識庫與語言模型層 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">AI 技術棧</h4>
              <div className="space-y-3">
                {[
                  { name: "LLM 模型", desc: "GPT-4, Claude, Gemini" },
                  { name: "向量資料庫", desc: "Pinecone, Weaviate, Chroma" },
                  { name: "檢索增強", desc: "RAG, Fine-tuning" },
                  { name: "知識圖譜", desc: "Neo4j, ArangoDB" }
                ].map((tech, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-gray-400">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold">知識庫與語言模型層</h3>
                  <p className="text-green-400">第二層 - 智能處理層</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                整合大語言模型和領域知識，提供智能化的資料分析和處理能力。
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📚 RAG 系統開發</h4>
                  <p className="text-sm text-gray-300">檢索增強生成技術，結合企業知識庫提供精確答案</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔮 LLM 應用服務</h4>
                  <p className="text-sm text-gray-300">客製化語言模型，專精於製造業領域知識</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第三層：AI 協作與推理層 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold">AI 協作與推理層</h3>
                  <p className="text-blue-400">第三層 - 智能決策層</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                運用 AI 代理人協作機制，進行複雜的推理和決策，提供智能化的解決方案。
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🤝 多代理人協作</h4>
                  <p className="text-sm text-gray-300">不同專業 AI 代理人協同工作，解決複雜製造問題</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔍 設備故障診斷</h4>
                  <p className="text-sm text-gray-300">運用機器學習演算法預測和診斷設備異常</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">AI 能力</h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "預測性維護",
                  "品質控制",
                  "產能優化",
                  "排程規劃",
                  "異常檢測",
                  "能耗管理"
                ].map((capability) => (
                  <div key={capability} className="bg-zinc-700 p-3 rounded flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 第四層：智慧應用呈現層 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">應用場景</h4>
              <div className="space-y-4">
                {[
                  { icon: "🥽", title: "AR 維修指導", desc: "擴增實境輔助維修作業" },
                  { icon: "📱", title: "行動監控", desc: "隨時隨地監控產線狀態" },
                  { icon: "📊", title: "智能儀表板", desc: "即時數據視覺化呈現" },
                  { icon: "🗣️", title: "語音交互", desc: "自然語言操作界面" }
                ].map((app, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-2xl">{app.icon}</div>
                    <div>
                      <h5 className="font-medium">{app.title}</h5>
                      <p className="text-sm text-gray-400">{app.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">📱</div>
                <div>
                  <h3 className="text-2xl font-bold">智慧應用呈現層</h3>
                  <p className="text-purple-400">第四層 - 用戶體驗層</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                提供直觀的用戶界面和沉浸式體驗，讓複雜的製造數據變得易於理解和操作。
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🥽 AR/MR 智慧維修</h4>
                  <p className="text-sm text-gray-300">結合實境技術，提供步驟式維修指導</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📱 行動應用</h4>
                  <p className="text-sm text-gray-300">跨平台行動應用，隨時掌握生產狀況</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 整合優勢 */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">整合優勢</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "高效整合",
                description: "四層架構無縫銜接，確保資料流暢通無阻"
              },
              {
                icon: "🔧",
                title: "彈性擴充",
                description: "模組化設計，可根據需求靈活調整和擴充"
              },
              {
                icon: "🛡️",
                title: "安全可靠",
                description: "多層次安全防護，確保工業數據絕對安全"
              },
              {
                icon: "💡",
                title: "智能決策",
                description: "AI 驅動的智能分析，提供最佳化建議"
              },
              {
                icon: "🎯",
                title: "精準控制",
                description: "即時監控和控制，提升生產效率和品質"
              },
              {
                icon: "🚀",
                title: "創新應用",
                description: "持續導入新技術，保持競爭優勢"
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-xl text-center card-hover">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 區域 */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            準備好開始您的智慧製造之旅嗎？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            聯繫我們的專家團隊，為您量身打造最適合的解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
              諮詢專家
            </button>
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-red-600 rounded-lg font-semibold transition-colors">
              預約示範
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}