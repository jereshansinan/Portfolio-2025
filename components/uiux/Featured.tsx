import React from "react";

interface FeaturedProps {
  date: string;
  title: string;
  description: string;
  image: string;
  stack?: string[];
}

const Featured: React.FC<FeaturedProps> = ({
  date,
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-transparent w-full flex flex-col md:flex-row items-stretch gap-8 min-h-[400px] font-sans border-b border-gray-700 p-8 hover:bg-white/5 transition-colors">
      {/* 1. Image Section (Left Side) */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden rounded-lg">
        <img
          alt={title}
          className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
          src={image}
        />
      </div>

      {/* 2. Content Section (Right Side) - Single Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        {/* Top: Description */}
        <div className="pb-8">
          <p className="text-xl md:text-3xl lg:text-4xl text-gray-200 font-mono leading-tight">
            {description}
          </p>
        </div>

        {/* Bottom: Title & Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pt-8 border-t border-gray-700 md:border-t-0">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
            {title}
          </h3>
          <span className="text-xl md:text-2xl font-bold text-gray-400 font-mono mt-4 md:mt-0">
            {String(date)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Featured;