import HeroNew from '@/components/sections/HeroNew';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import TechStackVisualization from '@/components/sections/TechStackVisualization';
import SmartAssistantsNew from '@/components/sections/SmartAssistantsNew';

export default function Home() {
  return (
    <>
      <HeroNew />
      <FeaturesGrid />
      <SmartAssistantsNew />
      <TechStackVisualization />
    </>
  );
}