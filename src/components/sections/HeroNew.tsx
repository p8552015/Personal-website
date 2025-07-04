import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function HeroNew() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950/20" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge variant="error" size="md">
              🚀 工業 4.0 領導品牌
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              智慧製造的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                {' '}AI 革命
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              結合 Line + MCP 智能小幫手與四層技術架構，
              打造全方位智慧製造解決方案。提升效率 40%，
              降低成本 30%，開啟製造業新紀元。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                開始免費試用
              </Button>
              <Button variant="ghost" size="lg">
                觀看產品演示
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-red-500">500+</div>
                <div className="text-sm text-gray-400">企業客戶</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500">99.9%</div>
                <div className="text-sm text-gray-400">系統穩定度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500">24/7</div>
                <div className="text-sm text-gray-400">技術支援</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              {/* Placeholder for 3D visual or image */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-900/20 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center animate-pulse">
                    <span className="text-6xl">🤖</span>
                  </div>
                  <p className="text-gray-400">AI 驅動的智慧製造平台</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-700/20 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </Container>
    </section>
  );
}