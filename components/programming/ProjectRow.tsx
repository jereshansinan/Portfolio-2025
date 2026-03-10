import React from "react";

interface ProjectsProps {
  number: number | string;
  title: string;
  description: string;
  image: string;
  stack: string[];
}

const ProjectRow: React.FC<ProjectsProps> = ({ number, title, description, image, stack }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 min-h-[400px] border-b border-gray-300 bg-white">
      {/* Column 1 */}
      <div className="flex flex-col justify-center p-8 border-b md:border-b-0 md:border-r border-gray-300">
        <div className="rounded-[10px] p-px project-no-gradient w-12 h-12 flex items-center justify-center mb-8">
          <div className="bg-white rounded-md w-full h-full flex items-center justify-center text-black">
            {number}
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-3xl md:text-5xl font-medium text-black">{title}</h3>
          <p className="mt-5 text-lg text-gray-600">{description}</p>
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-300">
        <img
          alt={title}
          className="w-full max-h-72 object-contain rounded-md shadow-sm"
          src={image}
        />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col justify-end">
        <div className="w-full text-lg md:text-xl text-black">
          {stack.map((item, idx) => (
            <div key={item} className="py-4 px-8 border-t border-gray-300 first:border-t-0">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
