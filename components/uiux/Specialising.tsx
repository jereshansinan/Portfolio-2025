import React from "react";

const Specialising = () => {
  return (
    <section className="px-4 md:px-8 py-16 min-h-screen flex flex-col bg-transparent backdrop-blur-[2px]">
      <h2 className="text-4xl md:text-7xl font-mono font-semibold mb-12 text-left text-white border-b border-gray-700 pb-8">
        Specialising
      </h2>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="./uiux/Frame 1.svg"
            alt="UX work"
            className="w-full h-full object-cover transition-transform duration-500"
          />
           <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">UX Design</div>
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="./uiux/Frame 2.svg"
            alt="UI work"
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">UI Design</div>
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="./uiux/Frame 3.svg"
            alt="Prototyping"
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">Prototyping</div>
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="./uiux/Frame 4.svg"
            alt="Wireframing"
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">Wireframing</div>
        </div>
      </div>
    </section>
  );
};

export default Specialising;