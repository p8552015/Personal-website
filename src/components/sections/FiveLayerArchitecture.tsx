'use client';

// src/components/sections/FiveLayerArchitecture.tsx
import { FaDatabase, FaNetworkWired, FaCogs, FaServer, FaBrain, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

export default function FiveLayerArchitecture() {
  const [expandedLayers, setExpandedLayers] = useState(new Set([5])); // 預設展開 Layer 5
  
  const toggleLayer = (layerId: number) => {
    setExpandedLayers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(layerId)) {
        newSet.delete(layerId);
      } else {
        newSet.add(layerId);
      }
      return newSet;
    });
  };
  const layers = [
    {
      id: 5,
      title: "生成式 AI 應用層",
      subtitle: "Generative AI Applications",
      description: "智能決策、預測分析、知識問答",
      icon: FaBrain,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      items: ["ChatGPT 式工廠助手", "預測性維護AI", "品質檢測AI", "智能排程優化"]
    },
    {
      id: 4,
      title: "MCP 伺服器平台層",
      subtitle: "MCP Server Platform with Agentic Orchestrator",
      description: "智能編排、統一管理、協作協調",
      icon: FaServer,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      items: ["Agentic Orchestrator", "多Agent協作", "智能路由", "統一API管理"]
    },
    {
      id: 3,
      title: "模組化工具層",
      subtitle: "Modular Tools",
      description: "專業工具模組、即插即用",
      icon: FaCogs,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      items: ["Tool-Sensor Hub", "Tool-OPC Server", "Tool-AR SOP", "Tool-Knowledge Base"]
    },
    {
      id: 2,
      title: "標準化通訊層",
      subtitle: "Standardized Communication",
      description: "協議轉換、數據標準化",
      icon: FaNetworkWired,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      items: ["OPC UA", "MQTT", "HTTP/REST", "WebSocket"]
    },
    {
      id: 1,
      title: "數據採集層",
      subtitle: "Data Acquisition",
      description: "感測器、設備、現場數據",
      icon: FaDatabase,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      items: ["IoT 感測器", "PLC 設備", "SCADA 系統", "邊緣運算"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            五層架構設計
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            從數據採集到 AI 應用的完整技術棧，透過 Agentic Orchestrator 實現智能編排
          </p>
        </div>

        <div className="relative">
          {/* 架構層級 */}
          <div className="space-y-10">
            {layers.map((layer, index) => (
              <div key={layer.id} className="relative">
                {/* 連接線 */}
                {index < layers.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-5 w-0.5 h-10 bg-gradient-to-b from-gray-600 to-gray-700 z-10"></div>
                )}
                
                {/* 層級卡片 */}
                <div className={`${layer.bgColor} ${layer.borderColor} border-2 rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${layer.color.split('-')[1]}-500/20`}>
                  <div className="flex items-center gap-6">
                    {/* 層級編號與圖標 */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${layer.bgColor} ${layer.borderColor} border-2 rounded-full flex items-center justify-center`}>
                        <layer.icon className={`text-2xl ${layer.color}`} />
                      </div>
                      <div className="text-center mt-2">
                        <span className={`text-lg font-bold ${layer.color}`}>L{layer.id}</span>
                      </div>
                    </div>

                    {/* 層級內容 */}
                    <div className="flex-grow">
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <h3 className={`text-2xl font-bold ${layer.color} mb-1`}>
                              {layer.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium">
                              {layer.subtitle}
                            </p>
                            <p className="text-gray-300 mt-2">
                              {layer.description}
                            </p>
                          </div>
                          <button
                            onClick={() => toggleLayer(layer.id)}
                            className={`ml-4 p-2 rounded-full ${layer.bgColor} ${layer.color} hover:scale-110 transition-all duration-200`}
                          >
                            {expandedLayers.has(layer.id) ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        </div>
                      </div>

                      {/* 可展開的詳細內容 */}
                      {expandedLayers.has(layer.id) && (
                        <div className="transition-all duration-300 ease-in-out">
                          {/* 分隔線 */}
                          <div className={`w-full h-px bg-gradient-to-r from-transparent via-${layer.color.split('-')[1]}-500/30 to-transparent my-6`}></div>
                          {/* Layer 5 專用圖片展示 */}
                          {layer.id === 5 && (
                            <div className="mb-6">
                              <div className="w-full max-w-2xl mx-auto">
                                <img 
                                  src={`${process.env.NODE_ENV === 'production' ? '/Personal-website' : ''}/layer5.svg`} 
                                  alt="生成式 AI 應用展示"
                                  className="w-full h-auto rounded-lg shadow-lg border border-purple-500/30"
                                />
                              </div>
                            </div>
                          )}

                          {/* 核心功能 */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {layer.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="bg-black/30 rounded-lg p-3 text-center hover:bg-black/40 transition-colors duration-200">
                                <span className="text-gray-300 text-sm font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* 數據流向說明 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-800 rounded-full px-6 py-3">
            <span className="text-yellow-400">📊 數據採集</span>
            <span className="text-gray-400">→</span>
            <span className="text-green-400">🔄 標準化</span>
            <span className="text-gray-400">→</span>
            <span className="text-blue-400">🛠️ 工具處理</span>
            <span className="text-gray-400">→</span>
            <span className="text-red-400">🎯 智能編排</span>
            <span className="text-gray-400">→</span>
            <span className="text-purple-400">🧠 AI 應用</span>
          </div>
        </div>
      </div>
    </section>
  );
}