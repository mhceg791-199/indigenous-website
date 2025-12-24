import { useParams } from "react-router-dom";
import ProjectsData from "../../data/ProjectsData";
import SliderOfImgsProject from "./SliderOfImgsProject";

function ProjectsDetailsPage() {
  const { slug } = useParams();

  const project = ProjectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="py-40 text-center text-2xl">Project not found.</div>;
  }

  const {
    description,
    year,
    location,
    status,
    client,
    industry,
    imgs,
    name,
    awards,
  } = project;

  const DetailBlock = ({ label, value }) => (
    <div className="border-b border-gray-200 py-3">
      <p className="paragraph font-semibold  uppercase">{label}</p>
      <p className="text-base font-medium">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="md:pt-[6.4rem] pb-12 bg-gray-50 border-b border-gray-100">
        <div className="relative h-[40vh] w-full">
          <img
            src={imgs[0]}
            alt={name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
            <h1 className="text-3xl md:text-6xl font-bold text-mainGold drop-shadow-lg">
              {name}
            </h1>
            <p className="text-lightColor text-xl mt-4">{industry}</p>
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto px-6 lg:px-8">
     <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900">
      {name}
     </h1>
     <p className="text-xl text-mainBrown mt-2">
      Structural Engineering Project
     </p>
    </div> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3 order-2 lg:order-1 lg:border-r lg:pr-10">
            <h3 className="text-xl font-bold mb-4 text-mainColor border-l-4 border-mainColor pl-3">
              Project Details
            </h3>
            <div className="space-y-1">
              <DetailBlock label="Sector" value={industry} />
              {/* <DetailBlock label="Client" value={client} /> */}
              {/* <DetailBlock label="Location" value={location} /> */}
              <DetailBlock label="Status" value={status} />
              {/* <DetailBlock label="Year" value={year} /> */}
            </div>
          </div>

          <div className="lg:col-span-9 order-1 lg:order-2 space-y-10 lg:pl-10">
            {/* (Description) */}
            <div>
              <h3 className="text-2xl text-mainColor font-bold mb-6">
                Overview
              </h3>
              <p className="paragraph text-mainColor mt-2">
                {description}
              </p>
              {/* {awards &&
                Array.isArray(awards) &&
                awards.map((d, index) => (
                  <p
                    className="my-4 text-lg leading-relaxed text-neutral-700"
                    key={index}
                  >
                    {d}
                  </p>
                ))} */}
              <ul className="space-y-3 my-4">
                {awards.map((award, index) => (
                  <li key={index} className="flex gap-3 text-mainColor">
                    <span className="text-mainGold">•</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>

            {/* (Slider) */}
            {imgs && imgs.length > 0 && (
              <div className="md:pt-4">
                <h3 className="text-2xl font-bold text-mainColor mb-6">
                  Gallery
                </h3>
                <SliderOfImgsProject imgs={imgs} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetailsPage;
