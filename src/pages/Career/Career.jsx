import OurValues from "../../components/about/OurValues/OurValues";
import DomeGallery from "../../components/Career/DomeGallery/DomeGallery";
import ReadyToJoin from "../../components/Career/ReadyToJoin/ReadyToJoin";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function Career() {
  const paragraphs = [
    "Join Indigenous Mosaic and be part of a team that values innovation, excellence, and a commitment to shaping the future of engineering",
  ];
  return (
    <>
      <div style={{ width: "99vw", height: "80vh" }}>
        <DomeGallery />
      </div>

      <DescriptionAbout
        id="Careers"
        firstWord="Join Our Team of "
        secondWord="Visionary Engineers"
        paragraphs={paragraphs}
        particleColors={["#e0d8c2", "#e0d8c2"]}
        height="h-[20vh] md:h-[40vh]"
      />
      <OurValues />
      <ReadyToJoin />
    </>
  );
}

export default Career;
