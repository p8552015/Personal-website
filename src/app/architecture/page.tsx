// src/app/architecture/page.tsx
import { FaDatabase, FaNetworkWired, FaCogs, FaServer, FaBrain, FaEye, FaVrCardboard, FaCloudUploadAlt, FaRobot } from 'react-icons/fa';

// Component for each layer's detailed view
const LayerDetail = ({ icon, title, subtitle, description, tools, children, layerNumber, color }: any) => (
  <div className="mb-20">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 ${color.replace('text-', 'bg-').replace('-400', '-500')} rounded-full flex items-center justify-center mr-6`}>
            <span className="text-2xl text-white">{icon}</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-lg font-bold ${color}`}>Layer {layerNumber}</span>
              <span className="text-gray-400">•</span>
              <h3 className="text-3xl font-bold text-white">{title}</h3>
            </div>
            <p className={`text-lg ${color}`}>{subtitle}</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">{description}</p>
        
        {/* 工具模組展示 */}
        {tools && (
          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-bold text-white mb-4">核心工具模組</h4>
            {tools.map((tool: any, index: any) => (
              <div key={index} className={`bg-zinc-900 border-l-4 ${color.replace('text-', 'border-')} p-6 rounded-r-lg`}>
                <div className="flex items-center mb-3">
                  <tool.icon className={`text-2xl ${color} mr-3`} />
                  <h5 className="text-lg font-bold text-white">{tool.name}</h5>
                </div>
                <p className="text-gray-300 mb-3">{tool.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tool.features.map((feature: any, idx: any) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className={`w-2 h-2 ${color.replace('text-', 'bg-')} rounded-full mr-2`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {children && <div className="space-y-4">{children}</div>}
      </div>
      
      <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-700">
        <div className="text-center mb-6">
          <h4 className="text-xl font-bold text-white mb-2">架構圖示</h4>
          <p className="text-gray-400 text-sm">Layer {layerNumber} 技術堆疊</p>
        </div>
        <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center border border-zinc-600">
          <div className={`text-6xl ${color} opacity-20`}>{icon}</div>
        </div>
      </div>
    </div>
  </div>
);

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 頁面標題 */}
        <header className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500 rounded-full text-red-400 text-sm font-semibold">
              MCP-AI 核心技術
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            五層架構 <span className="text-red-500">技術詳解</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-8">
            從物理世界的數據採集到生成式 AI 應用，透過 Agentic Orchestrator 智能編排的完整技術堆疊
          </p>
          
          {/* 架構概覽 */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700">
              <h3 className="text-2xl font-bold text-white mb-6">五層架構概覽</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <span className="text-purple-400 font-medium">Layer 5: 生成式 AI 應用層</span>
                  <FaBrain className="text-purple-400 text-xl" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-red-500"></div>
                </div>
                <div className="flex items-center justify-between bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <span className="text-red-400 font-medium">Layer 4: MCP 伺服器平台層 (Agentic Orchestrator)</span>
                  <FaServer className="text-red-400 text-xl" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-red-500 to-blue-500"></div>
                </div>
                <div className="flex items-center justify-between bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <span className="text-blue-400 font-medium">Layer 3: 模組化工具層</span>
                  <FaCogs className="text-blue-400 text-xl" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-green-500"></div>
                </div>
                <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <span className="text-green-400 font-medium">Layer 2: 標準化通訊層</span>
                  <FaNetworkWired className="text-green-400 text-xl" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-yellow-500"></div>
                </div>
                <div className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <span className="text-yellow-400 font-medium">Layer 1: 數據採集層</span>
                  <FaDatabase className="text-yellow-400 text-xl" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Layer 5: 生成式 AI 應用層 */}
        <LayerDetail 
          icon={<FaBrain />}
          title="生成式 AI 應用層"
          subtitle="Generative AI Applications"
          description="直接面向使用者的最終應用，將複雜的技術轉化為直觀、易用且具備智慧的服務，透過自然語言交互實現智能決策。"
          layerNumber={5}
          color="text-purple-400"
          tools={[
            {
              name: "ChatGPT 式工廠助手",
              icon: FaRobot,
              description: "基於大語言模型的智能對話系統，提供即時的生產諮詢與問題解答",
              features: ["自然語言查詢", "智能問答", "生產建議", "故障診斷"]
            },
            {
              name: "預測性維護 AI",
              icon: FaEye,
              description: "運用機器學習預測設備故障，提前安排維護計畫",
              features: ["故障預警", "維護排程", "成本分析", "效能優化"]
            },
            {
              name: "智能內容生成",
              icon: FaCloudUploadAlt,
              description: "自動生成維修報告、操作手冊和培訓材料",
              features: ["自動報告", "文檔生成", "知識整理", "培訓內容"]
            }
          ]}
        />

        {/* Layer 4: MCP 伺服器平台層 */}
        <LayerDetail 
          icon={<FaServer />}
          title="MCP 伺服器平台層"
          subtitle="MCP Server Platform with Agentic Orchestrator"
          description="系統的核心大腦，透過 Agentic Orchestrator 智能編排所有底層工具、管理數據流、執行複雜的業務邏輯，實現多 Agent 協作。"
          layerNumber={4}
          color="text-red-400"
          tools={[
            {
              name: "Agentic Orchestrator",
              icon: FaRobot,
              description: "任務總指揮，負責接收複雜需求，分解任務並協調各個 AI 代理共同完成",
              features: ["智能任務分解", "多Agent協作", "動態路由", "負載平衡"]
            },
            {
              name: "統一 API 管理",
              icon: FaNetworkWired,
              description: "提供標準化的 API 介面，整合所有工具模組的功能",
              features: ["API 閘道", "版本控制", "存取控制", "監控告警"]
            },
            {
              name: "知識層管理",
              icon: FaBrain,
              description: "平台的長期記憶體，整合向量資料庫、文件 AI 等知識資源",
              features: ["向量搜尋", "知識圖譜", "語義理解", "上下文管理"]
            }
          ]}
        />

        {/* Layer 3: 模組化工具層 */}
        <LayerDetail 
          icon={<FaCogs />}
          title="模組化工具層"
          subtitle="Modular Tools - 即插即用的功能模組"
          description="實現具體功能的軟硬體結合模組，包含數據處理、知識管理與 AR/MR 協作工具，為上層應用提供專業化服務。"
          layerNumber={3}
          color="text-blue-400"
          tools={[
            {
              name: "Tool-Sensor Hub",
              icon: FaDatabase,
              description: "整合多元感測器的數據收集中心，統一管理各種 IoT 設備與感測器",
              features: ["多協議支援", "即時監控", "數據緩存", "異常檢測"]
            },
            {
              name: "Tool-OPC Server",
              icon: FaNetworkWired,
              description: "工業標準 OPC UA 伺服器，實現與工業設備的無縫連接",
              features: ["OPC UA 協議", "設備建模", "數據安全", "歷史資料"]
            },
            {
              name: "Tool-AR SOP",
              icon: FaVrCardboard,
              description: "擴增實境標準操作程序工具，提供互動式維修指引與遠距協作",
              features: ["AR 指引", "步驟追蹤", "遠距協作", "操作記錄"]
            },
            {
              name: "Tool-Knowledge Base",
              icon: FaBrain,
              description: "企業知識管理系統，將專家經驗數位化並建立可搜尋的知識庫",
              features: ["知識擷取", "智能檢索", "版本控制", "權限管理"]
            }
          ]}
        />

        {/* Layer 2: 標準化通訊層 */}
        <LayerDetail 
          icon={<FaNetworkWired />}
          title="標準化通訊層"
          subtitle="Standardized Communication"
          description="將採集到的多樣化、異質性原始數據，轉換為統一、標準的通訊協定，確保系統間的互操作性。"
          layerNumber={2}
          color="text-green-400"
          tools={[
            {
              name: "OPC UA Gateway",
              icon: FaServer,
              description: "工業自動化的通用語言，將複雜設備的數據模型化",
              features: ["設備抽象", "數據模型", "安全通訊", "跨平台"]
            },
            {
              name: "MQTT Broker",
              icon: FaCloudUploadAlt,
              description: "輕量級物聯網訊息協定，實現高效數據傳輸",
              features: ["發布訂閱", "QoS 保證", "低延遲", "高吞吐"]
            },
            {
              name: "RESTful API",
              icon: FaNetworkWired,
              description: "標準化 Web API 介面，支援現代應用程式整合",
              features: ["HTTP 協議", "JSON 格式", "狀態無關", "快取支援"]
            }
          ]}
        />

        {/* Layer 1: 數據採集層 */}
        <LayerDetail 
          icon={<FaDatabase />}
          title="數據採集層"
          subtitle="Data Acquisition"
          description="所有智慧應用的基礎，負責從物理世界中獲取原始數據，包含感測器數據、設備數據、視覺數據及文件資料。"
          layerNumber={1}
          color="text-yellow-400"
          tools={[
            {
              name: "IoT 感測器網路",
              icon: FaDatabase,
              description: "部署各種感測器採集溫度、震動、電流等物理量",
              features: ["多元感測", "即時採集", "邊緣處理", "無線傳輸"]
            },
            {
              name: "工業相機系統",
              icon: FaEye,
              description: "高解析度視覺檢測，用於品質檢驗與異常偵測",
              features: ["高速攝影", "影像分析", "缺陷檢測", "尺寸測量"]
            },
            {
              name: "PLC/SCADA 整合",
              icon: FaServer,
              description: "與現有工業控制系統整合，獲取設備運行數據",
              features: ["協議轉換", "數據同步", "即時監控", "歷史追蹤"]
            }
          ]}
        />

        {/* 總結區塊 */}
        <div className="mt-20 bg-zinc-900/50 rounded-2xl p-12 border border-zinc-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-red-500">Agentic Orchestrator</span> 驅動的智能製造
            </h2>
            <p className="text-xl text-gray-400">
              五層架構透過智能編排，實現從數據到價值的完整轉換
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEye className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">智能感知</h3>
              <p className="text-gray-400">多層數據採集與標準化處理</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRobot className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">智能編排</h3>
              <p className="text-gray-400">Agentic Orchestrator 協調所有工具</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">智能應用</h3>
              <p className="text-gray-400">生成式 AI 驅動的業務價值</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}