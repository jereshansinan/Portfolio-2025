import { useEffect, useState } from "react";

const GridOverlay = ({ isVisible }: { isVisible: boolean }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setStage(0);
      // Staggered entrance sequence
      const t1 = setTimeout(() => setStage(1), 50);   // Architecture (Big)
      const t2 = setTimeout(() => setStage(2), 250);  // Geometry (Big)
      const t3 = setTimeout(() => setStage(3), 400);  // Portraits (Small)
      const t4 = setTimeout(() => setStage(4), 550);  // Environment (Small)

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    } else {
      setStage(0);
    }
  }, [isVisible]);

  // Styles matching the light theme of the 3D Design page
  const cardBase = "relative w-full bg-slate-100 border border-slate-200 transition-all duration-500 ease-out overflow-hidden shadow-sm";
  const textBase = "text-slate-900 font-bold uppercase tracking-tighter text-3xl md:text-4xl";
  
  // Animation states
  const show = "opacity-100 translate-y-0 scale-100";
  const hide = "opacity-0 translate-y-8 scale-95";

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white transition-opacity duration-200 pointer-events-none
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex w-full h-full p-4 gap-4">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col w-1/2 gap-4 h-full">
          {/* Architecture */}
          <div className={`${cardBase} flex-[2] ${stage >= 1 ? show : hide}`}>
            <div className="p-8 h-full flex flex-col justify-between">
              <h1 className={textBase}>3D Architecture</h1>
              <div className="flex justify-between items-end border-t border-slate-300 pt-4">
                <span className="text-xs font-bold text-slate-500">Fiction & Non-Fiction</span>
                <span className="text-xs font-bold text-slate-500">2022</span>
              </div>
            </div>
          </div>
          {/* Portraits */}
          <div className={`${cardBase} flex-1 ${stage >= 3 ? show : hide}`}>
             <div className="p-8 h-full flex flex-col justify-center">
              <h1 className={textBase}>Portraits</h1>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-1/2 gap-4 h-full">
          {/* Environment */}
          <div className={`${cardBase} flex-1 ${stage >= 4 ? show : hide}`}>
            <div className="p-8 h-full flex flex-col justify-between">
              <h1 className={textBase}>Environment</h1>
              <div className="flex justify-between items-end border-t border-slate-300 pt-4">
                <span className="text-xs font-bold text-slate-500">Concept Art</span>
                <span className="text-xs font-bold text-slate-500">2023</span>
              </div>
            </div>
          </div>
          {/* Geometry Nodes */}
          <div className={`${cardBase} flex-[2] ${stage >= 2 ? show : hide}`}>
             <div className="p-8 h-full flex flex-col justify-center">
              <h1 className={textBase}>Geometry Nodes</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GridOverlay;