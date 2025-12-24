import { motion } from "framer-motion";

const stars = Array.from({ length: 25 }); // عدد الشهب

export default function FallingStars() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((_, i) => {
        const startX = Math.random() * 100; // البداية أفقياً
        const startY = -5 - Math.random() * 10; // البداية أعلى من الشاشة
        const endX = startX + 50 + Math.random() * 100; // تحرك أفقي مائل
        const endY = 100 + Math.random() * 50; // تحرك لأسفل خارج الشاشة
        const size = 1 + Math.random() * 2; // حجم الشهاب

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${startY}%`,
              left: `${startX}%`,
              boxShadow: `0 0 ${size * 3}px rgba(255,255,255,0.8)`, // يعطي أثر متوهج
            }}
            animate={{
              x: [0, endX - startX],
              y: [0, endY - startY],
              opacity: [1, 0], // يختفي تدريجياً
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}



// import { motion } from "framer-motion";

// const stars = Array.from({ length: 20 }); // عدد الشهب

// export default function FallingStars() {
//   return (
//     <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
//       {stars.map((_, i) => (
//         <motion.div
//           key={i}
//           className="w-1 h-1 bg-white rounded-full absolute"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             x: [0, 300],  // تحرك أفقي يميل لليمين
//             y: [0, 600],  // تحرك لأسفل
//             rotate: [0, 360], // دوران خفيف
//           }}
//           transition={{
//             duration: 4 + Math.random() * 3, // مدة الحركة مختلفة لكل شهاب
//             repeat: Infinity,
//             repeatType: "loop",
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// }
