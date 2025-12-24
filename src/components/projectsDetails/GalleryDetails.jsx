import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectGallery({ imgs }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => {
    setLightboxIndex((prev) => (prev + 1) % imgs.length);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <>
      {/* ✅ SECTION TITLE */}
      <section className="mt-20">
        {/* ✅ MASONRY GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 max-w-6xl mx-auto px-6 md:px-10 space-y-5">
          {imgs.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={img}
                alt={`project-${i}`}
                className="w-full mb-5 rounded-xl transition-transform duration-500 hover:scale-105"
                onClick={() => openLightbox(i)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ LIGHTBOX POPUP + NAVIGATION */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              {/* ✅ FIXED SIZE FRAME */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="
            w-[80vw] 
            h-[80vh] 
            flex 
            items-center 
            justify-center 
            bg-black/20 
            rounded-xl 
            overflow-hidden
            shadow-2xl
          "
              >
                {/* ✅ IMAGE FITS CONSISTENTLY */}
                <img
                  src={imgs[lightboxIndex]}
                  className="max-w-full max-h-full object-contain"
                  alt="ProjectGallery"
                />
              </motion.div>

              {/* ✅ CLOSE BUTTON */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-mainGold transition"
              >
                ✕
              </button>

              {/* ✅ LEFT ARROW */}
              <button
                onClick={showPrev}
                className="
            absolute left-[-40px] md:left-[-70px] top-1/2 -translate-y-1/2
            text-white text-5xl font-bold
            bg-black/40 hover:bg-black/60
            w-14 h-14 rounded-full flex items-center justify-center
            transition
          "
              >
                ‹
              </button>

              {/* ✅ RIGHT ARROW */}
              <button
                onClick={showNext}
                className="
            absolute right-[-40px] md:right-[-70px] top-1/2 -translate-y-1/2
            text-white text-5xl font-bold
            bg-black/40 hover:bg-black/60
            w-14 h-14 rounded-full flex items-center justify-center
            transition
          "
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
