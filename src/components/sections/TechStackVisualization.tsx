'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const techLayers = [
  {
    id: 'ot-data',
    name: 'OT 資料採集層',
    icon: '📡',
    color: 'from-blue-600 to-blue-700',
    description: '即時收集生產線數據，整合各類感測器與設備',
    details: [
      'SCADA 系統整合',
      'IoT 感測器網路',
      'PLC 通訊協定',
      'Edge Computing'
    ]
  },
  {
    id: 'knowledge',
    name: '知識庫層',
    icon: '🧠',
    color: 'from-purple-600 to-purple-700',
    description: '結構化儲存與管理製造知識，支援 RAG 檢索',
    details: [
      'Vector Database',
      'Knowledge Graph',
      'RAG 系統架構',
      'ML 模型管理'
    ]
  },
  {
    id: 'ai-collab',
    name: 'AI 協作層',
    icon: '🤝',
    color: 'from-green-600 to-green-700',
    description: '多模型協同運算，實現智能決策與優化',
    details: [
      'Multi-Agent 系統',
      'LLM 整合',
      'Decision Engine',
      'Process Mining'
    ]
  },
  {
    id: 'application',
    name: '應用呈現層',
    icon: '💻',
    color: 'from-red-600 to-red-700',
    description: '直觀的使用者介面，支援多平台存取',
    details: [
      'Web Dashboard',
      'Mobile Apps',
      'AR/VR 介面',
      'API Gateway'
    ]
  }
];

export default function TechStackVisualization() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            四層技術架構
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            從底層資料採集到頂層應用呈現，打造完整的智慧製造技術堆疊
          </p>
        </div>

        {/* Interactive Layers */}
        <div className="max-w-4xl mx-auto space-y-4">
          {techLayers.map((layer, index) => (
            <div
              key={layer.id}
              className={`relative transition-all duration-500 ${
                activeLayer === layer.id ? 'scale-105 z-20' : 'scale-100'
              }`}
              onMouseEnter={() => setActiveLayer(layer.id)}
              onMouseLeave={() => setActiveLayer(null)}
            >
              <Card 
                className={`relative overflow-hidden ${
                  activeLayer === layer.id ? 'ring-2 ring-red-500' : ''
                }`}
                gradient
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl">{layer.icon}</span>
                      <h3 className="text-2xl font-semibold">{layer.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{layer.description}</p>
                    
                    {/* Details */}
                    <div className={`grid grid-cols-2 gap-3 transition-all duration-500 ${
                      activeLayer === layer.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      {layer.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <span className="text-sm text-gray-400">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Layer Number */}
                  <div className={`absolute right-6 top-6 w-16 h-16 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{techLayers.length - index}</span>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < techLayers.length - 1 && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-gray-600 to-transparent" />
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">想了解更多技術細節？</p>
          <button className="text-red-500 hover:text-red-400 font-semibold transition-colors">
            下載技術白皮書 →
          </button>
        </div>
      </Container>
    </section>
  );
}