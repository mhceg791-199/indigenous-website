import { lazy, Suspense } from "react";
import OverviewSection from "../../components/shared/Overview/Overview";
import FeatherVideo from "../../components/home/FeatherVideo/FeatherVideo";
import FeatherBanner from "../../components/home/FeatherBanner/FeatherBanner";
import WhatWeDo from "../../components/home/WhatWeDo/WhatWeDo";
// import HeroNeuralSection from "../../components/home/HeroNeural/HeroNeural";
const HeroNeuralSection = lazy(() =>
  import("../../components/home/HeroNeural/HeroNeural")
);

function Home() {
  return (
    <>
      <FeatherVideo />
      <OverviewSection />
      <WhatWeDo/>
      <FeatherBanner />
      <Suspense fallback={null}>
        <HeroNeuralSection />
      </Suspense>
      {/* <HeroNeuralSection /> */}
    </>
  );
}

export default Home;
