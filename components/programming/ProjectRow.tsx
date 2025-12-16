import React from "react";

interface ProjectsProps {
  number: number | string;
  title: string;
  description: string;
  image: string; // image URL or local import
  stack: string[]; // e.g. ["React", "TypeScript", "Node"]
}

const ProjectRow: React.FC<ProjectsProps> = ({
  number,
  title,
  description,
  image,
  stack,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch min-h-[400px] font-sans gap-0 border-b border-gray-300 bg-white">
      {/* Column 1 */}
      <div className="flex-1 pl-2 flex flex-col justify-center py-8 md:py-0">
        <div className="flex flex-col md:flex-col md:items-start pl-4 md:pl-8">
          <div className="inline-flex items-center">
            <div className="rounded-[10px] p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              <div className="bg-white rounded-md w-10 border md:w-12 aspect-square flex items-center justify-center font-bold font-mono text-black">
                {number}
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-16 text-left">
            <h3 className="m-0 text-3xl md:text-5xl font-medium font-mono text-black">{title}</h3>
            <p className="mt-5 text-lg text-gray-600 font-mono pr-4">{description}</p>
          </div>
        </div>
      </div>

      {/* Vertical separator (visible on md and up) */}
      <div className="hidden md:block w-px bg-gray-300" />

      {/* Column 2 */}
      <div className="flex-1 p-4 md:p-2 flex items-center justify-center border-t md:border-t-0 border-gray-200">
        <img
          alt={String(title)}
          className="w-full md:max-w-[80%] max-h-64 md:max-h-72 object-contain rounded-md shadow-sm"
          src={image}
        />
      </div>

      {/* Vertical separator (visible on md and up) */}
      <div className="hidden md:block w-px bg-gray-300" />

      {/* Column 3 */}
      <div className="flex-1 p-0 flex flex-col justify-end border-t md:border-t-0 border-gray-200">
        <div className="w-full font-mono text-lg md:text-xl text-black">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className="py-3 px-4 border-t border-gray-300 first:border-t-0 md:first:border-t"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;