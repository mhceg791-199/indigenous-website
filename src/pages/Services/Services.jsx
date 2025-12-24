import ExpertiseSection from "../../components/Services/ExpertiseSection/ExpertiseSection";
import ServiceCard from "../../components/Services/ServiceCard";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";

export default function Services() {
  const paragraphs = [
    "At Indigenous Mosaic Company, every project is more than infrastructure — it is a living story shaped by creativity, cultural intelligence, and purpose-driven innovation.",
    "Our services bring together architecture, engineering, technology, and sustainability into a single, integrated approach — one that respects the land, serves communities, and delivers lasting value."
  ];
  return (
    <>
      <FirstSectionByVideo title="Services" />
      <DescriptionAbout
        id="services-real-estate"
        firstWord="Services"
        secondWord=""
        paragraphs={paragraphs}
        particleColors={["#e0e0d4", "#e0e0d4"]}
        height="h-[28vh] md:h-[40vh]"
      />
      <ExpertiseSection/>
      <ServiceCard />
    </>
  );
}
