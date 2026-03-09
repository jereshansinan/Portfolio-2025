import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

interface ThreeDProjectsTransitionProps {
  children: React.ReactNode;
  to: string;
}

export const ThreeDProjectsTransition: React.FC<ThreeDProjectsTransitionProps> = ({
  children,
  to,
}) => {
  const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (overlayRef.current) {
      // 1. Lock Body Scroll
      document.body.style.overflow = "hidden";

      // 2. Make overlay visible
      overlayRef.current.style.display = "block";

      const tl = gsap.timeline({
        onComplete: () => {
          // 3. Navigate AND pass state to tell the next page to "Wipe Up"
          navigate(to, { state: { transitionActive: true } });
        },
      });

      // 4. Wipe Down (Cover Screen)
      tl.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.25,
        ease: "power4.inOut",
      });
    }
  };

  return (
    <>
      <div onClickCapture={handleClick} className="cursor-pointer block relative">
        {children}
      </div>

      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-screen z-9999 bg-[#1D1D1B]"
        style={{
          display: "none", // Hidden initially
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default ThreeDProjectsTransition;
