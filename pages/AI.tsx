import React from "react";
import AIProjects from "../components/ai/Projects";
import Certificates from "../components/Certificates";
import Scene3D from "../components/Scene3D";

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
    image:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1470&auto=format&fit=crop",
    title: "Domain-Specific AI Tutor",
    description:
      "A specialized conversational agent that tutors users on AI topics, providing real-time course suggestions, visual references, and verified academic sources.",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544256335-61aa2d519027?q=80&w=1632&auto=format&fit=crop",
    title: "Creative AI Story Generator",
    description:
      "A generative AI solution fine-tuned for literary creativity, capable of producing high-fidelity poetry and coherent narrative stories with distinct stylistic tones.",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1470&auto=format&fit=crop",
    title: "SentiHire Builder",
    description:
      "An intelligent career tool that generates customized, ATS-optimized resumes, ensuring maximum visibility through algorithmic keyword matching and formatting.",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    title: "SenticoreX Sentiment Analyzer",
    description:
      "A Natural Language Processing (NLP) engine that decodes emotional tone in large-scale text data, transforming customer reviews and social posts into actionable sentiment insights.",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=1469&auto=format&fit=crop",
    title: "Bias Analysis in Recruitment",
    description:
      "A comprehensive fairness analysis of a hiring dataset using Python and Google Colab. Implemented quantitative metrics to identify gender disparities and applied mitigation algorithms.",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop",
    title: "AI-Powered Talent Hub",
    description:
      "Designed and implemented a unified Employee Self-Service (ESS) platform for a digital talent accelerator. The solution integrates three distinct AI APIs to automate compliance reporting.",
    link: "#",
  },
];

export default function AIPage() {
  return (
    <div className="bg-white min-h-screen font-broft">
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-20 md:py-32 relative bg-black overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="./2.png" />
        </div>

        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-6xl md:text-9xl text-white leading-tight font-bold tracking-tighter">
            AI
          </h1>
        </div>
      </section>

      <AIProjects items={myProjects} />

      <section className="pt-20 relative w-full bg-white">
        <h2 className="text-4xl text-black md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300">
          CERTIFICATIONS
        </h2>
      </section>

      <Certificates items={myCertificates} />
    </div>
  );
}
