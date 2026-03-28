import React from "react";
import Scene3D from "../components/Scene3D";
import Certificates from "../components/Certificates";
import Projects from "@/components/dataengineering/Projects";

const ProjectsList = [
  {
    id: "1",
    title: "Customer Segmentation Analysis",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616704/11_h2vg3l.png",
    description:
      "Developed an end-to-end segmentation model in Power BI, categorizing customers by spending patterns and demographic data to optimize marketing ROI.",
    tools: ["Power BI", "DAX", "Python"],
    categories: ["Data Analytics", "Customer Insights", "Visualization"],
    githubUrl: "https://github.com/your-repo/segmentation",
    deliverables: [
      "Interactive Power BI Dashboard",
      "Segmentation Logic Doc",
      "Cleaned Customer Dataset",
    ],
    extraFiles: [
      {
        name: "customer_clusters.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-data-cube.jpg",
      },
      {
        name: "segmentation_logic.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-logic-node.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Sales vs. Target Forecasting",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616714/image_7_zijjts.png",
    description:
      "Built a multi-year sales performance tracker with dynamic scenario analysis, comparing actual revenue against regional targets using advanced Excel and Power Query.",
    tools: ["Excel", "Power Query", "Scenario Manager"],
    categories: ["Financial Reporting", "Data Engineering", "Excel Mastery"],
    githubUrl: "https://github.com/your-repo/sales-tracker",
    deliverables: [
      "Dynamic Sales Dashboard",
      "Data Pipeline Documentation",
      "Historical Sales CSV",
    ],
    extraFiles: [
      {
        name: "sales_pipeline_docs.docx",
        type: "Documentation",
        preview: "https://your-storage.com/purple-blueprint.jpg",
      },
      {
        name: "raw_sales_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-infinite-grid.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616699/image_2_zac7gt.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616703/image_8_md6lbo.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "5",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616708/image_3_hsamr0.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616713/image_6_f00yse.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "7",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616703/image_4_t4w4oy.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "8",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616704/image_5_ouxylr.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "9",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616705/image_1_bgo7sb.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "10",
    title: "Python Data Visualization Suite",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616699/image_2_zac7gt.png",
    description:
      "Automated reporting suite utilizing Matplotlib, Seaborn, and Plotly to generate high-fidelity visual reports from complex relational datasets.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Automation", "Data Science", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
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
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772709596/oracle3_s2o847.png",
  },
];

export default function DataEngineering() {
  return (
    <>
      <div className="min-h-screen bg-[#171717] text-white">
        {/* Hero Section with 3D Scene */}
        <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative overflow-hidden h-[60vh] md:h-[100vh]">
          <div className="absolute inset-0 z-0">
            <Scene3D background="https://res.cloudinary.com/dxmnledfa/image/upload/v1772709863/3_v3oppx.png" />
          </div>

          <div className="inline-block max-w-xl text-center relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl text-white leading-tight font-bold tracking-tight page-specific-font-br">
              Data Engineering
            </h1>
          </div>
        </section>

        <section className="pt-20 relative w-full">
          <h2 className="text-4xl text-white md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300">
            PROJECTS
          </h2>
        </section>

        <Projects projects={ProjectsList} />

        <section className="pt-20 relative w-full">
          <h2 className="text-4xl text-white md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300">
            CERTIFICATIONS
          </h2>
        </section>

        <Certificates items={myCertificates} />
      </div>
    </>
  );
}
