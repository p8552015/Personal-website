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
  title: "智慧製造 AI 解決方案 | Netflix 風格暗色系官網",
  description: "結合 Line + MCP 智能小幫手與四層技術架構，打造全方位智慧製造解決方案。包含 AI 協作、即時資料分析、預測性維護和 AR/MR 應用。",
  keywords: "智慧製造, AI, 人工智能, 製造業, 工業4.0, OT資料, RAG系統, 預測性維護, AR, MR, Line Bot, MCP",
  authors: [{ name: "智慧製造團隊" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "智慧製造 AI 解決方案",
    description: "結合 Line + MCP 智能小幫手與四層技術架構，打造全方位智慧製造解決方案",
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "智慧製造 AI 解決方案",
    description: "結合 Line + MCP 智能小幫手與四層技術架構，打造全方位智慧製造解決方案",
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
