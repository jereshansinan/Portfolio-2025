import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Scene3D from "@/components/Scene3D";
import { BackTransition } from "@/components/3ddesign/BackTransition";
import PageReveal from "@/components/3ddesign/PageReveal";

// 1. Gallery Data
const galleryItems = [
  {
    id: 1,
    title: "Interface Design",
    src: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700267/library_mgcp27.png", // Replace with your actual paths
  },
  {
    id: 2,
    title: "Visual Identity",
    src: "/images/ui-branding.jpg",
  },
  {
    id: 3,
    title: "Design Systems",
    src: "/images/ui-systems.jpg",
  },
  {
    id: 4,
    title: "Prototyping",
    src: "/images/ui-proto.jpg",
  },
  {
    id: 5,
    title: "Micro-Interactions",
    src: "/images/ui-motion.jpg",
  },
  {
    id: 6,
    title: "Editorial Layout",
    src: "/images/ui-print.jpg",
  },
  {
    id: 7,
    title: "3D Integration",
    src: "/images/ui-3d.jpg",
  },
  {
    id: 8,
    title: "Accessibility",
    src: "/images/ui-a11y.jpg",
  },
];

// // 1. THE GRID OVERLAY (Visual Animation)
// const GridOverlay = ({ isVisible }: { isVisible: boolean }) => {
//   const [stage, setStage] = useState(0);

//   useEffect(() => {
//     if (isVisible) {
//       setStage(0);
//       // Staggered entrance sequence
//       const t1 = setTimeout(() => setStage(1), 50); // Architecture (Big)
//       const t2 = setTimeout(() => setStage(2), 250); // Geometry (Big)
//       const t3 = setTimeout(() => setStage(3), 400); // Portraits (Small)
//       const t4 = setTimeout(() => setStage(4), 550); // Environment (Small)

//       return () => {
//         clearTimeout(t1);
//         clearTimeout(t2);
//         clearTimeout(t3);
//         clearTimeout(t4);
//       };
//     } else {
//       setStage(0);
//     }
//   }, [isVisible]);

//   // Styles matching the light theme of the 3D Design page
//   const cardBase =
//     "relative w-full bg-slate-100 border border-slate-200 transition-all duration-500 ease-out overflow-hidden shadow-sm";
//   const textBase =
//     "text-slate-900 font-bold uppercase tracking-tighter text-3xl md:text-4xl";

//   // Animation states
//   const show = "opacity-100 translate-y-0 scale-100";
//   const hide = "opacity-0 translate-y-8 scale-95";

//   return (
//     <div
//       className={`fixed inset-0 z-[100] bg-white transition-opacity duration-200 pointer-events-none
//         ${isVisible ? "opacity-100" : "opacity-0"}`}
//     >
//       <div className="flex w-full h-full p-4 gap-4">
//         {/* LEFT COLUMN */}
//         <div className="flex flex-col w-1/2 gap-4 h-full">
//           {/* Architecture */}
//           <div className={`${cardBase} flex-[2] ${stage >= 1 ? show : hide}`}>
//             <div className="p-8 h-full flex flex-col justify-between">
//               <h1 className={textBase}>3D Architecture</h1>
//               <div className="flex justify-between items-end border-t border-slate-300 pt-4">
//                 <span className="text-xs font-bold text-slate-500">
//                   Fiction & Non-Fiction
//                 </span>
//                 <span className="text-xs font-bold text-slate-500">2022</span>
//               </div>
//             </div>
//           </div>
//           {/* Portraits */}
//           <div className={`${cardBase} flex-1 ${stage >= 3 ? show : hide}`}>
//             <div className="p-8 h-full flex flex-col justify-center">
//               <h1 className={textBase}>Portraits</h1>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col w-1/2 gap-4 h-full">
//           {/* Environment */}
//           <div className={`${cardBase} flex-1 ${stage >= 4 ? show : hide}`}>
//             <div className="p-8 h-full flex flex-col justify-between">
//               <h1 className={textBase}>Environment</h1>
//               <div className="flex justify-between items-end border-t border-slate-300 pt-4">
//                 <span className="text-xs font-bold text-slate-500">
//                   Concept Art
//                 </span>
//                 <span className="text-xs font-bold text-slate-500">2023</span>
//               </div>
//             </div>
//           </div>
//           {/* Geometry Nodes */}
//           <div className={`${cardBase} flex-[2] ${stage >= 2 ? show : hide}`}>
//             <div className="p-8 h-full flex flex-col justify-center">
//               <h1 className={textBase}>Geometry Nodes</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default function Architecture() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <div className="bg-white min-h-screen text-white font-sans selection:bg-white selection:text-black">
        <PageReveal />
        <BackTransition to="/3d-design" />
        {/* 2. Hero Section */}
        <section className="z-20 hero-section flex flex-col items-center justify-center gap-4 py-20 md:py-32 relative overflow-hidden h-[60vh] md:h-[100vh] page-specific-font-pp">
          <div className="absolute inset-0 z-0">
            <Scene3D background="https://res.cloudinary.com/dxmnledfa/image/upload/v1772710626/4_yaaomh.png" />
          </div>

          <div className="inline-block max-w-4xl text-center relative z-10 px-4">
            <h1 className="text-6xl md:text-9xl text-white leading-tight mix-blend-overlay">
              Architecture
            </h1>
          </div>
        </section>

        {/* 3. The "Why" Text Section */}
        <section className="w-full py-16 md:py-24 border-t border-gray-800 backdrop-blur-[2px] bg-white">
          <div className="max-w-full px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 page-specific-font-pp">
                <h2 className="text-5xl md:text-8xl text-black">Why?</h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl md:text-3xl text-black leading-relaxed font-light">
                  My work in 3D architecture focuses on transforming concepts
                  into tangible, photorealistic environments. I combine
                  technical precision with artistic direction to create detailed
                  models and renders that accurately represent scale, material,
                  and lighting.
                </p>
                <p className="mt-8 text-xl md:text-3xl text-black leading-relaxed font-light">
                  Whether visualizing modern interiors or complex exterior
                  structures, I prioritize clarity and realism. I treat each
                  project as a functional design challenge, ensuring that the
                  final visuals not only look impressive but effectively
                  communicate the spatial qualities and design intent to the
                  viewer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Modern Grid Gallery */}
        <section className="w-full border-t border-gray-400 bg-white">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  className="group relative aspect-square border-r border-b border-gray-400 cursor-pointer overflow-hidden bg-white"
                  onClick={() => setSelectedId(item.id)}
                >
                  {/* Background Image */}
                  <motion.div className="w-full h-full p-4 md:p-8 transition-all duration-700 group-hover:scale-[0.98]">
                    <motion.img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>

                  {/* Hover Overlay Title (Bottom Left) */}
                  <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:rounded-md transition-all ease-out">
                      <h3 className="text-2xl md:text-3xl font-bold text-white backdrop-blur-md px-3 py-1 w-fit rounded-md">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Lightbox / Expanded View */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={() => setSelectedId(null)}
              />

              {/* Expanded Card */}
              {galleryItems.map((item) => {
                if (item.id !== selectedId) return null;
                return (
                  <motion.div
                    layoutId={`card-${item.id}`}
                    key={item.id}
                    className="relative w-full max-w-7xl h-[80vh] bg-neutral-900 overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-white hover:text-black text-white p-2 rounded-full backdrop-blur-md transition-colors"
                      onClick={() => setSelectedId(null)}
                    >
                      <X size={24} />
                    </button>

                    {/* Image (Full Size) */}
                    <div className="w-full h-full relative">
                      <motion.img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Text in Full View */}
                      <div className="absolute bottom-0 left-0 p-8 md:p-12 bg-linear-to-t from-black/80 to-transparent w-full">
                        <motion.h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                          {item.title}
                        </motion.h2>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
