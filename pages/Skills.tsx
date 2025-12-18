import React from "react";
import Scene3D from "../components/Scene3D";
import "../public/fonts/broft.css";
import "../public/fonts/jetbrains.css";
import Certificates from "../components/Certificates";

const myCertificates = [
  {
    id: 1,
    background: "#171717",
    textcolor: "#fff",
    title: "Oracle Data Science Professional",
    date: "November 2025",
    link: "#",
    image: "./OracleCerts/oracle3.png",
  },
];

export default function DataEngineering() {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="./3.png" />
        </div>

        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white leading-tight font-bold tracking-tight page-specific-font-br">
            Data Engineering
          </h1>
        </div>
      </section>

      <section className="pt-20 relative w-full">
        <h2 className="text-4xl text-white md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300">
          CERTIFICATIONS
        </h2>
      </section>

      <Certificates items={myCertificates} />

      {/* Coming Soon Section */}
      <section className="z-10 flex flex-col items-center justify-center gap-4 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white leading-tight page-specific-font font-bold tracking-tight">
            MORE COMING SOON...
          </h1>
        </div>
      </section>
    </div>
  );
}
