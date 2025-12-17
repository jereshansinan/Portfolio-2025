import React, { useState, useEffect, useRef } from "react";
import Scene3D from "../components/Scene3D";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

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
          <span className="text-black font-mono font-bold text-sm tracking-widest animate-pulse">
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
              className="absolute inset-0 bg-white mix-blend-screen flex items-center justify-center w-full h-full cursor-none"
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-8 gap-8 overflow-y-auto bg-white/70 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Professional Biography Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gradient-to-br from-blue-400/30 to-purple-400/30 p-6 flex flex-col gap-2 min-h-[180px] transition hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Biography
              </h2>
              <p className="text-gray-700 text-sm">
                Experienced software engineer with a passion for building
                impactful digital products. Skilled in TypeScript, React, and 3D
                web experiences. Committed to clean code, collaboration, and
                continuous learning.
              </p>
            </div>

            {/* Career Objectives Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gradient-to-br from-green-400/30 to-blue-400/30 p-6 flex flex-col gap-2 min-h-[180px] transition hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Career Objectives
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Lead innovative web projects with modern technologies</li>
                <li>Grow as a technical mentor and team collaborator</li>
                <li>Contribute to open-source and tech communities</li>
              </ul>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gradient-to-br from-pink-400/30 to-indigo-400/30 p-6 flex flex-col gap-4 min-h-[180px] transition hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Links
              </h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gradient-to-r from-blue-100/40 to-white/40 text-blue-700 font-medium text-sm hover:from-blue-200/60 hover:to-white/60 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://behance.net/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gradient-to-r from-purple-100/40 to-white/40 text-purple-700 font-medium text-sm hover:from-purple-200/60 hover:to-white/60 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.5 12.1c0-2.1-1.5-3.7-3.7-3.7-1.7 0-2.7 1-3.1 2.1h2.1c.2-.4.6-.7 1.1-.7.8 0 1.2.6 1.2 1.3v.2h-3.6c0 2.1 1.2 3.4 3.1 3.4 1.8 0 2.9-1.3 2.9-3.1zm-2.8 1.5c-.7 0-1.1-.5-1.2-1.1h2.3c-.1.7-.6 1.1-1.1 1.1zm-7.2-2.7c0-1.7-1.2-2.7-3.2-2.7h-4.3v9.2h4.3c2.1 0 3.2-1 3.2-2.7 0-1.1-.5-1.8-1.4-2.1.8-.3 1.4-1 1.4-1.7zm-2.2 4.1h-2.1v-2.1h2.1c.8 0 1.2.4 1.2 1.1s-.4 1-1.2 1zm-2.1-5.2h2c.7 0 1.1.3 1.1.9s-.4.9-1.1.9h-2v-1.8zm15.3-7.8h-19.2c-1.1 0-2 .9-2 2v19.2c0 1.1.9 2 2 2h19.2c1.1 0 2-.9 2-2v-19.2c0-1.1-.9-2-2-2zm-19.2 21.2c-1.1 0-2-.9-2-2v-19.2c0-1.1.9-2 2-2h19.2c1.1 0 2 .9 2 2v19.2c0 1.1-.9 2-2 2h-19.2zm13.2-7.2c0 2.1-1.2 3.4-3.1 3.4-1.7 0-2.7-1-3.1-2.1h2.1c.2.4.6.7 1.1.7.8 0 1.2-.6 1.2-1.3v-.2h-3.6c0-2.1 1.2-3.4 3.1-3.4 1.8 0 2.9 1.3 2.9 3.1zm-2.8-1.5c-.7 0-1.1.5-1.2 1.1h2.3c-.1-.7-.6-1.1-1.1-1.1zm-7.2 2.7c0 1.7 1.2 2.7 3.2 2.7h4.3v-9.2h-4.3c-2.1 0-3.2 1-3.2 2.7 0 1.1.5 1.8 1.4 2.1-.8.3-1.4 1-1.4 1.7zm2.2-4.1h2.1v2.1h-2.1c-.8 0-1.2-.4-1.2-1.1s.4-1 1.2-1zm2.1 5.2h-2c-.7 0-1.1-.3-1.1-.9s.4-.9 1.1-.9h2v1.8z" />
                  </svg>
                  Behance
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-100/40 to-white/40 text-gray-800 font-medium text-sm hover:from-gray-200/60 hover:to-white/60 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 1.7 2.1.2.2.5.1.6.1.2-.1.3-.2.3-.4v-1.6c-2.7.6-3.3-1.3-3.3-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1z" />
                  </svg>
                  GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gradient-to-r from-green-200/40 to-white/40 text-green-700 font-medium text-sm hover:from-green-300/60 hover:to-white/60 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
                  </svg>
                  Download CV
                </a>
                <a
                  href="/job-strategy"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gradient-to-r from-blue-200/40 to-white/40 text-blue-700 font-medium text-sm hover:from-blue-300/60 hover:to-white/60 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
                  </svg>
                  Job Strategy
                </a>
              </div>
            </div>

            {/* Contact Me Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gradient-to-br from-cyan-400/30 to-blue-400/30 p-6 flex flex-col gap-2 min-h-[180px] transition hover:shadow-2xl col-span-1 md:col-span-2 lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Contact Me
              </h2>
              <p className="text-gray-700 text-sm mb-2">
                Interested in working together or have a question? Reach out!
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:youremail@example.com"
                  className="text-blue-600 hover:underline text-sm"
                >
                  youremail@example.com
                </a>
                <span className="text-gray-500 text-xs">
                  or use the contact form on the site
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
