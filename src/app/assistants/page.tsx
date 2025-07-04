import Link from 'next/link';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const assistants = [
  {
    id: 'calendar-bot',
    icon: '📅',
    title: '行事曆小幫手',
    description: '使用自然語言輕鬆管理日程，自動同步 Google/Outlook 行事曆',
    features: ['自然語言排程', '多平台同步', '會議提醒', '時區管理'],
    useCase: '提升團隊協作效率，減少會議衝突',
    users: '10,000+',
    rating: 4.8,
    category: '生產力工具',
    status: '已上線',
    href: '/assistants/calendar-bot'
  },
  {
    id: 'order-bot',
    icon: '🍱',
    title: '點餐彙整小幫手',
    description: '自動彙總群組訂單，整合 Line Pay 快速結帳',
    features: ['群組點餐', '自動統計', 'Line Pay 整合', '歷史記錄'],
    useCase: '簡化團體訂餐流程，提升辦公室用餐體驗',
    users: '5,000+',
    rating: 4.9,
    category: '生活助手',
    status: '已上線',
    href: '/assistants/order-bot'
  },
  {
    id: 'production-bot',
    icon: '🏭',
    title: '產線查詢小幫手',
    description: '即時監控生產線狀態，AI 預測與異常警報',
    features: ['即時監控', '異常警報', '效能分析', '預測維護'],
    useCase: '提升生產效率，降低設備故障風險',
    users: '500+',
    rating: 4.7,
    category: '工業 4.0',
    status: '已上線',
    href: '/assistants/production-bot'
  },
  {
    id: 'hr-bot',
    icon: '👥',
    title: 'HR 人資小幫手',
    description: '自動化人事流程，智能履歷篩選與面試排程',
    features: ['履歷篩選', '面試排程', '員工查詢', '假勤管理'],
    useCase: '簡化 HR 作業流程，提升招聘效率',
    users: '2,000+',
    rating: 4.6,
    category: '人力資源',
    status: '即將推出',
    href: '#'
  },
  {
    id: 'customer-bot',
    icon: '🎧',
    title: '客服智能助手',
    description: '24/7 智能客服，多語言支援與情感分析',
    features: ['多語言支援', '情感分析', '知識庫整合', '人工轉接'],
    useCase: '提升客戶滿意度，降低客服成本',
    users: '8,000+',
    rating: 4.5,
    category: '客戶服務',
    status: '即將推出',
    href: '#'
  },
  {
    id: 'finance-bot',
    icon: '💰',
    title: '財務分析助手',
    description: 'AI 驅動的財務報告生成與風險評估',
    features: ['報告生成', '風險評估', '預算分析', '成本優化'],
    useCase: '提升財務決策品質，降低營運風險',
    users: '1,000+',
    rating: 4.8,
    category: '財務管理',
    status: '即將推出',
    href: '#'
  }
];

const categories = ['全部', '生產力工具', '生活助手', '工業 4.0', '人力資源', '客戶服務', '財務管理'];

export default function AssistantsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950/20" />
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <Badge variant="error" size="md" className="mb-4">
              🤖 AI 智能助手
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Line + MCP
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                {' '}智能生態系
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              整合 Line 即時通訊與 MCP 協議技術，打造全方位的 AI 助手解決方案，
              讓工作更智能、生活更便利
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Assistants Grid */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assistants.map((assistant, index) => (
              <Card key={index} className="h-full relative group">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={assistant.status === '已上線' ? 'success' : 'warning'} 
                    size="sm"
                  >
                    {assistant.status}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="text-5xl">{assistant.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold group-hover:text-red-500 transition-colors mb-2">
                        {assistant.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {assistant.description}
                      </p>
                      <Badge variant="default" size="sm">
                        {assistant.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">核心功能：</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {assistant.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Case */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">應用場景：</h4>
                    <p className="text-xs text-gray-400">{assistant.useCase}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-gray-300">{assistant.rating}</span>
                    </div>
                    <div className="text-gray-400">
                      {assistant.users} 用戶
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    {assistant.status === '已上線' ? (
                      <Link href={assistant.href}>
                        <Button variant="primary" size="sm" className="w-full">
                          立即使用 →
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="secondary" size="sm" className="w-full" disabled>
                        敬請期待
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-red-950/10 to-transparent">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              為什麼選擇我們的 AI 助手？
            </h2>
            <p className="text-gray-300">
              先進技術與人性化設計的完美結合
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="space-y-4">
                <div className="text-5xl">🧠</div>
                <h3 className="text-xl font-semibold text-white">智能學習</h3>
                <p className="text-gray-400 text-sm">
                  基於深度學習技術，持續優化回應品質，越用越聰明
                </p>
              </div>
            </Card>
            
            <Card className="text-center">
              <div className="space-y-4">
                <div className="text-5xl">🔒</div>
                <h3 className="text-xl font-semibold text-white">資安保護</h3>
                <p className="text-gray-400 text-sm">
                  企業級加密技術，確保數據安全與隱私保護
                </p>
              </div>
            </Card>
            
            <Card className="text-center">
              <div className="space-y-4">
                <div className="text-5xl">⚡</div>
                <h3 className="text-xl font-semibold text-white">即時回應</h3>
                <p className="text-gray-400 text-sm">
                  毫秒級回應速度，提供流暢的使用體驗
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              無縫整合您的工作流程
            </h2>
            <p className="text-gray-300">
              支援多種平台與服務整合
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['Line', 'Slack', 'Teams', 'Discord', 'WeChat', 'Telegram', 'Google Workspace', 'Microsoft 365'].map((platform, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 transition-colors">
                <div className="text-2xl mb-2">🔗</div>
                <div className="text-sm text-gray-300">{platform}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-950/20 to-black">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              開始您的 AI 助手體驗
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              立即試用我們的智能助手，體驗 AI 帶來的工作效率提升
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                免費試用
              </Button>
              <Button variant="secondary" size="lg">
                聯繫專家
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}