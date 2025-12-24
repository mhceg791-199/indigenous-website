import { Fragment, useEffect, useState } from "react";
import SectionHeader from "../../components/shared/SectionHeaders/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import ProjectsData from "../../data/ProjectsData";

export default function ProjectPage() {
  const industries = ["All", ...new Set(ProjectsData.map((p) => p.industry))];

  const [activeIndustry, setActiveIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

  useEffect(() => {
    let result = ProjectsData;

    // فلترة بالـ Industry
    if (activeIndustry !== "All") {
      result = result.filter((p) => p.industry === activeIndustry);
    }

    // فلترة بالبحث
    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(result);
  }, [activeIndustry, searchQuery]);

  return (
    <div className="mt-[5.5rem] md:mt-[8rem] lg:px-20 px-8">
      <h1 className="text-lightColor heading font-bold text-center my-3">
        <SectionHeader firstWord="Our Projects" />
      </h1>

      {/* <hr className="my-3" /> */}
      <div className="border-y-2 border-lightColor py-6">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search projects by name..."
            className="w-full md:w-[90%] px-4 py-2 text-lightColor bg-mainColor border border-lightColor/40 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-lightColor transition-al"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveIndustry(ind)}
              className={`px-3 py-2 rounded-full border transition-all duration-300 capitalize
              ${
                activeIndustry === ind
                  ? "bg-lightColor text-mainColor border-mainColor"
                  : "border-lightColor/40 hover:bg-lightColor hover:text-mainColor bg-mainColor text-lightColor"
              }
            `}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* <hr className="my-3" /> */}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 my-5">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Fragment key={index}>
              <ProjectCard project={project} />
            </Fragment>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
