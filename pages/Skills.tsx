import React from 'react';
import Scene3D from '../components/Scene3D';

export default function DataEngineering() {
  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative overflow-hidden h-[60vh]">
        <div className="absolute inset-0 z-0">
            <Scene3D />
        </div>
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white leading-tight font-mono font-bold tracking-tight">
            Data Engineering
          </h1>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="z-10 flex flex-col items-center justify-center gap-4 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white leading-tight font-mono font-bold tracking-tight">
            COMING SOON...
          </h1>
        </div>
      </section>
    </div>
  );
}