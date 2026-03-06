import React from "react";
import Scene3D from "../components/Scene3D";
import "../public/fonts/ocr.css";
import "../public/fonts/jetbrains.css";
import Certificates from "../components/Certificates";
import Projects from "@/components/dataengineering/Projects";
import GradualBlur from "@/components/GradualBlur";

const ProjectsList = [
  {
    id: "1",
    title: "Data Pipeline Automation",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772693488/vucadigital_w0hbiq.png",
    description:
      "Built scalable data pipelines using Apache Airflow and Python to automate ETL processes for a financial services company.",
    tools: ["Apache Airflow", "Python", "Docker"],
    categories: ["Data Engineering", "ETL", "Automation"],
    githubUrl: "#",
    deliverables: [
      "Automated ETL pipelines",
      "Data quality monitoring",
      "Scalable infrastructure",
    ],
  },
  {
    id: "2",
    title: "Data Pipeline Automation",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772693488/vucadigital_w0hbiq.png",
    description:
      "Built scalable data pipelines using Apache Airflow and Python to automate ETL processes for a financial services company.",
    tools: ["Apache Airflow", "Python", "Docker"],
    categories: ["Data Engineering", "ETL", "Automation"],
    githubUrl: "#",
    deliverables: [
      "Automated ETL pipelines",
      "Data quality monitoring",
      "Scalable infrastructure",
    ],
  },
];

const myCertificates = [
  {
    id: 1,
    background: "#171717",
    textcolor: "#fff",
    title: "Oracle Data Science Professional",
    date: "November 2025",
    link: "#",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772709596/oracle3_s2o847.png",
  },
  {
    id: 2,
    background: "#171717",
    textcolor: "#fff",
    title: "IBM Data Engineering Essentials",
    date: "February 2026",
    link: "https://www.credly.com/badges/b3c6b19a-0e2a-4fcf-8da0-9712ee45c9be",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772822618/Screenshot_2026-03-06_204259_weacyq.png",
  },
  {
    id: 3,
    background: "#171717",
    textcolor: "#fff",
    title: "IBM Python Project for Data Engineering",
    date: "February 2026",
    link: "https://www.credly.com/badges/c061fbc5-317d-4093-9e4b-76353860ab0c",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772822618/Screenshot_2026-03-06_204244_apeazd.png",
  },
];

export default function DataEngineering() {
  return (
    <div className="relative min-h-screen bg-[#171717] text-white page-specific-font-ocr">
      {/* 1. Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center relative overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="https://res.cloudinary.com/dxmnledfa/image/upload/v1772709863/3_v3oppx.png" />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold page-specific-font-ocr text-center">
            Data Engineering
          </h1>
        </div>
      </section>

      {/* 2. Main Content Sections */}
      <section className="pt-20 relative w-full">
        <h2 className="text-4xl md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300 page-specific-font-ocr">
          PROJECTS
        </h2>
      </section>
      <Projects projects={ProjectsList} />

      <section className="pt-20 relative w-full">
        <h2 className="text-4xl md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300 page-specific-font-ocr">
          CERTIFICATIONS
        </h2>
      </section>
      <Certificates items={myCertificates} />
      <div className="fixed bottom-0 left-0 w-full z-100 pointer-events-none">
        <GradualBlur
          target="parent"
          position="bottom"
          height="10vh"
          strength={3.5}
          divCount={4}
          exponential={true}
          opacity={0.9}
        />
      </div>
    </div>
  );
}
