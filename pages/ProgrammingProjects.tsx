import React from 'react';
import Scene3D from '../components/Scene3D';
import ProjectRow from '../components/programming/ProjectRow';

export default function ProgrammingProjects() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-16 md:py-24 relative bg-slate-900 overflow-hidden h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0 z-0">
            <Scene3D />
        </div>
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        
        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white leading-tight font-mono font-bold tracking-tighter">
            Programming Projects
          </h1>
          <p className="mt-4 text-gray-300 font-mono text-lg">
            A complete collection of my engineering work.
          </p>
        </div>
      </section>

      <section className="w-full border-b border-gray-300 bg-white">
        <div className="p-8 text-left">
            <h2 className="text-4xl md:text-7xl font-mono text-black font-bold">
              ALL WORK
            </h2>
        </div>
      </section>

      <div className="flex flex-col w-full">
        <ProjectRow
            description="A centralized fitness & coaching platform replacing third-party tools with custom dashboards for clients and admins."
            image="https://picsum.photos/seed/molende/800/600"
            number={1}
            stack={["React", "Next.js", "Supabase", "Clerk"]}
            title="Molende Sports"
        />
        <ProjectRow
            description="A full CRM application handling task management, customer tracking, and REST API integrations."
            image="https://picsum.photos/seed/vuca/800/600"
            number={2}
            stack={["Android Studio", "Firebase", "Supabase", "CI/CD"]}
            title="VUCA Digital CRM"
        />
        <ProjectRow
            description="A responsive brand website highlighting the menu and ordering process, featuring custom design and Vercel deployment."
            image="https://picsum.photos/seed/indian/800/600"
            number={3}
            stack={["React", "Next.js", "Hero UI", "Figma"]}
            title="Indian Savoury Delights"
        />
        {/* Additional projects can be added here */}
         <ProjectRow
            description="A decentralized file storage system using IPFS protocol simulation for secure and redundant data management."
            image="https://picsum.photos/seed/cloud/800/600"
            number={4}
            stack={["Go", "Docker", "Distributed Systems"]}
            title="Distributed Cloud Storage"
        />
      </div>
    </div>
  );
}