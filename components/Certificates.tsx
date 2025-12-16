import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface CertificateProps {
  id: number;
  background: string;
  textcolor?: string;
  title: string;
  date: string;
  link: string;
  image: string;
}

const Certificates = ({ items }: { items: CertificateProps[] }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring config for smooth follow
  const springConfig = { stiffness: 300, damping: 40 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const activeItem = items.find((item) => item.id === hoveredId);

  return (
    <section 
      className="relative w-full cursor-none bg-transparent" 
      onMouseMove={handleMouseMove}
    >
      <div className="w-full border-b border-gray-300">
        {items.map((it, idx) => (
          <a
            key={it.id}
            href={it.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 md:py-20 px-8 w-full bg-white hover:bg-gray-50 transition-colors border-t border-gray-300 first:border-t-0 overflow-hidden"
            onMouseEnter={() => setHoveredId(it.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto z-10 pointer-events-none">
              <div className="w-6 pr-10 text-gray-400 font-mono">0{idx + 1}</div>
              <div className="text-xl md:text-2xl font-mono font-medium text-black group-hover:translate-x-4 transition-transform duration-500">
                {it.title}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0 text-gray-500 font-mono z-10 pointer-events-none">
              <div>{it.date}</div>
              <div className="hidden md:block transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                →
              </div>
            </div>

            {/* Mobile Image inline */}
            {!isLargeScreen && (
                <div className="mt-6 w-full md:hidden">
                    <img src={it.image} alt={it.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
             )}
          </a>
        ))}
      </div>

      <AnimatePresence>
        {isLargeScreen && activeItem && (
          <motion.img
            key={activeItem.id}
            src={activeItem.image}
            alt={activeItem.title}
            className="fixed z-50 pointer-events-none object-cover w-[400px] h-[250px] rounded-xl border-2 border-black shadow-2xl bg-white"
            style={{
                left: smoothX,
                top: smoothY,
                x: "-50%",
                y: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;