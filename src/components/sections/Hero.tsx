import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-red-900 overflow-hidden">
      {/* 背景裝飾 */}
      <div 
        className="absolute inset-0 bg-center opacity-10"
        style={{ 
          backgroundImage: `url('${process.env.NODE_ENV === 'production' ? '/Personal-website' : ''}/grid.svg')` 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      {/* 主要內容 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* 標題 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">智慧製造</span>
          <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            AI 驅動未來
          </span>
        </h1>
        
        {/* 副標題 */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          結合 Line + MCP 智能小幫手與四層技術架構，
          <br className="hidden md:block" />
          打造全方位智慧製造解決方案
        </p>
        
        {/* 核心賣點 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {[
            { icon: "🤖", text: "AI 智能協作" },
            { icon: "📊", text: "即時資料分析" },
            { icon: "🔧", text: "預測性維護" },
            { icon: "📱", text: "AR/MR 應用" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
        
        {/* CTA 按鈕 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#Smart-Assistants"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center group"
          >
            探索 AI 小幫手
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
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
          
          <Link
            href="#Tech-Stack"
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            了解技術架構
          </Link>
        </div>
        
        {/* 統計數據 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "客戶案例" },
            { number: "99.9%", label: "系統穩定性" },
            { number: "24/7", label: "技術支援" },
            { number: "50%", label: "效率提升" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 滾動指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#Smart-Assistants" className="text-white hover:text-red-400 transition-colors">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}