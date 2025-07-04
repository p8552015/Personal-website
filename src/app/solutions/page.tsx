import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const solutions = [
  {
    title: "智慧產線監控",
    description: "即時監控生產線狀態，AI 驅動的異常檢測與預警系統",
    features: ["即時數據採集", "AI 異常檢測", "預測性維護", "效能分析"],
    industry: "製造業",
    roi: "提升效率 35%",
    icon: "🏭"
  },
  {
    title: "智能品質管控",
    description: "運用電腦視覺與機器學習，實現全自動品質檢測",
    features: ["視覺檢測", "缺陷分類", "品質追蹤", "報告生成"],
    industry: "電子業",
    roi: "降低不良率 80%",
    icon: "🔍"
  },
  {
    title: "供應鏈優化",
    description: "AI 預測需求，智能排程與庫存管理",
    features: ["需求預測", "智能排程", "庫存優化", "風險評估"],
    industry: "零售業",
    roi: "減少庫存成本 25%",
    icon: "📦"
  },
  {
    title: "設備維護管理",
    description: "基於 IoT 數據的預測性維護解決方案",
    features: ["設備監控", "故障預測", "維修排程", "成本分析"],
    industry: "重工業",
    roi: "減少停機時間 70%",
    icon: "⚙️"
  },
  {
    title: "能源管理系統",
    description: "智能化能源監控與優化，實現綠色生產",
    features: ["能耗監控", "效率優化", "碳排追蹤", "成本控制"],
    industry: "製造業",
    roi: "節省能源成本 40%",
    icon: "⚡"
  },
  {
    title: "智慧物流系統",
    description: "自動化倉儲與配送，提升物流效率",
    features: ["自動分揀", "路徑優化", "即時追蹤", "配送預測"],
    industry: "物流業",
    roi: "提升配送效率 50%",
    icon: "🚚"
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950/20" />
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <Badge variant="error" size="md" className="mb-4">
              🎯 智慧製造解決方案
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              為各行業量身打造的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                {' '}AI 解決方案
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              結合先進的人工智能技術與深度行業知識，
              為您的企業提供最適合的數位轉型解決方案
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{solution.icon}</div>
                    <div className="text-right">
                      <Badge variant="success" size="sm" className="mb-2">
                        {solution.industry}
                      </Badge>
                      <div className="text-sm text-red-500 font-semibold">
                        {solution.roi}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {solution.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-300">核心功能：</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="ghost" size="sm" className="w-full hover:bg-red-600 hover:text-white">
                      了解詳情 →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-950/20 to-black">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備開始您的數位轉型之旅？
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              聯繫我們的專家團隊，為您的企業量身定制最適合的 AI 解決方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                免費諮詢
              </Button>
              <Button variant="secondary" size="lg">
                下載解決方案手冊
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}