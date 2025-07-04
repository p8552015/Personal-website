import Link from 'next/link';

interface TechLayer {
  title: string;
  icon: string;
  items: string[];
  description: string;
}

const layers: TechLayer[] = [
  {
    title: "OT 資料採集與通訊層",
    icon: "🔗",
    description: "整合工業設備與系統通訊",
    items: [
      "控制器通訊標準化（OPC UA）",
      "老舊設備 OT 資料整合與採集",
      "即時資料串流處理",
      "設備狀態監控"
    ]
  },
  {
    title: "知識庫與語言模型層",
    icon: "🧠",
    description: "AI 驅動的知識處理系統",
    items: [
      "RAG 系統開發",
      "LLM 應用服務開發",
      "領域知識圖譜建構",
      "智能語義分析"
    ]
  },
  {
    title: "AI 協作與推理層",
    icon: "🤖",
    description: "多代理人智能協作平台",
    items: [
      "AI 多代理人協作機制開發",
      "設備故障診斷",
      "預測性維護算法",
      "自適應決策系統"
    ]
  },
  {
    title: "智慧應用呈現層",
    icon: "📱",
    description: "沉浸式用戶體驗界面",
    items: [
      "AR/MR 智慧維修方案",
      "實時儀表板",
      "行動端應用",
      "語音交互界面"
    ]
  }
];

export default function TechStackGrid() {
  return (
    <section id="Tech-Stack" className="px-4 py-16 md:py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* 標題區域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            技術架構
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            四層技術架構打造完整的智慧製造解決方案，從底層資料採集到上層應用呈現，實現端到端的智能化轉型
          </p>
        </div>

        {/* 架構圖 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-xl p-6 card-hover group relative overflow-hidden"
            >
              {/* 層級指示器 */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
                第 {index + 1} 層
              </div>
              
              {/* 圖標 */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {layer.icon}
              </div>
              
              {/* 標題 */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                {layer.title}
              </h3>
              
              {/* 描述 */}
              <p className="text-gray-400 text-sm mb-4">
                {layer.description}
              </p>
              
              {/* 功能項目 */}
              <ul className="space-y-2">
                {layer.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm text-gray-300 flex items-start"
                  >
                    <span className="text-red-400 mr-2 mt-1 text-xs">●</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 數據流向圖 */}
        <div className="bg-zinc-800 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            資料流向與處理流程
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {['設備資料', '資料處理', 'AI 分析', '應用呈現'].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <span className="ml-3 text-white font-medium">{step}</span>
                {index < 3 && (
                  <svg
                    className="w-8 h-8 text-gray-400 ml-4 hidden md:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 核心優勢 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "模組化架構",
              desc: "彈性組合各層級功能，適應不同製造環境需求",
              icon: "🧩"
            },
            {
              title: "即時響應",
              desc: "毫秒級資料處理，確保生產線穩定運行",
              icon: "⚡"
            },
            {
              title: "智能決策",
              desc: "AI 驅動的預測分析，優化製程效率",
              icon: "🎯"
            }
          ].map((advantage, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-3">{advantage.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {advantage.title}
              </h4>
              <p className="text-gray-300 text-sm">
                {advantage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA 按鈕 */}
        <div className="text-center">
          <Link
            href="/tech-stack"
            className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            了解技術架構詳情
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}