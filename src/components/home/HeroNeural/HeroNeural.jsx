import NeuralOrbScene from "./NetworkSphere";

export default function HeroNeuralSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      
      {/* ===== Mobile Orb Background ===== */}
      <div className="lg:hidden absolute inset-0 z-0 opacity-40 pointer-events-none">
        <NeuralOrbScene />
      </div>

      {/* ===== GRID ===== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
        
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            relative z-20
            flex flex-col
            justify-start
            pt-20 sm:pt-24 lg:pt-32
            pb-8 sm:pb-16
            px-6 sm:px-10 md:px-16
            text-center lg:text-left
          "
        >
          <h2 className="heading font-bold mb-6 leading-tight">
            <span className="text-mainGold">Global </span>
            <span className="text-white">Presence</span>
          </h2>

          <p className="text-gray-300 mb-6 mx-auto lg:mx-0 max-w-[520px] paragraph leading-relaxed">
            Indigenous Mosaic operates across regions where ideas evolve,
            communities grow, and the future of the built environment is
            continuously redefined.
          </p>

          <p className="text-gray-400 mb-8 mx-auto lg:mx-0 max-w-[520px] text-sm sm:text-base leading-relaxed">
            Through strong partnerships, cross-cultural collaboration, and
            integrated delivery models, we connect Indigenous leadership,
            global expertise, and local context to create impact that extends
            far beyond borders.
          </p>
        </div>

        {/* ================= RIGHT ORB (Desktop only) ================= */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute inset-y-0 -right-36 w-[120%]">
            <NeuralOrbScene />
          </div>
        </div>
      </div>

      {/* ===== Mobile Overlay (Depth) ===== */}
      <div className="lg:hidden absolute inset-0 z-10 bg-gradient-to-t from-[#0b0214] via-transparent to-[#0b0214]" />
    </section>
  );
}



// import NeuralOrbScene from "./NetworkSphere";

// export default function HeroNeuralSection() {
//   return (
//     <section className="relative w-full bg-black overflow-hidden">
      
//       {/* ===== GRID ===== */}
//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen">
        
//         {/* ================= LEFT CONTENT ================= */}
//         <div
//           className="
//             relative z-20
//             flex flex-col
//             justify-start
//             pt-20 sm:pt-24 lg:pt-32
//             pb-8 sm:pb-16
//             px-6 sm:px-10 md:px-16
//             text-center lg:text-left
//           "
//         >
//           <h2 className="heading font-bold mb-6 leading-tight">
//             <span className="text-mainGold">Global </span>
//             <span className="text-white">Presence</span>
//           </h2>

//           <p className="text-gray-300 mb-6 mx-auto lg:mx-0 max-w-[520px] paragraph leading-relaxed">
//             Indigenous Mosaic operates across regions where ideas evolve,
//             communities grow, and the future of the built environment is
//             continuously redefined.
//           </p>

//           <p className="text-gray-400 mb-8 mx-auto lg:mx-0 max-w-[520px] text-sm sm:text-base leading-relaxed">
//             Through strong partnerships, cross-cultural collaboration, and
//             integrated delivery models, we connect Indigenous leadership,
//             global expertise, and local context to create impact that extends
//             far beyond borders.
//           </p>
//         </div>

//         {/* ================= RIGHT ORB ================= */}
//         <div className="relative flex items-center justify-center">
          
//           {/* ===== Desktop Orb ===== */}
//           <div
//             className="
//               hidden lg:block
//               absolute inset-y-0 -right-36 w-[120%]
//             "
//           >
//             <NeuralOrbScene />
//           </div>

//           {/* ===== Mobile / Tablet Orb ===== */}
//           <div
//             className="
//               lg:hidden
//               absolute inset-0
//               opacity-40
//               pointer-events-none
//             "
//           >
//             <NeuralOrbScene />
//           </div>
//         </div>
//       </div>

//       {/* ===== Mobile Overlay (Depth) ===== */}
//       <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0b0214] via-transparent to-[#0b0214]" />
//     </section>
//   );
// }
