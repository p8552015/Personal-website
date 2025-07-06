'use client';

import React, { useState, useEffect } from 'react';

export default function ExperiencePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = ['overview', 'skills', 'cooperation', 'awards'];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 背景裝飾 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="grid grid-cols-12 gap-4 opacity-5">
            {Array.from({ length: 144 }, (_, i) => (
              <div key={i} className="h-1 bg-red-600 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
          <div className="relative z-10 text-center px-4">
            <div className={`transform transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                個人經歷
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                22 年產業深耕 × 技術創新引領者
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-red-600/20 backdrop-blur-lg px-6 py-3 rounded-full border border-red-600/30">
                  <span className="text-red-300 font-semibold">30+ 專利</span>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-600/30">
                  <span className="text-blue-300 font-semibold">60+ 技轉案</span>
                </div>
                <div className="bg-green-600/20 backdrop-blur-lg px-6 py-3 rounded-full border border-green-600/30">
                  <span className="text-green-300 font-semibold">2億+ 經費</span>
                </div>
              </div>
            </div>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
        
        {/* 個人概況 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              個人概況
            </h2>
            <p className="text-gray-400 text-lg">深耕產業 22 年，技術創新與產學合作的領航者</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="group relative overflow-hidden bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-lg border border-red-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-red-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-red-400">產業年資</h3>
                </div>
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors">22 年</p>
                <p className="text-gray-300">研發＋產學合作</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-blue-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-400">專利數量</h3>
                </div>
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">30 件</p>
                <p className="text-gray-300">國內外發明專利</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-green-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-400">技轉／產學案</h3>
                </div>
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors">60+ 件</p>
                <p className="text-gray-300">多領域合作經驗</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-400">合作企業</h3>
                </div>
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">50 餘家</p>
                <p className="text-gray-300">跨產業合作夥伴</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-lg border border-orange-500/20 rounded-2xl p-10 hover:scale-105 transition-all duration-500 hover:border-orange-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-orange-400">2022–2024 產學計畫申請核准經費</h3>
              </div>
              <p className="text-6xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">2 億元以上</p>
              <p className="text-gray-300 text-lg">持續推動產學合作，創造卓越價值</p>
            </div>
          </div>
        </section>

        {/* 技術專長 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              技術專長
            </h2>
            <p className="text-gray-400 text-lg">跨領域技術整合，推動智慧製造革新</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">通訊協定</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    控制器自訂協定
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    MCP（Model Context Protocol）
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    OPC UA Server
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">AI／Edge</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    AI 機邊運算
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    生成式 AI 應用（RAG、Agents 等）
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">XR 技術</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    AR/MR 遠端支援
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    虛實整合
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 backdrop-blur-lg border border-yellow-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">OT 資料採集</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    感測器串接
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    工業資料管線
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative lg:col-span-2 bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-lg border border-red-500/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-400">系統整合</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  產線 OT–IT–AI 端到端解決方案，結合營運技術、資訊技術與人工智慧，
                  打造完整的智慧製造生態系統，實現數據驅動的決策支援與自動化優化。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 產學合作與技轉 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              產學合作與技轉
            </h2>
            <p className="text-gray-400 text-lg">橋接學術研究與產業應用，創造實質價值</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 backdrop-blur-lg border border-emerald-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/15 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">產學合作經驗</h3>
                <p className="text-5xl font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">15 年</p>
                <p className="text-gray-300">深度產學合作經驗</p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-teal-900/40 to-teal-800/30 backdrop-blur-lg border border-teal-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/15 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-teal-400 mb-4">技轉／產學案</h3>
                <p className="text-5xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">60+ 件</p>
                <p className="text-gray-300">涵蓋智慧製造、機械、電子、AIoT 等</p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">核心成果</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="group-hover:text-cyan-200 transition-colors">AI 邊緣裝置</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="group-hover:text-cyan-200 transition-colors">智慧機台控制器</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="group-hover:text-cyan-200 transition-colors">OPC UA 軟體堆疊</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="group-hover:text-cyan-200 transition-colors">XR 遠端導引系統</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 近三年競賽與榮譽 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              近三年競賽與榮譽
            </h2>
            <p className="text-gray-400 text-lg">持續創新突破，屢獲業界肯定</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 2022 年度成就 */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">2022</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">年度亮點</h3>
              </div>
              
              <div className="group relative bg-gradient-to-br from-yellow-900/30 to-orange-900/20 backdrop-blur-lg border border-yellow-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:border-yellow-500/50">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-yellow-300 mb-2">中華電信比賽 - 最佳技術獎</h4>
                <p className="text-gray-300 mb-3">技術創新領先，獲得評審一致認可</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-bold">NT$ 80,000</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">最高獎項</span>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-orange-900/30 to-red-900/20 backdrop-blur-lg border border-orange-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:border-orange-500/50">
                <h4 className="text-xl font-semibold text-orange-300 mb-2">中華電信比賽 - 佳作</h4>
                <p className="text-gray-300 mb-3">多項作品同時獲獎，展現技術實力</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold">NT$ 50,000</span>
                </div>
              </div>
            </div>
            
            {/* 2023-2024 年度成就 */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">23-24</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">持續突破</h3>
              </div>
              
              <div className="group relative bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-lg border border-green-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:border-green-500/50">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3rd</span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-green-300 mb-2">2023 聯網大賽 - 季軍</h4>
                <p className="text-gray-300 mb-3">全國聯網技術競賽中脫穎而出</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold">NT$ 100,000</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">前三名</span>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:border-blue-500/50">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-blue-300 mb-2">2024 GEN AI Stars - 特優</h4>
                <p className="text-gray-300 mb-3">生成式 AI 領域創新應用獲特優肯定</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-bold">NT$ 100,000</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">特優獎</span>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:border-purple-500/50">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Top9</span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">2024 MobileHero 國際大賽</h4>
                <p className="text-gray-300 mb-3">國際賽前 9 名，獲新創輔導機會</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">新創輔導 10 天</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">國際級</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 其他榮譽 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg border border-gray-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-500">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">2023 中華電信創新競賽</h4>
              <p className="text-gray-400 mb-2">入圍決賽</p>
              <span className="text-gray-300 font-medium">NT$ 10,000</span>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg border border-gray-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-500">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">2024 EE 創意挑戰賽 (AIoT)</h4>
              <p className="text-gray-400 mb-2">入圍決賽</p>
              <span className="text-gray-300 font-medium">技術認可</span>
            </div>
          </div>
          
          {/* 總結統計 */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-900/30 via-orange-900/30 to-yellow-900/30 backdrop-blur-lg border border-orange-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">三年競賽成果總覽</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">7</p>
                  <p className="text-gray-300">參賽項目</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">5</p>
                  <p className="text-gray-300">獲獎項目</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">34萬+</p>
                  <p className="text-gray-300">總獎金（NT$）</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      </div>
    </div>
  );
}