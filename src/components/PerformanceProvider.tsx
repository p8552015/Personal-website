'use client';

import { useEffect } from 'react';
import { performanceMonitor } from '@/utils/performance';

export default function PerformanceProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 初始化 Web Vitals 監控
    if (typeof window !== 'undefined') {
      Promise.all([
        import('web-vitals/attribution').then(m => m.onCLS),
        import('web-vitals/attribution').then(m => m.onINP),
        import('web-vitals/attribution').then(m => m.onFCP),
        import('web-vitals/attribution').then(m => m.onLCP),
        import('web-vitals/attribution').then(m => m.onTTFB),
      ]).then(([onCLS, onINP, onFCP, onLCP, onTTFB]) => {
        onCLS(performanceMonitor.recordWebVitals);
        onINP(performanceMonitor.recordWebVitals);
        onFCP(performanceMonitor.recordWebVitals);
        onLCP(performanceMonitor.recordWebVitals);
        onTTFB(performanceMonitor.recordWebVitals);
      }).catch(() => {
        console.log('Web Vitals 監控庫載入失敗');
      });
    }
  }, []);

  return <>{children}</>;
}