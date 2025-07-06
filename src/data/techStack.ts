import { TechLayer } from '@/types';
import { FaDatabase, FaNetworkWired, FaCogs, FaServer, FaBrain, FaEye, FaVrCardboard, FaCloudUploadAlt, FaRobot } from 'react-icons/fa';

export const techLayers: TechLayer[] = [
  {
    id: 1,
    name: '數據採集層',
    description: '從物理世界採集各種感測器數據，建立數位化基礎',
    icon: FaDatabase,
    color: 'text-yellow-400',
    tools: [
      {
        name: 'IoT 感測器網路',
        icon: FaDatabase,
        description: '部署各種感測器採集溫度、震動、電流等物理量',
        features: ['溫度監控', '震動分析', '電流監測', '壓力感測']
      },
      {
        name: 'Tool-Sensor Hub',
        icon: FaDatabase,
        description: '整合多元感測器的數據收集中心，統一管理各種 IoT 設備與感測器',
        features: ['多協議支援', '數據標準化', '即時監控', '設備管理']
      }
    ],
    features: [
      '支援 Modbus、RS485、Ethernet/IP 等工業協議',
      '提供 RESTful API 與 WebSocket 即時數據接口',
      '具備邊緣計算能力，可在本地進行數據預處理',
      '支援斷線重連與數據緩存機制'
    ]
  },
  {
    id: 2,
    name: '標準化通訊層',
    description: '建立統一的數據交換標準，確保不同系統間的互操作性',
    icon: FaNetworkWired,
    color: 'text-green-400',
    tools: [
      {
        name: 'OPC UA Gateway',
        icon: FaServer,
        description: '工業自動化的通用語言，將複雜設備的數據模型化',
        features: ['設備抽象化', '數據模型化', '安全通訊', '跨平台支援']
      },
      {
        name: 'Tool-MES Bridge',
        icon: FaNetworkWired,
        description: '連接製造執行系統與上層應用的橋樑',
        features: ['生產排程', '品質追蹤', '庫存管理', '報表生成']
      }
    ],
    features: [
      '遵循 OPC UA 國際標準，確保設備間互操作性',
      '提供統一的數據模型，簡化上層應用開發',
      '支援工業級安全認證與加密通訊',
      '具備高可用性架構，確保關鍵業務連續性'
    ]
  },
  {
    id: 3,
    name: '模組化工具層',
    description: '提供可重複使用的功能模組，加速應用開發',
    icon: FaCogs,
    color: 'text-blue-400',
    tools: [
      {
        name: 'Tool-Knowledge Base',
        icon: FaDatabase,
        description: '系統化記錄維修經驗與決策過程的知識庫',
        features: ['經驗累積', '知識檢索', '智能推薦', '版本控制']
      },
      {
        name: 'Tool-AR SOP',
        icon: FaVrCardboard,
        description: '提供互動式操作指引，確保標準化執行',
        features: ['步驟指引', '實境疊加', '進度追蹤', '品質確認']
      },
      {
        name: 'Tool-Notification Hub',
        icon: FaCloudUploadAlt,
        description: '統一的通知服務，支援多種通訊渠道',
        features: ['多渠道通知', '訊息路由', '失敗重試', '歷史記錄']
      }
    ],
    features: [
      '模組化設計，支援靈活組合與擴展',
      '提供標準化 API，簡化系統整合',
      '內建監控與日誌系統，便於運維管理',
      '支援容器化部署，提高系統可移植性'
    ]
  },
  {
    id: 4,
    name: 'MCP 伺服器平台層',
    description: '智能協調中心，運用 Agentic Orchestrator 整合各種 AI 代理',
    icon: FaServer,
    color: 'text-red-400',
    tools: [
      {
        name: 'Agentic Orchestrator',
        icon: FaRobot,
        description: '任務總指揮，負責接收複雜需求，分解任務並協調各個 AI 代理共同完成',
        features: ['任務分解', '代理協調', '結果整合', '優先級管理']
      },
      {
        name: 'Tool-Context Manager',
        icon: FaServer,
        description: '智能上下文管理，確保各代理間的信息同步',
        features: ['上下文共享', '狀態同步', '記憶管理', '會話追蹤']
      },
      {
        name: 'Tool-Decision Engine',
        icon: FaBrain,
        description: '基於規則與機器學習的決策引擎',
        features: ['智能決策', '規則管理', '學習優化', '風險評估']
      }
    ],
    features: [
      '支援多種 AI 模型整合，包含 GPT、Claude、Gemini',
      '提供 RAG 架構，結合領域知識庫提升回答準確性',
      '具備 Multi-Agent 協作能力，處理複雜多步驟任務',
      '內建 A/B 測試與效能監控，持續優化系統表現'
    ]
  },
  {
    id: 5,
    name: '生成式 AI 應用層',
    description: '直接面向使用者的最終應用，提供直觀、易用且具備智慧的服務',
    icon: FaBrain,
    color: 'text-purple-400',
    tools: [
      {
        name: 'ChatGPT 式工廠助手',
        icon: FaRobot,
        description: '基於大語言模型的智能對話系統，提供即時的生產諮詢與問題解答',
        features: ['自然語言查詢', '智能問答', '生產建議', '故障診斷']
      },
      {
        name: '預測性維護 AI',
        icon: FaEye,
        description: '運用機器學習預測設備故障，提前安排維護計畫',
        features: ['故障預警', '維護排程', '成本分析', '效能優化']
      },
      {
        name: '智能內容生成',
        icon: FaCloudUploadAlt,
        description: '自動生成維修報告、操作手冊和培訓材料',
        features: ['自動報告', '文檔生成', '知識整理', '培訓內容']
      }
    ],
    features: [
      '支援多語言自然語言交互界面',
      '提供個性化使用者體驗與學習能力',
      '具備多模態輸入支援（文字、語音、圖像）',
      '整合企業單一登入（SSO）與權限管理系統'
    ]
  }
];

export const techStackOverview = {
  title: '五層架構概覽',
  description: '從物理世界的數據採集到生成式 AI 應用，透過 Agentic Orchestrator 智能編排的完整技術堆疊',
  features: [
    '模組化架構',
    '彈性組合各層級功能，適應不同製造環境需求'
  ]
};