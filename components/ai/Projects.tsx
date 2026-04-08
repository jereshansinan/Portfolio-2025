"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
  doclink: string;
}

// ─── Custom cursor ────────────────────────────────────────────────────────────

const ProjectCursor = React.memo(({ isHovering }: { isHovering: boolean }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 50);
      cursorY.set(e.clientY - 50);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] flex items-center justify-center bg-white text-black rounded-full will-change-transform"
      style={{ x: cursorXSpring, y: cursorYSpring, left: 0, top: 0 }}
      animate={{ width: isHovering ? 100 : 20, height: isHovering ? 100 : 20 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <AnimatePresence mode="wait">
        {isHovering && (
          <motion.span
            key="view"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="font-bold font-mono text-sm tracking-widest"
          >
            VIEW
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
ProjectCursor.displayName = "ProjectCursor";

// ─── Scroll indicator pill ────────────────────────────────────────────────────

const ScrollIndicator = ({
  total,
  activeIndex,
  visible,
}: {
  total: number;
  activeIndex: number;
  visible: boolean;
}) => {
  const TICKS_PER_GAP = 4;

  return (
    <div
      className="fixed z-[200] pointer-events-none transition-opacity duration-300"
      style={{
        right: 24,
        top: "50vh",
        transform: "translateY(-50%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="flex flex-col items-center py-5 px-3 rounded-full"
        style={{
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.07)",
          minWidth: 36,
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <span
                className="font-mono tabular-nums transition-all duration-300"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.05em",
                  color: activeIndex === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                  fontWeight: activeIndex === i ? 700 : 400,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? 4 : 2,
                  height: activeIndex === i ? 4 : 2,
                  background: activeIndex === i ? "white" : "rgba(255,255,255,0.25)",
                  marginBottom: 4,
                }}
              />
            </div>

            {i < total - 1 && (
              <div className="flex flex-col items-center gap-[5px] my-1">
                {Array.from({ length: TICKS_PER_GAP }).map((_, t) => (
                  <div
                    key={t}
                    className="rounded-full"
                    style={{
                      width: t === 1 || t === 2 ? 8 : 5,
                      height: 1,
                      background: "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const AIProjects = ({ items }: { items: ProjectProps[] }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorVisible, setIndicatorVisible] = useState(false);

  // NEW: Separate refs for the scroll area (section) and the pinned element (pin)
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !pinRef.current) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length < 2) return;

    // NEW: Use gsap.context. This is the official way to use GSAP in React
    // to prevent memory leaks and "ghost" pin spacers.
    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set(cards[0], { y: "0%", scale: 1, rotation: 0 });
      cards.slice(1).forEach((card) => gsap.set(card, { y: "100%", scale: 1, rotation: 0 }));

      // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current, // The outer div triggers the pinning
          pin: pinRef.current, // The inner div gets pinned to the screen
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          pinSpacing: true, // Automatically pushes the Certificates section down
          scrub: 0.6,
          onEnter: () => setIndicatorVisible(true),
          onLeave: () => setIndicatorVisible(false),
          onEnterBack: () => setIndicatorVisible(true),
          onLeaveBack: () => setIndicatorVisible(false),
          onUpdate: (self) => {
            const idx = Math.min(cards.length - 1, Math.floor(self.progress * cards.length));
            setActiveIndex(idx);
          },
        },
      });

      // Animate the cards overlapping
      cards.forEach((_, i) => {
        if (i >= cards.length - 1) return;
        tl.to(cards[i], { scale: 0.88, rotation: 4, duration: 1, ease: "none" }, i);
        tl.to(cards[i + 1], { y: "0%", duration: 1, ease: "none" }, i);
      });
    }, sectionRef);

    // CLEANUP: This one line cleanly destroys all ScrollTriggers and pin-spacers created above
    return () => ctx.revert();
  }, [items]);

  return (
    <>
      {/* NEW STRUCTURE:
        1. sectionRef (The Scroll Area)
        2. pinRef (The Screen-sized window that gets stuck) 
      */}
      <div ref={sectionRef} className="relative w-full z-20">
        <div
          ref={pinRef}
          className="relative w-full h-screen overflow-hidden"
          style={{ isolation: "isolate" }}
        >
          {/* Backgrounds */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom right, #A4A4A4, #CCCCCC, #989898)",
              zIndex: 0,
            }}
          />
          <div
            className="absolute inset-0 opacity-80 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "100px 100px",
              zIndex: 0,
            }}
          />

          {/* Cards Wrapper */}
          <div className="relative w-full h-full z-10">
            {items.map((project, i) => (
              <div
                key={project.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{ transformOrigin: "top center" }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-none"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </a>

                {/* Bottom info bar */}
                <div
                  className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-black/40 border-t border-white/10 p-6 md:p-10 z-10"
                  onMouseEnter={() => setIsHovering(false)}
                >
                  <p className="text-white/30 text-xs tracking-[0.3em] uppercase page-specific-font mb-3">
                    {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="flex-1 max-w-2xl">
                      <h3 className="text-3xl md:text-5xl text-white mb-3 page-specific-font-br leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed page-specific-font line-clamp-2 md:line-clamp-none">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.doclink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-between gap-4 bg-white hover:bg-gray-100 text-black pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer shrink-0 min-w-[220px]"
                      onMouseEnter={(e) => e.stopPropagation()}
                    >
                      <span className="font-bold text-sm tracking-wide">VIEW DOCUMENTATION</span>
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                        <ArrowUpRight size={20} strokeWidth={2.5} />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Title pill — top right */}
                <div className="absolute top-6 right-16 z-20 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5">
                  <span className="text-white/60 text-xs tracking-[0.25em] font-mono">
                    {project.title.split(" ").slice(0, 2).join(" ").toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator total={items.length} activeIndex={activeIndex} visible={indicatorVisible} />
      <ProjectCursor isHovering={isHovering} />
    </>
  );
};

export default AIProjects;
