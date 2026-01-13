import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export const PageReveal: React.FC = () => {
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const shouldAnimate = location.state?.transitionActive;

  useEffect(() => {
    if (shouldAnimate && overlayRef.current) {
      // 1. Force overlay to be fully covering immediately
      gsap.set(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });

      // 2. Wipe Up (Reveal the new page)
      gsap.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "power4.inOut",
        delay: 0.1, // Small delay to ensure DOM is ready
        onComplete: () => {
          // Unlock scroll on the new page
          document.body.style.overflow = "unset";
        },
      });
    } else {
      // If loaded directly (refresh), ensure scroll is unset
      document.body.style.overflow = "unset";
    }
  }, [shouldAnimate]);

  // If no transition happened, don't render anything
  if (!shouldAnimate) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-screen z-[9999] bg-[#1D1D1B]"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default PageReveal;
