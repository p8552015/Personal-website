'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface Assistant {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  badge?: string;
}

const assistants: Assistant[] = [
  {
    id: 'calendar',
    icon: '📅',
    title: '行事曆小幫手',
    description: '使用自然語言輕鬆管理日程，自動同步 Google/Outlook 行事曆',
    features: ['自然語言排程', '多平台同步', '會議提醒', '時區管理'],
    href: '/assistants/calendar-bot',
    badge: '最受歡迎'
  },
  {
    id: 'order',
    icon: '🍱',
    title: '點餐彙整小幫手',
    description: '自動彙總群組訂單，整合 Line Pay 快速結帳',
    features: ['群組點餐', '自動統計', 'Line Pay 整合', '歷史記錄'],
    href: '/assistants/order-bot'
  },
  {
    id: 'production',
    icon: '🏭',
    title: '產線查詢小幫手',
    description: '即時監控生產線狀態，AI 預測與異常警報',
    features: ['即時監控', '異常警報', '效能分析', '預測維護'],
    href: '/assistants/production-bot',
    badge: '企業專屬'
  }
];

export default function SmartAssistantsNew() {
  const [activeAssistant, setActiveAssistant] = useState(0);

  return (
    <section className="py-20 relative">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="error" size="md">
            🎯 Line + MCP 技術整合
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            智能小幫手生態系
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            整合 Line 即時通訊與 MCP 智能技術，打造全方位的 AI 助手
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {assistants.map((assistant) => (
            <Link key={assistant.id} href={assistant.href}>
              <Card className="h-full relative group">
                {assistant.badge && (
                  <Badge variant="success" size="sm" className="absolute top-4 right-4">
                    {assistant.badge}
                  </Badge>
                )}
                
                <div className="space-y-4">
                  <div className="text-5xl">{assistant.icon}</div>
                  <h3 className="text-2xl font-semibold group-hover:text-red-500 transition-colors">
                    {assistant.title}
                  </h3>
                  <p className="text-gray-400">
                    {assistant.description}
                  </p>
                  
                  <div className="space-y-2 pt-4">
                    {assistant.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="ghost" size="sm" className="group-hover:bg-red-600 group-hover:text-white">
                      了解更多 →
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <Card className="relative">
              {assistants[activeAssistant].badge && (
                <Badge variant="success" size="sm" className="absolute top-4 right-4">
                  {assistants[activeAssistant].badge}
                </Badge>
              )}
              
              <div className="space-y-4">
                <div className="text-5xl">{assistants[activeAssistant].icon}</div>
                <h3 className="text-2xl font-semibold">
                  {assistants[activeAssistant].title}
                </h3>
                <p className="text-gray-400">
                  {assistants[activeAssistant].description}
                </p>
                
                <div className="space-y-2 pt-4">
                  {assistants[activeAssistant].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link href={assistants[activeAssistant].href}>
                    <Button variant="primary" size="sm" className="w-full">
                      了解更多 →
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setActiveAssistant((prev) => (prev === 0 ? assistants.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center gap-2">
                {assistants.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAssistant(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeAssistant ? 'w-8 bg-red-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveAssistant((prev) => (prev === assistants.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}