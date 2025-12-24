import { motion } from "framer-motion";
import { services } from "../../data/services";

export default function ServiceStack() {
  return (
    <section className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <div
              className="relative rounded-3xl p-10 border-l-4 border-mainGold backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, rgba(197,163,99,0.15), rgba(0,0,0,0.4))`,
              }}
            >
              {/* Number */}
              <div className="absolute -top-16 -right-4 text-[120px] font-extrabold text-mainColor select-none">
                {index + 1}
              </div>

              <h3 className="text-3xl font-bold text-mainColor mb-6">
                {item.title}
              </h3>

              <p className="text-mainColor/80 text-lg leading-relaxed max-w-2xl">
                {item.desc}
              </p>

              {/* Accent line */}
              <div className="mt-8 h-[2px] w-24 bg-mainGold"></div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

