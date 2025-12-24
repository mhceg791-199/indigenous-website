import MissionVisionSection from "../../components/about/MissionVision/MissionVision";
import OurValues from "../../components/about/OurValues/OurValues";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function About() {
  const paragraphs = [
    "Indigenous Mosaic Company begins with the land — and with the people who have cared for it for generations.",
    "Rooted in the values and long-term vision of the Chiniki Group of Companies (First Nation), the company is shaped by a belief that land is not simply something to be developed, but something to be respected, stewarded, and carried forward. For Chiniki, development has always meant building with community, responsibility, and future generations in mind.",
    "Alongside this worldview stands Mosaic Holding Corporation, a global platform of architecture, engineering, and EPCM expertise — known for bringing disciplines, technology, and delivery systems together to turn ambitious ideas into reality.",
    "Indigenous Mosaic was born at the intersection of these two forces.",
    "It is a partnership formed through shared values — uniting Indigenous leadership and cultural intelligence with world-class technical capability. By weaving together heritage and innovation, Indigenous Mosaic emerged as a new kind of firm — one that doesn’t choose between tradition and progress, but deliberately integrates both.",
    "Built on trust, driven by creativity, and powered by purpose, Indigenous Mosaic delivers architecture, engineering, and EPCM solutions that are technically exceptional, environmentally responsible, and culturally alive — shaping communities that honour where they come from while confidently moving forward."
  ];

  return (
    <>
      <FirstSectionByVideo title="About US" />
      <DescriptionAbout
        id="about-real-state"
        firstWord="Our "
        secondWord="Story"
        paragraphs={paragraphs}
        particleColors={["#f2ddc0", "#f2ddc0"]}
        height="h-[85vh] md:h-[65vh]"
      />
      <MissionVisionSection />
      <OurValues />
    </>
  );
}

export default About;
