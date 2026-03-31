import React, { useState, useEffect, useRef } from "react";
import Scene3D from "../components/Scene3D";
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

    // Attach listeners to menu buttons
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

      {/* Main Content Cards */}
      {!showOverlay && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-8 gap-8 overflow-y-auto bg-white/70 backdrop-blur-xs page-specific-font">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 w-full min-h-full md:h-[90%] border border-white/30">
            {/* 1. Large Profile Image Section (Top Left - Spans 2x2) */}
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

            {/* 2. Professional Biography (Top Right - Spans 2x1) */}
            <div className="md:col-span-2 md:row-span-3 p-6 md:p-8 border-b border-white/30 flex flex-col justify-between transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Professional Biography
              </h2>
              <p className="text-sm md:text-lg leading-relaxed">
                Blending the precision of data engineering with the artistry of 3D design, I build
                digital experiences that are both functional and exceptional. My journey spans the
                full stack—from designing immersive UI/UX environments to architecting automated ETL
                pipelines. I specialize in bridging the gap between complex backend systems and the
                human experience, ensuring that data is not only secure and structured but also
                visually and strategically accessible. Whether I’m streamlining customer management
                processes or developing real-time analytics suites, my focus is always on creating
                technology that is intelligent, beautiful, and purposefully built.
              </p>
            </div>

            {/* 3. Career Objectives (Middle Right - Spans 1x1) */}
            <div className="md:col-span-2 md:row-span-2 p-6 md:p-8 border-b border-white/30 md:border-r flex flex-col justify-between transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Objectives
              </h2>
              <ul className="list-disc list-inside text-sm md:text-lg space-y-2 page-specific-font">
                <li>Architect scalable Data Engineering pipelines</li>
                <li>
                  Advance academic and technical mastery by pursuing a Master’s degree in Computer
                  Science.
                </li>
                <li>
                  Lead cross-functional teams to bridge the gap between creative design and robust
                  engineering.
                </li>
                <li>
                  Drive industry innovation through active open-source contribution and mentorship.
                </li>
              </ul>
            </div>

            {/* 4. Competencies (Middle Right - Spans 1x1 - NEW SECTION) */}
            <div className="md:col-span-1 p-6 md:p-8 border-b border-white/30 flex flex-col justify-between transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Competencies
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Engineering",
                  "Full Stack Development",
                  "UI/UX Design",
                  "Automated ETL",
                  "Relational Architecture",
                  "3D Visualization",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs border border-current px-2 py-1 rounded-full opacity-80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Quick Links (Bottom Left - Spans 2x1) */}
            <div className="md:col-span-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/30 flex flex-col justify-between transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Quick Links
              </h2>
              <div className="flex flex-wrap gap-4 mt-auto">
                {/* LinkedIn */}
                <a
                  href="https://za.linkedin.com/in/jereshansinan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline transition-colors hover:text-purple-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" />
                  </svg>
                  LinkedIn
                </a>

                {/* GitHub - Fixed Path */}
                <a
                  href="https://github.com/jereshansinan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline transition-colors hover:text-purple-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                {/* Behance - New Link */}
                <a
                  href="https://www.behance.net/jereshansinan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline transition-colors hover:text-purple-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 13h-4c0-.6.4-1 1-1h2c.6 0 1 .4 1 1zm-8-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4zm-2 4H8v-4h4v4zm10-5h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8h-8v-6h8v6zM20 7h-4v1h4V7z" />
                  </svg>
                  Behance
                </a>
              </div>
            </div>

            {/* 6. Contact Me (Bottom Right - Spans 2x1) */}
            <div className="md:col-span-1 p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Contact Me
              </h2>
              <div className="mt-auto">
                <p className="text-sm mb-2 opacity-80">Interested in working together?</p>
                <a
                  href="mailto:youremail@example.com"
                  className="text-lg font-medium hover:underline"
                >
                  jereshan.sinan11@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
