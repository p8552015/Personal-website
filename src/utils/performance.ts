// 效能監控工具
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // 開始計時
  startTimer(label: string): void {
    this.metrics.set(label, performance.now());
  }

  // 結束計時並記錄
  endTimer(label: string): number {
    const startTime = this.metrics.get(label);
    if (startTime) {
      const duration = performance.now() - startTime;
      this.metrics.delete(label);
      
      // 在開發環境中記錄到控制台
      if (process.env.NODE_ENV === 'development') {
        console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
      }
      
      return duration;
    }
    return 0;
  }

  // 記錄頁面載入時間
  recordPageLoad(pageName: string): void {
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        if (process.env.NODE_ENV === 'development') {
          console.log(`📄 ${pageName} 載入時間: ${loadTime.toFixed(2)}ms`);
        }
      }
    }
  }

  // 記錄 Core Web Vitals
  recordWebVitals(metric: any): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🎯 ${metric.name}: ${metric.value}`, metric);
    }
    
    // 這裡可以加入將數據發送到分析服務的邏輯
    // 例如 Google Analytics、Vercel Analytics 等
  }

  // 記錄 API 調用時間
  async measureAPICall<T>(label: string, apiCall: () => Promise<T>): Promise<T> {
    this.startTimer(label);
    try {
      const result = await apiCall();
      this.endTimer(label);
      return result;
    } catch (error) {
      this.endTimer(label);
      throw error;
    }
  }

  // 記錄組件渲染時間
  measureComponentRender(componentName: string, renderFunction: () => void): void {
    this.startTimer(`${componentName}-render`);
    renderFunction();
    this.endTimer(`${componentName}-render`);
  }

  // 獲取記憶體使用情況
  getMemoryUsage(): any {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }

  // 清理所有計時器
  clearAllTimers(): void {
    this.metrics.clear();
  }
}

// 創建全局實例
export const performanceMonitor = PerformanceMonitor.getInstance();

// Web Vitals 監控 Hook
export function useWebVitals(onMetric?: (metric: any) => void) {
  if (typeof window !== 'undefined') {
    Promise.all([
      import('web-vitals/attribution').then(m => m.onCLS),
      import('web-vitals/attribution').then(m => m.onINP), // FID 已被 INP 取代
      import('web-vitals/attribution').then(m => m.onFCP),
      import('web-vitals/attribution').then(m => m.onLCP),
      import('web-vitals/attribution').then(m => m.onTTFB),
    ]).then(([onCLS, onINP, onFCP, onLCP, onTTFB]) => {
      onCLS(onMetric || performanceMonitor.recordWebVitals);
      onINP(onMetric || performanceMonitor.recordWebVitals);
      onFCP(onMetric || performanceMonitor.recordWebVitals);
      onLCP(onMetric || performanceMonitor.recordWebVitals);
      onTTFB(onMetric || performanceMonitor.recordWebVitals);
    }).catch(() => {
      // web-vitals 不存在時的處理
      console.log('Web Vitals 監控庫未安裝');
    });
  }
}

// 頁面效能監控 Hook
export function usePagePerformance(pageName: string) {
  if (typeof window !== 'undefined') {
    // 頁面載入完成後記錄
    window.addEventListener('load', () => {
      performanceMonitor.recordPageLoad(pageName);
    });
  }
}