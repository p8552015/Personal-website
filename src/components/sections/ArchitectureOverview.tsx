// src/components/sections/ArchitectureOverview.tsx
import Link from 'next/link';
import { FiDatabase, FiShare2, FiTool, FiServer, FiCpu } from 'react-icons/fi';

const layers = [
  { icon: <FiDatabase />, name: "資料採集" },
  { icon: <FiShare2 />, name: "標準通訊" },
  { icon: <FiTool />, name: "模組化工具" },
  { icon: <FiServer />, name: "MCP Server 平台" },
  { icon: <FiCpu />, name: "生成式 AI 應用" },
];

export default function ArchitectureOverview() {
  return (
    <section id="architecture-overview" className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">端到端的五層式技術架構</h2>
          <p className="mt-4 text-lg text-gray-400">從物理世界到智慧應用，我們的架構涵蓋了數位轉型的每一個環節。</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between">
          {layers.map((layer, index) => (
            <div key={layer.name} className="flex flex-col items-center text-center w-full md:w-auto mb-8 md:mb-0">
              <div className="bg-zinc-800 border-2 border-zinc-700 rounded-full w-24 h-24 flex items-center justify-center text-red-500 text-4xl">
                {layer.icon}
              </div>
              <p className="mt-4 font-semibold text-lg">{layer.name}</p>
              <p className="text-sm text-gray-400">第 {index + 1} 層</p>
            </div>
          ))}
          {/* Connecting lines for larger screens */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-700 -z-10"></div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/architecture"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            深入了解完整架構
          </Link>
        </div>
      </div>
    </section>
  );
}