// src/components/sections/UseCaseTeaser.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function UseCaseTeaser() {
  return (
    <section id="use-case-teaser" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">真實世界的智慧應用</h2>
          <p className="mt-4 text-lg text-gray-400">了解我們的技術如何在實際場景中解決複雜問題。</p>
        </div>

        <div className="bg-zinc-900 rounded-xl overflow-hidden md:flex md:items-center border border-zinc-800">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1617978241112-986c7479a834?q=80&w=1935&auto=format&fit=crop"
              alt="Engineer using AR technology"
              width={1935}
              height={1290}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">應用範例：夜間 CNC 異常排除</h3>
            <p className="text-gray-400 mb-6">
              從感測器偵測到異常震動，到 AI 初步診斷，再到現場技術員透過 AR 指引與遠程專家協作完成維修。我們將展示一個完整的閉環解決方案，看見數據如何轉化為行動。
            </p>
            <Link
              href="/use-cases"
              className="inline-block bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg font-semibold px-6 py-3 transition-all"
            >
              閱讀完整案例
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}