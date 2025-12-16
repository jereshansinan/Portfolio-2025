import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// 1. Define the shape of the data
interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

// 2. The Single Project Card Component
const ProjectCard = ({ 
    image, 
    title, 
    description, 
    link, 
    onMouseEnter, 
    onMouseLeave 
}: ProjectProps & { onMouseEnter: () => void, onMouseLeave: () => void }) => {
  return (
    <a
      className="block relative w-full h-[60vh] md:h-[80vh] rounded-[15px] overflow-hidden group font-mono cursor-none"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Image - scales slightly on hover for effect */}
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* The Glass Block */}
      <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-black/40 border-t border-white/10 p-6 md:p-8 rounded-b-[15px]">
        <div className="flex flex-col items-start justify-end h-full">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm md:text-lg line-clamp-3 md:line-clamp-none">{description}</p>
        </div>
      </div>
    </a>
  );
};

// 3. Custom Cursor Component for AI Projects
const ProjectCursor = ({ isHovering }: { isHovering: boolean }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring configuration for "delayed but smooth" feel
  const springConfig = { damping: 25, stiffness: 150 }; // Lower stiffness = more delay
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
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center bg-white text-black rounded-full mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 100 : 20,
        height: isHovering ? 100 : 20,
        opacity: 1,
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
    <>
      <div className="px-6 md:px-12 lg:px-28 flex flex-col gap-12 py-12 relative z-10 bg-white">
        {items.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            image={project.image}
            link={project.link}
            title={project.title}
            onMouseEnter={() => setIsHoveringProject(true)}
            onMouseLeave={() => setIsHoveringProject(false)}
          />
        ))}
      </div>
      <ProjectCursor isHovering={isHoveringProject} />
    </>
  );
};

export default AIProjects;