import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Grainient from "../Grainient";

interface DataGridProps {
  src?: string;
  Title: string;
  heading: string;
  date: string;
  size: "small" | "big";
  href: string;
  color: "red" | "purple" | "blue" | "green" | "violet" | "yellow";
}

// 1. Map your color keys to hex arrays for Grainient
const colorPresets = {
  red: { c1: "#f2709c", c2: "#ff9472", c3: "#f2709c" },
  purple: { c1: "#4776E6", c2: "#8E54E9", c3: "#4776E6" },
  blue: { c1: "#4CB8C4", c2: "#3CD3AD", c3: "#4CB8C4" },
  green: { c1: "#11998e", c2: "#38ef7d", c3: "#11998e" },
  violet: { c1: "#8E2DE2", c2: "#4A00E0", c3: "#8E2DE2" },
  yellow: { c1: "#F09819", c2: "#EDDE5D", c3: "#F09819" },
};

const commonBorder = "border-r border-[#ff8559]";

const sizeClasses = {
  big: "h-[50vh] md:h-[80vh]",
  small: "h-[40vh] md:h-[60vh] border-b border-[#ff8559]",
};

export const DataGrid = ({
  size,
  src,
  Title,
  heading,
  date,
  href,
  color,
}: DataGridProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasTopBorder = Title !== "Geometry Nodes" && Title !== "Wierd Stuff";

  const activeColors = colorPresets[color];

  return (
    <Link
      to={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block group w-full outline-none focus-visible:ring-2 focus-visible:ring-[#ff8559]"
    >
      <article
        className={clsx(
          "relative flex flex-col justify-between overflow-hidden p-4 md:p-6 transition-all duration-500 ease-in-out bg-[#f0f0f0]",
          commonBorder,
          sizeClasses[size],
          hasTopBorder && "border-t border-[#ff8559]",
        )}
      >
        {/* GRAINIENT BACKGROUND - Only visible on hover */}
        <div
          className={clsx(
            "absolute inset-0 z-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <Grainient
            color1={activeColors.c1}
            color2={activeColors.c2}
            color3={activeColors.c3}
            timeSpeed={1.6}
          />
        </div>

        {/* Video/Image Preview Container */}
        {src && (
          <div className="hidden md:group-hover:flex absolute inset-0 items-center justify-center z-30 pointer-events-none animate-in fade-in zoom-in duration-300 px-6">
            <div className="w-full aspect-square max-w-[250px] lg:max-w-[350px] overflow-hidden rounded-2xl shadow-2xl shadow-black/40 bg-black">
              {src.match(/\.(mp4|webm|mov|ogg)$/i) ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={src}
                  alt={`${Title} preview`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        )}

        {/* Header Content */}
        <div className="flex flex-col gap-4 relative z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mix-blend-multiply tracking-tighter">
            {Title}
          </h1>
        </div>

        {/* Footer Info */}
        <footer className="mt-auto flex flex-col gap-1 relative z-10">
          <h2 className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider text-gray-800">
            {heading}
          </h2>
          <h3 className="text-xs sm:text-sm text-gray-500 font-mono">{date}</h3>
        </footer>
      </article>
    </Link>
  );
};
