import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import "../../public/fonts/broft.css";
import "../../public/fonts/jetbrains.css";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
  doclink: string;
}

const ProjectCard = React.memo(
  ({
    image,
    title,
    description,
    link,
    doclink,
    onMouseEnter,
    onMouseLeave,
  }: ProjectProps & { onMouseEnter: () => void; onMouseLeave: () => void }) => {
    return (
      <div className="block relative w-full h-[60vh] md:h-[80vh] rounded-[15px] overflow-hidden group page-specific-font will-change-transform">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-none"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
            style={{ backgroundImage: `url(${image})` }}
          />
        </a>

        <div
          className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-black/40 border-t border-white/10 p-6 md:p-8 rounded-b-[15px] z-10 cursor-auto"
          onMouseEnter={onMouseLeave}
        >
          <div className="flex flex-col items-start justify-end h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 page-specific-font-br">
              {title}
            </h3>
            <p className="text-gray-200 text-sm md:text-lg line-clamp-3 md:line-clamp-none page-specific-font mb-6">
              {description}
            </p>

            <a
              href={doclink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-between gap-4 bg-white hover:bg-gray-100 text-black pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer w-full md:w-auto min-w-[200px]"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <span className="font-bold text-sm tracking-wide">
                VIEW DOCUMENTATION
              </span>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

const ProjectCursor = React.memo(({ isHovering }: { isHovering: boolean }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 50); // Pre-offset for translate -50%
      cursorY.set(e.clientY - 50);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 flex items-center justify-center bg-white text-black rounded-full will-change-transform"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        left: 0,
        top: 0,
      }}
      animate={{
        width: isHovering ? 100 : 20,
        height: isHovering ? 100 : 20,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <AnimatePresence mode="wait">
        {isHovering && (
          <motion.span
            key="view-text"
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

const AIProjects = ({ items }: { items: ProjectProps[] }) => {
  const [isHoveringProject, setIsHoveringProject] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed gradient background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom right, #A4A4A4, #CCCCCC, #989898)",
        }}
      />

      {/* Fixed dots overlay */}
      <div
        className="fixed inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
          backgroundPosition: "center",
        }}
      />

      {/* Sticky project sections */}
      {items.map((project, index) => (
        <section
          key={index}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-12 snap-start"
          onMouseEnter={() => setIsHoveringProject(true)}
          onMouseLeave={() => setIsHoveringProject(false)}
        >
          <div className="w-full max-w-7xl py-8 md:py-12">
            <ProjectCard
              {...project}
              onMouseEnter={() => setIsHoveringProject(true)}
              onMouseLeave={() => setIsHoveringProject(false)}
            />
          </div>
        </section>
      ))}

      <ProjectCursor isHovering={isHoveringProject} />
    </div>
  );
};

export default AIProjects;
