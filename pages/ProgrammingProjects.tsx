import React from "react";
import Scene3D from "../components/Scene3D";
import ProjectRow from "../components/programming/ProjectRow";

export default function ProgrammingProjects() {
  return (
    <div className="bg-white min-h-screen page-specific-font">
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-16 md:py-24 relative bg-slate-900 overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="./programming.mp4" />
        </div>

        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white leading-tight font-bold tracking-tighter">
            Programming
          </h1>
        </div>
      </section>

      <section className="w-full border-b border-gray-300 bg-white">
        <div className="p-8 text-left">
          <h2 className="text-4xl md:text-7xl page-specific-font text-black font-bold">
            ALL WORK
          </h2>
        </div>
      </section>

      <div className="flex flex-col w-full">
        <ProjectRow
          description="A centralized fitness & coaching platform replacing third-party tools with custom dashboards for clients and admins."
          image="./molende.png"
          number={1}
          stack={["React", "Next.js", "Supabase", "Clerk"]}
          title="Molende Sports"
        />
        <ProjectRow
          description="A full CRM application handling task management, customer tracking, and REST API integrations."
          image="./vucadigital.png"
          number={2}
          stack={["Android Studio", "Firebase", "Supabase", "CI/CD"]}
          title="VUCA Digital CRM"
        />
        <ProjectRow
          description="A responsive brand website highlighting the menu and ordering process, featuring custom design and Vercel deployment."
          image="./indiansavoury.jpg"
          number={3}
          stack={["React", "Next.js", "Hero UI", "Figma"]}
          title="Indian Savoury Delights"
        />
      </div>
    </div>
  );
}
