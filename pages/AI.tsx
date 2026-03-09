import React from "react";
import AIProjects from "../components/ai/Projects";
import Certificates from "../components/Certificates";
import Scene3D from "../components/Scene3D";
import Specialising from "../components/ai/Specialising";

const myCertificates = [
  {
    id: 1,
    background: "white",
    textcolor: "#000",
    title: "Oracle Generative AI Professional",
    date: "October 2025",
    link: "#",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700721/oracle1_nsmme1.png",
  },
  {
    id: 2,
    background: "white",
    textcolor: "#000",
    title: "Oracle Certified AI Foundations Associate",
    date: "October 2025",
    link: "#",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700726/oracle2_qnmich.png",
  },
  {
    id: 3,
    background: "white",
    textcolor: "#000",
    title: "IBM - Python for Data Science and AI",
    date: "November 2025",
    link: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700728/oracle3_t2tywm.png",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700571/Coursera_Python_for_data_science_AI_and_Development-1_z9sjwq.jpg",
  },
  {
    id: 4,
    background: "white",
    textcolor: "#000",
    title: "Intel - AI Essentials",
    date: "October 2025",
    link: "https://coursera.org/verify/33E5FZSSO9YV",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700567/Coursera_Intel_AI-1_v2jdfy.jpg",
  },
  {
    id: 5,
    background: "white",
    textcolor: "#000",
    title: "DeepLearning.AI - AI For Everyone",
    date: "October 2025",
    link: "https://coursera.org/verify/67IIZEU1WXFW",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700645/Coursera_AI_for_Everyone-1_bmgkwc.jpg",
  },
  {
    id: 6,
    background: "white",
    textcolor: "#000",
    title: "Microsoft - Artificial Intelligence on Azure",
    date: "October 2025",
    link: "https://coursera.org/verify/TIZXM10PMTDD",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700514/Coursera_AI_on_Microsoft_Azure-1_rctt3t.jpg",
  },
  {
    id: 7,
    background: "white",
    textcolor: "#000",
    title: "AWS - Generative AI with LLMs",
    date: "November 2025",
    link: "https://coursera.org/verify/3MS0FJL1X57F",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700561/Coursera_Generative_AI_with_LLMs-1_fdc8ft.jpg",
  },
  {
    id: 8,
    background: "white",
    textcolor: "#000",
    title: "IBM - Introduction to AI",
    date: "November 2025",
    link: "#",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700565/Coursera_IBM_Intro_to_AI_v2-1_duex25.jpg",
  },
  {
    id: 9,
    background: "white",
    textcolor: "#000",
    title: "Google - Introduction to Generative AI",
    date: "November 2025",
    link: "https://coursera.org/verify/X741HIL0DGE7",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700563/Coursera_Google_Cloud_Gen_AI-1_txvptz.jpg",
  },
  {
    id: 10,
    background: "white",
    textcolor: "#000",
    title: "JHU - Trustworthy AI: Managing Bias",
    date: "November 2025",
    link: "https://coursera.org/verify/D3Z91SZ62MKH",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700585/Coursera_Trustworthy_AI_-_Managing_Bias_-_Ethics_and_Accountability-1_gac424.jpg",
  },
  {
    id: 11,
    background: "white",
    textcolor: "#000",
    title: "ASU - Prompt Engineering with ChatGPT",
    date: "October 2025",
    link: "https://coursera.org/verify/70RT3Q9H3HV1",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700643/Coursera_AI_Foundations_-_Prompt_Engineering_with_ChatGPT-1_v6i4kj.jpg",
  },
  {
    id: 12,
    background: "white",
    textcolor: "#000",
    title: "IBM - Building AI Powered Chatbots",
    date: "November 2025",
    link: "https://coursera.org/verify/EXQI2WQ1DA02",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700515/Coursera_Building_AI_Powered_Chatbots_Without_Programming-1_ftji12.jpg",
  },
  {
    id: 13,
    background: "white",
    textcolor: "#000",
    title: "Generative AI for Everyone",
    date: "November 2025",
    link: "https://coursera.org/verify/1TX8S0RG27KK",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700532/Coursera_Generative_AI_for_Everyone-1_p6kwnq.jpg",
  },
  {
    id: 14,
    background: "white",
    textcolor: "#000",
    title: "Google - Responsible AI",
    date: "November 2025",
    link: "https://coursera.org/verify/X741HIL0DGE7",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772700568/Coursera_Intro_to_Responsible_AI-1_qna9qk.jpg",
  },
];

const myProjects = [
  {
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772701266/1_kwrftd.png",
    title: "Domain-Specific AI Tutor",
    description:
      "A specialized conversational agent that tutors users on AI topics, providing real-time course suggestions, visual references, and verified academic sources.",
    link: "https://pentacoreaimentor.vercel.app/",
    doclink:
      "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/buhlaluse_ngcobo_capaciti_org_za/Ed3ipxRHa2NFh-8r3Xc9AwABlw3jWZD68BaFQXYovPISeg?e=eUuaSh",
  },
  {
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772701283/2_uyhke6.png",
    title: "HealthGuard",
    description:
      "A specialized conversational agent that tutors users on AI topics, providing real-time course suggestions, visual references, and verified academic sources.",
    link: "https://www.figma.com/design/s8Ge6wSDxJ2ay9jaqyIRRt/HealthGuard-prototype?node-id=434-1945&t=bFONJkPOgllFe23r-1",
    doclink:
      "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/buhlaluse_ngcobo_capaciti_org_za/Ed3ipxRHa2NFh-8r3Xc9AwABlw3jWZD68BaFQXYovPISeg?e=eUuaSh",
  },
  {
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772701288/3_wdhgmw.png",
    title: "Creative AI Story Generator",
    description:
      "A generative AI solution fine-tuned for literary creativity, capable of producing high-fidelity poetry and coherent narrative stories with distinct stylistic tones.",
    link: "https://pentacore-189473728151.us-west1.run.app/",
    doclink:
      "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/buhlaluse_ngcobo_capaciti_org_za/Eau_yQlCuoFPiBjQONTz6sUBQWfAPEReo9aBrqmkJNjW9A?e=jTZGYn",
  },
  {
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772701241/4_fbhjoa.png",
    title: "SentiHire Builder",
    description:
      "An intelligent career tool that generates customized, ATS-optimized resumes, ensuring maximum visibility through algorithmic keyword matching and formatting.",
    link: "https://penta-hire.vercel.app/",
    doclink:
      "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/buhlaluse_ngcobo_capaciti_org_za/Ee5tNuHhE3dFhiklOXHIGMkBlnk8sPkWhz5Qj3NHFBAhxA?e=oWB33O",
  },
  {
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772701295/5_xnjxb1.png",
    title: "SenticoreX Sentiment Analyzer",
    description:
      "A Natural Language Processing (NLP) engine that decodes emotional tone in large-scale text data, transforming customer reviews and social posts into actionable sentiment insights.",
    link: "https://senticorexpro.vercel.app/",
    doclink:
      "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/jereshan_sinan_capaciti_org_za/ETGZ0qtf33NNs78o0RlAkjIBh9MwDnM2YO0b8toGEBP-UQ?e=L3Q0pw",
  },
  {
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772701301/6_dcynge.png",
    title: "Bias Analysis in Recruitment",
    description:
      "A comprehensive fairness analysis of a hiring dataset using Python and Google Colab. Implemented quantitative metrics to identify gender disparities and applied mitigation algorithms.",
    link: "https://bias-in-hiring.vercel.app/",
    doclink:
      "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/thato_msina_capaciti_org_za/IQARqR4YKcGzQ56IQQZRZHyQAZllK7dswD8hyOlOqSzilwU?e=NBnnzm",
  },
  {
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772701350/7_qdr2dd.png",
    title: "AI-Powered Talent Hub",
    description:
      "Designed and implemented a unified Employee Self-Service (ESS) platform for a digital talent accelerator. The solution integrates three distinct AI APIs to automate compliance reporting.",
    link: "https://capacitihub.vercel.app/",
    doclink:
      "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/jereshan_sinan_capaciti_org_za/IQBRAevhApO5SY3xFFYjJnr6AZgZnKtosEEDMvjiNbOKMw4?e=XOPIii",
  },
];

export default function AIPage() {
  return (
    <div
      className="min-h-screen page-specific-font-br"
      style={{
        background: "linear-gradient(to bottom right, #A4A4A4, #CCCCCC, #989898)",
      }}
    >
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-20 md:py-32 relative bg-black overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="https://res.cloudinary.com/dxmnledfa/image/upload/v1772700507/2_u4dcuc.png" />
        </div>

        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-6xl md:text-9xl text-white leading-tight page-specific-font-br">
            Artficial Intelligence
          </h1>
        </div>
      </section>

      <Specialising />

      <AIProjects items={myProjects} />

      <section className="pt-20 relative w-full bg-transparent">
        <h2 className="text-4xl text-black md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300 page-specific-font-br">
          CERTIFICATIONS
        </h2>
      </section>

      <Certificates items={myCertificates} />
    </div>
  );
}
