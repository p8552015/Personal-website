import { SmartAssistant } from '@/types';

export const assistants: SmartAssistant[] = [
  {
    id: 'calendar-bot',
    name: '行事曆小幫手',
    description: '智能排程助手，透過自然語言輕鬆管理您的時間',
    icon: '📅',
    features: [
      '自然語言排程',
      '智能時間衝突檢測',
      '多平台日曆同步',
      '會議提醒通知'
    ],
    useCases: [
      '「幫我安排下週二下午和客戶開會」',
      '「檢查明天有什麼行程」',
      '「提醒我每週五要做週報」'
    ],
    integrations: [
      'Google Calendar',
      'Outlook',
      'Apple Calendar',
      'Notion Calendar'
    ],
    benefits: [
      '節省 60% 排程時間',
      '減少 90% 時間衝突',
      '提高 40% 工作效率',
      '零學習成本'
    ],
    stats: {
      users: '10,000+',
      accuracy: '99.2%',
      efficiency: '60%'
    }
  },
  {
    id: 'order-bot',
    name: '點餐彙整小幫手',
    description: '群組訂餐神器，自動彙總訂單並處理付款',
    icon: '🍽️',
    features: [
      '群組訂單自動彙總',
      '智能菜單解析',
      'Line Pay 整合',
      '訂單狀態追蹤'
    ],
    useCases: [
      '「幫忙統計今天的便當訂單」',
      '「計算每個人要付多少錢」',
      '「提醒大家付款狀態」'
    ],
    integrations: [
      'Line Pay',
      'JKOPay',
      'Apple Pay',
      'Google Pay'
    ],
    benefits: [
      '節省 80% 訂餐時間',
      '消除計算錯誤',
      '簡化付款流程',
      '提高團隊滿意度'
    ],
    stats: {
      users: '5,000+',
      accuracy: '99.8%',
      efficiency: '80%'
    }
  },
  {
    id: 'production-bot',
    name: '產線查詢小幫手',
    description: '即時掌握生產狀況，智能分析製造數據',
    icon: '🏭',
    features: [
      '即時數據查詢',
      '智能報告生成',
      '異常警報通知',
      '趨勢分析預測'
    ],
    useCases: [
      '「今天的 OEE 是多少？」',
      '「哪條產線稼動率最高？」',
      '「預測明天的產能需求」'
    ],
    integrations: [
      'PLC 控制器',
      'CNC 機台',
      '工業機器人',
      'SCADA 系統'
    ],
    benefits: [
      '提高 30% 生產效率',
      '減少 50% 停機時間',
      '降低 25% 品質缺陷',
      '節省 40% 人力成本'
    ],
    stats: {
      users: '1,000+',
      accuracy: '95.5%',
      efficiency: '30%'
    }
  }
];

export const assistantCategories = [
  '生產管理',
  '辦公協作',
  '生活服務',
  '數據分析'
];

export const supportedPlatforms = [
  'Line',
  'Slack',
  'Teams',
  'Discord',
  'WeChat',
  'Telegram',
  'Google Workspace',
  'Microsoft 365'
];