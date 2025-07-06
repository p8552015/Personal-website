'use client';

import React, { useState } from 'react';
import { FaBroadcastTower, FaUserMd, FaTools, FaLaptopMedical, FaRobot, FaCube, FaHeadset } from 'react-icons/fa';

interface TimelineStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string[];
  layerInfo: string;
  isLast?: boolean;
  color: string;
}

const TimelineStep = ({ icon, title, description, details, layerInfo, isLast = false, color }: TimelineStepProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex group">
      <div className="flex flex-col items-center mr-6">
        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${color} text-white z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <div className="text-xl">{icon}</div>
        </div>
        {!isLast && <div className="w-1 h-full bg-gradient-to-b from-zinc-600 to-zinc-800 mt-4"></div>}
      </div>
      <div className="pb-20 flex-1">
        <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-lg border border-zinc-700/50 rounded-2xl p-6 hover:border-zinc-600/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <span className="text-sm text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">
              {layerInfo}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
          
          {details && (
            <div className="space-y-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-red-400 hover:text-red-300 font-medium flex items-center gap-2 transition-colors"
              >
                <span>{isExpanded ? '收起詳細步驟' : '查看詳細步驟'}</span>
                <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              {isExpanded && (
                <div className="mt-4 space-y-3 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 背景裝飾 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-blue-900/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <header className="text-center mb-20 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              整合流程與應用範例
            </h1>
            <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/60 backdrop-blur-lg border border-zinc-700/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">實際應用情境</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                一台位於工廠核心區域的 <span className="text-white font-semibold">CNC 機台</span> 在夜間班次出現異常震動，
                現場只有一位 <span className="text-red-400 font-semibold">資歷較淺的技術員</span>。
                透過我們的智慧製造 AI 解決方案，從異常偵測到問題解決的完整流程展示。
              </p>
            </div>
          </header>

          <div className="max-w-4xl mx-auto">
            <TimelineStep 
              icon={<FaBroadcastTower />}
              title="步驟 1：異常偵測與自動處理"
              description="機台上的 Sensor Hub 偵測到震動頻譜超出正常範圍，立即透過 MQTT 將異常數據發布。MCP Server 接收到訊息後，自動觸發警報，透過 Line 推播通知值班主管與技術員，並初步診斷為「主軸軸承磨損」，同時生成高優先級維修工單。"
              layerInfo="Layer 1, 2, 4"
              color="bg-gradient-to-r from-blue-500 to-blue-600"
              details={[
                "感測器即時監控機台運行狀態，偵測震動、溫度、電流等關鍵參數",
                "異常數據透過 MQTT 協議快速傳輸至 MCP Server 進行分析",
                "AI 演算法基於歷史數據模式，自動診斷異常類型並評估緊急程度",
                "系統自動發送 LINE 推播通知相關人員，包含異常位置、類型和建議處理方式",
                "同步生成維修工單並分派給適當的技術人員"
              ]}
            />
            
            <TimelineStep 
              icon={<FaRobot />}
              title="步驟 2：AI 輔助—SOP 文字指引"
              description="技術員收到 LINE 推播後，向 AI 維修助手詢問維修程序。LLM 透過 RAG 檢索知識庫，找出對應機台型號與異常代碼的 SOP，以文字／圖片回覆技術員。若技術員仍無法排除故障，AI 會建議啟用進階視覺輔助。"
              layerInfo="Layer 3"
              color="bg-gradient-to-r from-green-500 to-green-600"
              details={[
                "技術員透過 LINE 向 AI 維修助手發送詢問，描述現場狀況",
                "LLM 利用 RAG (Retrieval-Augmented Generation) 技術搜尋知識庫",
                "系統根據機台型號、異常代碼、故障歷史等資訊找出最適合的 SOP",
                "AI 以清晰的文字說明和相關圖片回覆，提供詳細的維修步驟",
                "若初步指引無法解決問題，AI 自動建議啟用 AR/MR 視覺輔助模式"
              ]}
            />
            
            <TimelineStep 
              icon={<FaCube />}
              title="步驟 3：AR／MR 視覺輔助與遠距協作"
              description="技術員在平板或頭戴裝置上啟動 AR 模式，系統將 SOP 步驟轉為 3D 分解圖＋動畫疊加，協助定位螺栓、軸承等零件。若 AR 指引仍不足以解決問題，技術員一鍵呼叫專家支援，MR 協作系統連線資深專家進行即時指導。"
              layerInfo="Layer 3, 5"
              color="bg-gradient-to-r from-purple-500 to-purple-600"
              details={[
                "AR 指引模式：技術員啟動平板或頭戴裝置的 AR 功能",
                "系統在實體設備上疊加 3D 分解圖和動畫指示，精確標示零件位置",
                "虛擬標示協助技術員快速識別螺栓、軸承、管線等關鍵組件",
                "MR 遠距專家協作：技術員遇到困難時一鍵呼叫「專家支援」",
                "資深專家透過即時畫面進行標註與語音指導，提供專業建議",
                "專家可在技術員的視野中直接標記操作點和注意事項"
              ]}
            />
            
            <TimelineStep 
              icon={<FaTools />}
              title="步驟 4：閉環學習與知識累積"
              description="維修完成後，技術員關閉工單。AI 助手彈出對話框，引導他記錄本次維修中遇到的特殊情況。這條寶貴的回饋將被記錄至知識平台，用於未來更新 SOP 或訓練 AI 模型，形成一個不斷自我完善的智慧循環。"
              layerInfo="Layer 1-5"
              color="bg-gradient-to-r from-orange-500 to-orange-600"
              isLast={true}
              details={[
                "技術員完成維修後在系統中標記工單為「已完成」",
                "AI 助手主動詢問維修過程中的特殊發現和改進建議",
                "系統記錄維修時間、使用的工具、遇到的問題等詳細資訊",
                "新的維修經驗和知識自動整合至知識庫，豐富 SOP 內容",
                "機器學習模型基於新數據持續優化，提升未來故障預測準確度",
                "形成「偵測→診斷→維修→學習」的完整智慧製造閉環系統"
              ]}
            />
          </div>

          {/* 技術架構總覽 */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/60 backdrop-blur-lg border border-zinc-700/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-red-400">五層技術架構整合</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">L1</span>
                  </div>
                  <h3 className="font-semibold text-blue-400 mb-2">OT 資料採集</h3>
                  <p className="text-sm text-gray-400">感測器數據收集</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">L2</span>
                  </div>
                  <h3 className="font-semibold text-green-400 mb-2">知識庫</h3>
                  <p className="text-sm text-gray-400">SOP 與維修知識</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">L3</span>
                  </div>
                  <h3 className="font-semibold text-purple-400 mb-2">AI 協作</h3>
                  <p className="text-sm text-gray-400">智能診斷與協作</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">L4</span>
                  </div>
                  <h3 className="font-semibold text-orange-400 mb-2">智慧應用</h3>
                  <p className="text-sm text-gray-400">LINE 小幫手</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">L5</span>
                  </div>
                  <h3 className="font-semibold text-red-400 mb-2">AR/MR</h3>
                  <p className="text-sm text-gray-400">視覺化指引</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}