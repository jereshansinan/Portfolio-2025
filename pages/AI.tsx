import React from "react";
import AIProjects from "../components/ai/Projects";
import Certificates from "../components/Certificates";
import Scene3D from "../components/Scene3D";
import "../public/fonts/broft.css";
import "../public/fonts/jetbrains.css";

const myCertificates = [
  {
    id: 1,
    background: "white",
    textcolor: "#000",
    title: "Oracle Generative AI Professional",
    date: "October 2025",
    link: "#",
    image: "./OracleCerts/oracle1.png",
  },
  {
    id: 2,
    background: "white",
    textcolor: "#000",
    title: "Oracle Certified AI Foundations Associate",
    date: "August 2025",
    link: "#",
    image: "./OracleCerts/oracle2.png",
  },
  {
    id: 3,
    background: "white",
    textcolor: "#000",
    title: "IBM - Python for Data Science and AI",
    date: "November 2025",
    link: "#",
    image:
      "./AICerts/Coursera Python for data science, AI and Development-1.jpg",
  },
  {
    id: 4,
    background: "white",
    textcolor: "#000",
    title: "Intel - AI Essentials",
    date: "August 2025",
    link: "#",
    image: "./AICerts/Coursera Intel AI-1.jpg",
  },
  {
    id: 5,
    background: "white",
    textcolor: "#000",
    title: "DeepLearning.AI - AI For Everyone",
    date: "August 2025",
    link: "#",
    image: "./AICerts/Coursera AI for Everyone-1.jpg",
  },
  {
    id: 6,
    background: "white",
    textcolor: "#000",
    title: "Microsoft - Artificial Intelligence on Azure",
    date: "August 2025",
    link: "#",
    image: "./AICerts/Coursera AI on Microsoft Azure-1.jpg",
  },
  {
    id: 7,
    background: "white",
    textcolor: "#000",
    title: "AWS - Generative AI with LLMs",
    date: "August 2025",
    link: "#",
    image: "./AICerts/Coursera Generative AI with LLMs-1.jpg",
  },
  {
    id: 8,
    background: "white",
    textcolor: "#000",
    title: "IBM - Introduction to AI",
    date: "August 2025",
    link: "#",
    image: "./AICerts/Coursera IBM Intro to AI v2-1.jpg",
  },
  {
    id: 9,
    background: "white",
    textcolor: "#000",
    title: "Google - Introduction to Generative AI",
    date: "August 2025",
    link: "#",
    image: "./AICerts/Coursera Intro to Responsible AI-1.jpg",
  },
  {
    id: 10,
    background: "white",
    textcolor: "#000",
    title: "JHU - Trustworthy AI: Managing Bias",
    date: "November 2025",
    link: "#",
    image:
      "./AICerts/Coursera Trustworthy AI - Managing Bias - Ethics and Accountability-1.jpg",
  },
  {
    id: 11,
    background: "white",
    textcolor: "#000",
    title: "ASU - Prompt Engineering with ChatGPT",
    date: "October 2025",
    link: "#",
    image:
      "./AICerts/Coursera AI Foundations - Prompt Engineering with ChatGPT-1.jpg",
  },
  {
    id: 12,
    background: "white",
    textcolor: "#000",
    title: "IBM - Building AI Powered Chatbots",
    date: "November 2025",
    link: "#",
    image:
      "./AICerts/Coursera Building AI Powered Chatbots Without Programming-1.jpg",
  },
  {
    id: 13,
    background: "white",
    textcolor: "#000",
    title: "Generative AI for Everyone",
    date: "November 2025",
    link: "#",
    image: "./AICerts/Coursera Generative AI for Everyone-1.jpg",
  },
  {
    id: 14,
    background: "white",
    textcolor: "#000",
    title: "Google - Generative AI",
    date: "November 2025",
    link: "#",
    image: "./AICerts/Coursera Google Cloud Gen AI-1.jpg",
  },
];

const myProjects = [
  {
    image: "./ai/1.png",
    title: "Domain-Specific AI Tutor",
    description:
      "A specialized conversational agent that tutors users on AI topics, providing real-time course suggestions, visual references, and verified academic sources.",
    link: "https://pentacoreaimentor.vercel.app/",
  },
  {
    image: "./ai/2.png",
    title: "HealthGuard",
    description:
      "A specialized conversational agent that tutors users on AI topics, providing real-time course suggestions, visual references, and verified academic sources.",
    link: "https://www.figma.com/design/s8Ge6wSDxJ2ay9jaqyIRRt/HealthGuard-prototype?node-id=434-1945&t=bFONJkPOgllFe23r-1",
  },
  {
    image: "./ai/3.png",
    title: "Creative AI Story Generator",
    description:
      "A generative AI solution fine-tuned for literary creativity, capable of producing high-fidelity poetry and coherent narrative stories with distinct stylistic tones.",
    link: "https://pentacore-189473728151.us-west1.run.app/",
  },
  {
    image: "./ai/4.png",
    title: "SentiHire Builder",
    description:
      "An intelligent career tool that generates customized, ATS-optimized resumes, ensuring maximum visibility through algorithmic keyword matching and formatting.",
    link: "https://penta-hire.vercel.app/",
  },
  {
    image: "./ai/5.png",
    title: "SenticoreX Sentiment Analyzer",
    description:
      "A Natural Language Processing (NLP) engine that decodes emotional tone in large-scale text data, transforming customer reviews and social posts into actionable sentiment insights.",
    link: "https://senticorexpro.vercel.app/",
  },
  {
    image: "./ai/6.png",
    title: "Bias Analysis in Recruitment",
    description:
      "A comprehensive fairness analysis of a hiring dataset using Python and Google Colab. Implemented quantitative metrics to identify gender disparities and applied mitigation algorithms.",
    link: "https://bias-in-hiring.vercel.app/",
  },
  {
    image: "./ai/7.png",
    title: "AI-Powered Talent Hub",
    description:
      "Designed and implemented a unified Employee Self-Service (ESS) platform for a digital talent accelerator. The solution integrates three distinct AI APIs to automate compliance reporting.",
    link: "https://capacitihub.vercel.app/",
  },
];

export default function AIPage() {
  return (
    <div className="bg-white min-h-screen page-specific-font-br">
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-20 md:py-32 relative bg-black overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="./2.png" />
        </div>

        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-6xl md:text-9xl text-white leading-tight font-bold tracking-tighter page-specific-font-br">
            Artficial Intelligence
          </h1>
        </div>
      </section>

      <AIProjects items={myProjects} />

      <section className="pt-20 relative w-full bg-white">
        <h2 className="text-4xl text-black md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300 page-specific-font-br">
          CERTIFICATIONS
        </h2>
      </section>

      <Certificates items={myCertificates} />
    </div>
  );
}
