// 智能小幫手類型定義
export interface SmartAssistant {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  useCases: string[];
  integrations: string[];
  benefits: string[];
  stats?: {
    users?: string;
    accuracy?: string;
    efficiency?: string;
  };
}

// 技術堆疊類型定義
export interface TechLayer {
  id: number;
  name: string;
  description: string;
  icon: any;
  color: string;
  tools: TechTool[];
  features: string[];
}

export interface TechTool {
  name: string;
  icon: any;
  description: string;
  features: string[];
}

// 案例研究類型定義
export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  image?: string;
}

// 功能特色類型定義
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

// 價值主張類型定義
export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
}

// 團隊成員類型定義
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  expertise: string[];
}

// 里程碑類型定義
export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  achievement: string;
}

// 使用案例類型定義
export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: UseCaseStep[];
}

export interface UseCaseStep {
  title: string;
  description: string;
  icon: string;
}

// 導航連結類型定義
export interface NavLink {
  name: string;
  href: string;
  current?: boolean;
}

// 頁面元資料類型定義
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    image?: string;
  };
}