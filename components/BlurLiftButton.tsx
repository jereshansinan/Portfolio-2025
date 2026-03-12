import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { Link } from "react-router-dom";

export default function StaggerButton({
  href = "",
  style = "",
  text = "Hover me",
  direction = "up",
  reverse = true,
  stagger = 0.035,
  duration = 0.5,
  ease = "expo.inOut",
}) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const textEl = textRef.current;

    if (!button || !textEl) return;

    // Clone the text for animation
    const textClone = textEl.cloneNode(true);
    textClone.style.position = "absolute";
    textClone.style.left = "0";
    textClone.style.width = "100%";

    textEl.after(textClone);

    const textSplit = new SplitType(textEl, { types: "chars" });
    const clonedSplit = new SplitType(textClone, { types: "chars" });

    // Timeline with bounce + blur
    const tl = gsap.timeline({ paused: true, defaults: { duration, stagger } });

    if (direction === "up") {
      textClone.style.top = "100%";
      tl.to(textSplit.chars, {
        yPercent: -150,
        ease: "back.out(1.2)",
      }).to(clonedSplit.chars, { yPercent: -150, ease: "back.out(1.2)" }, "<");
    }

    if (direction === "down") {
      textClone.style.top = "-100%";
      tl.to(textSplit.chars, {
        yPercent: 150,
        ease: "back.out(1.2)",
      }).to(clonedSplit.chars, { yPercent: 150, ease: "back.out(1.4)" }, "<");
    }

    const handleEnter = () => tl.restart();
    const handleLeave = () => {
      if (reverse) tl.reverse();
      else gsap.to([...textSplit.chars, ...clonedSplit.chars], { filter: "blur(0px)" });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
      textSplit.revert();
      clonedSplit.revert();
    };
  }, [direction, reverse, stagger, duration, ease]);

  return (
    <Link to={href}>
      <button
        ref={buttonRef}
        className={`${style} relative overflow-hidden px-6 py-3 border rounded-full`}
      >
        <span ref={textRef} className="relative block whitespace-nowrap page-specific-font">
          {text}
        </span>
      </button>
    </Link>
  );
}
