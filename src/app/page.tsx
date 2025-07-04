import HeroNew from '@/components/sections/HeroNew';
import FiveLayerArchitecture from '@/components/sections/FiveLayerArchitecture';
import ValueProps from '@/components/sections/ValueProps';
import ArchitectureOverview from '@/components/sections/ArchitectureOverview';
import UseCaseTeaser from '@/components/sections/UseCaseTeaser';

export default function Home() {
  return (
    <>
      <HeroNew />
      <FiveLayerArchitecture />
      <ValueProps />
      <ArchitectureOverview />
      <UseCaseTeaser />
    </>
  );
}