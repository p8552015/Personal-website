// src/components/sections/HeroNew.tsx
import Link from 'next/link';

export default function HeroNew() {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500 rounded-full text-red-400 text-sm font-semibold mb-4">
            Agentic Orchestrator 核心驅動
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-red-500">MCP-AI</span>
          <br />
          生成式智慧製造平台
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          五層架構 • 智能編排 • 價值最大化
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          透過 <span className="text-red-400 font-semibold">Agentic Orchestrator</span> 智能編排，
          連接數據採集到生成式 AI 應用的完整五層架構，實現 <span className="text-green-400 font-semibold">OEE 最大化</span>、
          <span className="text-blue-400 font-semibold">成本優化</span> 與 <span className="text-yellow-400 font-semibold">知識保存</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/solutions"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            探索業務價值方案
          </Link>
          <Link
            href="/architecture"
            className="px-8 py-4 bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white rounded-lg font-semibold transition-all duration-200"
          >
            了解五層架構
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">95%+</div>
            <div className="text-sm text-gray-400">OEE 提升</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">30%</div>
            <div className="text-sm text-gray-400">成本降低</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">100%</div>
            <div className="text-sm text-gray-400">知識保存</div>
          </div>
        </div>
      </div>
    </section>
  );
}