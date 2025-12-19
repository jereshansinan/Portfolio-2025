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

// 1. Define the shape of the data
interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
  doclink: string;
}

// 2. The Single Project Card Component
const ProjectCard = ({
  image,
  title,
  description,
  link,
  doclink,
  onMouseEnter,
  onMouseLeave,
}: ProjectProps & { onMouseEnter: () => void; onMouseLeave: () => void }) => {
  return (
    <div className="block relative w-full h-[60vh] md:h-[80vh] rounded-[15px] overflow-hidden group page-specific-font">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full cursor-none"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
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
};

// 3. Custom Cursor Component for AI Projects
const ProjectCursor = ({ isHovering }: { isHovering: boolean }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration for "delayed but smooth" feel
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center bg-white text-black rounded-full"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 100 : 20,
        height: isHovering ? 100 : 20,
        opacity: 1, // Always visible but changes size/content
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="font-bold font-mono text-sm tracking-widest"
          >
            VIEW
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 4. The Main Component
interface AIProjectsProps {
  items: ProjectProps[];
}

const AIProjects = ({ items }: AIProjectsProps) => {
  const [isHoveringProject, setIsHoveringProject] = useState(false);

  return (
    <div className="relative w-full bg-white">
      {/* Sticky Stack Implementation */}
      {items.map((project, index) => (
        <div
          key={index}
          className="top-0 h-screen w-full flex items-center justify-center bg-white border-t border-gray-100 overflow-hidden px-4 md:px-12"
          style={{
            zIndex: index + 1,
          }}
          // Handle hover state here on the full-screen container for reliable cursor detection
          onMouseEnter={() => setIsHoveringProject(true)}
          onMouseLeave={() => setIsHoveringProject(false)}
        >
          {/* Content container - constrained width but full height for centering */}
          <div className="w-full max-w-7xl h-full py-8 md:py-12 flex flex-col justify-center">
            <ProjectCard
              description={project.description}
              image={project.image}
              link={project.link}
              title={project.title}
              doclink={project.doclink}
              onMouseEnter={() => setIsHoveringProject(true)}
              onMouseLeave={() => setIsHoveringProject(false)}
            />
          </div>
        </div>
      ))}

      {/* Custom Cursor Logic */}
      <ProjectCursor isHovering={isHoveringProject} />
    </div>
  );
};

export default AIProjects;
