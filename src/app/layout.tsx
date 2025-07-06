import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " 生成式智慧製造平台 | Agentic Orchestrator 驅動的五層架構",
  description: "AI agent採用五層架構（數據採集→標準化通訊→模組化工具→MCP 伺服器平台→生成式 AI 應用），透過 Agentic Orchestrator 實現 OEE 最大化、成本優化與知識保存。",
  keywords: "AI agent, 生成式智慧製造, Agentic Orchestrator, 五層架構, OEE最大化, 成本優化, 知識保存, 工業4.0, 智慧製造, MCP伺服器, Tool-Sensor Hub, Tool-OPC Server, Tool-AR SOP",
  authors: [{ name: "AI Agent 團隊" }],
  robots: "index, follow",
  openGraph: {
    title: "AI agent生成式智慧製造平台",
    description: "透過 Agentic Orchestrator 驅動的五層架構，實現 OEE 最大化、成本優化與知識保存",
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI agent 生成式智慧製造平台",
    description: "透過 Agentic Orchestrator 驅動的五層架構，實現 OEE 最大化、成本優化與知識保存",
  },
};

export const viewport = "width=device-width, initial-scale=1";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PerformanceProvider from "@/components/PerformanceProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <PerformanceProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </PerformanceProvider>
      </body>
    </html>
  );
}
