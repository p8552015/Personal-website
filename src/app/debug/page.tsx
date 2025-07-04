'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function DebugPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // 檢查是否已經認證
    const auth = sessionStorage.getItem('debug-auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 簡單的密碼驗證（實際應用中應該使用更安全的方式）
    if (password === 'debug123') {
      sessionStorage.setItem('debug-auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('密碼錯誤');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('debug-auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">開發者工具</h1>
              <p className="text-gray-400">請輸入密碼以存取 Debug 頁面</p>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                密碼
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="請輸入密碼"
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
            </div>
            
            <Button type="submit" variant="primary" className="w-full">
              登入
            </Button>
            
            <p className="text-center text-sm text-gray-400">
              提示：預設密碼為 debug123
            </p>
          </form>
        </Card>
      </Container>
    );
  }

  // Debug 頁面內容
  return (
    <Container className="py-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">開發者工具</h1>
          <p className="text-gray-400">系統狀態與調試資訊</p>
        </div>
        <Button onClick={handleLogout} variant="secondary" size="sm">
          登出
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 系統資訊 */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">系統資訊</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Next.js 版本</span>
              <span>15.3.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">React 版本</span>
              <span>19.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Node 環境</span>
              <Badge variant="success" size="sm">
                {process.env.NODE_ENV || 'development'}
              </Badge>
            </div>
          </div>
        </Card>

        {/* 路由資訊 */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">路由資訊</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">當前路徑</span>
              <span>/debug</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">頁面類型</span>
              <span>Client Component</span>
            </div>
          </div>
        </Card>

        {/* 瀏覽器資訊 */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">瀏覽器資訊</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">視窗寬度</span>
              <span>{typeof window !== 'undefined' ? window.innerWidth : 'N/A'}px</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">視窗高度</span>
              <span>{typeof window !== 'undefined' ? window.innerHeight : 'N/A'}px</span>
            </div>
          </div>
        </Card>

        {/* API 測試 */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">API 測試工具</h2>
          <div className="space-y-4">
            <Button variant="primary" size="sm" className="w-full">
              測試 API 連線
            </Button>
            <Button variant="secondary" size="sm" className="w-full">
              清除快取
            </Button>
          </div>
        </Card>

        {/* 功能開關 */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">功能開關</h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500" />
              <span className="text-sm">啟用實驗性功能</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500" />
              <span className="text-sm">顯示效能指標</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500" />
              <span className="text-sm">Debug 模式</span>
            </label>
          </div>
        </Card>

        {/* 快速連結 */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">快速連結</h2>
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start"
              onClick={() => router.push('/')}
            >
              → 返回首頁
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start"
              onClick={() => router.push('/assistants')}
            >
              → 智能助手頁面
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start"
              onClick={() => router.push('/tech-stack')}
            >
              → 技術架構頁面
            </Button>
          </div>
        </Card>
      </div>

      {/* 日誌區域 */}
      <Card className="mt-8">
        <h2 className="text-xl font-semibold mb-4">系統日誌</h2>
        <div className="bg-black rounded-lg p-4 font-mono text-xs text-green-400 h-64 overflow-y-auto">
          <p>[2024-01-04 10:00:00] System initialized</p>
          <p>[2024-01-04 10:00:01] Debug mode enabled</p>
          <p>[2024-01-04 10:00:02] All services running normally</p>
          <p>[2024-01-04 10:00:03] Database connection established</p>
          <p>[2024-01-04 10:00:04] Cache warmed up</p>
          <p>[2024-01-04 10:00:05] Ready to serve requests</p>
        </div>
      </Card>
    </Container>
  );
}