import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  const { imgs, name, slug } = project;
  return (
    <Link to={`/projects/${slug}`}>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-gray-900 hover:bg-transparent duration-700 opacity-70"></div>
        <img
          className="h-[50vh] w-full object-cover mb-1"
          src={imgs[0]}
          alt={`${{ name }}`}
        />
      </div>
      <p>{name}</p>
    </Link>
  );
}
