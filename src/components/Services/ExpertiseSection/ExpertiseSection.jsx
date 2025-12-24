import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featherIconPath = "/feather-icon.svg";

const services = [
  {
    id: "01",
    title: "ARCHITECTURE & DESIGN",
    description: [
      "We design spaces that do more than function — they belong.",
      "Our architectural approach is rooted in identity, place, and people, translating cultural values, community needs, and environmental context into built form.",
      "From master planning and urban design to architectural detailing and interior environments, we balance storytelling with precision.",
      "Our focus is not only on how buildings look, but on how they are experienced — supporting learning, connection, productivity, and wellbeing.",
    ],
  },
  {
    id: "02",
    title: "ENGINEERING & EPCM DELIVERY",
    description: [
      "We bring vision to life through precision-driven engineering and EPCM delivery.",
      "Integrated services across structural, civil, MEP, and infrastructure systems ensure clarity from concept through construction.",
      "Our teams deliver complex, large-scale projects where coordination, performance, and accountability matter most.",
      "Through disciplined project management, we transform ambitious ideas into built realities — sustainably and efficiently.",
    ],
  },
  {
    id: "03",
    title: "INNOVATION & TECHNOLOGY",
    description: [
      "Innovation is embedded in how we design, engineer, and deliver.",
      "We leverage BIM, digital twins, data-driven design, and smart systems to enhance performance and outcomes.",
      "Our approach blends advanced technology with cultural intelligence — ensuring innovation serves people and place.",
    ],
  },
  {
    id: "04",
    title: "SUSTAINABILITY INTEGRATION",
    description: [
      "Sustainability is not an add-on — it is our starting point.",
      "Every blueprint begins with respect for land, people, and planet.",
      "We embed environmental responsibility into materials, systems, energy strategies, and long-term operations.",
      "Our work supports resilience, efficiency, and enduring value for future generations.",
    ],
  },
];

const ExpertiseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="min-h-screen  text-black overflow-hidden font-sans">
      <div className="container mx-auto px-6 py-24 relative">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative min-h-[440px] border border-black/5 bg-white p-8 md:p-12 flex flex-col justify-between overflow-hidden cursor-default"
            >
              {/* Hover background & Watermark Feather Image */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-neutral-50 z-0"
                    />
                    {/* ريشة كبيرة جداً كعلامة مائية */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -25, x: 80 }}
                      animate={{ opacity: 0.05, scale: 1.4, rotate: -15, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -right-16 -bottom-16 z-0 pointer-events-none"
                    >
                      <img 
                        src={featherIconPath} 
                        alt="" 
                        className="w-[400px] h-[400px] object-contain grayscale" 
                      />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Top: ID & Animated Small Feather */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-5xl font-serif italic text-black/5 group-hover:text-black/10 transition-colors">
                  {service.id}
                </span>
                <motion.div
                   animate={{ 
                     rotate: hoveredIndex === index ? [0, -15, 0] : 0,
                     y: hoveredIndex === index ? -8 : 0 
                   }}
                   transition={{ 
                     repeat: Infinity, 
                     duration: 2.5,
                     ease: "easeInOut"
                   }}
                   className={`transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                  <img 
                    src={featherIconPath} 
                    alt="Logo Accent" 
                    className="w-7 h-7 object-contain"
                  />
                </motion.div>
              </div>

              {/* Content Area */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl md:text-3xl font-medium mb-6 group-hover:text-[#B59963] transition-colors duration-300">
                  {service.title}
                </h3>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden space-y-4 text-gray-600 text-sm md:text-base leading-relaxed"
                >
                  {service.description.map((line, i) => (
                    <p key={i} className="relative pl-5 border-l border-[#B59963]/30">
                      {line}
                    </p>
                  ))}
                </motion.div>
              </div>

              {/* Interactive Bottom Progress Line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-black/5 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredIndex === index ? "0%" : "-100%" }}
                  transition={{ duration: 0.7, ease: "circOut" }}
                  className="h-full w-full bg-[#B59963]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const services = [
//   {
//     id: "01",
//     title: "ARCHITECTURE & DESIGN",
//     description: [
//       "We design spaces that do more than function — they belong.",
//       "Our architectural approach is rooted in identity, place, and people, translating cultural values, community needs, and environmental context into built form.",
//       "From master planning and urban design to architectural detailing and interior environments, we balance storytelling with precision.",
//       "Our focus is not only on how buildings look, but on how they are experienced — supporting learning, connection, productivity, and wellbeing.",
//     ],
//   },
//   {
//     id: "02",
//     title: "ENGINEERING & EPCM DELIVERY",
//     description: [
//       "We bring vision to life through precision-driven engineering and EPCM delivery.",
//       "Integrated services across structural, civil, MEP, and infrastructure systems ensure clarity from concept through construction.",
//       "Our teams deliver complex, large-scale projects where coordination, performance, and accountability matter most.",
//       "Through disciplined project management, we transform ambitious ideas into built realities — sustainably and efficiently.",
//     ],
//   },
//   {
//     id: "03",
//     title: "INNOVATION & TECHNOLOGY",
//     description: [
//       "Innovation is embedded in how we design, engineer, and deliver.",
//       "We leverage BIM, digital twins, data-driven design, and smart systems to enhance performance and outcomes.",
//       "Our approach blends advanced technology with cultural intelligence — ensuring innovation serves people and place.",
//     ],
//   },
//   {
//     id: "04",
//     title: "SUSTAINABILITY INTEGRATION",
//     description: [
//       "Sustainability is not an add-on — it is our starting point.",
//       "Every blueprint begins with respect for land, people, and planet.",
//       "We embed environmental responsibility into materials, systems, energy strategies, and long-term operations.",
//       "Our work supports resilience, efficiency, and enduring value for future generations.",
//     ],
//   },
// ];

// const ExpertiseSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section className="min-h-screen bg-white text-black">
//       <div className="container mx-auto px-6 py-24">
        
//         {/* Section Header */}
//         <div className="mb-16 max-w-2xl">
//           <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
//             Our Expertise
//           </h2>
//           <p className="text-gray-500 leading-relaxed">
//             Integrated design, engineering, and delivery capabilities —
//             grounded in culture, driven by innovation, and focused on long-term value.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="group relative min-h-[420px] border border-black/10 bg-white p-8 md:p-12 flex flex-col justify-between overflow-hidden"
//             >
//               {/* Hover background */}
//               <AnimatePresence>
//                 {hoveredIndex === index && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="absolute inset-0 bg-neutral-100 z-0"
//                   />
//                 )}
//               </AnimatePresence>

//               {/* Top */}
//               <div className="relative z-10 flex justify-between items-start">
//                 <span className="text-5xl font-serif italic text-black/10 group-hover:text-black/20 transition-colors">
//                   {service.id}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-[#B59963] transition-colors">
//                   {service.title}
//                 </h3>

//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{
//                     height: hoveredIndex === index ? "auto" : 0,
//                     opacity: hoveredIndex === index ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.4 }}
//                   className="overflow-hidden space-y-3 text-gray-600 text-sm md:text-base leading-relaxed"
//                 >
//                   {service.description.map((line, i) => (
//                     <p key={i}>{line}</p>
//                   ))}
//                 </motion.div>
//               </div>

//               {/* Accent Line */}
//               <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B59963] group-hover:w-full transition-all duration-700" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExpertiseSection;
