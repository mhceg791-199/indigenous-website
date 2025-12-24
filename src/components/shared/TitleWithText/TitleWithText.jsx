import { motion } from "framer-motion";

export default function TitleWithText({ title, paragraph }) {
  return (
    <motion.div
      className="my-10 p-6 rounded-2xl bg-mainColor backdrop-blur-lg border border-white/10 shadow-md transition hover:shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="heading  text-lightColor mb-4 tracking-wide">{title}</h3>

      <p className="leading-relaxed text-gray-100 text-justify">{paragraph}</p>
    </motion.div>
  );
}
