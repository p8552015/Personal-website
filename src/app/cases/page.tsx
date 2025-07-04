import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const cases = [
  {
    company: "台積電",
    industry: "半導體",
    title: "AI 驅動的晶圓缺陷檢測系統",
    description: "導入電腦視覺技術，實現全自動晶圓表面缺陷檢測，大幅提升良率並減少人工檢測成本。",
    challenge: "傳統人工檢測效率低且容易遺漏微小缺陷",
    solution: "深度學習視覺檢測 + 即時分析系統",
    results: [
      "檢測準確率提升至 99.8%",
      "檢測速度提升 500%",
      "降低人工成本 60%",
      "年節省成本 NT$ 2.5 億"
    ],
    technologies: ["Computer Vision", "Deep Learning", "Edge Computing"],
    timeline: "6 個月",
    status: "已上線"
  },
  {
    company: "富士康",
    industry: "電子製造",
    title: "智慧產線預測性維護系統",
    description: "建置 IoT 感測器網路與 AI 預測模型，實現設備故障預警與最佳維護排程。",
    challenge: "設備突發故障導致生產線停機損失巨大",
    solution: "IoT 監控 + 機器學習預測模型",
    results: [
      "設備故障率降低 75%",
      "非計劃停機時間減少 80%",
      "維護成本節省 45%",
      "整體設備效率提升 35%"
    ],
    technologies: ["IoT", "Machine Learning", "Time Series Analysis"],
    timeline: "8 個月",
    status: "已上線"
  },
  {
    company: "中華電信",
    industry: "電信業",
    title: "智能客服與需求預測系統",
    description: "部署 NLP 自然語言處理技術，建置智能客服機器人並預測客戶需求。",
    challenge: "客服人力成本高且客戶滿意度有待提升",
    solution: "ChatBot + 情感分析 + 需求預測",
    results: [
      "客服效率提升 300%",
      "客戶滿意度提升 40%",
      "首次解決率達 85%",
      "年節省人力成本 NT$ 8,000 萬"
    ],
    technologies: ["NLP", "ChatBot", "Sentiment Analysis"],
    timeline: "4 個月",
    status: "已上線"
  },
  {
    company: "長榮海運",
    industry: "物流運輸",
    title: "港口智慧調度與路徑優化",
    description: "運用 AI 演算法優化貨櫃裝卸排程與船舶路徑規劃，提升港口營運效率。",
    challenge: "港口壅塞造成船舶等待時間過長",
    solution: "智能排程 + 路徑優化 + 即時調度",
    results: [
      "港口周轉時間減少 50%",
      "燃油成本節省 25%",
      "貨櫃處理量提升 60%",
      "客戶準時交付率達 98%"
    ],
    technologies: ["Optimization Algorithm", "Real-time Analytics", "GPS Tracking"],
    timeline: "10 個月",
    status: "已上線"
  },
  {
    company: "台塑化",
    industry: "石化業",
    title: "智慧能源管理與安全監控",
    description: "建置全廠區能源監控系統與 AI 安全預警機制，實現綠色生產與零事故目標。",
    challenge: "高耗能產業需要精確的能源管控與安全監控",
    solution: "IoT 能源監控 + AI 安全預警系統",
    results: [
      "能源使用效率提升 30%",
      "碳排放量減少 20%",
      "安全事故率降至零",
      "年節省能源成本 NT$ 5 億"
    ],
    technologies: ["IoT Sensors", "Energy Management", "Safety Monitoring"],
    timeline: "12 個月",
    status: "已上線"
  },
  {
    company: "統一企業",
    industry: "食品製造",
    title: "智慧供應鏈與品質追溯系統",
    description: "整合供應鏈數據，建置食品安全追溯系統與智能庫存管理。",
    challenge: "食品安全要求嚴格且庫存管理複雜",
    solution: "區塊鏈追溯 + AI 庫存預測",
    results: [
      "食品追溯完整度達 100%",
      "庫存週轉率提升 40%",
      "食安事件預防率 99%",
      "供應鏈效率提升 35%"
    ],
    technologies: ["Blockchain", "Supply Chain Analytics", "QR Code Tracking"],
    timeline: "9 個月",
    status: "已上線"
  }
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950/20" />
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <Badge variant="error" size="md" className="mb-4">
              🏆 成功案例展示
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              真實案例
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                {' '}見證成效
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              與台灣頂尖企業合作，運用 AI 技術創造實質價值，
              這些成功案例展現了我們解決方案的卓越成效
            </p>
          </div>
        </Container>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="h-full">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {caseStudy.company}
                      </h3>
                      <Badge variant="success" size="sm">
                        {caseStudy.industry}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-500 font-medium">
                        {caseStudy.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <div>
                    <h4 className="text-xl font-semibold text-red-500 mb-3">
                      {caseStudy.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {caseStudy.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 mb-2">挑戰</h5>
                      <p className="text-xs text-gray-300">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 mb-2">解決方案</h5>
                      <p className="text-xs text-gray-300">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-3">實施成果</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-xs text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">關鍵技術</h5>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                    <span className="text-sm text-gray-400">
                      專案週期：{caseStudy.timeline}
                    </span>
                    <Button variant="ghost" size="sm">
                      詳細內容 →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-950/20 to-black">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              數據說話，成效顯著
            </h2>
            <p className="text-gray-300">
              累積服務 100+ 企業客戶，創造超過 50 億台幣的價值
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
              <div className="text-gray-400">成功案例</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">99.8%</div>
              <div className="text-gray-400">客戶滿意度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">50億+</div>
              <div className="text-gray-400">創造價值 (NT$)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-400">技術支援</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              成為下一個成功案例
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              讓我們的專業團隊協助您實現數位轉型目標
            </p>
            <Button variant="primary" size="lg">
              開始您的 AI 轉型之旅
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}