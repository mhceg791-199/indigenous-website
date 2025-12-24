import OverviewSection from "../../components/shared/Overview/Overview";
import FeatherVideo from "../../components/home/FeatherVideo/FeatherVideo";
import FeatherBanner from "../../components/home/FeatherBanner/FeatherBanner";
import HeroNeuralSection from "../../components/home/HeroNeural/HeroNeural";
import WhatWeDo from "../../components/home/WhatWeDo/WhatWeDo";

function Home() {
  return (
    <>
      <FeatherVideo />
      <OverviewSection />
      <WhatWeDo/>
      <FeatherBanner />
      <HeroNeuralSection />
    </>
  );
}

export default Home;
