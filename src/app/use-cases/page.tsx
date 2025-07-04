// src/app/use-cases/page.tsx
import { FaBroadcastTower, FaUserMd, FaTools, FaLaptopMedical } from 'react-icons/fa';

const TimelineStep = ({ icon, title, description, isLast = false }: any) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white z-10">
        {icon}
      </div>
      {!isLast && <div className="w-px h-full bg-zinc-700"></div>}
    </div>
    <div className="pb-16">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">整合流程與應用範例</h1>
          <p className="mt-4 text-lg text-gray-400">
            情境：一台位於工廠核心區域的 CNC 機台在夜間班次出現異常震動，現場只有一位資歷較淺的技術員。
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <TimelineStep 
            icon={<FaBroadcastTower />}
            title="步驟 1：異常偵測與自動處理 (Layer 1, 2, 4)"
            description="機台上的 Sensor Hub 偵測到震動頻譜超出正常範圍，立即透過 MQTT 將異常數據發布。MCP Server 接收到訊息後，自動觸發警報，透過 Line 推播通知值班主管與技術員，並初步診斷為「主軸軸承磨損」，同時生成高優先級維修工單。"
          />
          <TimelineStep 
            icon={<FaLaptopMedical />}
            title="步驟 2：AI 輔助與 AR 指引 (Layer 3, 5)"
            description="技術員收到通知後，向內建的 AI 維修助手詢問維修程序。AI 從知識平台調用對應的 SOP，並啟動 AR 指引。技術員透過平板，即可看到疊加在實體設備上的 3D 分解圖與動畫標示，指導他進行拆卸。"
          />
          <TimelineStep 
            icon={<FaUserMd />}
            title="步驟 3：MR 遠距專家協作 (Layer 3)"
            description="當技術員遇到困難時，他點擊 AR 介面上的「請求專家支援」。MR 遠距協作系統接通了在家的資深專家。專家能透過即時畫面，直接在影像上進行標註和語音指導，解決現場問題。"
          />
          <TimelineStep 
            icon={<FaTools />}
            title="步驟 4：閉環學習與知識累積 (Layer 1-5)"
            description="維修完成後，技術員關閉工單。AI 助手彈出對話框，引導他記錄本次維修中遇到的特殊情況。這條寶貴的回饋將被記錄至知識平台，用於未來更新 SOP 或訓練 AI 模型，形成一個不斷自我完善的智慧循環。"
            isLast={true}
          />
        </div>

      </div>
    </div>
  );
}