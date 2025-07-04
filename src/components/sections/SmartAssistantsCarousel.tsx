'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AssistantCard {
  icon: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

const assistants: AssistantCard[] = [
  {
    icon: "📅",
    title: "行事曆小幫手",
    desc: "自然語言排程、秒同步 Google/Outlook",
    cta: "立即試試",
    href: "/assistants/calendar-bot"
  },
  {
    icon: "🍱",
    title: "點餐彙整小幫手",
    desc: "群組訂單自動彙總、Line Pay 結帳",
    cta: "立即點餐",
    href: "/assistants/order-bot"
  },
  {
    icon: "🏭",
    title: "產線查詢小幫手",
    desc: "隨問即答 OEE、稼動率",
    cta: "查看 Dashboard",
    href: "/assistants/production-bot"
  }
];

export default function SmartAssistantsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % assistants.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + assistants.length) % assistants.length);
  };

  return (
    <section id="Smart-Assistants" className="px-4 py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* 標題區域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI 智能小幫手
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Line + MCP 智能小幫手可即時協助排程、訂餐、查產線，透過自然語言對話觸發 API
          </p>
        </div>

        {/* 桌面版：並排顯示 */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {assistants.map((assistant, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-xl p-6 card-hover group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {assistant.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {assistant.title}
              </h3>
              <p className="text-gray-300 mb-6 line-clamp-2">
                {assistant.desc}
              </p>
              <Link
                href={assistant.href}
                className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                {assistant.cta}
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* 手機版：輪播 */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {assistants.map((assistant, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-zinc-800 rounded-xl p-6 card-hover">
                      <div className="text-4xl mb-4 text-center">
                        {assistant.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 text-center">
                        {assistant.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-center">
                        {assistant.desc}
                      </p>
                      <div className="text-center">
                        <Link
                          href={assistant.href}
                          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200"
                        >
                          {assistant.cta}
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 導航按鈕 */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* 指示器 */}
          <div className="flex justify-center mt-6 space-x-2">
            {assistants.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-red-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}