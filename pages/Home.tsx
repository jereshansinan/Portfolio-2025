import React, { useState, useEffect, useRef } from "react";
import Scene3D from "../components/Scene3D";
import RoundedPhysics from "../components/homeComponents/PhysicsSocials";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  useEffect(() => {
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    const handleMenuHover = () => setIsMenuHovered(true);
    const handleMenuLeave = () => setIsMenuHovered(false);

    const menuBtns = document.querySelectorAll(".nav-menu-btn");
    menuBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMenuHover);
      btn.addEventListener("mouseleave", handleMenuLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      menuBtns.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMenuHover);
        btn.removeEventListener("mouseleave", handleMenuLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="fixed top-0 left-0 z-50 pointer-events-none">
      <motion.div
        animate={{
          width: isMenuHovered ? 24 : 96,
          height: isMenuHovered ? 24 : 96,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-black rounded-full flex items-center justify-center overflow-hidden"
      >
        {!isMenuHovered && (
          <span className="text-white page-specific-font font-bold text-sm tracking-widest animate-pulse">
            ENTER
          </span>
        )}
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 z-0">
        <Scene3D background="https://res.cloudinary.com/dxmnledfa/video/upload/v1772691980/home_bg_qlxvyy.mp4" />
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="home-overlay"
            className="absolute inset-0 z-20 cursor-none"
            initial={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            exit={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            }}
            onClick={() => setShowOverlay(false)}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="https://res.cloudinary.com/dxmnledfa/video/upload/v1772691980/home_bg_qlxvyy.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="relative flex items-center justify-center w-full h-full mix-blend-screen bg-white/90 backdrop-blur-md page-specific-font">
              <h1 className="text-[17vw] page-specific-font text-black tracking-tighter leading-[0.85] text-center select-none pointer-events-none">
                JERESHAN
                <br />
                SINAN
              </h1>
            </div>
            <CustomCursor />
          </motion.div>
        )}
      </AnimatePresence>

      {!showOverlay && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-8 gap-8 overflow-y-auto bg-white/70 backdrop-blur-xs page-specific-font">
          <div className="grid grid-cols-1 md:grid-cols-4 w-full min-h-full md:h-[90%] border border-white/30">
            {/* 1. Profile Section (Spans 2 columns, 1 row) */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden border-b border-white/30 md:border-r bg-white md:bg-transparent">
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tighter">
                  Jereshan Sinan
                </h1>
                <p className="text-black page-specific-font text-sm md:text-base">
                  Data Engineer • Full Stack Developer • UI/UX Designer
                </p>
              </div>
            </div>

            {/* 2. Professional Biography (Updated: 2 cols, 1 row, Smaller Text) */}
            <div className="md:col-span-2 md:row-span-1 p-6 md:p-8 border-b border-white/30 flex flex-col justify-center transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-lg font-semibold opacity-70 group-hover:opacity-100 transition-opacity mb-2">
                Professional Biography
              </h2>
              <p className="text-xs md:text-sm leading-relaxed">
                Blending the precision of data engineering with the artistry of 3D design, I build
                digital experiences that are both functional and exceptional. My journey spans the
                full stack—from designing immersive UI/UX environments to architecting automated ETL
                pipelines. I specialize in bridging the gap between complex backend systems and the
                human experience.
              </p>
            </div>

            <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden border-b border-white/30">
              <div className="absolute top-6 left-8 z-20 pointer-events-none">
                <h2 className="text-xl font-semibold opacity-70">Interactive Stack</h2>
                <p className="text-xs opacity-50">Grab and toss the items below</p>
              </div>

              <RoundedPhysics />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
