import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader: React.FC = () => {
  const counts = useRef<(HTMLDivElement | null)[]>([]);

  const counterDigits = [
    { id: "00", digits: ["0", "0"] },
    { id: "22", digits: ["2", "2"] },
    { id: "58", digits: ["5", "8"] },
    { id: "77", digits: ["7", "7"] },
    { id: "99", digits: ["9", "9"] },
  ];

  useEffect(() => {
    const ease = "power4.inOut";

    const animDuration = 1;
    const animStagger = 0.075;
    const stepInterval = 0.9;

    const tl = gsap.timeline({
      delay: 0.1,
      defaults: {
        ease: ease,
      },
    });

    counts.current.forEach((count, index) => {
      if (!count) return;
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          duration: animDuration,
          stagger: animStagger,
        },
        index * stepInterval
      );

      if (index < counts.current.length - 1 || index === counts.current.length - 1) {
        tl.to(
          digits,
          {
            y: "100%",
            duration: animDuration,
            stagger: animStagger,
          },
          index * stepInterval + (animDuration - 0.1)
        );
      }
    });

    tl.to(".spinner", {
      opacity: 0,
      duration: 0.2,
    });

    tl.to(
      ".word h1",
      {
        y: "0%",
        duration: 0.6,
      },
      "<"
    );

    tl.to("#word-1 h1", {
      y: "100%",
      duration: 0.6,
      delay: 0,
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-110%",
        duration: 0.6,
        delay: 0,
      },
      "<"
    );

    tl.to(".blockb", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.8,
      stagger: 0.05,
      delay: 0,
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
        {counterDigits.map((item, i) => (
          <div
            key={item.id}
            className="count"
            ref={(el) => {
              counts.current[i] = el;
            }}
          >
            {item.digits.map((digit) => (
              <div key={`${item.id}-${digit}`} className="digit">
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
