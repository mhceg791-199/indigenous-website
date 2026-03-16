import { motion, useScroll, useTransform } from "framer-motion";

// المحتوى الخاص بك
const services = [
  // {
  //   title: "Architecture & Design",
  //   desc: "Creating spaces that reflect identity, belonging, and progress.",
  // },
  // {
  //   title: "Engineering & EPCM Delivery",
  //   desc: "Precision-driven systems that turn vision into reality sustainably, efficiently, and beautifully.",
  // },
  {
    title: "Project Leadership & Development Management",
    desc: "Guiding complex developments from vision to delivery through integrated planning, coordination, and oversight.",
  },
  {
    title: "Strategic Delivery & Project Coordination",
    desc: "Aligning partners, resources, and expertise to ensure projects move forward efficiently, responsibly, and with lasting impact.",
  },
  {
    title: "Innovation & Technology",
    desc: "Leveraging smart tools, sustainable materials, and modern methods to deliver agility and performance without compromise.",
  },
  {
    title: "Sustainability Integration",
    desc: "Every blueprint begins with respect for land, people, and planet.",
  },
];

// أيقونة الريشة SVG
const FeatherIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

const ServiceItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center ${
        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* الريشة في المنتصف */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-2 z-20 w-10 h-10 items-center justify-center bg-white border border-[#C5A363]/20 rounded-full shadow-sm">
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FeatherIcon className="w-5 h-5 text-[#C5A363]" />
        </motion.div>
      </div>

      {/* المحتوى النصي */}
      <div
        className={`w-full md:w-[45%] ${
          index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-greenColor mb-4 tracking-tight">
          {item.title}
        </h3>
        <p className="text-mainColor leading-relaxed text-base md:text-lg font-light">
          {item.desc}
        </p>

        {/* خط ديكوري صغير تحت كل خدمة */}
        <div
          className={`mt-6 h-[1px] w-12 bg-[#C5A363]/30 inline-block ${index % 2 === 0 ? "md:float-right" : "md:float-left"}`}
        />
      </div>
    </motion.div>
  );
};

export default function WhatWeDoSection() {
  const { scrollYProgress } = useScroll();

  // حركة الريشة المائية في الخلفية
  const featherY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const featherRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section className="relative py-12 bg-white text-gray-900 overflow-hidden font-sans">
      {/* ريشة مائية ضخمة في الخلفية */}
      <motion.div
        style={{ y: featherY, rotate: featherRotate }}
        className="absolute right-[-10%] top-[10%] opacity-[0.04] pointer-events-none select-none z-0"
      >
        <FeatherIcon className="w-[800px] h-[800px] text-[#C5A363]" />
      </motion.div>

      {/* هالة ضوئية ناعمة جداً خلف النصوص */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C5A363]/5 blur-[120px] pointer-events-none" />

      {/* ===== Header ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex justify-center items-center gap-3 mb-6"
        >
          <span className="uppercase tracking-widest text-sm text-mainGold">
            What We Do
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 paragraph font-medium text-gray-500"
        >
          Each project we touch is more than infrastructure — it’s a living
          story built on creativity, cultural intelligence, and purpose-driven
          innovation.
        </motion.p>
      </div>

      {/* ===== Timeline ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* الخط المركزي المنقط (أكثر رقة في الخلفية البيضاء) */}
        <div className="absolute left-1/2 top-0 h-full w-[1px] border-l border-dashed border-[#C5A363]/20 hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {services.map((item, i) => (
            <ServiceItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const services = [
//   {
//     title: "Architecture & Design",
//     arabicTitle: "العمارة والتصميم",
//     desc: "نصمم مساحات تعكس الهوية والانتماء، حيث يلتقي التراث بالحداثة في كل زاوية هندسية.",
//   },
//   {
//     title: "Engineering & EPCM",
//     arabicTitle: "الهندسة وإدارة المشاريع",
//     desc: "أنظمة دقيقة تحول الرؤى إلى واقع ملموس بكفاءة عالية، مع التركيز على الجودة والاستدامة.",
//   },
//   {
//     title: "Innovation & Technology",
//     arabicTitle: "الابتكار والتكنولوجيا",
//     desc: "استخدام أدوات ذكية ومواد مستدامة لتقديم حلول سريعة الأداء دون المساس بالجودة الفنية.",
//   },
//   {
//     title: "Sustainability Integration",
//     arabicTitle: "تكامل الاستدامة",
//     desc: "كل مخطط يبدأ باحترام الأرض والإنسان، لضمان مستقبل يزدهر فيه الكوكب والأجيال القادمة.",
//   },
// ];

// // مكون أيقونة الريشة SVG (لمسة اللوجو)
// const FeatherIcon = ({ className, style }) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     className={className}
//     style={style}
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
//     <line x1="16" y1="8" x2="2" y2="22" />
//     <line x1="17.5" y1="15" x2="9" y2="15" />
//   </svg>
// );

// const ServiceItem = ({ item, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={`relative flex flex-col md:flex-row items-center ${
//         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//       }`}
//     >
//       {/* أيقونة الريشة كـ Marker في المنتصف */}
//       <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-[#C5A363] shadow-sm z-20">
//         <FeatherIcon
//           className="w-5 h-5 text-[#C5A363]"
//           style={{ transform: index % 2 === 0 ? 'rotate(0deg)' : 'rotate(180deg) scaleX(-1)' }}
//         />
//       </div>

//       {/* Content */}
//       <div className={`w-full md:w-[45%] text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
//         <div className="mb-2">
//            <span className="text-[10px] tracking-[0.4em] text-[#C5A363] font-bold uppercase">
//              {item.title}
//            </span>
//         </div>
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">
//           {item.arabicTitle}
//         </h3>
//         <p className="text-gray-500 leading-relaxed text-lg font-light">
//           {item.desc}
//         </p>

//         {/* خط بسيط تحت المحتوى */}
//         <div className={`mt-6 h-[2px] w-12 bg-gray-100 inline-block ${index % 2 === 0 ? "md:float-right" : "md:float-left"}`} />
//       </div>
//     </motion.div>
//   );
// };

// export default function WhatWeDoSection() {
//   const { scrollYProgress } = useScroll();

//   // تأثير حركة الريشة الخلفية بناءً على السكرول
//   const featherY = useTransform(scrollYProgress, [0, 1], [0, -150]);
//   const featherRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

//   return (
//     <section
//       className="relative py-32 bg-white text-gray-900 overflow-hidden"
//     >
//       {/* ريشة كبيرة جداً في الخلفية كعلامة مائية متحركة */}
//       <motion.div
//         style={{ y: featherY, rotate: featherRotate }}
//         className="absolute right-[-10%] top-[10%] opacity-[0.03] pointer-events-none select-none z-0"
//       >
//         <FeatherIcon className="w-[800px] h-[800px] text-black" />
//       </motion.div>

//       {/* ===== Header ===== */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mb-28">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center items-center gap-2 mb-4"
//         >
//            <div className="h-[1px] w-12 bg-[#C5A363]" />
//            <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#C5A363]">
//             Our Expertise
//            </span>
//            <div className="h-[1px] w-12 bg-[#C5A363]" />
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-4xl md:text-6xl font-light leading-tight"
//         >
//           ماذا <span className="font-bold border-b-4 border-[#C5A363]">نقدم</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-8 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed italic"
//         >
//           "كل مشروع نلمسه هو أكثر من مجرد بنية تحتية - إنه قصة حية مبنية على الإبداع والذكاء الثقافي، تماماً كخفة الريشة ودقة خطوطها."
//         </motion.p>
//       </div>

//       {/* ===== Timeline with Feather Touch ===== */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         {/* الخط المركزي المتقطع */}
//         <div className="absolute left-1/2 top-0 h-full w-[1px] border-l border-dashed border-[#C5A363]/30 hidden md:block" />

//         <div className="space-y-24">
//           {services.map((item, i) => (
//             <ServiceItem key={i} item={item} index={i} />
//           ))}
//         </div>
//       </div>

//       {/* لمسة فنية أخيرة: ريشة صغيرة في أسفل القسم */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         whileInView={{ opacity: 0.2, scale: 1 }}
//         className="flex justify-center mt-32"
//       >
//          <FeatherIcon className="w-12 h-12 text-[#C5A363] rotate-45" />
//       </motion.div>
//     </section>
//   );
// }
