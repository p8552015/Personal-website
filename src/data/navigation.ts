import { NavLink } from '@/types';

export const navigationLinks: NavLink[] = [
  {
    name: '首頁',
    href: '/',
    current: false
  },
  {
    name: '技術架構',
    href: '/architecture',
    current: false
  },
  {
    name: '智能助手',
    href: '/assistants',
    current: false
  },
  {
    name: '解決方案',
    href: '/solutions',
    current: false
  },
  {
    name: '使用案例',
    href: '/use-cases',
    current: false
  },
  {
    name: '成功案例',
    href: '/cases',
    current: false
  },
  {
    name: '關於我們',
    href: '/about',
    current: false
  }
];

export const footerLinks = {
  solutions: [
    { name: '智能製造', href: '/solutions#manufacturing' },
    { name: '預測維護', href: '/solutions#predictive-maintenance' },
    { name: '品質管理', href: '/solutions#quality-management' },
    { name: '供應鏈優化', href: '/solutions#supply-chain' }
  ],
  support: [
    { name: '技術文檔', href: '/docs' },
    { name: '常見問題', href: '/faq' },
    { name: '聯繫支援', href: '/support' },
    { name: '系統狀態', href: '/status' }
  ],
  company: [
    { name: '關於我們', href: '/about' },
    { name: '新聞動態', href: '/news' },
    { name: '加入我們', href: '/careers' },
    { name: '合作夥伴', href: '/partners' }
  ],
  legal: [
    { name: '隱私政策', href: '/privacy' },
    { name: '服務條款', href: '/terms' },
    { name: '資料保護', href: '/data-protection' },
    { name: '合規聲明', href: '/compliance' }
  ]
};