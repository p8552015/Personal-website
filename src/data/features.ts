import { Feature } from '@/types';

export const features: Feature[] = [
  {
    id: 'ai-collaboration',
    title: 'AI 智能協作',
    description: '透過 Agentic Orchestrator 統一協調多個 AI 代理，處理複雜的製造業務流程',
    icon: '🤖',
    benefits: [
      '支援多步驟任務自動化',
      '智能代理間協作',
      '複雜決策邏輯處理',
      '學習與優化能力'
    ]
  },
  {
    id: 'realtime-analysis',
    title: '即時資料分析',
    description: '從感測器到決策的毫秒級回應，確保製造流程的即時性與準確性',
    icon: '📊',
    benefits: [
      '毫秒級數據處理',
      '即時異常檢測',
      '動態性能監控',
      '智能預警系統'
    ]
  },
  {
    id: 'predictive-maintenance',
    title: '預測性維護',
    description: '運用機器學習預測設備故障，提前安排維護計畫，避免生產中斷',
    icon: '🔧',
    benefits: [
      '降低 50% 意外停機',
      '延長設備使用壽命',
      '優化維護成本',
      '提高整體設備效率'
    ]
  },
  {
    id: 'natural-language',
    title: '自然語言交互',
    description: '使用日常語言與系統互動，無需學習複雜的操作介面',
    icon: '💬',
    benefits: [
      '零學習成本',
      '直觀操作體驗',
      '多語言支援',
      '語音交互能力'
    ]
  },
  {
    id: 'industrial-integration',
    title: '工業系統整合',
    description: '支援各種工業協議與標準，與現有設備無縫整合',
    icon: '🔗',
    benefits: [
      '支援 OPC UA、Modbus 等協議',
      '與 MES、ERP 系統整合',
      '保護現有投資',
      '漸進式升級'
    ]
  },
  {
    id: 'cloud-edge-computing',
    title: '雲邊協同計算',
    description: '結合雲端強大運算能力與邊緣即時響應，最佳化系統效能',
    icon: '☁️',
    benefits: [
      '邊緣即時處理',
      '雲端深度分析',
      '數據安全保護',
      '彈性擴展能力'
    ]
  }
];

export const featureCategories = [
  'AI 技術',
  '數據分析',
  '系統整合',
  '用戶體驗'
];