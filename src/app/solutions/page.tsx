// src/app/solutions/page.tsx
import { FaTachometerAlt, FaDollarSign, FaBrain } from 'react-icons/fa';
import Image from 'next/image';

const ValueSection = ({ icon, title, subtitle, description, metrics, benefits, imageUrl, imageAlt, color }: any) => (
  <div className="py-20 border-b border-zinc-800">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className={`inline-flex items-center ${color} mb-6`}>
          <span className="text-4xl mr-4">{icon}</span>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="text-lg text-gray-400 mt-1">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">{description}</p>
        
        {/* 量化指標 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {metrics.map((metric: any, index: any) => (
            <div key={index} className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
              <div className={`text-3xl font-bold ${color} mb-2`}>{metric.value}</div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
              <div className="text-gray-500 text-xs mt-1">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* 核心優勢 */}
        <ul className="space-y-4">
          {benefits.map((benefit: any, index: any) => (
            <li key={index} className="flex items-start">
              <div className={`w-6 h-6 ${color.replace('text-', 'bg-').replace('-400', '-500')} rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="w-full h-96 relative rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </div>
);

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 頁面標題區塊 */}
        <header className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500 rounded-full text-red-400 text-sm font-semibold">
              Agentic Orchestrator 驅動
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-red-500">MCP-AI</span> 業務價值方案
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-8">
            透過五層架構和智能編排，為您的企業帶來可衡量的、實質性的商業回報
          </p>
          
          {/* 核心價值指標預覽 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-green-500/30">
              <div className="text-4xl font-bold text-green-400 mb-2">95%+</div>
              <div className="text-green-300 font-semibold">OEE 最大化</div>
              <div className="text-gray-400 text-sm mt-2">設備總合效率提升</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-blue-500/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">30%</div>
              <div className="text-blue-300 font-semibold">成本優化</div>
              <div className="text-gray-400 text-sm mt-2">運營成本降低</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-yellow-500/30">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-yellow-300 font-semibold">知識保存</div>
              <div className="text-gray-400 text-sm mt-2">經驗知識數位化</div>
            </div>
          </div>
        </header>

        {/* OEE 最大化方案 */}
        <ValueSection 
          icon={<FaTachometerAlt />}
          title="OEE 最大化"
          subtitle="Overall Equipment Effectiveness"
          description="透過 Agentic Orchestrator 智能編排各層數據流，從被動維修轉向主動預測，全面提升設備可用率、生產效能與產品質量。"
          color="text-green-400"
          metrics={[
            { value: "95%+", label: "設備可用率", description: "從 70% 提升至 95%" },
            { value: "85%+", label: "性能效率", description: "生產速度最佳化" },
            { value: "99%+", label: "產品質量率", description: "降低不良品率" },
            { value: "24/7", label: "即時監控", description: "全天候智能預警" }
          ]}
          benefits={[
            "AI 驅動的預測性維護，提前 30 天預警潛在故障",
            "即時生產參數分析，自動識別瓶頸並提供優化建議",
            "Tool-Sensor Hub 整合多元感測器，實現全方位設備監控",
            "生成式 AI 應用提供智能決策支援，提升營運效率"
          ]}
          imageUrl="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop"
          imageAlt="智慧工廠自動化生產線"
        />
        
        {/* 成本優化方案 */}
        <ValueSection 
          icon={<FaDollarSign />}
          title="成本優化"
          subtitle="Cost Optimization"
          description="透過 MCP 伺服器平台整合各工具模組，將員工從重複性工作中解放，同時大幅降低維護與運營成本。"
          color="text-blue-400"
          metrics={[
            { value: "30%", label: "運營成本降低", description: "包含人力與維護成本" },
            { value: "50%", label: "維修成本節省", description: "預防性維護效益" },
            { value: "40%", label: "差旅費用減少", description: "Tool-AR SOP 遠距協作" },
            { value: "60%", label: "培訓時間縮短", description: "AR 指引快速上手" }
          ]}
          benefits={[
            "Tool-OPC Server 自動化數據收集，減少人工記錄成本",
            "Tool-AR SOP 實現遠距專家協作，大幅節省差旅費用",
            "預測性維護避免重大設備故障，延長資產使用年限",
            "模組化架構降低系統整合成本，投資回報週期短"
          ]}
          imageUrl="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop"
          imageAlt="成本分析圖表"
        />

        {/* 知識保存方案 */}
        <ValueSection 
          icon={<FaBrain />}
          title="知識保存"
          subtitle="Knowledge Preservation"
          description="將資深員工腦中的隱性知識，透過 Tool-Knowledge Base 轉化為可查詢、可複用、可傳承的數位資產。"
          color="text-yellow-400"
          metrics={[
            { value: "100%", label: "知識數位化", description: "完整記錄專家經驗" },
            { value: "70%", label: "學習時間縮短", description: "新手快速上手" },
            { value: "∞", label: "知識複製", description: "無限次重複使用" },
            { value: "24/7", label: "知識可用", description: "隨時隨地存取" }
          ]}
          benefits={[
            "Tool-Knowledge Base 系統化記錄維修經驗與決策過程",
            "Tool-AR SOP 提供互動式操作指引，確保標準化執行",
            "生成式 AI 問答系統，讓隱性知識變成顯性資產",
            "每次互動都會被記錄，形成自我學習的智慧循環"
          ]}
          imageUrl="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
          imageAlt="團隊協作與知識分享"
        />

        {/* 實施策略 */}
        <div className="mt-20 bg-zinc-900/50 rounded-2xl p-12 border border-zinc-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              漸進式、低風險的實施策略
            </h2>
            <p className="text-xl text-gray-400">
              模組化五層架構設計，讓您從最迫切的需求著手，逐步擴展至全面智慧製造
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">快速啟動</h3>
              <p className="text-gray-400">選擇單一工具模組開始，立即見效</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">逐步擴展</h3>
              <p className="text-gray-400">根據效果逐層添加功能模組</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">全面整合</h3>
              <p className="text-gray-400">達成完整的五層架構智慧製造</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}