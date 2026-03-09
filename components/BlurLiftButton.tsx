import React from "react";
import { Link } from "react-router-dom";
import "../public/css/BlurLiftButton.css";

const BlurLiftButton = ({ text, to }) => {
  const letters = text.split("");

  return (
    <div className="p-8 flex flex-col justify-end items-end">
      <div className="p-[1.5px] rounded-[10px] button-gradient shadow-md hover:shadow-lg transition-all">
        <Link to={to}>
          <button className="button-blur-lift px-6 py-2 text-xl rounded-[9px] bg-white text-black">
            <span className="button-blur-lift__background"></span>
            <span className="button-blur-lift__screen-reader-text">{text}</span>

            {/* Original letters */}
            {letters.map((letter, index) => (
              <span
                key={`letter-${index}`}
                className="button-blur-lift__letter-outer"
                style={{ "--index-outer": index } as any}
              >
                <span className="button-blur-lift__letter" style={{ "--index": index } as any}>
                  {letter}
                </span>
              </span>
            ))}

            {/* Hover letters */}
            {letters.map((letter, index) => (
              <span
                key={`hover-letter-${index}`}
                className="button-blur-lift__hover-letter-outer"
                style={{ "--index-outer": index } as any}
              >
                <span
                  className="button-blur-lift__hover-letter"
                  style={{ "--index": index } as any}
                >
                  {letter}
                </span>
              </span>
            ))}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlurLiftButton;
