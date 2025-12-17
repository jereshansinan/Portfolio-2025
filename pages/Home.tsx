import React, { useState, useEffect, useRef } from 'react';
import Scene3D from '../components/Scene3D';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

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
                    ease: "power2.out"
                });
            }
        };

        const handleMenuHover = () => setIsMenuHovered(true);
        const handleMenuLeave = () => setIsMenuHovered(false);

        // Attach listeners to menu buttons
        const menuBtns = document.querySelectorAll('.nav-menu-btn');
        menuBtns.forEach(btn => {
            btn.addEventListener('mouseenter', handleMenuHover);
            btn.addEventListener('mouseleave', handleMenuLeave);
        });

        window.addEventListener('mousemove', moveCursor);
        
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            menuBtns.forEach(btn => {
                btn.removeEventListener('mouseenter', handleMenuHover);
                btn.removeEventListener('mouseleave', handleMenuLeave);
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
        <Scene3D background='./programming.mp4' />
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="home-overlay"
            className="absolute inset-0 z-20 cursor-none"
            initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            exit={{ 
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
            }}
          >
             {/* 
                CUTOUT EFFECT LOGIC:
                1. Container has bg-white.
                2. Text is text-black.
                3. mix-blend-screen on the container blends it with the Scene (z-0).
             */}
             <div 
                className="absolute inset-0 bg-white mix-blend-screen flex items-center justify-center w-full h-full cursor-none"
                onClick={() => setShowOverlay(false)}
             >
                <h1 className="text-[17vw] font-bold text-black tracking-tighter leading-[0.85] text-center select-none w-full break-all sm:break-normal pointer-events-none">
                  JERESHAN<br/>SINAN
                </h1>
             </div>
             
             {/* Custom Cursor sits on top of the blend layer (z-50 in component) */}
             <CustomCursor />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;