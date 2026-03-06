import React, { useState, useRef, useEffect } from "react";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";

// Define the shape of your project data
interface Project {
  id: string;
  title: string;
  image?: string;
  video?: string;
  description: string;
  tools: string[];
  categories: string[];
  githubUrl: string;
  deliverables: string[];
}

interface ProjectsGridProps {
  projects: Project[];
  cardHeight?: string;
}

const FullWidthProjects = ({
  projects,
  cardHeight = "70vh",
}: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full min-h-screen bg-transparent cursor-none py-4 px-6">
      {/* Custom Cursor - Pill Shape on Hover */}
      <motion.div
        className="fixed top-0 left-0 z-400 pointer-events-none flex items-center justify-center overflow-hidden "
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoveredId ? 160 : 12,
          height: hoveredId ? 48 : 12,
          borderRadius: hoveredId ? 40 : 100,
          backgroundColor: "#A855F7",
          border: hoveredId ? "2px solid white" : "0px solid transparent",
        }}
      >
        <AnimatePresence>
          {hoveredId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-white text-xs font-black tracking-widest px-4 page-specific-font"
            >
              EXPLORE <ArrowUpRight size={18} strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Ultra-Slim Gap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4px] w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            height={cardHeight}
            onHover={setHoveredId}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        @keyframes rotate-gradient {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate {
          animation: rotate-gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

const ProjectCard = ({
  project,
  height,
  onHover,
  onClick,
}: {
  project: Project;
  height: string;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mPos, setMPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      className="group relative w-full flex flex-col bg-transparent z-10 cursor-none"
    >
      {/* 1. MEDIA CONTAINER WITH ROUNDED CORNERS */}
      <div
        style={{ height }}
        className="relative w-full overflow-hidden rounded-[24px] bg-[#0a0a0a] transition-all duration-500"
      >
        {/* Animated Gradient Border Overlay */}
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            maskImage: `radial-gradient(250px circle at ${mPos.x}px ${mPos.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(250px circle at ${mPos.x}px ${mPos.y}px, black 0%, transparent 100%)`,
          }}
        >
          <div className="absolute inset-0 p-[3px]">
            <div className="absolute inset-[-100%] animate-rotate bg-[conic-gradient(from_0deg,#A855F7,#3B82F6,#EC4899,#A855F7)]" />
          </div>
        </div>

        {/* Media Content */}
        <div className="absolute inset-[2px] z-20 bg-black rounded-[22px] overflow-hidden">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          )}
        </div>
      </div>

      {/* 2. TEXT METADATA OUTSIDE (BOTTOM) - SHOWS ONLY ON HOVER */}
      <div className="flex justify-between items-start pt-5 pb-8 px-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-xl font-bold tracking-tight uppercase">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">
              {project.deliverables[0] || "Project"}
            </span>
          </div>
        </div>

        <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase text-right pt-1">
          {project.categories.join(" / ")}
        </p>
      </div>
    </motion.div>
  );
};

// ... ProjectOverlay remains same as previous response ...
// ... Overlay component remains as defined previously ...
const ProjectOverlay = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-2xl overflow-y-auto p-10 cursor-default"
  >
    <button onClick={onClose} className="fixed top-10 right-10 text-white">
      <X size={48} />
    </button>
    <div className="max-w-4xl mx-auto py-20 text-white">
      <h2 className="text-6xl font-black uppercase mb-10">{project.title}</h2>
      <p className="text-xl text-gray-400 mb-10">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span
            key={t}
            className="px-4 py-2 bg-white/5 rounded-full border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default FullWidthProjects;
