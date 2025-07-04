import Container from '../ui/Container';
import Card from '../ui/Card';

const features = [
  {
    icon: '🤖',
    title: 'AI 智能助手',
    description: '整合 Line + MCP 技術，提供 24/7 智能客服與生產監控',
    highlights: ['自然語言處理', '即時回應', '多語言支援']
  },
  {
    icon: '📊',
    title: '即時數據分析',
    description: '毫秒級數據處理，即時呈現生產線狀態與預測分析',
    highlights: ['即時監控', '預測分析', '視覺化報表']
  },
  {
    icon: '🔧',
    title: '預測性維護',
    description: '運用機器學習預測設備故障，降低 70% 非計劃停機時間',
    highlights: ['故障預測', '維護排程', '成本優化']
  },
  {
    icon: '🥽',
    title: 'AR/MR 應用',
    description: '結合擴增實境技術，提升維修效率與員工培訓品質',
    highlights: ['遠端協作', '3D 視覺化', '互動培訓']
  },
  {
    icon: '🔐',
    title: '資安防護',
    description: '企業級安全架構，確保數據與系統的最高安全標準',
    highlights: ['端對端加密', 'ISO 認證', '威脅監控']
  },
  {
    icon: '🌐',
    title: '雲端整合',
    description: '無縫整合主流雲端平台，實現彈性擴展與全球部署',
    highlights: ['多雲支援', '自動擴展', '全球部署']
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 relative">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            全方位智慧製造功能
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            整合最先進的 AI 技術與工業 4.0 標準，打造完整的智慧製造生態系統
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group cursor-pointer">
              <div className="space-y-4">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-2xl font-semibold group-hover:text-red-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {feature.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}