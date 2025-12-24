import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

export default function TitleWithList({ title, text, list = [] }) {
  return (
    <motion.div
      className="my-10 p-6 rounded-2xl bg-mainColor backdrop-blur-lg border border-white/10 shadow-md transition hover:shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="heading text-lightColor mb-4 tracking-wide">{title}</h3>

      <p className="leading-relaxed mb-5 text-justify text-gray-100">{text}</p>

      {list.length > 0 && (
        <ul className="space-y-3 text-gray-100">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-1 text-gray-100">
                <FaChevronRight size={14} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
