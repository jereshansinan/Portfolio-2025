import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------
// 1. GRID TRANSITION OVERLAY
// This component mimics the "3D Design" hub page for the animation effect
// ----------------------------------------------------------------------

const GridOverlay = ({ isVisible }: { isVisible: boolean }) => {
  // State to manage the staggered entrance of grid items
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (isVisible) {
    } else {
      setStage(0);
    }
  }, [isVisible]);

  // Helper styles for the grid items
  const baseCardStyle =
    "relative bg-slate-100 dark:bg-zinc-800 w-full transition-all duration-700 ease-out transform";
  const hiddenStyle = "opacity-0 translate-y-10";
  const visibleStyle = "opacity-100 translate-y-0";

  // Typography helpers
  const titleStyle =
    "text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tighter";
  const footerStyle =
    "absolute bottom-6 left-6 text-sm font-mono text-slate-500 uppercase tracking-widest";

  return (
    <div
      className={`fixed inset-0 z-50 bg-white dark:bg-black transition-opacity duration-300 pointer-events-none
        ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex flex-col md:flex-row w-full h-full p-4 gap-4">
        {/* COLUMN 1 */}
        <div className="flex flex-col w-full md:w-1/2 gap-4 h-full">
          {/* Architecture (First to appear) */}
          <div
            className={`${baseCardStyle} flex-grow ${
              stage >= 1 ? visibleStyle : hiddenStyle
            }`}
          >
            <div className="p-8 h-full flex flex-col justify-between">
              <h1 className={titleStyle}>3D Architecture</h1>
              <div className="flex justify-between items-end border-t border-slate-300 dark:border-zinc-700 pt-4 mt-auto">
                <span className="text-xs font-bold">Fiction & Non-Fiction</span>
                <span className="text-xs font-bold">2022</span>
              </div>
            </div>
          </div>

          {/* Portraits (Third to appear) */}
          <div
            className={`${baseCardStyle} h-1/3 ${
              stage >= 3 ? visibleStyle : hiddenStyle
            }`}
          >
            <div className="p-8 h-full flex flex-col justify-center">
              <h1 className={titleStyle}>Portraits</h1>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col w-full md:w-1/2 gap-4 h-full">
          {/* Environment (Fourth to appear) */}
          <div
            className={`${baseCardStyle} h-1/3 ${
              stage >= 4 ? visibleStyle : hiddenStyle
            }`}
          >
            <div className="p-8 h-full flex flex-col justify-between">
              <h1 className={titleStyle}>Environment</h1>
              <div className="flex justify-between items-end border-t border-slate-300 dark:border-zinc-700 pt-4 mt-auto">
                <span className="text-xs font-bold">Concept Art</span>
                <span className="text-xs font-bold">2023</span>
              </div>
            </div>
          </div>

          {/* Geometry Nodes (Second to appear) */}
          <div
            className={`${baseCardStyle} flex-grow ${
              stage >= 2 ? visibleStyle : hiddenStyle
            }`}
          >
            <div className="p-8 h-full flex flex-col justify-center">
              <h1 className={titleStyle}>Geometry Nodes</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 2. BACK BUTTON & LOGIC CONTROLLER
// ----------------------------------------------------------------------

interface BackTransitionProps {
  to?: string; // Default to /3d-design
}

export const BackTransition: React.FC<BackTransitionProps> = ({
  to = "/3d-design",
}) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldHideContent, setShouldHideContent] = useState(false);

  const handleBackClick = () => {
    // 1. Start the sequence
    setIsAnimating(true);
    navigate(to);
  };

  return (
    <>
      {/* GLOBAL STYLES TO HIDE CONTENT WHEN ANIMATING */}
      {shouldHideContent && (
        <style>{`
          main, .page-content { opacity: 0 !important; transition: opacity 0.3s ease; }
          .back-button-container { opacity: 0 !important; pointer-events: none; }
        `}</style>
      )}

      {/* THE GRID OVERLAY (Visual Transition) */}
      <GridOverlay isVisible={isAnimating} />

      {/* THE BACK BUTTON */}
      <div className="back-button-container fixed bottom-8 right-8 z-40">
        <button
          onClick={handleBackClick}
          className="group flex items-center justify-center gap-3 px-6 py-3 
                     bg-black text-white dark:bg-white dark:text-black rounded-full 
                     shadow-lg hover:scale-105 transition-all duration-300 ease-out"
        >
          <span className="text-sm font-bold tracking-widest uppercase group-hover:-translate-x-1 transition-transform">
            Back
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform delay-75"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </>
  );
};
