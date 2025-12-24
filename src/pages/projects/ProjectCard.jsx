import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  const { imgs, name, slug } = project;
  return (
    <Link
      to={`/projects/${slug}`}
      className="bg-mainColor border border-lightColor p-4 rounded-xl overflow-hidden hover:scale-[1.02] transition block"
    >
      <img
        src={imgs[0]}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 text-lightColor text-xl">{name}</h3>
    </Link>
  );
}
