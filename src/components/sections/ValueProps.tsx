// src/components/sections/ValueProps.tsx
import { FaTachometerAlt, FaDollarSign, FaBrain, FaCogs } from 'react-icons/fa';

const valueProps = [
  {
    icon: <FaTachometerAlt className="w-10 h-10" />,
    title: "營運效率極大化",
    description: "從被動維修到主動預測，最大化 OEE (設備綜合效率)，提升產能與質量。",
  },
  {
    icon: <FaDollarSign className="w-10 h-10" />,
    title: "成本結構顯著優化",
    description: "降低人力、維護與差旅成本，將員工從重複性工作中解放，延長設備壽命。",
  },
  {
    icon: <FaBrain className="w-10 h-10" />,
    title: "企業知識資產化",
    description: "將資深員工的隱性知識轉化為可傳承的數位資產，加速新人培訓，建立學習型組織。",
  },
  {
    icon: <FaCogs className="w-10 h-10" />,
    title: "漸進式數位轉型",
    description: "模組化設計兼容新舊設備，企業可從最痛的點著手，實現低風險、高回報的轉型路徑。",
  },
];

export default function ValueProps() {
  return (
    <section id="value-props" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">為您帶來的核心商業價值</h2>
          <p className="mt-4 text-lg text-gray-400">我們不只提供技術，更專注於為您的企業創造實質性的商業效益。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop) => (
            <div key={prop.title} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-red-500 hover:-translate-y-2 transition-all duration-300">
              <div className="text-red-500 mb-4">{prop.icon}</div>
              <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
              <p className="text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}