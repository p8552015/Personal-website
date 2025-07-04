import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const team = [
  {
    name: "張志明",
    position: "執行長暨技術長",
    experience: "15年+ AI 研發經驗",
    background: "台大資工博士，前 Google AI 研究員",
    expertise: ["機器學習", "深度學習", "電腦視覺"],
    avatar: "👨‍💼"
  },
  {
    name: "李美華",
    position: "技術副總",
    experience: "12年+ 工業 4.0 經驗",
    background: "清大工工博士，前台積電製程工程師",
    expertise: ["智慧製造", "IoT", "數據分析"],
    avatar: "👩‍💼"
  },
  {
    name: "王大明",
    position: "產品總監",
    experience: "10年+ 產品管理經驗",
    background: "交大資管碩士，前微軟產品經理",
    expertise: ["產品策略", "UX設計", "敏捷開發"],
    avatar: "👨‍💻"
  },
  {
    name: "陳小美",
    position: "解決方案架構師",
    experience: "8年+ 企業諮詢經驗",
    background: "政大企管碩士，McKinsey 前顧問",
    expertise: ["企業轉型", "流程優化", "策略規劃"],
    avatar: "👩‍💻"
  }
];

const values = [
  {
    title: "創新驅動",
    description: "持續投入研發，追求技術創新與突破",
    icon: "🚀"
  },
  {
    title: "客戶至上",
    description: "以客戶需求為核心，創造最大價值",
    icon: "🎯"
  },
  {
    title: "品質保證",
    description: "嚴格品質控制，確保解決方案的可靠性",
    icon: "⭐"
  },
  {
    title: "持續學習",
    description: "緊跟技術趨勢，不斷提升專業能力",
    icon: "📚"
  }
];

const milestones = [
  {
    year: "2019",
    title: "公司成立",
    description: "由台灣頂尖 AI 人才創立，專注智慧製造領域"
  },
  {
    year: "2020",
    title: "首個大型專案",
    description: "與台積電合作，成功導入 AI 品質檢測系統"
  },
  {
    year: "2021",
    title: "技術突破",
    description: "開發出業界領先的預測性維護演算法"
  },
  {
    year: "2022",
    title: "市場擴展",
    description: "服務客戶突破 50 家，涵蓋多個產業"
  },
  {
    year: "2023",
    title: "國際認證",
    description: "獲得 ISO 27001 資安認證及多項技術專利"
  },
  {
    year: "2024",
    title: "智能升級",
    description: "推出新一代 AI 平台，整合 MCP 協議"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950/20" />
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <Badge variant="error" size="md" className="mb-4">
              🏢 關於我們
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              引領台灣
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                {' '}AI 創新
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              我們是台灣領先的 AI 技術公司，專注於為製造業提供創新的智慧化解決方案，
              幫助企業實現數位轉型，提升競爭力
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="text-center">
              <div className="space-y-4">
                <div className="text-6xl">🎯</div>
                <h3 className="text-2xl font-bold text-white">使命</h3>
                <p className="text-gray-300">
                  運用先進的人工智能技術，協助台灣製造業實現智慧化轉型，
                  提升全球競爭力，創造永續發展的未來。
                </p>
              </div>
            </Card>
            
            <Card className="text-center">
              <div className="space-y-4">
                <div className="text-6xl">🔮</div>
                <h3 className="text-2xl font-bold text-white">願景</h3>
                <p className="text-gray-300">
                  成為亞太地區最受信賴的 AI 技術夥伴，
                  引領智慧製造的創新浪潮，讓 AI 真正落地應用。
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-red-950/10 to-transparent">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心價值</h2>
            <p className="text-gray-300">驅動我們前進的核心理念</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <div className="space-y-4">
                  <div className="text-5xl">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">專業團隊</h2>
            <p className="text-gray-300">來自頂尖企業的 AI 專家團隊</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center h-full">
                <div className="space-y-4">
                  <div className="text-6xl">{member.avatar}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-red-500 font-medium text-sm mb-2">{member.position}</p>
                    <p className="text-gray-400 text-xs mb-3">{member.background}</p>
                    <Badge variant="success" size="sm" className="mb-3">
                      {member.experience}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2">專業領域：</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-transparent to-red-950/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">發展歷程</h2>
            <p className="text-gray-300">從初創到領先的成長軌跡</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">公司實力</h2>
            <p className="text-gray-300">用數據展現我們的專業能力</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
              <div className="text-gray-400">企業客戶</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-400">AI 專家</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">200+</div>
              <div className="text-gray-400">成功專案</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-400">技術專利</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-950/20 to-black">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              加入我們的創新團隊
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              我們正在尋找志同道合的夥伴，一起推動 AI 技術的創新應用
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                查看職缺
              </Button>
              <Button variant="secondary" size="lg">
                聯繫我們
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}