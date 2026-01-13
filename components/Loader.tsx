import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader: React.FC = () => {
  const counts = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ease = "power4.inOut";

    // Adjusted speeds
    const animDuration = 1; // Was 1
    const animStagger = 0.075; // Was 0.075
    const stepInterval = 0.9; // Was 1 (Controls speed between count numbers)

    const tl = gsap.timeline({
      delay: 0.1, // Reduced initial delay
      defaults: {
        ease: ease,
      },
    });

    counts.current.forEach((count, index) => {
      if (!count) return;
      const digits = count.querySelectorAll(".digit h1");

      // Reveal digits
      tl.to(
        digits,
        {
          y: "0%",
          duration: animDuration,
          stagger: animStagger,
        },
        index * stepInterval // Tighter timing based on new interval
      );

      // Hide digits (Move up)
      if (
        index < counts.current.length - 1 ||
        index === counts.current.length - 1
      ) {
        tl.to(
          digits,
          {
            y: "100%",
            duration: animDuration,
            stagger: animStagger,
          },
          // Start hide animation slightly before the next one starts for overlap
          index * stepInterval + (animDuration - 0.1)
        );
      }
    });

    tl.to(".spinner", {
      opacity: 0,
      duration: 0.2, // Faster fade out
    });

    tl.to(
      ".word h1",
      {
        y: "0%",
        duration: 0.6, // Was 1
      },
      "<" // Starts at same time as spinner fade
    );

    tl.to("#word-1 h1", {
      y: "100%",
      duration: 0.6, // Was 1
      delay: 0, // Removed delay
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-110%",
        duration: 0.6, // Was 1
        delay: 0, // Removed delay
      },
      "<" // Syncs perfectly with word-1
    );

    tl.to(".blockb", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.8, // Was 1
      stagger: 0.05, // Faster stagger
      delay: 0, // Removed big delay
      onComplete: () => {
        document.querySelector(".loader")?.classList.add("hidden");
      },
    });
  }, []);

  return (
    <div className="loader">
      <div className="overlay">
        <div className="blockb" />
        <div className="blockb" />
        <div className="blockb" />
      </div>

      <div className="intro-logo">
        <div className="word" id="word-1">
          <h1>
            <span>Jereshan</span>
          </h1>
        </div>
        <div className="word" id="word-2">
          <h1>
            <span>Sinan</span>
          </h1>
        </div>
      </div>

      <div className="divider" />
      <div className="divider2" />

      <div className="spinner-container">
        <div className="spinner" />
      </div>

      <div className="counter">
        {[
          ["0", "0"],
          ["2", "2"],
          ["5", "8"],
          ["7", "7"],
          ["9", "9"],
        ].map((digits, i) => (
          <div
            key={i}
            className="count"
            ref={(el) => {
              counts.current[i] = el;
            }}
          >
            {digits.map((digit, j) => (
              <div key={j} className="digit">
                <h1>{digit}</h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
