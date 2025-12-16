import React from "react";

const Specialising = () => {
  return (
    <section className="px-4 md:px-8 py-16 min-h-screen flex flex-col bg-transparent">
      <h2 className="text-4xl md:text-7xl font-mono font-semibold mb-12 text-left text-white border-b border-gray-700 pb-8">
        Specialising
      </h2>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1470&auto=format&fit=crop"
            alt="UX work"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
           <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">UX Design</div>
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d8s3e?q=80&w=1470&auto=format&fit=crop"
            alt="UI work"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">UI Design</div>
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879es113?q=80&w=1374&auto=format&fit=crop"
            alt="Prototyping"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">Prototyping</div>
        </div>

        <div className="overflow-hidden rounded-lg min-h-[300px] relative group">
          <img
            src="https://images.unsplash.com/photo-1545235617-9465d2a5s5698?q=80&w=1480&auto=format&fit=crop"
            alt="Wireframing"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-white font-mono">Wireframing</div>
        </div>
      </div>
    </section>
  );
};

export default Specialising;