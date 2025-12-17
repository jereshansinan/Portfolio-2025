import React, { useRef, useEffect } from "react";
import ScrollingCore from "../components/uiux/ScrollingCore";
import Certificates from "../components/Certificates";
import Specialising from "../components/uiux/Specialising";
import Featured from "../components/uiux/Featured";
import Scene3D from "../components/Scene3D";
import GridPatternDim from "../components/uiux/GridPatternDim";
import { GridPatternBright } from "../components/uiux/GridPatternBright";

const myCertificates = [
  {
    id: 1,
    background: "transparent",
    textcolor: "white",
    title: "UDEMY Figma - Web and Mobile Projects from Scratch",
    date: "August 2025",
    link: "#",
    image: "./uiux/uiuxcert.png",
  },
];

export default function UIUX() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      containerRef.current.style.setProperty("--mask-x", `${x}px`);
      containerRef.current.style.setProperty("--mask-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[#171717] min-h-screen text-white font-valve selection:bg-purple-500 selection:text-white relative">
      <style>{`
      .dim-grid-svg path, .dim-grid-svg rect {
        mix-blend-mode: normal !important;
        stroke: #525252 !important; /* Neutral-600 */
        opacity: 0.3 !important;
      }
      `}</style>

      {/* --- BACKGROUND SVG LAYER (Fixed to Viewport, Masked) --- */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={
          {
            "--mask-size": "300px",
            "--mask-x": "-1000px",
            "--mask-y": "-1000px",
          } as React.CSSProperties
        }
      >
        {/* Mask Container: Everything inside is hidden except under the cursor */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage:
              "radial-gradient(var(--mask-size) circle at var(--mask-x) var(--mask-y), black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(var(--mask-size) circle at var(--mask-x) var(--mask-y), black 50%, transparent 100%)",
          }}
        >
          {/* Only Layer: Dim Grid */}
          <div className="absolute inset-0 w-full h-full">
            <GridPatternDim className="w-full h-full dim-grid-svg" />
          </div>
        </div>
      </div>

      {/* Hero Section with 3D Scene - Excluded from Mask Effect */}
      <section className="z-20 hero-section flex flex-col items-center justify-center gap-4 py-20 md:py-32 relative overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="./5.png" />
        </div>

        <div className="inline-block max-w-4xl text-center relative z-10 px-4">
          <h1 className="text-6xl md:text-9xl text-white leading-tight font-bold tracking-tighter mix-blend-overlay">
            UI/UX
          </h1>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full">
        <section className="w-full py-16 md:py-24 border-t border-gray-800 backdrop-blur-[2px]">
          <div className="max-w-full px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-5xl md:text-8xl leading-[0.9] text-white font-bold tracking-tighter">
                  WHY?
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl md:text-3xl text-gray-300 leading-relaxed">
                  Design is my playground where logic meets creativity. While my
                  career is rooted in software development, my passion for
                  visuals drives me to make everything I touch look exceptional.
                  I apply my design principles to every aspect of my work—from
                  web and mobile interfaces to designing professional branding
                  assets.
                </p>
                <p className="mt-8 text-xl md:text-3xl text-gray-300 leading-relaxed">
                  I view every blank screen as a canvas. Whether it’s a
                  functional dashboard for a client or a simple layout for a
                  personal project, I strive to create visuals that communicate
                  clearly and leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ScrollingCore />
        <Specialising />

        <section className="w-full border-b border-gray-700 mt-20 backdrop-blur-[2px]">
          <div className="min-h-[200px] grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-center justify-start p-8 text-left border-b md:border-b-0 md:border-r border-gray-700 col-span-1 md:col-span-1">
              <h2 className="text-4xl md:text-7xl text-white font-bold">
                FEATURED
              </h2>
            </div>

            <div className="hidden md:block border-r border-gray-700" />

            <div className="p-6 flex flex-col justify-end items-end col-span-1">
              <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md hover:shadow-lg transition-shadow">
                <a
                  href="https://www.behance.net/jereshansinan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#171717] text-white rounded-[9px] px-6 py-2 text-xl font-bold hover:bg-gray-800 transition-colors">
                    View All
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Featured
          date={"11/2024"}
          description="A responsive brand website highlighting the menu and ordering process, featuring custom design."
          image="./indiansavoury.jpg"
          stack={["React", "TypeScript", "Node"]}
          title="Indian Savoury Delights"
        />
        <Featured
          date={"10/2024"}
          description="A full CRM application handling task management, customer tracking, and REST API integrations."
          image="./vucadigital.png"
          stack={["React", "TypeScript", "Node"]}
          title="VUCA Digital CRM"
        />
        <Featured
          date={"09/2024"}
          description="A centralized fitness & coaching platform replacing third-party tools with custom dashboards."
          image="./molende.png"
          stack={["React", "TypeScript", "Node"]}
          title="Molende Sports"
        />

        <section className="pt-20 relative w-full backdrop-blur-[2px]">
          <h2 className="text-4xl text-white md:text-7xl font-semibold pb-20 px-8 border-b border-gray-700">
            CERTIFICATIONS
          </h2>
        </section>

        <div className="bg-transparent relative z-20">
          <Certificates items={myCertificates} />
        </div>
      </div>
    </div>
  );
}
