import React, { useState, useEffect, useRef } from "react";
import Scene3D from "../components/Scene3D";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import "../public/fonts/jetbrains.css";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  useEffect(() => {
    // Initial set to center the cursor div on the coordinates
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Increased duration to 0.5s for a smoother, delayed feel
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
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
    >
      <motion.div
        animate={{
          width: isMenuHovered ? 24 : 96,
          height: isMenuHovered ? 24 : 96,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-full flex items-center justify-center overflow-hidden"
      >
        {!isMenuHovered && (
          <span className="text-black page-specific-font font-bold text-sm tracking-widest animate-pulse">
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
    <div className="relative w-full h-screen overflow-hidden bg-[#1e293b]">
      {/* Fixed 3D Scene Background - Always present but revealed via cutout or after transition */}
      <div className="fixed inset-0 z-0">
        <Scene3D background="./programming.mp4" />
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
          >
            <div
              className="absolute inset-0 bg-white mix-blend-screen flex items-center justify-center w-full h-full cursor-none page-specific-font"
              onClick={() => setShowOverlay(false)}
            >
              <h1 className="text-[17vw] font-bold text-black tracking-tighter leading-[0.85] text-center select-none w-full break-all sm:break-normal pointer-events-none">
                JERESHAN
                <br />
                SINAN
              </h1>
            </div>

            {/* Custom Cursor sits on top of the blend layer (z-50 in component) */}
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
                  AI Solutions Engineer • Full Stack Developer
                </p>
              </div>
            </div>

            {/* 2. Professional Biography (Top Right - Spans 2x1) */}
            <div className="md:col-span-2 md:row-span-3 p-6 md:p-8 border-b border-white/30 flex flex-col justify-between transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Professional Biography
              </h2>
              <p className="text-sm md:text-lg leading-relaxed">
                I am a Full Stack Developer who believes that the best digital
                products live at the intersection of robust engineering and
                intuitive design. I combine a creative background in 3D and
                UI/UX with technical discipline to build solutions that are not
                only functional but exceptional to use. I don't just write code;
                I solve problems. From streamlining complex customer management
                processes to creating immersive digital brand experiences, I
                leverage the power of AI to build smarter, faster, and more
                efficient systems. My approach is holistic-blending the
                precision of backend architecture with the creativity of
                frontend design. I am driven by a passion to help people through
                technology, creating digital environments that are secure,
                intelligent, and impactful.
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
                  Advance academic and technical mastery by pursuing a Master’s
                  degree in Computer Science.
                </li>
                <li>
                  Lead cross-functional teams to bridge the gap between creative
                  design and robust engineering.
                </li>
                <li>
                  Drive industry innovation through active open-source
                  contribution and mentorship.
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
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind",
                  "3D Web",
                  "UI/UX",
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
                <a
                  href="https://za.linkedin.com/in/jereshansinan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jereshansinan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="/cv/Jereshan Sinan AI CV.pdf"
                  download
                  className="flex items-center gap-2 hover:underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            {/* 6. Contact Me (Bottom Right - Spans 2x1) */}
            <div className="md:col-span-1 p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 bg-white md:bg-transparent text-gray-900 md:text-gray-800 md:hover:bg-white md:hover:text-black group">
              <h2 className="text-xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Contact Me
              </h2>
              <div className="mt-auto">
                <p className="text-sm mb-2 opacity-80">
                  Interested in working together?
                </p>
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
